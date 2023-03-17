import * as capitalizeString from "./string_function"; //import 所有的

export const capitalString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { capitalizeString };

export const foo = "bar";
export const bar = "foo";

export default function sub(x, y) {
  return x - y;
}
// export default only want to export one thing from a file
