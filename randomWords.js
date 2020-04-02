var subject = ["joe", "Kaitlyn", "apples","he", "I","dancing"];
var verb = ["is", "was", "are", "loved", "love", "for"];
var object = ["cool", "here", "good", "cake", "eating", "fun"];
var space = " ";
var randomIndex = Math.floor(Math.random() * subject.length);
var randomIndex = Math.floor(Math.random() * verb.length);
var randomIndex = Math.floor(Math.random() * object.length);
console.log(subject[randomIndex] + space + verb[randomIndex] + space + object[randomIndex]);
