import mongoose, { Schema } from 'mongoose';

var HelloWorld = new mongoose.Schema({
    name : 'String',
});

export default mongoose.model('petch',HelloWorld);