import { isBoolean } from "./index";

test("it should return true if given value is of type boolean", () => {
  expect(isBoolean(true)).toEqual(true);
});

test("it should return true if given value is false", () => {
  expect(isBoolean(false)).toEqual(true);
});

test("it should return true if given value is true", () => {
  expect(isBoolean(true)).toEqual(true);
});

test("it should return false for truthy/falsy values", () => {
  expect(isBoolean("")).toEqual(false);
  expect(isBoolean(null)).toEqual(false);
  expect(isBoolean(undefined)).toEqual(false);
});
