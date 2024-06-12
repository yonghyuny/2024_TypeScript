// generic: generalize -> 일반화시킨것
type Fruit_ = {
  name: string;
  kcal: number;
};

// const getSomethingNumber = (something: number) => {
//   console.log(`${something}을 얻었습니다.`);
// };

// const getSomethingString = (something: string) => {
//   console.log(`${something}을 얻었습니다.`);
// };

// const getSomethingBoolean = (something: boolean) => {
//   console.log(`${something}을 얻었습니다.`);
// };

// 제네릭화 하는법

// 일반함수 방법
// function getSomething<T>(something: T) {
//   console.log(`${something}을 얻었습니다.`);
// }

// getSomething<string>(`과일`);
// getSomething<number>(1);
// getSomething<boolean>(true);
// getSomething<boolean>(false);

// 화살표함수 방법
const getSomething = <T>(something: T) => {
  console.log(`${something}을 얻었습니다.`);
};

getSomething<string | number>("탕후루"); // 유니온 사용해서 타입 종류 여러개 설정 가능
