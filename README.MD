# Validus Validation Pipeline
This library is designed to allow the creation and re-use of validator objects, organize them into sets called pipelines and reuse those pipelines for mix & match functionality.

### Status:
* Project: In-progress Alpha    
* Tests: In-progress    
* Docs: To-Do    

### Build & Test Instructions:

```
yarn install
gulp build
gulp test
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