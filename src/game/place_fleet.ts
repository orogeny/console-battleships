import { Coords } from "../lib/coords";
import { Vessel } from "../ships";
import { placeShip } from "./place_ship";

async function placeFleet(dimensions: Coords, vessels: Vessel[]) {
  const fleet = new Map<string, Set<number>>();

  for await (const vessel of vessels) {
    let answered = false;

    while (!answered) {
      const { data, error } = await placeShip(dimensions, fleet, vessel);

      if (error) {
        console.log(`Oops... ${error.message}`);
      } else {
        answered = true;
        fleet.set(vessel.name, data);
      }
    }
  }

  return fleet;
}

export { placeFleet };
