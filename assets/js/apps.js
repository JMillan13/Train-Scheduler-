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

var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrainTime = 0;
var frequency = "";
// Capture Button Click
$(".submitForm").on("click", function (event) {
  event.preventDefault();
  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  firstTrainTime = $("#firstTrainTime").val().trim();
  frequency = $("#frequency").val().trim();
  // console.log(trainName, destination, firstTrainTime, frequency);
  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

database.ref().on("child_added", function (childSnapshot) {
  // Log everything that's coming out of snapshot
  var thisTrain = childSnapshot.val()
  var firstT = moment(childSnapshot.val().firstTrainTime, "hh:mm");
  var now = moment();
  var timeBetween = now.diff(firstT, "minutes");
  var minutesAway = childSnapshot.val().frequency - (timeBetween % childSnapshot.val().frequency);


  var minutesUntilTrain = childSnapshot.val().frequency - minutesAway;

  var NextTrain = moment().add(minutesUntilTrain, "minutes").format("hh:mm");

var html = `<tr>
<td>${thisTrain.trainName}</td>
<td>${thisTrain.destination}</td>
<td>${thisTrain.frequency}</td>
<td>${NextTrain}</td>
<td>${minutesUntilTrain}</td>
</tr>`
  $("#employee").append(html);

});
