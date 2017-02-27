
var test = Mocha.describe;
var assert = chai.assert;

test('Validus Core Operations', function() {
    
  it('Should accept and store a validators object', function(){
      
    Validus.validators.isNotEmpty = {
        description: "Ensure that the value is not empty",
        msg: "{field} cannot be empty",
        valid: function(value){ return value.length > 0},
    }
    
    assert.equal(
        Validus.validators.hasOwnProperty('isNotEmpty'), 
        true, 
        'Did not store the validator properly'
        );
      
  });
  
  it('Should accept and store a pipeline object via direct manipulation', function(){
      
    Validus.pipelines.test = ['isNotEmpty']
    
    assert.equal(
        Validus.pipelines.hasOwnProperty('test'), 
        true, 
        'Did not store the pipeline properly'
        );
        
    assert.equal(
        Validus.pipelines.test.length, 
        1, 
        'Pipeline is not the correct length after creation'
        );
        
     assert.equal(
        Validus.pipelines.test[0], 
        'isNotEmpty', 
        'The pipeline did not store the correct validator name'
        );
      
  });
  
  it('Should accept and store a pipeline object via createPipeline method', function(){
      
    Validus.createPipeline("email",['isNotEmpty'])
    
    assert.equal(
        Validus.pipelines.hasOwnProperty('email'), 
        true, 
        'Did not store the pipeline properly'
        );
        
    assert.equal(
        Validus.pipelines.email.length, 
        1, 
        'Pipeline is not the correct length after creation'
        );
        
     assert.equal(
        Validus.pipelines.email[0],
        'isNotEmpty', 
        'The pipeline did not store the correct validator name'
        );
      
  });
  
  it('Should return the correct pipeline object when requested', function(){
      
    var pipe = Validus.getPipeline("email")
    
    assert.equal(
        pipe.length, 
        1, 
        'Requested pipe is not the correct length'
        );
        
    assert.equal(
        pipe[0], 
        'isNotEmpty', 
        'Pipe contents are not correct'
        );
      
  });
  
  it('Should execute the validation pipeline with a step count of 1', function(){
      
    var pipe = Validus.getPipeline("email")
    
    var res = Validus.validate("testValue","email")
        
    assert.equal(
        typeof res, 
        'object', 
        'Validation response is not an object'
        );
    
    assert.equal(
        res.hasOwnProperty('isValid'), 
        true, 
        'Response does not contain the isValid property'
        );
        
     
      
  });
  
  
  
});