var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var customerSchema = new Schema({

    _id: { type: ObjectId },
    businessCountry: { type: String },
    contactEmail: { type: String },
    contactFirstName: { type: String },
    businessName: { type: String },
    loginToken: { type: String },
    contactLastName: { type: String },
    contactCountry: { type: String },
    contactPhone: { type: Number },
    businessLanguage: { type: String },
    customerId: { type: Number },
    password: { type: String },
    fbLastSyncTime: { type: Date }


});
module.exports = mongoose.model('customer', customerSchema);









