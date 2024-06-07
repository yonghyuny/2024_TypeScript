const b: String = "hello world";
const b1: Number = 100;

// boolean, null, undefined

const b2: Boolean = true; // !=123
const b3: null = null;
const b4: undefined = undefined;

// object
const b5: { name: String; price: Number } = { name: "아아", price: 2500 };
const b5_1: object = { name: "latte", price: 3500 };

// array
const b6 = [1, 2, 3, 4, 5];

// 타입 추론
const b7: number[] = [1, 2, 3, 4, 5];

// any타입  (최후의 보루)
const b8: any = "하고싶은대로";
