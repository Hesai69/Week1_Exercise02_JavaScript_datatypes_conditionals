console.log("script linked!")

//////////////////////////////
//          STEP 1          //
//////////////////////////////

// First build two objects 'mom' and 'dad' as object literals (e.g. 'var mom = {}'). If you have a non-traditional family structure, just use someone everybody loves, like Joe Biden or Oprah.
var mom = {};
var dad = {};

// uncomment these console.logs after you write your code
console.log('mom object after step 1:', mom)
console.log('dad object after step 1:', dad)

//////////////////////////////
//          STEP 2          //
//////////////////////////////

// Create one Physicality object and one Personality object for each parent (e.g. 'mom.physicality = {}' and 'mom.personality = {}').

mom.physicality = {};
mom.personality = {};
dad.physicality = {};
dad.personality = {};

// uncomment these console.logs after you write your code
console.log('mom object after step 2:', mom)
console.log('dad object after step 2:', dad)

//////////////////////////////
//          STEP 3          //
//////////////////////////////

// Using different data types (Number, String, Array, Object, Null, & Boolean), add **5 physical attributes** to each of your parents.

mom.physicality.hairColor = 'black';
mom.physicality.hairLength = 'long';
mom.physicality.height = 'short';
mom.physicality.favorites = { movie : 'Matrix',
                              book : 'Harry Potter',
                              food : 'fish'};
mom.physicality.isAthletic = false;

dad.physicality.hairColor = 'white';
dad.physicality.hairLength = 'short';
dad.physicality.height = 'tall';
dad.physicality.favorites = { movie : 'Xmen',
                              book : 'Hunger Games',
                              food : 'chips'};
dad.physicality.isAthletic = true;

// uncomment these console.logs after you write your code
console.log('mom object after step 3:', mom)
console.log('dad object after step 3:', dad)

//////////////////////////////
//          STEP 4          //
//////////////////////////////

// Do the same with the personality object!
mom.personality.isHappy = true;
mom.personality.isReliable = true;
mom.personality.bravery = 'courageous';
mom.personality.openess = 'quiet';
mom.personality.patience = 'high';

dad.personality.isHappy = false;
dad.personality.isReliable = true;
dad.personality.bravery = 'coward';
dad.personality.openess = 'talkative';
dad.personality.patience = 'low';

// uncomment these console.logs after you write your code
console.log('mom object after step 4:', mom)
console.log('dad object after step 4:', dad)

//////////////////////////////
//          STEP 5          //
//////////////////////////////

// Now build yourself by referencing physical and personality attributes from your folks!
var me = {};
me.physicality = {};
me.personality ={};

me.physicality.hairColor = dad.physicality.hairColor;
me.physicality.hairLength = dad.physicality.hairLength;
me.physicality.height = dad.physicality.height;
me.physicality.favorites = mom.physicality.favorites;
me.physicality.isAthletic = mom.physicality.isAthletic;

me.personality.isHappy = mom.personality.isHappy;
me.personality.isReliable = mom.personality.isReliable;
me.personality.bravery = mom.personality.bravery;
me.personality.openess = dad.personality.openess;
me.personality.patience = dad.personality.patience;

// uncomment this console.log after you write your code
console.log('me object after step 5:', me)

//////////////////////////////
//          STEP 6          //
//////////////////////////////

// Make 2 lists: first, what you're good at, and second, what you're bad at.

var goodAt = ['baseball', 'games', 'listening', 'math'];
var badAt = ['swimming', 'shooting', 'explaining', 'english'];

me.goodAt = goodAt;
me.badAt = badAt;

// uncomment this console.log after you write your code
console.log('me object after step 6:', me)

//////////////////////////////
//          STEP 7          //
//////////////////////////////

// Age yourself.

me.age = 35;

// uncomment this console.log after you write your code
console.log('me object after step 7:', me)

//////////////////////////////
//          STEP 8          //
//////////////////////////////

// Delete half of the things you were good at.

me.goodAt.splice(0, goodAt.length / 2);

// uncomment this console.log after you write your code
console.log('me object after step 8:', me)

//////////////////////////////
//          STEP 9          //
//////////////////////////////

// Age yourself (again).

me.age = 25;

// uncomment this console.log after you write your code
console.log('me object after step 9:', me)

//////////////////////////////
//          STEP 10         //
//////////////////////////////

// Add 'sitting' to the things you're good at and remove everything else from the list.

me.goodAt.splice(0, goodAt.length, 'sitting');

// uncomment this console.log after you write your code
console.log('me object after step 10:', me)

//////////////////////////////
//          STEP 11         //
//////////////////////////////

// Add 5 more things to the list of things you're bad at.

me.badAt.splice(badAt.length, 0, 'eating', 'spitting', 'fishing', 'flying', 'jumping');

// uncomment this console.log after you write your code
console.log('me object after step 11:', me)

//////////////////////////////
//           BONUS          //
//////////////////////////////

// Create a method that prints out one of your classic sayings!

me.classicSaying = function() {
  return console.log('Are we there yet?');
}

// call your function :)
me.classicSaying();
