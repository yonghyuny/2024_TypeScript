type Juice = {
  name: string;
  kcal: number;
};

type Carbonated = {
  gas: number;
  color: string;
};

// Hybrid Type
type SoftDrink = Juice & Carbonated;
const coke: SoftDrink = {
  name: "콜라",
  kcal: 10,
  gas: 100,
  color: "black",
};

interface Fruit {
  name: string;
  kcal: number;
}

const tomato: Fruit = {
  name: "토마토",
  kcal: 10,
};

interface TropicalFruit extends Fruit {
  sugarLevel: number;
}

const Mango: TropicalFruit = {
  name: "망고",
  kcal: 100,
  sugarLevel: 5,
};
