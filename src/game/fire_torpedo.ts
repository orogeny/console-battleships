import { Coords } from "../lib/coords";
import { validateCoords } from "../lib/validate_coords";
import { inputCoords } from "../ui/input_coords";

function fireTorpedo(dimensions: Coords) {
  const onBoard = validateCoords(dimensions);

  return async function () {
    while (true) {
      const { data, error } = await inputCoords("Enter torpedo's coords:");

      if (data) {
        if (onBoard(data)) return data;

        console.log(`Oops... Coordinates (${data}) are off the board`);
      } else console.log(`Oops... ${error.message}`);
    }
  };
}

export { fireTorpedo };
