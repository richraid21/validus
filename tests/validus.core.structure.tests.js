
var test = Mocha.describe;
var assert = chai.assert;

test('Validus Core Structure', function() {
    
  it('Should have a validators object', function(){
      
      let validators = Validus.getValidators();
	  
	  assert.equal(
        typeof validators, 
        'object', 
        'Validus Core does not have a validators object'
        );
  });
  
  it('Should have a pipeline object', function(){
      
	  let pipelines = Validus.getPipelines();
	  
      assert.equal(
        typeof pipelines, 
        'object', 
        'Validus Core does not have a pipelines object'
        );
		
  });
  
  it('Should have a public validate function', function(){
      
      assert.equal(
        Validus.hasOwnProperty('validate'), 
        true, 
        'Validate function does not exist'
        );
      
      assert.equal(
        typeof Validus.validate === 'function', 
        true, 
        'Validate function is not a function'
        );
  })
  
  it('Should have a public validateStep function', function(){
      
      assert.equal(
        Validus.hasOwnProperty('validateStep'), 
        true, 
        'ValidateStep does not exist'
        );
      
      assert.equal(
        typeof Validus.validateStep === 'function', 
        true, 
        'ValidateStep is not a function'
        );
  })
  
  it('Should have a public validateBoolean function', function(){
      
      assert.equal(
        Validus.hasOwnProperty('validateBoolean'), 
        true, 
        'ValidateBoolean does not exist'
        );
      
      assert.equal(
        typeof Validus.validateBoolean === 'function', 
        true, 
        'ValidateBoolean is not a function'
        );
  })
  
});