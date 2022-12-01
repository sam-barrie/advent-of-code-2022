import {day1input} from "./data";

export const Day1 = () => {
  const sums = day1input.split("\n\n")
    .map((group) =>
      group.split("\n")
        .map(function (elt) {
        return /^\d+$/.test(elt) ? parseInt(elt) : 0;
      })
        .reduce(function (prev, curr) {
        return (Number(prev) || 0) + (Number(curr) || 0);
      }))

  for (let step = 0; step < 3; step++) {
    const max = Math.max(...sums)
    const index1 = sums.indexOf(max);
    if (index1 > -1) {
      sums.splice(index1, 1);
    }
    console.log(max);
  }

};
