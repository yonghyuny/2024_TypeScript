const solution1 = (arr: number[]) => {
  return arr.length == 0 ? [-1] : arr.filter((v) => v != arr.sort()[0]);
};

console.log(solution1([1, 2, 3, 4]));
