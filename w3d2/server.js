// Code from Andy Lindsay - https://github.com/andydlindsay/jun21-2021/blob/master/w03d02

const express = require("express");
// What is morgan?
const morgan = require("morgan");
const port = 4567;

// in-memory database
// How do we want to store this?
const ideas = {
  abcd: {
    nuanced: false,
    thought: "should I go out for lunch today?",
    thinker: "Hungry Andy"
  },
  efgh: {
    nuanced: false,
    thought: "treats are nice",
    thinker: "Fluffy the Cat"
  }
};

const generateId = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

const app = express();

// Let's not do this initially, and see the error where the rendering engine error
// then npm i ejs - since it's not installed
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Browse GET /ideas
app.get("/ideas", (req, res) => {
  // They're often called templateVars as a variable
  // What is this syntax?!
  // templateVars = {
  //   ideas: ideas
  // };
  // How are we interacting with this inside our template?
  const templateVars = { ideas };

  // Name the template based on what it is - see error for could't find view named ideas
  res.render("ideas", templateVars);
});

// Read GET /ideas/:id /ideas/abcd
app.get("/ideas/:id", (req, res) => {
  const ideaId = req.params.id; // 'abcd' (id is whatever we called our variable in our route)
  const idea = ideas[ideaId];
  // console.log(idea);
  // console.log(req.params); to show that we can call our parameter whatever we want

  // If we call upon a resouce that doesn't exist in our seed, problem
  if (!idea) {
    res.redirect("/ideas");
    // important to use return, res.redrect doesn't actually stop the execution of the next lines
    return;
  }

  const templateVars = { idea, ideaId };
  res.render("idea", templateVars);
});

// Edit POST /ideas/:id
app.post("/ideas/:id", (req, res) => {
  const id = req.params.id;
  const thought = req.body.thought;

  ideas[id].thought = thought;

  res.redirect("/ideas");
});

// app.get('/ideas/new', (req, res) => {
//   res.render('new-idea-form');
// });

// Add POST /ideas
app.post("/ideas", (req, res) => {
  const newIdea = req.body;
  const id = generateId(); // 857 '857'

  ideas[id] = newIdea;

  res.redirect("/ideas");
});

// Delete POST /ideas/:id/delete
app.post("/ideas/:id/delete", (req, res) => {
  const id = req.params.id;
  delete ideas[id];

  res.redirect("/ideas");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
