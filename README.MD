# Validus Validation Pipeline
![Build Status](https://circleci.com/gh/richraid21/validus.svg?style=shield)    
This library is designed to allow the creation and re-use of validator objects, organize them into sets called pipelines and reuse those pipelines for mix & match functionality.

### Status:
* Project: In-progress Alpha    
* Tests: In-progress    
* Docs: To-Do     

### Future Features & Changes List
* Convert library to return promises rather than synchronous values so validators can perform async actions
* Grouping specific pipelines into grids (or some other terminology) that can then be executed on an object (such as a new entry in a grid)
* Probably remove direct access to validators and pipelines so I can implement middleware at creation time, rather than require consuming code to read the contract (API breaking)
* Some type of dynamic loading for packages of validators?...maybe...

### Build & Test Instructions:

```
yarn install
yarn run build
yarn run test
```

### Usage
```

Validus.validators.isNotEmpty = {
	description: 'Ensure that the value is not empty',
	msg: 'Cannot be empty',
	valid: (value) => { return value != 'undefined' && value.length > 0},
}

Validus.validators.isBasicEmail = {
	description: 'Ensure that the value contains the email characteristics',
	msg: 'Must contain @ and .',
	valid: (value) => {return value.includes('@') && value.includes('.')}
}


Validus.createPipeline('email',['isNotEmpty','isBasicEmail']);

console.log(Validus.validate('BadEmail','email'));

>
{
    originalValue: 'BadEmail',
	value: 'BadEmail',
	isValid: false,
	description: 'Ensure that the value contains the email characteristics',
	msg: 'Must contain @ and .'
}
```



##### License
MIT