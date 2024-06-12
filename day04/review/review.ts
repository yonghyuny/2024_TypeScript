const getSomething2 = <T>(something: T) => {
  return `${something}을 얻었습니다.`;
};

type Pair<T, U> = {
  first: T;
  second: U;
};

const test1: Pair<string, boolean> = {
  first: "치킨",
  second: false,
};

type Coffee1 = {
  name: string;
  price: number;
};

type Cookie = {
  name: string;
  price: number;
};

const subwayMorningSet: Pair<Coffee1, Cookie> = {
  first: { name: "아메리카노", price: 1500 },
  second: { name: "화이트 쿠키", price: 2500 },
};

const subwayMorningSet1: Pair<Coffee1, Pair<Cookie, Cookie>> = {
  first: { name: "아메리카노", price: 1500 },
  second: {
    first: {
      name: "블랙 쿠키",
      price: 2000,
    },
    second: {
      name: "화이트 쿠키",
      price: 2500,
    },
  },
};

// Triple 타입 제네릭화 시키고,
// Hamburger type
// side type
// drink type

type Triple<T, U, V> = {
  hamberger: T;
  sideMenu: U;
  drink: V;
};

type Hamburger = {
  name: string;
  price: number;
  kcal: number;
};

type SideMenu = {
  name: string;
  price: number;
  kcal: number;
};

type Drink = {
  name: string;
  price: number;
  kcal: number;
};

type Coffee2 = {
  name: string;
  price: number;
  hasCaffein: boolean;
};

const hamburgerMeal: Triple<Hamburger, SideMenu, Drink | Coffee2> = {
  hamberger: {
    name: "쿼터파운드치즈버거",
    price: 6000,
    kcal: 300,
  },
  sideMenu: {
    name: "감자튀김",
    price: 1500,
    kcal: 400,
  },
  drink: {
    name: "코카콜라",
    price: 2000,
    kcal: 150,
  },
};

// --------------------------------------

type Success1<T> = {
  type: "success";
  value: T;
};

type Fail1 = {
  type: "fail";
  value: string;
};

type Response__<T> = Success1<T> | Fail1;

const getResponse_ = (res: Response__<string[]>) => {
  if (res.type == "success") {
    res.value.forEach((v) => console.log(v));
  } else {
    console.log(res.value.toUpperCase());
  }
};

getResponse_({
  type: "success",
  value: ["자바", "파이썬", "코틀린", "타입스크립트"],
});

getResponse_({
  type: "fail",
  value: "실패하였습니다.",
});

type Won = `${string}원`;
type Yen = `${string}엔`;
type Dollar = `${string}달러`;

type GuestName = `${string}`;

const shampoo: Won | Yen = `100엔`;

const choi: GuestName = `최님`;
