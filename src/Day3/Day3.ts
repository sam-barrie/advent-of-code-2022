import { data } from "./data";

const priority = (input: string) =>
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(input) + 1;

const stringCompare = (input: string[]) => {
  for (var i = 0, len = input[0].length; i < len; i++)
    if (input[1].indexOf(input[0][i]) !== -1) return priority(input[0][i]);

  return 0;
};

const threeWayStringCompare = (input: string[]) => {
  for (var i = 0, len = input[0].length; i < len; i++)
    if (
      input[1].indexOf(input[0][i]) !== -1 &&
      input[2].indexOf(input[0][i]) !== -1
    )
      return priority(input[0][i]);

  return 0;
};

export const Day3 = () => {
  const array = data.split("\n");

  const splitArray = array.map((elt: string) => [
    elt.slice(0, elt.length / 2),
    elt.slice(elt.length / 2, elt.length),
  ]);

  const comparedArray = splitArray.map((elt: string[]) => stringCompare(elt));
  // console.log(comparedArray.reduce((a, b) => a + b, 0));

  const groupedArray = [];
  while (array.length) {
    groupedArray.push(array.splice(0, 3));
  }

  console.log(
    groupedArray
      .map((group: string[]) => threeWayStringCompare(group))
      .reduce((a, b) => a + b, 0)
  );
};
