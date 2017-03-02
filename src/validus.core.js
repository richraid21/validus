"use strict";

var Validus = (function () {
	
	var data = {};
	var validators = {};
	var pipelines = {};
	var plugins = {};
	
	data.registerPlugin = (name) => {plugins[name] = true}
	
	data.getLoadedPlugins = () => {
		return plugins;
	};

	data.registerValidator = (name, obj) => { 
		validators[name] = obj;
	};
	
	data.addValidator = (name, obj) => {
		data.registerValidator(name,obj);
	}
	
	data.getValidators = () => { 
		return validators;
	};
	
	data.getPipelines = () => {
		return pipelines;
	}
	
	data.getPipeline = (name) => { 
		return pipelines[name];
	};
	
	data.createPipeline = (name, validatorArray) => {
		pipelines[name] = validatorArray;		
	}
    
    data.addToPipeline = (name, validator, location) => {
        let pipe = pipelines[name];
        location = location || pipe.length;
        
        if (location === pipe.length){
            pipe.push(validator);
        }
        else{
            pipe.splice(location, 0, validator);
        }
        
    }
    
    data.prep = (options) => {
        var eo = new ExecutionInstance();
        var etype = options.hasOwnProperty('pipe') ? 'pipeline' : ''; 
        var name = options.pipe;
        
        eo.setType(etype).setName(name);
        return eo;
        
    }
	
	data.validateBoolean = (value, pipeline) => {
		var res = data.validate(value,pipeline);
		return res.isValid;
	}
	
	data.validateStep = (value,validatorName) => {
		
		var validator = validators[validatorName];
		
		var response = {
			originalValue: value,
			value: undefined,
			isValid: true,
			description: validator.description,
			msg: ""
		};
		
		if (validator.hasOwnProperty("preTransform")){
				value = validator.preTransform(value);
			}
			
		if (validator.hasOwnProperty("valid")){
			if (!validator.valid(value)){
				response.msg = validator.msg;
				response.isValid = false;
			}			
		}
		
		response.value = value;
		return response;
	}

	return data;
	
}(Validus || {}));

/**
    We need this to determine whether we're in a Node enviroment or the browser. 
    This allows us to run it anywhere and also test in both the browser or CLI.
**/

 if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = Validus
    }
    exports.Validus = Validus
  } 
  else {
    window.Validus = Validus
  }