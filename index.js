const Person = require("./person");
const Artwork = require("./artwork");

const mihri = new Person('mihri', 35, 'artist');
const manolo = new Person('manolo', 21, 'collector');
const sara = new Person('sara', 36, 'artist');

const sculpture01 = new Artwork("sculpture01.jpg", "wood", 2021, 2500);
const painting01 = new Artwork("painting01.jpg", "acrylic", 2020, 2700);
sara.addArt(sculpture01);
sara.addArt(painting01);

sara.bio = 
'An International Abstract and Conceptual Artist'

manolo.likeArt(painting01);
mihri.likeArt(painting01);


console.log(sara.profile);
