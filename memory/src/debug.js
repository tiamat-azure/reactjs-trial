import shuffle from "lodash.shuffle";

const personnes = [
  { ide: 1, nom: "toto" },
  { ide: 2, nom: "titi" },
  { ide: 3, nom: "tata" },
  { ide: 4, nom: "tutu" },
];

console.log(personnes.map((p) => p.nom));

const p2 = shuffle(personnes);

console.log(p2.map((p) => p.nom));
