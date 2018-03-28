import mongoose from 'mongoose';
import HelloWorld from './models/HelloWorld';

const hello = [
    {
        name: 'Petch'
    },
    {
        name : 'Wat'
    },
];

mongoose.connect('mongodb://HelloWorld:password@54.179.190.121:27017/HelloWorld');
hello.map(data => {
    // Initialize a model with movie data
    const hello = new HelloWorld(data);
    // and save it into the database
    hello.save();
  });


