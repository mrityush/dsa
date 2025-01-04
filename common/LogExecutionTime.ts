// common/LogExecutionTime.ts
export function LogExecutionTime(target: any, propertyKey: any, descriptor?: PropertyDescriptor): void {
  if (!descriptor) {
    descriptor = {
      value: target[propertyKey]
    };
  }

  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = target.apply(this, args);
    const end = performance.now();
    console.log(`${propertyKey} executed in ${end - start}ms`);
    return result;
  };

  descriptor.value();

}