"use strict";

var Validus = (function () {
	
	var data = {};
	data.validators = {}
	data.pipelines = {}

	data.register = (name, obj) => { 
		pipelineObject.validators[name] = obj;
	};
	
	data.getValidators = () => { 
		return data.validators;
	};
	
	data.getPipeline = (name) => { 
		return data.pipelines[name];
	};
	
	data.createPipeline = (name, validatorArray) => {
		data.pipelines[name] = validatorArray;		
	}
    
    data.addToPipeline = (name, validator, location) => {
        let pipe = data.pipelines[name];
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
		
		var validator = data.validators[validatorName];
		
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
		var pipe = data.pipelines[pipeline];
		
		var response = {};
		
		for (var name of pipe){
			response = data.validateStep(response.value || value,name);
				
		}
		
		return response;
		
	};

	return data;
	
}());