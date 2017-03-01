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

var isNameRich = {
	description: 'Ensure the value equals Rich',
	msg: 'Does not equal Rich',
	valid: (value) => { return value === 'Rich'},
}

Validus.addValidator('isNameRich',isNameRich) 
Validus.createPipeline('nameCheck',['isNameRich']);

Validus.prep({pipe: 'nameCheck'}).inputVal('Not Rich').validate();

>
Object {
    originalValue: "Not Rich", 
    value: "Not Rich", 
    isValid: false, 
    description: "Ensure the value equals Rich", 
    msg: "Does not equal Rich"
}
```



##### License
MIT