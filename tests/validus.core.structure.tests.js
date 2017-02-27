
var test = Mocha.describe;
var assert = chai.assert;

test('Validus Core Structure', function() {
    
  it('Should have a public validators object', function(){
      
      assert.equal(
        Validus.hasOwnProperty('validators'), 
        true, 
        'Validus Core does not have a validators object'
        );
       
      assert.equal(
        typeof Validus.validators === 'object', 
        true, 
        'Validators object is not an object'
        );
  });
  
  it('Should have a public pipeline object', function(){
      
      assert.equal(
        Validus.hasOwnProperty('pipelines'), 
        true, 
        'Validus Core does not have a pipelines object'
        );
      
      assert.equal(
        typeof Validus.pipelines === 'object', 
        true, 
        'Pipelines property is not an object'
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