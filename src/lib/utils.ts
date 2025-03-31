function intersection<T>(a: Set<T>, b: Set<T>) {
  const c = new Set<T>();

  for (const x of a) {
    if (b.has(x)) c.add(x);
  }

  return c;
}

export { intersection };
