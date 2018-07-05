const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5b2a73bb4b6ea4b715f73421';

if(!ObjectID.isValid(id)){
    console.log('Id not valid.');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found.');
    }
    console.log('Todo By id', todo);
}).catch((e) => console.log(e));

User.findById('5b2a79ec878c537f16efa7b9').then((user) => {
    if(!user){
        return console.log('Unable to find user.');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});