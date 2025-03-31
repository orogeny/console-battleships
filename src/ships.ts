const SHIPS = [
  { type: "Carrier", quantity: 1, length: 4 },
  { type: "Destroyer", quantity: 2, length: 3 },
  { type: "Gunship", quantity: 4, length: 1 },
] as const;

type Ship = (typeof SHIPS)[number]["type"];

type Vessel = { type: Ship; name: string; length: number };

const VESSELS: Vessel[] = SHIPS.flatMap(({ type, quantity, length }) =>
  Array.from({ length: quantity }, (_, i) => ({
    type,
    name: quantity === 1 ? type : `${type} ${i + 1}`,
    length,
  })),
);

export { SHIPS, VESSELS };
export type { Ship, Vessel };
