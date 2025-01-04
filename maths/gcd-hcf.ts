// maths/gcd-hcf.ts
import { LogExecutionTime } from '../common/LogExecutionTime';

class MathUtils {

  static gcd(a: number, b: number): number {
    if (a === 0) {
      return b;
    }
    if (b === 0) {
      return a;
    }
    return MathUtils.gcd(b % a, a);
  }

  @LogExecutionTime
  static gcdWrapper(a: number, b: number): number {
    return MathUtils.gcd(a, b);
  }
}

export { MathUtils };