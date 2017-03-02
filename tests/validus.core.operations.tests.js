
var Validus = Validus || require('../dist/validus.js').Validus;
var chai = chai || require('chai');
var assert = chai.assert;

suite('Validus Core Operations', function() {

    suite('Validators', function() {
        
        var validator1,validator2;
        
        before(function(complete){
            
            validator1 = {
                description: 'Ensure the length is greater than 0',
                msg: 'Length must be > than 0',
                valid: (value) => { return value.length > 0},
            }
            
            validator2 = {
                description: 'Ensure the value is "Test"',
                msg: 'Does not Equal "Test"',
                valid: (value) => { return value === 'Test'},
            }
            
            complete();
        })
        
        after(function(complete){
            validator1 = undefined;
            validator2 = undefined;
            complete();
        })
        
        test('Should register a validator and return the correct object',function(){
            Validus.registerValidator('isNotEmpty',validator1)
        })
        
        test('Should add a validator using the alias add() and return the correct object',function(){
            Validus.addValidator('isValueTest',validator2)
        })
        
        test('Should return all registered validators',function(){
            
            var allValidators = Validus.getValidators();
            
            assert.equal(
                Object.keys(allValidators).length,
                2,
                "Validators List Length incorrect size"
            )
        })
    });
  
    suite('Pipelines', function() {
        test('Should register a pipeline and return the correct object')
        test('Should return all pipelines when requested')
        test('Should return a single, correctly identified pipeline')
        test('Should add a validator at the specified index of a pipeline')
    });
  
    suite('Validating', function() {
        test('Prep should return an Execution Instance')
        test('Input should return the same Execution Instance')
        test('Validate should properly execute the pipeline')
        test('Should execute a single validator')
        test('Should return a simple boolean when using simple()')
    });    
    
    suite('Plugin Registry', function() {
        test('Should accept a new plugin')
        test('Should return all registered plugins')
    });
 
}); //Validus Core Operations