const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomResponse = function(answer) {
  const snark = [
    `${answer}? How... interesting...`,
    `You wouldn't believe how rarely people answer ${answer}.`,
    `Your feedback is important to us. Please stay on the line.`,
    `Would you like to change your answer? You know what, on second thought, let's just go with ${answer}.`,
    `Just when you think you've heard everything...`,
    `${answer}. I am sure this information will be useful.`,
    `${answer}... Gotta admire that honesty.`
  ];

  let rndNumb = Math.floor(Math.random() * snark.length);

  return snark[rndNumb];
};

const responses = [];
rl.question(`Hi there! What's your name? `, (answer) => {
  responses.push(answer);
  console.log(randomResponse(answer),'\n--- --- ---');
  rl.question('Favourite band? ', (answer) => {
    responses.push(answer);
    console.log(randomResponse(answer),'\n--- --- ---');
    rl.question('Got any hobbies? ', (answer) => {
      responses.push(answer);
      console.log(randomResponse(answer),'\n--- --- ---');
      rl.question('Brunch, Lunch or Dinner? ', (answer) => {
        responses.push(answer);
        console.log(randomResponse(answer),'\n--- --- ---');
        rl.question('Red or White? ', (answer) => {
          responses.push(answer);
          console.log(randomResponse(answer),'\n--- --- ---');
          rl.question('What is your superpower? ', (answer) => {
            responses.push(answer);
            console.log(randomResponse(answer),'\n--- --- ---');
            console.log(`Well then... for someone named ${responses[0]}, I'd say you're alright, alright, alright. Okay, here's your profile: \n "When ${responses[0]} isn't jamming out to ${responses[1]}. They're probably just busy with ${responses[2]}. Or maybe they're out to ${responses[3]}, or just enjoying a nice glass of ${responses[4]}. If you're not floored yet, maybe ${responses[0]} can wow you by ${responses[5]}."`);
            rl.close();
          });
        });
      });
    });
  });
});

