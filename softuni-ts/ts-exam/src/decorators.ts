export function decorator1<T extends new (...args: any[]) => {}>(
    constructor: T
) {}

export function decorator2(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        const originalPrice = originalGetter?.call(this);

        const newPrice = originalPrice * 1.2;

        return newPrice;
    };
}

export function decorator3(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        const originalCancellationPrice = originalGetter?.call(this);

        const newPrice = originalCancellationPrice * 1.2;

        return newPrice;
    };
    
}

export function decorator4(
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number
) {}

export function decorator5(constructor: any): any {
  return class extends constructor {
    public static readonly MotelName = 'Monthly Motel';
  };
}