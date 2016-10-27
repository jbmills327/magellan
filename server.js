var express = require("express"),
    logger = require("morgan"),
    bodyParser = require("body-parser");

var app = express();


app.use(express.static("public"));

// get for intitial index or "home"page
app.get("/", (req, res) => {
    res.send("/index.html");
});
app.post("/index", (req, res) => {
    res.redirect("/index.html");
})

// This is the get and post of Seville
app.get("/seville", (req, res) => {
    res.send("/seville.html");
});
app.post("/seville", (req, res) => {
    res.redirect("/seville.html");
})


// This is the post for the next button on the intitial page, will redirect to the canary islands page
app.post("/canary", (req, res) => {
    res.redirect("/canary.html");
});
// This is the get for the canary islands page
app.get("/canary", (req, res) => {
    res.send("/canary.html");
});


// This is the post to redirect to the cape page
app.post("/cape", (req, res) => {
    res.redirect("/cape.html");
});
// This is the get for the cape page
app.get("/cape", (req, res) => {
    res.send("/cape.html");
});


// This is the post to redirect to the strait page
app.post("/strait", (req, res) => {
    res.redirect("/strait.html");
});
// This is the get for the strait page
app.get("/strait", (req, res) => {
    res.send("/strait.html");
});


// This is the post to redirect to the guam page
app.post("/guam", (req, res) => {
    res.redirect("/guam.html");
});
// This is the get for the guam page
app.get("/guam", (req, res) => {
    res.send("/guam.html");
});

// This is the post to redirect to the phillippines page
app.post("/phillippines", (req, res) => {
    res.redirect("/phillippines.html");
});
// This is the get for the phillippines page
app.get("/phillippines", (req, res) => {
    res.send("/phillippines.html");
});


// This is the post to redirect to the didnot page
// app.post("/*", (req, res) => {
//     res.redirect("/didnot.html");
// });
// This is the get for the didnot page
app.get("/*", (req, res) => {
    res.redirect("/didnot.html");
});







// set up express listener to listen to port 3000
app.listen(3000, (err) => {
    if (err) {
        console.log("Error:", err);
        process.exit(1);
    }
    console.log("Server is listening to port 3000");
});
