export function LogExecutionTime(target: any, propertyKey: string, descriptor?: PropertyDescriptor): void {
  if (!descriptor) {
    throw new Error('Descriptor is required');
  }

  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`${propertyKey} executed in ${end - start}ms`);
    return result;
  };
}
