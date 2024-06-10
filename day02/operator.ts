// union[=or] |

const user: string | number = "1";
const isLoggin: boolean | null = null;
const box: Element | null = document.querySelector(".box");
const newDiv: Element = document.createElement("div");

// 개 - 푸들, 시바, 치와와, 시츄, ...
// Element - div, section, input, button
const newDiv1: HTMLDivElement = document.createElement("div");

// 커피 -> {name, price, shot} or {name,price,kcal}

const coffee:
  | { name: string; price: number; shot: number }
  | { name: string; price: number; kcal: number } = {
  name: "아아",
  price: 2000,
  shot: 3,
};

// const coffee: {
//   name: string;
//   price: number;
//   shot: number | null;
//   kcal: number | null;
// }[] = [{ name: "아메리카노", price: 2500, shot: 5, kcal: null }, {name:"latte", price:3000, shot:null, kcal:5}];

// ---------------------------------------------------------------------------

// intersection[=and] &
// never: 있을수가 없음 타입
// unknown: 모름
// ()=> type: 함수 지정 타입
// Solid원칙 => d:저수준 모듈 => 고수준 모듈 만들기     저수준 모듈에서 100% 실행되면 고수준 모듈에서도 100% 실행된다.
// ex) [타이어, 엔진, 벨트, 시트] => 자동차

const person: { name: string } & { age: number } & { eat: () => void } = {
  name: "김타입",
  age: 21,
  eat: () => {
    console.log("밥꿀맛");
  },
};
