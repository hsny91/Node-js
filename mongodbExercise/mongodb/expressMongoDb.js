var mongoose = require("mongoose");
var Customer = require("./schema/customer");

mongoose.connect(
  "mongodb+srv://husniye:sakmak4326@cluster0.nviij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (error) => {
    if (!error) {
      console.log("connected to mongo db");
    }
    console.log(error)
  }
);

// var customer1 = new Customer({
//   name: "mehmet",
//   city: "istanbul",
// });
// customer1.save((error) => {
//   if (error) {
//     throw error;
//   }
//   else{
//       console.log('customer saved')
//   }
// });

// Customer.find({ name: 'husniye'}, (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data);
// });

// Customer.findById("61530b4b8029e1c40c85e4db", (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data);
// });

// Customer.find({ }, (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data);
// }).where('city').equals('istanbul').sort('-name').limit(2).select('name')
