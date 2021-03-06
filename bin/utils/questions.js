// This question would be shown at the starting
const questions = [
  {
    type: "list",
    name: "framework",
    message: "Choose the JS framework which you are using:",
    choices: ["React", "NextJS", "Angular", "Svelte", "VueJS"],
  },
];

// This question would be shown only when the user choose either React or NextJS
const questionsTs = [
  {
    type: "list",
    name: "typescript",
    message: "Does your project use TypeScript?",
    choices: ["Yes", "No"],
  },
];

module.exports.questions = questions;
module.exports.questionsTs = questionsTs;
