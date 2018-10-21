const aString = 'just a string';
const anArray = [aString, 123, {aString}];
const anObj = {
  prop1: aString,
  prop2: anArray,
  prop3: {
    aString,
    anArray,
    aDeeply: {
      nested: {
        aString,
        anArray
      }
    }
  },
  prop4: [1, 2, 3, 'Starts', 'indenting', 'at certain', 'number of', 'elements'],
  prop5: 'lol'
};

module.exports = {
  aString,
  anArray,
  anObj
};
