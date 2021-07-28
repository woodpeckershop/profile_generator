const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (song) => {
      rl.question("Which meal is your favourite ", (meal) => {
        rl.question(
          "What's your favourite thing to eat for that meal?",
          (thing) => {
            rl.question("Which sport is your absolute favourite? ", (sport) => {
              rl.question(
                "What is your superpower? In a few words, tell us what you are amazing at! ",
                (power) => {
                  console.log(
                    `Your name is: ${name} Your fave activity is: ${activity} Song is ${song} Favorate meal:${meal} Favourate thing to eat ${thing} Favourate sport ${sport} Superpower ${power}`
                  );
                  rl.close();
                }
              );
            });
          }
        );
      });
    });
  });
});
