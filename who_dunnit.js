
//1.The murderer is Miss Scarlet, as it remains constant,no changes. We use the murderer: key.
Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
/*2.The murderer is Professor Plum, due to it being a constant meaning the value does not change,

*/
Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
/*3. this will return First Verdict: The murderer is Mrs Peacock
we use the let function in order to change the value from Prof plum to Mrs peacock
i can only imagine it will display the secondVerdict: The murder is Prof Peacock due to the first verdict haven been met*/
Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
/*4.This will display = the suspects are Miss Scarlet,Professor Plum,Colonel Mustard.
due to us changing via let function suspectThree to Colonel Mustard, it will also
dispaly to the console Suspect three is Colonel Mustard */
Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
/* 5.This will display the weapon is the revolver, const has its limitations. It only prevents us from reassigning to the constant variable meaning we can reassign the weapon to revolver in the scenario */
Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
/*6. This will display the murderer is Mrs White, the reason being, let is putside the scope, we call upon the plotTwist method meaning the murder would go straight to mrs white, and we return it*/
Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
/*7. This will display The murderer is Mr Green due to the changeMurderer() method being the last method to run in the flow and a method can be called outside of the scope and be reuseable   */
Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

Episode 8
/* so we can reassign the value in the scenario due to the const limitations. so we reassigning
the room to dining room, in plotTwist we ask if the room is equal to the scenario room
change the murderer to mustard. It is not. The murderer is equal to the murderer in unexpectedOutcome
  so the weapon would change to candle stick, all the methods executed after that would not change
  the outcome it would display The weapon is candle stick...(hopefully) */
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
/*This will display The murderer is Mrs Peacock, because murderer is equal to Professor plum
and then we change it via let to Mrs Peacock due to the condition in the if statement being met..mind you the murderer = Mrs peacock is outside of the if statement meaning it may still read proffesor plum is the murderer...not sure */
Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
