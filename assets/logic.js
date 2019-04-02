 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyA33Q78l_CBCJbGwVsConmsL3Y3zg9TRxI",
  authDomain: "my-train-e5cc0.firebaseapp.com",
  databaseURL: "https://my-train-e5cc0.firebaseio.com",
  projectId: "my-train-e5cc0",
  storageBucket: "my-train-e5cc0.appspot.com",
  messagingSenderId: "31559533137"
};

firebase.initializeApp(config);

var myTrainDB = firebase.database();

$("#addTrain").on("click", function() {
  // right now values are hard coded but you will get the values from the form using jQuery
//$("#trainName").val().trim()
  var train =  {
    firstTrain: "5:15",
    trainInterval:10,
    destination: "NJ",
    name: "Thomas Train"
  }


  //add the train ^ to the firebase database
  myTrainDB.ref().push(train)
})



// // You have to calculate how many minutes until the next train comes
// var minUntil = ?

// firstTrain = moment().hours("5").minutes("15")

//this event will run eveytime a child is added to the firebase DB
myTrainDB.ref().on("child-added", function(childSnapshot){
  //logic to calculate train time (momentJS) and update table
})
