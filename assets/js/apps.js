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


  var trainName = "";
  var destination = "";
  var firstTrainTime = 0;
  var frequency = "";
     // Capture Button Click
     $("#form-submit-button").on("click", function(event) {
      event.preventDefault();
      trainName = $("#trainName-input").val().trim();
      destination = $("#destination-input").val().trim();
      firstTrainTime = $("#firstTrainTime-input").val().trim();
      frequency = $("#frequency-input").val().trim();
      console.log(trainName, destination, firstTrainTime, frequency);
      database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });
    database.ref().on("child_added", function(childSnapshot) {
      // Log everything that's coming out of snapshot

      var firstT = moment(childSnapshot.val().firstTrainTime,"hh:mm");
      var now = moment();
      var timeBetween = now.diff(firstT, "minutes");
      var minutesAway = childSnapshot.val().frequency - (timeBetween%childSnapshot.val().frequency);


    var minutesUntilTrain = childSnapshot.val().frequency - minutesAway;

    var NextTrain = moment().add(minutesUntilTrain, "minutes").format("hh:mm");
