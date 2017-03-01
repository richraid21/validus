test('Validus Explain Plugin', function() {
    
  if (Validus.getLoadedPlugins().hasOwnProperty('explain') && Validus.getLoadedPlugins().explain === true){
	  
	  it('Should have desired methods', function(){
		  
		assert.equal(
			Validus.hasOwnProperty('explain'), 
			true, 
			'Did not load explain() method'
        );
		
		assert.equal(
			Validus.hasOwnProperty('explainPretty'), 
			true, 
			'Did not load explainPretty() method'
        );
		  
		  
	  });
	  
	  it('Should return the proper explanation of a validator');
	  it('Should return the proper execution path for a pipeline');
	  it('Should return the proper pretty printout of a validator');
	  it('Should return the proper pretty printout of a pipeline');
	  
  }
  
	
  
});