const fruits: string[] = ["apple", "banana", "cherry"];

function addFruit(fruit: string) {
  const _obj = { hello: "world" };

  fruits.push(fruit);

  const c = 7;

  console.log(`C is ${c}`);
}

export { fruits, addFruit };
