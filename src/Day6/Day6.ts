import { data } from "./data";

export const Day6 = () => {
  for (let i = 0; i < data.length; i++) {
    const substring = data.slice(i, i + 14);
    if (!/(.).*\1/.test(substring)) {
      console.log(i + 14);
    }
  }
};
