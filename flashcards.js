var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
/* 
*
* Basic Flashcard Tests
*
*/

var firstPresident = BasicCard('Who was the first president of the United States?', 'George Washington');
console.log(firstPresident.front);
console.log(firstPresident.back); 
console.log('-------------------------------------');

var nowPresident = BasicCard('Who is the current president of the United States?', 'Donald Trump');
console.log(nowPresident.front);
console.log(nowPresident.back);
console.log('-------------------------------------');

var oscarWinner = BasicCard('What movie won the Oscar for best picture at the 2016 Academy Awards?', 'Moonlight');
console.log(oscarWinner.front);
console.log(oscarWinner.back);
console.log('-------------------------------------');

var nextOlympics = BasicCard('What city will host the next winter Olympic games in 2018?', 'PyeongChang, South Korea');
console.log(nextOlympics.front);
console.log(nextOlympics.back);
console.log('-------------------------------------');

/* 
*
* Cloze-Deleted Flashcard Tests
*
*/

firstPresident = ClozeCard('George Washington was the first president of the United States.', 'George Washington');
console.log(firstPresident.fullText);
console.log(firstPresident.cloze); 
console.log(firstPresident.partial); 
console.log('-------------------------------------');

nowPresident = ClozeCard('Donald Trump is the current president of the United States.', 'Donald Trump');
console.log(nowPresident.fullText);
console.log(nowPresident.cloze); 
console.log(nowPresident.partial); 
console.log('-------------------------------------');

oscarWinner = ClozeCard('Moonlight won the Oscar for best picture at the 2016 Academy Awards.', 'Moonlight');
console.log(oscarWinner.fullText);
console.log(oscarWinner.cloze); 
console.log(oscarWinner.partial); 
console.log('-------------------------------------');

var nextOlympics = ClozeCard('PyeongChang, South Korea will host the next winter Olympic games in 2018', 'PyeongChang');
console.log(nextOlympics.fullText);
console.log(nextOlympics.cloze); 
console.log(nextOlympics.partial); 
console.log('-------------------------------------');

var failedCard = ClozeCard('This text will not include the clozed-deletion...', 'TEST');
console.log(failedCard.fullText);
console.log(failedCard.cloze); 
console.log(failedCard.partial); 
console.log('-------------------------------------');