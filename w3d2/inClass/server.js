const express = require("express");
const morgan = require("morgan");
const PORT = 4567;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const ideas = {
  abcde: {
    thought: "There's a rat in my bathroom",
    thinker: "Justine",
    nuanced: false
  },
  laduh: {
    thought: "She's a wusss!",
    thinker: "Not a kind person",
    nuanced: false
  }
};

app.get("/ideas", (req, res) => {
  const templateVars = {
    ideas
  };
  res.render("ideas", templateVars);
});

const generateId = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

app.get("/ideas/:ideaKey", (req, res) => {
  const ideaKey = req.params.ideaKey;
  const idea = ideas[ideaKey];

  if (!idea) {
    res.redirect("/ideas");
    return;
  }

  res.render("idea", {
    idea: idea,
    ideaKey: ideaKey
  });
});

app.post("/ideas/:ideaKey", (req, res) => {
  const ideaKey = req.params.ideaKey;
  const newThought = req.body.thought;
  ideas[ideaKey].thought = newThought;
  res.redirect(`/ideas/${ideaKey}`);
});

app.post("/ideas", (req, res) => {
  const newThought = req.body.thought;
  const newThinker = req.body.thinker;
  const newNuanced = req.body.nuanced;
  const newIdeaKey = generateId();
  ideas[newIdeaKey] = {
    thought: newThought,
    thinker: newThinker,
    nuanced: newNuanced
  };
  res.redirect("/ideas");
});

app.post("/ideas/123");

app.post("/ideas/:ideaKey/delete", (req, res) => {
  const ideaKey = req.params.ideaKey;

  delete ideas[ideaKey];

  res.redirect("/ideas");
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
