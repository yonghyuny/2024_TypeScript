type Coffee = {
  [key: string]: number;
};

const test: Coffee = {
  name: 1,
  shot: 2,
  kcal: 3,
};

type Person = {
  name: string;
  age: number;
  nation?: string;
};

const kim: Person = {
  name: "김씨",
  age: 22,
  nation: "한국",
};

type Unit = {
  [key: string]: string | number | null | undefined;
  name: string;
  hp: number;
  pet?: string;
};
