const Immutable = require('immutable');

let geek = Immutable.Map({
    name: 'geek',
    skills: ['java', 'javascript']
});

console.log(geek);
console.log(geek.get('skills'));
console.log(geek.get('name'));

geek.skills.push('angularjs');

console.log(geek);