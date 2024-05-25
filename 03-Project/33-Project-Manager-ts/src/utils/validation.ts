import Validatable from "../models/Validatable";

/**
 * function to validate attribute
 */
export default function validate(validatableObj: Validatable) {
  let isValid = true;

  if (validatableObj.required) {
    isValid &&= validatableObj.value.toString().trim().length !== 0;
  }

  if (validatableObj.minLength && typeof validatableObj.value === "string") {
    isValid &&= validatableObj.value.length >= validatableObj.minLength;
  }

  if (validatableObj.maxLength && typeof validatableObj.value === "string") {
    isValid &&= validatableObj.value.length <= validatableObj.maxLength;
  }

  if (validatableObj.min && typeof validatableObj.value === "number") {
    isValid &&= validatableObj.value >= validatableObj.min;
  }

  if (validatableObj.max && typeof validatableObj.value === "number") {
    isValid &&= validatableObj.value <= validatableObj.max;
  }

  return isValid;
}
