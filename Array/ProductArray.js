// Input
// const input = [1, 2, 3, 4, 5];
// Output: buildProductArray(input)
// [2*3*4*5, 1*3*4*5, 1*2*4*5, 1*2*3*5, 1*2*3*4]
// [120, 60, 40, 30, 24];

/**
 * @param {List [int]} input
 * @return {List [int]}
 */
const buildProductArray = (input) => {
  const len = input.length;
  let product = 1;
  const result = Array(len).fill(1);
  result[0] = input[0]; // to manage zero and negative numbers at beginning
  for (let i = 1; i < len; i++) {
    console.log(`result[${result[i]}] = ${result[i - 1]} * ${input[i]}`);
    result[i] = result[i - 1] * input[i];
  }
  for (let i = len - 1; i > 0; i--) {
    if (i === len - 1) {
      result[i] = result[i - 1];
    } else {
      result[i] = result[i - 1] * product;
      console.log(`result[${result[i]}] = ${result[i - 1]} * ${input[i]}`);
    }
    product *= input[i];
  }
  result[0] = product;
  //   return result;
};

buildProductArray([-1, 2, 3, 4, 5]);

//result ---> [120, -60, -40, -30, -24]

// https://skilled.dev/course/product-array
// https://www.youtube.com/watch?v=gREVHiZjXeQ