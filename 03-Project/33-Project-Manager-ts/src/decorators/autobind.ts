/**
 * autobind decorator, used to bind this keyword to class this
 */
export default function autobind(_: any, _2: String, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFun = originalMethod.bind(this);
      return boundFun;
    },
  };
  return adjustedDescriptor;
}
