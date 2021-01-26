require("./db/connection");
const { Person } = require('./models/Person');
const { Task } = require('./models/Task');

const app = async () => {
    const person = new Person({name:'iain', email:'iain@mel.com', age: '26', likesPizza: true });
//CREATE - instance.save()
    await person.save();

//READ - model.find(), .findOne()
    const everything = await Person.find({});
    //console.log(everything);

    //const iain = await Person.findOne({name:'iain'});
    //console.log(iain.email);
    
//UPDATE - .update, updateOne, updateMany
    //const response = await Person.updateOne({ name:'iain'}, {email:'emily@mel.com'});
    //console.log(response);

//DELETE - deleteOne, deleteMany
    //const task = new Task({task:'finsh project', completed: true });
    //await task.save();

    await Person.deleteOne({name: 'iain'});
    console.log(everything);
};

app();