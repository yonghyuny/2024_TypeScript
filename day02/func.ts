const greet = (name: string, greeting?: string) => {
  return `${greeting ?? "hello"}, ${name}`;
};
console.log(greet("최호준", "ㅎㅇ"));
console.log(greet("최호준"));
