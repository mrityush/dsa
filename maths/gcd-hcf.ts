// maths/gcd-hcf.ts
import { LogExecutionTime } from '../common/LogExecutionTime';

class MathUtils {

  @LogExecutionTime
  static gcd(a: number, b: number): number {
    if (a === 0) {
      return b;
    }
    if (b === 0) {
      return a;
    }
    return MathUtils.gcd(b % a, a);
  }

  static gcdWrapper(a: number, b: number): number {
    return MathUtils.gcd(a, b);
  }
}

export { MathUtils };