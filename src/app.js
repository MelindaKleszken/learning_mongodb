require("./db/connection");
const { Person } = require('./models/Person');

const app = async () => {
    const person = new Person({name:'mel', email:'hello@mel.com', age: '26', likesPizza: true });
    await person.save();
};

app();