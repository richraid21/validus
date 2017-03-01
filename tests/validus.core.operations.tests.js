
var Validus = Validus || require('../dist/validus.js').Validus;

suite('Validus Core Operations', function() {

    suite('Validators', function() {
        test('Should register a validator and return the correct object')
        test('Should add a validator using the alias add() and return the correct object')
        test('Should return all registered validators')
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