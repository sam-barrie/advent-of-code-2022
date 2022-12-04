import {day2Input} from "./Day2Data";


const rps = (input: string[]) => {
  if ((input[0] === "C" && input[1] === "X") || (input[0] === "B" && input[1] === "Z") || (input[0] === "A" && input[1] === "Y")) {
    // victory
    return 6;
  }
  if ((input[0] === "C" && input[1] === "Z") || (input[0] === "B" && input[1] === "Y") || (input[0] === "A" && input[1] === "X")) {
    // draw
    return 3;
  }
  else return 0;
  // if ((input[0] === "C" && input[1] === "Y") || (input[0] === "B" && input[1] === "X") || (input[0] === "A" && input[1] === "Z")) {
  //   // defeat
  //   return 0;
  // }
}

const baseScore = (input: string[]) => {
  if (input[1] === "X") {
    return 1;
  }
  if (input[1] === "Y") {
    return 2;
  }
  else return 3;
  // if (input[1] === "Z") {
  //   return 3;
  // }
}

const inverseRps = (input: string[]) => {
    if ((input[0] === "A" && input[1] === "Y") || (input[0] === "B" && input[1] === "X") || (input[0] === "C" && input[1] === "Z")) {
      // X
      return 1;
    }
    if ((input[0] === "A" && input[1] === "Z") || (input[0] === "B" && input[1] === "Y") || (input[0] === "C" && input[1] === "X")) {
      // Y
      return 2;
    }

  else return 3;
}

const inverseBaseScore = (input: string[]) => {
  if (input[1] === "X") {
    return 0;
  }
  if (input[1] === "Y") {
    return 3;
  }
  else return 6;
  // if (input[1] === "Z") {
  //   return 6;
  // }
}
export const Day2 = () => {
  const array = day2Input.split("\n")
  const splitArray = array.map((elt: string) => elt.split(" ")
  )
  const result = splitArray.map((elt: string[]) => rps(elt) + baseScore(elt))
  console.log(result.reduce((a,b) => a + b, 0));
  const inverseResult = splitArray.map((elt: string[]) => inverseRps(elt) + inverseBaseScore(elt))
  console.log(inverseResult.reduce((a,b) => a + b, 0))
}



// rock beats scissors, scissors beats paper, and paper beats rock
// X beats C, Z beats B, and Y beats A
// X = 1, Y = 2, Z = 3