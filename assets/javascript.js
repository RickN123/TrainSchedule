var config = {
    apiKey: "AIzaSyDpcxMdkuAP0gHULhySRyqIXb9QdFQRfeY",
    authDomain: "traincalendar-8d29e.firebaseapp.com",
    databaseURL: "https://traincalendar-8d29e.firebaseio.com",
    projectId: "traincalendar-8d29e",
    storageBucket: "traincalendar-8d29e.appspot.com",
    messagingSenderId: "324240328259"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document.readyState(function () {

    $("submit").on("click", function (event) {

        event.preventDefault();
        console.log(this):

        var trainName = $("name-input").val();
        var trainDestination = $("destination-input").val();
        var trainFirstTime = $("first-train-input").val();
        var trainFrequency = $("frequency-input").val();


        var addTrain = {
            name: trainName,
            destination: trainDestination,
            firsttrain: trainFirstTime,
            arrival: trainFrequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        }

        database.ref().push(addTrain);

        $("name-input").val.empty();
        $("destination-input").val.empty();
        $("first-train-input").val.empty();
        $("frequency-input").val.empty();
    })

    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        var sv = childSnapshot.val();

        var newTrain = sv.name;
        var newDestination = sv.destination;
        var newTrainFirstTime = sv.TrainFirstTime;
        var newTrainFrequency = sv.arrival;

        var newTime = sv.time;

        var inputTime = parseInt(moment(newTime, "00:00").format("LT"));
        var inputFrequency = parseInt(moment(newFrequency, "00").format("LT"));

        var currentTime = parseInt(moment().format('00:00'));
        var currentFrequency = parseInt(moment().format("00"));

        var currentTime = (inputTime + inputFrequency)

        var newRow = $("<tr>");
        newRow.append("<td>" + newTrain + "</td>");
        newRow.append("<td>" + newDestination + "</td>");
        newRow.append("<td>" + newTrainFirstTime + "</td>");
        newRow.append("<td>" + newTime + "</td>");
        newRow.append("<td>" + newTrainFrequency + "</td>");

        $("tbody".append(newRow);

    })
})

