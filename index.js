'use strict';

module.exports = function () {
  return getRandomPeople(getRandomNumberBetween(3, 4));
};

// big word. not sure it's right.
var determiner = [
  'every',
  'i, the',
  'her, the',
  'him, the',
  'my',
  'one',
  'our',
  'the',
  'this',
  'you, the',
  'your'
];
determiner.random = getRandomizer(determiner);

var adjective = [
  'ancient',
  'bouyant',
  'cartoonish',
  'chart-topping',
  'cooperative',
  'credible',
  'crooked',
  'gentle',
  'hissing',
  'likeable',
  'loving',
  'mature',
  'only',
  'polyester',
  'relieved',
  'romantic',
  'symbolic',
  'tiny',
  'twenty-seven year old',
  'weak',
  'well-mannered',
  'wooden'
];
adjective.random = getRandomizer(adjective);

var profession = [
  'bookkeeper',
  'butler',
  'carpenter',
  'cat nanny',
  'cobbler',
  'disc jockey',
  'dressmaker',
  'elf',
  'fire scientist',
  'furniture tester',
  'geologist',
  'golf ball diver',
  'grocer',
  'hair simulation supervisor',
  'homesteader',
  'hump master',
  'ice cream taster',
  'laser tag referee',
  'laughter therapist',
  'magician\'s assistant',
  'mechanic',
  'miner',
  'nurse',
  'oyster shocker',
  'pilot',
  'pirate',
  'postal worker',
  'prison guard',
  'seamstress',
  'snake milker',
  'teacher',
  'telephonist',
  'thief',
  'tv show extra',
  'typist',
  'waitress',
  'weaver',
  'welder',
  'wrinkle chaser',
  'yardmaster'
];
profession.random = getRandomizer(profession);

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomizer(array) {
  return function () {
    return array[getRandomNumberBetween(0, array.length - 1)];
  };
}

function getRandomPerson() {
  return [
    determiner.random(),
    adjective.random(),
    profession.random()
  ].join(' ');
}

function getRandomPeople(howManyPeople) {
  var people = [];
  while (howManyPeople--) people.push(getRandomPerson());

  if (people.length === 1) return getRandomPerson();

  return people.reduce(function (string, person, index) {
    if (index === people.length - 1) string += (people.length > 2 ? ',' : '') + ' and ';
    else if (index > 0) string += ', ';
    return string + person;
  }, '');
}
