var Validus = (function (data) {
	
    data.explainPretty = (value, pipeline) => {
		var res = data.explain(value,pipeline);
		var output = "";
		output += "Pipeline Name: "+pipeline.toUpperCase()+"\n";
		output += "Pipeline Steps: "+data.pipelines[pipeline].length+"\n";
		output += "Steps: \n";
		
		for (var i in res.steps){
			output += `${i}. ${res.steps[i].description}\n`;
			output += `\t ${res.steps[i].status}: ${res.steps[i].error}\n`;
			output += `\t Input Value: ${res.steps[i].originalValue}, Output Value: ${res.steps[i].value}\n`;
		}
		
		return output;
	}
	
	data.explain = (value, pipeline) => {
		var res = {};
		var pipe = data.pipelines[pipeline];
		
		res.pipeName = pipeline;
		res.numberOfSteps = pipe.length;
		res.steps = {};
		
		for (var i in pipe){
			
			var v = pipe[i];
			var result = data.validateStep(value,v);
			value = result.value;
			
			var stepResult = {
				originalValue: result.originalValue,
				value: result.value,
				description: result.description,
				status: result.isValid ? "PASSED" : "FAILED",
				error: result.msg
			}
			
			res.steps[i] = stepResult;
			
		}
		
		return res;
		
	}

	return data;
}(Validus));