import { data } from "./data";

export const Day5 = () => {
  const array = data.split("\n\n");

  const stacks = array[0];
  const arrangement = array[1];

  const steps = arrangement
    .split("\n")
    .map((step) => step.split(" "))
    .map((step) => ({
      move: parseInt(step[1]),
      from: parseInt(step[3]),
      to: parseInt(step[5]),
    }));

  const [rawStackIds, ...bottomUpStacks] = stacks.split("\n").reverse();

  const stackIds = rawStackIds
    .trim()
    .split(/\s+/)
    .map((id) => parseInt(id));

  let valuePositionIndex = 1;
  const stacksByColumnId = stackIds.reduce((result, nextId) => {
    result[nextId] = bottomUpStacks.reduce((result, nextRow) => {
      const value = nextRow[valuePositionIndex]?.trim();

      return value ? [...result, value] : result;
    }, [] as string[]);

    valuePositionIndex += 4;

    return result;
  }, {} as Record<number, string[]>);

  steps.forEach(({ move, from, to }) => {
    stacksByColumnId[to].push(
      ...stacksByColumnId[from].splice(-move).reverse()
    );
  });

  const topCrates = stackIds.reduce((result, nextStackId) => {
    const stack = stacksByColumnId[nextStackId];
    return [...result, stack[stack.length - 1]];
  }, [] as string[]);

  console.log(topCrates.join(""));
};
