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
	
	data.validate = (value, pipeline) => {
		var pipe = pipelines[pipeline];
		
		var response = {};
		
		for (var name of pipe){
			response = data.validateStep(response.value || value,name);
				
		}
		
		return response;
		
	};

	return data;
	
}());