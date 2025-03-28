# Console Battleships

Console Battleships game implemented using a Node/TypeScript/Jest setup.

## Spec

Loosely based on the [Battleships kata spec](https://www.codurance.com/katas/battleships) over at Codurance.

## Motivation

I first looked at this kata with a view to kicking the types with bun v2 and its ability transpile raw TS files, side stepping the **tsc** setup.

Initially, the ease of running TS files was a dream:

```
  > bun index.ts
```

...job done.

The data structure was straightforward. However:

- writing tests using the "bun:test" package? Yeah, logical.
- crack opening JS Debug Terminal to follow logic? Nope.

After a deeper dive into Node/TypeScript project setup ([See resulting template repo here](https://github.com/orogeny/ts-node-template)) than intended, I'm back to give the template repo a trial run.

## Stack

TypeScript plus:

- Node
- EsLint
- Jest

# Installation

1. clone/fork the repo

2. `> cd console-battleships`

3. `> npm install`

4. `> npm run start`

Welcome to the retro world of "You sank my battleship!"
