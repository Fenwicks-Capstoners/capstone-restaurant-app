const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const PersonSchema = new mongoose.Schema({
    Name : String,
    Age : String,
    admin : Boolean

});
const DaySchema =  new mongoose.Schema({
    Date : {type: Date, index: true, required:true},
    MornManager : mongoose.Schema.Types.ObjectID, ref: 'Person',
    NightManager: mongoose.Schema.Types.ObjectID, ref: 'Person',
    Memp1 : mongoose.Schema.Types.ObjectID, ref: 'Person',
    Memp2 : mongoose.Schema.Types.ObjectID, ref: 'Person',
    Nemp1 : mongoose.Schema.Types.ObjectID, ref: 'Person',
    Nemp2 : mongoose.Schema.Types.ObjectID, ref: 'Person',
});
const Person = mongoose.model('person', PersonSchema);
const Schedule = mongoose.model('test1', ScheduleSchema);

module.exports = mongoose.model('person', PersonSchema, 'userCollection')
module.exports =  mongoose.model('schedule', ScheduleSchema, 'scheduleCollection')

DaySchema.pre('findOne', function(next) {
    this.populate('MornManager').populate('NightManager').populate('Memp1').populate('Memp2').populate('Nemp1').populate('Nemp2');
    next();
});