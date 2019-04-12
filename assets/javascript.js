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


        var newTrain = {
            name: trainName,
            destination: trainDestination,
            firsttrain: trainFirstTime,
            arrival: trainFrequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        }

        database.ref().push(newTrain);

        $("name-input").val.empty();
        $("destination-input").val.empty();
        $("first-train-input").val.empty();
        $("frequency-input").val.empty();
    })





}
    }
  }

