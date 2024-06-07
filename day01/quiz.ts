// 1.태어난 년도로 띠 알아보기

const makeZodiac = (year: number): String => {
  const zodiac = [
    "원숭이",
    "닭",
    "개",
    "돼지",
    "쥐",
    "소",
    "호랑이",
    "토끼",
    "용",
    "뱀",
    "말",
    "양",
  ];

  // console.log(2024 % 12) = 8 2024년은 용

  const animal = zodiac[year % 12];
  return animal;
};

// 2 숫자 뒤집기

const solution = (num: number): number[] =>
  [...String(num)].reverse().map((v) => Number(v));

// 3. 짝수는 싫어요

const oddNum = (n: number) => {
  return Array(n + 1)
    .fill(0)
    .map((_, i) => {
      return i;
    })
    .filter((v1) => {
      return v1 % 2 != 0;
    });
};

console.log(oddNum(10));
