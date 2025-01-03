// code to calculate the gcd of two numbers
// using Euclidean algorithm
export function gcd(a: number, b: number): number {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
}

// run example
console.log(gcd(10, 15)); // 5