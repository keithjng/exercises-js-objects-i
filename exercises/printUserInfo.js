let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {};

user['firstName'] = 'Stephen';
user['lastName'] = 'Strange';
user['currentLocation'] = 'New York';
user['favoriteSongs'] = ['Smote and Mirrors', 'The Eyes Have It', 'Hippocratic Hypocrite'];
user['age'] = 40;
user['favoriteFood'] = ['Onigiri'];
user['favoriteMovies'] = ['Doctor Strange', 'Guardians of the Galaxy Vol. 2', 'Spider-Man: Homecoming', 'Thor: Ragnarok', 'Black Panther'];

// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}

console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();

if (user['age'] >= 40) {
  console.log(`Wow! You're ${user['age']} years old? Time for a crazy mid-life crisis!`);
  console.log();
}

console.log('Looks like you have great taste in music. Your favorite songs:');

printFavorites(user['favoriteSongs'])

/** Given code for favortie songs list (for reference)
  for (let i = 0; i < user['favoriteSongs'].length; i += 1) {
  let songPosition = i + 1;
  let songName = user['favoriteSongs'][i];

  console.log(`${songPosition}. ${songName}`);
}
*/

console.log('I see that you eat ' + user['favoriteFood'] + '.')

if ((user['favoriteFood'].toString()) === 'Hot Dogs') {
  console.log(user['favoriteFood'] + ' are really processed!');
} else if ((user['favoriteFood'].toString()) === 'Onigiri') {
  console.log(user['favoriteFood'] + ' sounds delicious!');
} else {
  console.log(user['favoriteFood'] + ' is a good choice')
}

console.log()
console.log('Your favorite movies are:')

printFavorites(user['favoriteMovies'])

/** Initial code for movie list (for reference)
  for (let i = 0; i < user['favoriteMovies'].length; i += 1) {
  let movieNumber = i + 1;
  let movie = user['favoriteMovies'][i];

  console.log(`${movieNumber}. ${movie}`);
}
console.log()
*/

function printFavorites (inputArray) {
  for (let i = 0; i < inputArray.length; i += 1) {
    let movieNumber = i + 1;
    let movie = inputArray[i];

    console.log(`${movieNumber}. ${movie}`);
  }
  console.log()
}
