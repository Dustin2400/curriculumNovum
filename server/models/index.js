const Word = require('./word');
const Part = require('./part');

Part.belongsToMany(Word, { through: "WordAssociation" });
Word.belongsToMany(Part, { through: "WordAssociation" });

module.exports = { Word, Part };