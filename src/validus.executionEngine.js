var Validus = (function () {
    
    var ExecutionInstance = function(){
        this.type = '';
        this.name = '';
        this.input = {};
    }
    
    ExecutionInstance.prototype = {
        setType: function(t) {
            this.type = t;
            return this;
         },
        setName: function(n) {
            this.name = n;
            return this;
         },
        inputVal: function(i) {
            this.input = i;
            return this;
         },
        validate: function() {
            var pipe = pipelines[this.name];
            var response = {};
		
            for (var name of pipe){
                response = data.validateStep(response.value || this.input,name);
                    
            }
            
            return response;
		}
    };
	
}(Validus || {}));