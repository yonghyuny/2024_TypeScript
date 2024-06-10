type Category = "icecream" | "cake" | "cookie";
type Allergy = "우유" | "대두" | "밀" | "계란" | "땅콩" | "복숭아";
type PhotoURL = { url: string };
type Icon = { name: string } & PhotoURL;

type IcecreamProductInfo = {
  category: "icecream";
  engName: string;
  korName: string;
  description: string;
  mainIngredient: Icon[];
};

type NutritionInfo = {
  Servings: number;
  kcal: number;
  sugar: number;
  proteins: number;
  transfats: number;
  salt: number;
  allergies: Allergy[];
};

// 결합
type Icecream = IcecreamProductInfo & NutritionInfo & PhotoURL;

// 포함
type IcecreamComposition = {
  IcecreamProductInfo: IcecreamProductInfo;
  NutritionInfo: NutritionInfo;
  PhotoURL: PhotoURL;
};

const makeIcecreamJumboTron = (data: Icecream) => {
  return `<div>${data.url}</div>`;
};
