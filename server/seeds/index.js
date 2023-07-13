const { Word } = require('../models');
const { Part } = require('../models');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  const astrology = await Word.create({
    word: "astrology",
    definition: "words pertaining to (study of) the stars",
    root: "gr",
    transliteral: "astrologos"
  });
  const astro = await Part.create({
    part: "astro",
    definition: "star",
    root: "gr",
    transliteral: "astro"
  });
  const logos = await Part.create({
    part: "logos",
    definition: "word",
    root: "gr",
    transliteral: "logos"
  })
  await astrology.addPart(astro);
  await astrology.addPart(logos);

  const homoSapiens = await Word.create({
    word: "homo-sapiens",
    definition: "human being",
    root: "lat"
  });
  const homo = await Part.create({
    part: "homo",
    definition: "human",
    root: "lat"
  });
  const sapiens = await Part.create({
    part: "sapiens",
    definition: "wise",
    root: "lat"
  });
  await homoSapiens.addPart(homo);
  await homoSapiens.addPart(sapiens);

  const natural = await Word.create({
    word:"natural",
    definition: "of one's inborn character, hereditary",
    root: "lat"
  });
  const natura = await Part.create({
    part: "natura",
    definition: "from birth, inate, couse of things",
    root: "lat"
  });
  await natural.addPart(natura);

  const selection = await Word.create({
    word: "selection",
    definition: "act of selecting, action of choosing",
    root: "lat"
  });
  const selectio = await Part.create({
    part: "selectio",
    definition: "choice",
    root: "lat"
  });
  await selection.addPart(selectio);

  const evolution = await Word.create({
    word: "evolution",
    definition: "develop gradually, unfold, roll out, expand",
    root: "lat"
  });
  const ex = await Part.create({
    part: "ex-, e-",
    definition: "out",
    root: "lat"
  });
  const volvere = await Part.create({
    part: "volvere",
    definition: "to roll",
    root: "lat"
  });
  await evolution.addPart(ex);
  await evolution.addPart(volvere);

  const solstace = await Word.create({
    word: "solstace",
    definition: "when the sun is at the greatest distance from the equator",
    root: "lat"
  });
  const sol = await Part.create({
    part: "sol",
    definition: "the sun",
    root: "lat"
  });
  const histemi = await Part.create({
    part: "histemi",
    definition: "to make stand, place, put, set",
    root: "gr",
    transliteral: "isthmi"
  });
  await solstace.addPart(sol);
  await solstace.addPart(histemi);

  const accelerate = await Word.create({
    word: "accelerate",
    definition: "hasten the occurence of, make quicker",
    root: "lat"
  });
  const ad = await Part.create({
    part: "ad-, a-",
    definition: "to, toward",
    root: "lat"
  });
  const celer = await Part.create({
    part: "celer",
    definition: "swift",
    root: "lat"
  });
  await accelerate.addPart(ad);
  await accelerate.addPart(celer);

  const equinox = await Word.create({
    word: "equinox",
    definition: "hasten the occurence of, make quicker",
    root: "lat"
  });
  const aequus = await Part.create({
    part: "aequus",
    definition: "equal",
    root: "lat"
  });
  const nox = await Part.create({
    part: "nox",
    definition: "night",
    root: "lat"
  });
  await equinox.addPart(aequus);
  await equinox.addPart(nox);

  const maximum = await Word.create({
    word: "maximum",
    definition: "the greatest amount, quality, or degree",
    root: "lat"
  });
  const maximus = await Part.create({
    part: "maximus",
    definition: "greatest",
    root: "lat"
  });
  await maximum.addPart(maximus);

  const velocity = await Word.create({
    word: "velocity",
    definition: "speed",
    root: "lat"
  });
  const velox = await Part.create({
    part: "velox",
    definition: "swift, rapid, quick",
    root: "lat"
  });
  await velocity.addPart(velox);

  const technology = await Word.create({
    word: "technology",
    definition: "the application of scientific knowledge for practical purposes",
    root: "gr",
    transliteral: "tecnologia"
  });
  const techne = await Part.create({
    part: "techne",
    definition: "art, skill, craft",
    root: "gr",
    transliteral: "tecnh"
  });
  await technology.addPart(techne);
  await technology.addPart(logos);

  const prehistoric = await Word.create({
    word: "prehistoric",
    definition: "times before resorded history",
    root: "gr"
  });
  const pre = await Part.create({
    part: "pre-",
    definition: "before",
    root: "lat"
  });
  const historia = await Part.create({
    part: "historia",
    definition: "story, account, record, narrative",
    root: "gr",
    transliteral: "istoria"
  });
  await prehistoric.addPart(pre);
  await prehistoric.addPart(historia);

  const anticipate = await Word.create({
    word: "anticipate",
    definition: "take care of beforehand",
    root: "lat"
  });
  const anti = await Part.create({
    part: "anti-",
    definition: "before",
    root: "lat"
  });
  const capere = await Part.create({
    part: "capere",
    definition: "to take",
    root: "lat"
  });
  await anticipate.addPart(anti);
  await anticipate.addPart(capere);

  const prognosticate = await Word.create({
    word: "prognosticate",
    definition: "forecast, predict, know beforehand",
    root: "gr",
    transliteral: "progignoskw"
  });
  const pro = await Part.create({
    part: "pro-",
    definition: "before",
    root: "gr",
    transliteral: "pro-"
  });
  const gignosko = await Part.create({
    part: "gignosko",
    definition: "to know",
    root: "gr",
    transliteral: "gignoskw"
  });
  await prognosticate.addPart(pro);
  await prognosticate.addPart(gignosko);

  const migratory = await Word.create({
    word: "migratory",
    definition: "an animal that changes location throught the year",
    root: "lat"
  });
  const migratus = await Part.create({
    part: "migratus",
    definition: "to move from one place to another",
    root: "lat",
  });
  await migratory.addPart(migratus);

  const predict = await Word.create({
    word: "predict",
    definition: "foretell, prophesy",
    root: "lat"
  });
  const dicere = await Part.create({
    part: "dicere",
    definition: "to say, tell, order",
    root: "lat",
  });
  await predict.addPart(pre);
  await predict.addPart(dicere);

  const symbology = await Word.create({
    word: "symbology",
    definition: "study of signs, icons, or tokens",
    root: "gr",
    transliteral: "sumbologos"
  });
  const symbolon = await Part.create({
    part: "symbolon",
    definition: "sign, token, mark, ticket, permit",
    root: "gr",
    transliteral: "sumbolon"
  });
  await symbology.addPart(symbolon);
  await symbology.addPart(logos);

  const recognition = await Word.create({
    word: "recognition",
    definition: "knowledge, understanding, rememberance",
    root: "lat"
  });
  const re = await Part.create({
    part: "re-",
    definition: "again",
    root: "lat"
  });
  const cognoscere = await Part.create({
    part: "cognoscere",
    definition: "to know",
    root: "lat"
  });
  await recognition.addPart(re);
  await recognition.addPart(cognoscere);

  const genetically = await Word.create({
    word: "genetically",
    definition: "pertaining to origins, by birth, written into DNA",
    root: "gr"
  });
  const genesis = await Part.create({
    part: "genesis",
    definition: "origin, creation, birth",
    root: "gr",
    transliteral: "genesis"
  });
  await genetically.addPart(genesis);

  const hemisphere = await Word.create({
    word: "hemisphere",
    definition: "half of a globe",
    root: "gr",
    transliteral: "emisferia"
  });
  const hemi = await Part.create({
    part: "hemi-",
    definition: "half",
    root: "gr",
    transliteral: "emi"
  });
  const spheria = await Part.create({
    part: "spheria",
    definition: "sphere, orb, globe",
    root: "gr",
    transliteral: "sferia"
  });
  await hemisphere.addPart(hemi);
  await hemisphere.addPart(spheria);

  process.exit(0);
};

seedAll();