// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friend-data
// ===============================================================================

var friendData = require("../data/friends");
//var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //   app.get("/api/waitlist", function(req, res) {
    //     res.json(waitListData);
    //   });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a survey... this data is then sent to the server...
    // Then the server saves the data to the friendData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        var newFriend = req.body;
        var match = [];
        console.log("new friend data", newFriend);
        friendData.push(req.body);
        var bestMatch = {
            name: "",
            totalDiff: ""

        }
        for (var i = 0; i < friendData.length; i++) {
            var totalDiff = 0;
            for (var j = 0; j < friendData[i].scores.length; j++) {

                
                totalDiff += Math.abs(friendData[i].scores[j] - newFriend.scores[j]);
                // 1 - 3 = 
                // if (friendData[i].scores[j] === newFriend.scores[j]) {
                //     counter++;
                // }
                console.log("friendscore", friendData[i].scores[j])
                console.log("difference", friendData[i].scores); 
                console.log(newFriend.scores[i]);
              
                console.log("hello")
            }
            console.log(friendData[i].scores);
            //calculate user input score against friends' score and keep a running total. then compare each friends and the lowest score is the match.

        }
        // total values for each user, compare them and match the closest people. 
        res.send({
            bestMatch
        })
    });


    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendData = [];
        //waitListData.length = 0;

        res.json({ ok: true });
    });
};
