/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing
  several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject{
    constructor(attributes){
        this.createdAt = attributes.createdAt,
        this.name = attributes.name,
        this.dimensions = attributes.dimensions   
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

// function GameObject(attributes){
//     this.createdAt = attributes.createdAt,
//     this.name = attributes.name,
//     this.dimensions = attributes.dimensions
// };

// GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`
// };


class CharacterStats extends GameObject{
    constructor(statsAttributes){
        super(statsAttributes);
        this.healthPoints = statsAttributes.healthPoints
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
}

// function CharacterStats(statsAttributes){
//     GameObject.call(this, statsAttributes);
    // this.healthPoints = statsAttributes.healthPoints
// };  

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function(){
//     return `${this.name} took damage.`
// };


class Humanoid extends CharacterStats{
    constructor(humanoidAttributes){
        super(humanoidAttributes);
        this.team = humanoidAttributes.team,
        this.weapons = humanoidAttributes.weapons,
        this.language = humanoidAttributes.language
    };
    greet(){
        return `${this.name} offers a greeting in ${this.language}`
    };
}
// function Humanoid(humanoidAttributes){
//     CharacterStats.call(this, humanoidAttributes);
    // this.team = humanoidAttributes.team,
    // this.weapons = humanoidAttributes.weapons,
    // this.language = humanoidAttributes.language
// };

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function(){
//     return `${this.name} offers a greeting in ${this.language}`
// };






  //________________Hero________________
  class Hero extends Humanoid {
      constructor(heroAttributes){
          super(heroAttributes)
      }
      bigOldSlash(character){
        character.healthPoints = character.healthPoints - 7;
        if (character.healthPoints <= 0) {
                return character.destroy;
            } else
                return `A direct hit! ${character.takeDamage(character)} and only has ${character.healthPoints} hp remaining.`
        };
  }
//   function Hero(heroAttributes){
//     Humanoid.call(this, heroAttributes);
//   };
  
//   Hero.prototype = Object.create(Humanoid.prototype);
  
//   Hero.prototype.bigOldSlash = function bigOldSlash(character){
//     character.healthPoints = character.healthPoints - 7;
//     if (character.healthPoints <= 0) {
//       return character.destroy;
//       } else
//       return `A direct hit! ${character.takeDamage(character)} and only has ${character.healthPoints} hp remaining.`
//   };
  
  
  
  //________________Villain________________

class Villain extends Humanoid{
    constructor(villainAttributes){
        super(villainAttributes)
    }
    leech(character){
        if (character.healthPoints <= 0) {
            return character.destroy;
            } else
            return `A direct hit! ${character.takeDamage(character)} and only has ${character.healthPoints} hp remaining.`
    };
}
  
//   function Villain(villainAttributes){
//     Humanoid.call(this, villainAttributes);
//     }
  
  
//   Villain.prototype = Object.create(Humanoid.prototype);
  
  // Villain.prototype.leech = function(character){
  //   character.healthpoints = character.healPoints - 4;
  //   return `${this.name} leeched your life-source! You have ${(character.healthPoints)} health points remaining!`
  // };
  
//   Villain.prototype.leech = function leech(character){
//     character.healthPoints = character.healthPoints - 7;
//     if (character.healthPoints <= 0) {
//       return character.destroy;
//       } else
//       return `A direct hit! ${character.takeDamage(character)} and only has ${character.healthPoints} hp remaining.`
//   };
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const hero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 20,
      name: 'Aranor',
      team: 'Steel Kingdom',
      weapons: [
        'Long-sword',
        'Shield',
      ],
      language: 'Probabaly White Guy',
    });
  
    const villain = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 20,
      name: 'MalGanis',
      team: 'The Undead',
      weapons: [
        'Claws',
        'Tail',
      ],
      language: 'Black Speech',
    });
  
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(hero.bigOldSlash(villain));
    console.log(villain.leech())
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result 
    //in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!