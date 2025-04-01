import { inputCoords } from "../ui/input_coords";

async function getDimensions() {
  while (true) {
    const { data, error } = await inputCoords(
      "Enter board dimensions (min 4 x 4):",
    );

    if (data) {
      const [width, height] = data;

      if (width >= 4 && height >= 4) return data;
      else console.log("Oops... Board must be min 4 x 4 squares");
    } else console.log(`Oops... ${error.message}`);
  }
}

export { getDimensions };
