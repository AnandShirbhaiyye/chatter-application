const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    user: String,
    messageType: String,
    messageBody: String,
    createdAt: {type: Date, default: Date.now}
});
const messageModel = mongoose.model('message', messageSchema);
module.exports = messageModel;
