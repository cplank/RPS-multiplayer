//Initializing Firebase

var config = {
    apiKey: "AIzaSyCq4kdKwO0IYIut9VLl63Cuya1jWxDrq5A",
    authDomain: "rpsmuliplayer.firebaseapp.com",
    databaseURL: "https://rpsmuliplayer.firebaseio.com",
    projectId: "rpsmuliplayer",
    storageBucket: "rpsmuliplayer.appspot.com",
    messagingSenderId: "1011046218039"
};
firebase.initializeApp(config);

//------------------------------------------------//

//See an image of Finn and an image of Jake with buttons to pick a hero. 
//users pick which player they want to play as, that input is stored in Firebase. When Finn is claimed 
//his button disappears and he's no longer chooseable. Same with Jake. 

//Underneath the heros is the weapons box containing marceline's ax, paper pete, and a rock person. Users
//choose one of the weapons and that is stored in Firebase. Once they're ready, they click the submit button.
//Now they must wait until the other preson is also ready. Once both users have hit submit, whichever weapons
//weren't picked disappear, and text declaring who won, who lost, or if it's a tie. 

//Each user's win or loss counter increases accordingly. A button appears asking if users if they
//want to play again. If both users say yes, the game resets but the counters stay. 

//Set Items in Firebase 

let database = firebase.database();
let hero = "";
let choice = "";
let winCount = 0;
let lossCount = 0;


//Grab user input (all the jQuery)
$("#finn-button").on("click", function () {
    player.hero = ($(this)).attr("data-name")
    database.ref(player.hero + "/").set(player)
    $("#finn-button").hide()
})

$("#jake-button").on("click", function () {
    player.hero = ($(this)).attr("data-name")
    database.ref(player.hero + "/").set(player)
    $("#jake-button").hide()
})

$("img").on("click", function () {
    player.choice = ($(this)).attr("data-name")
    database.ref(player.choice + "/").set(choice)

})

//Let's make our object

let player = {
    hero: hero,
    choice: choice,
    wins: winCount,
    losses: lossCount
}

console.log(player)


//Check in with Firebase to see if anything has changed
// database.ref().on(function (Snapshot) {
//     console.log(Snapshot.val());
//     let heroChoice = Snapshot.val().choice;
//     let heroWins = Snapshot.val().winCount;
//     let heroLosses = Snapshot.val().lossCount;
// })




