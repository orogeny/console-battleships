import { addFruit, fruits } from "./fruits";

delay(2000).then(() =>
  console.log(`Initially we had ${fruits.length} fruits - R E A L L Y . . ?`),
);

addFruit("grape");

console.log(`But now we have ${fruits.length} fruit..!  Hmm?`);

async function delay(ms: number) {
  return new Promise((resolve, _) => setTimeout(resolve, ms));
}
