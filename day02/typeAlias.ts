// type[타입] Alias[별칭]

// 리터럴 타입
type Genre = "키덜트" | "공포" | "코믹" | "드라마" | "멜로" | "사랑" | "액션";
type Grade = "전체 이용가" | "12세" | "15세" | "18세";
type Movie = {
  name: string;
  genre: Genre[];
  grade: Grade;
};

const insideout2: Movie = {
  name: "인사이드아웃2",
  genre: ["키덜트"],
  grade: "전체 이용가",
};

const CGV: Movie[] = [
  { name: "원더랜드", genre: ["공포", "드라마"], grade: "15세" },
  { name: "설계자", genre: ["드라마"], grade: "15세" },
  { name: "나쁜녀석들", genre: ["액션"], grade: "15세" },
];

CGV.map((v) => {
  v.genre.forEach((v) => console.log(v));
});

// 함수 movie[] 매개변수를 받고, 장르를 하나의 문자열로 출력하는 함수 정의

// const defineGenre = (movies: Movie[]) => {
//   movies.forEach((v) => {
//     const result = v.genre.reduce((a,c)=>a+c)
//    console.log(result)
//   });
// };

const makeMsgAlign = (msg: string, align: "center" | "start" | "end") => {
  const span = document.createElement("span");
  span.innerText = msg;
  span.style.textAlign = align;
  return span;
};
makeMsgAlign("점메추", "center");

type Bread = {
  name: string;
  price: number;
};

type keyofBreadType = keyof Bread; // 'name' | 'price'
const apple: keyofBreadType = "price";
