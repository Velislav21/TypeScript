"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator3 = decorator3;
exports.decorator4 = decorator4;
exports.decorator5 = decorator5;
function decorator1(constructor) { }
function decorator2(target, propertyName, descriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        const originalPrice = originalGetter?.call(this);
        const newPrice = originalPrice * 1.2;
        return newPrice;
    };
    return originalGetter;
}
function decorator3(target, propertyName, descriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        const originalCancellationPrice = originalGetter?.call(this);
        const newPrice = originalCancellationPrice * 1.2;
        return newPrice;
    };
    return originalGetter;
}
function decorator4(target, propertyKey, parameterIndex) { }
function decorator5(constructor) {
    return class extends constructor {
        static MotelName = 'Monthly Motel';
    };
}
//# sourceMappingURL=decorators.js.map