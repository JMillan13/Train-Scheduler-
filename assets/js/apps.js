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


var database = firebase.database()
var index = 1
var name = ""
var role = ""
var startDate = ""
var monthlyRate = ""
database.ref().on("child_added", function(snapshot) {
var data = snapshot.val()
console.log(data)

/* name = snapshot.val().name
role = snapshot.val().role
startDate = snapshot.val().startDate
monthlyRate = snapshot.val().monthlyRate */

createEmployees(data)
})
function createEmployees(data) {
    var employee = data
    console.log(employee.length)
    name = employee.name
    role = employee.role
    startDate = employee.startDate
    monthlyRate = employee.monthlyRate

    var row = $("<tr>")
    var nametag = $("<th>").text(name)
    var roletag = $("<th>").text(role)
    var starttag = $("<th>").text(startDate)
    var ratetag = $("<th>").text(monthlyRate)
    var monthtag = $("<th>").text(5)
    var build = 5 * parseInt(monthlyRate)
    var billedtag = $("<th>").text(build)

    row.append(nametag)
    row.append(roletag)
    row.append(starttag)
    row.append(ratetag)
    row.append(monthtag)
    row.append(billedtag)

    $("#employee").append(row)
}

$(".submitForm").on("click", function(event) {
   event.preventDefault()
    name = $("#name").val().trim()
    role = $("#role").val().trim()
    startDate = $("#startDate").val().trim()
    monthlyRate = $("#monthlyRate").val().trim()
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    })
})
 // Initialize Firebase
 /*var config = {
    apiKey: "AIzaSyA0W5CYMQlloBwy2vbfoXHQgZYUXNgLsqU",
    authDomain: "inclassproject-3da67.firebaseapp.com",
    databaseURL: "https://inclassproject-3da67.firebaseio.com",
    projectId: "inclassproject-3da67",
    storageBucket: "inclassproject-3da67.appspot.com",
    messagingSenderId: "358462140316"
  };
  firebase.initializeApp(config);

 //  dataAdded: firebase.database.ServerValue.TIMESTAMP

  //child added and child changes
  dataRef.ref().on("child_added",function(childSnapshot){
      console.log(childSnapshot.val().name);
  },function(errorObject){
      console.log("Errors handled: " + errorObject.code)
  });

  data.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(ChildSnapShot))
  //change HTML to reflect
  $("#name-display").text(snapshot.val().name);
  email,age,comment same thing*/
