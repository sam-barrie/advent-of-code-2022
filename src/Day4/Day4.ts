import { data } from "./data";

const isFullyContained = (input: string[]): number => {
  const input1 = input[0].split("-");
  const input2 = input[1].split("-");
  const input1X = parseInt(input1[0]);
  const input1Y = parseInt(input1[1]);
  const input2X = parseInt(input2[0]);
  const input2Y = parseInt(input2[1]);
  console.log(input1X, input1Y, input2X, input2Y);
  if (
    (input1X <= input2X && input1Y >= input2Y) ||
    (input2X <= input1X && input2Y >= input1Y)
  )
    return 1;
  else return 0;
};

const hasAnyAmountOfOverlap = (input: string[]): number => {
  const input1 = input[0].split("-");
  const input2 = input[1].split("-");
  const input1X = parseInt(input1[0]);
  const input1Y = parseInt(input1[1]);
  const input2X = parseInt(input2[0]);
  const input2Y = parseInt(input2[1]);
  if (
    (input1X <= input2X && input1Y >= input2X) ||
    (input1X <= input2Y && input1Y >= input2Y) ||
    (input2X <= input1X && input2Y >= input1X) ||
    (input2X <= input1Y && input2Y >= input1Y)
  )
    return 1;
  else return 0;
};
export const Day4 = () => {
  const array = data.split("\n");

  const splitArray = array.map((elt) => elt.split(","));
  const comparedArray = splitArray.map((elt) => isFullyContained(elt));
  const overlapArray = splitArray.map((elt) => hasAnyAmountOfOverlap(elt));
  console.log(comparedArray);
  console.log(comparedArray.reduce((a, b) => a + b, 0));
  console.log(overlapArray.reduce((a, b) => a + b, 0));
};
