export const add = (a: number, b: unknown) => {
  if (typeof b !== 'number') {
    throw 'El argumento 2 no es un número.';
  }

  return a + b;
};

export const foo = (
  a: number,
  b: number,
  callback: (a: number, b: number) => number
) => {
  return callback(a, b);
};
