// constraints[ 제약, 규제 ]

type MainColor = "Pink" | "Red" | "Orange";
type FontSize = 16 | 20;

type WarnButton<T extends MainColor> = {
  backgroundColor: T;
  fontSize: FontSize;
};

const button: WarnButton<"Pink"> = {
  backgroundColor: "Pink",
  fontSize: 20,
};

const newBtn = document.createElement("button");
newBtn.style.backgroundColor = button.backgroundColor;

type ID = string | number;

type Entity<T extends ID> = {
  id: T;
  password: string;
};

const admin: Entity<string> = {
  id: "koreaIT",
  password: "qwer1234!",
};

// type assertion: 타입 단언[확신]

const box1 = document.querySelector("box") as HTMLDivElement;
