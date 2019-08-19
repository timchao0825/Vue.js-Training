//屬性縮寫
// function makePoint(x,y){
//   return{
//     x: x,
//     y: y,
//   }
// }
function makePoint(x,y){
  return{
    x,
    y,
  }
}
// -------------------------------------
//計算屬性
function createObj(key , value) {
  // const obj = {};
  // obj[key] = value;
  // ==
  const obj = {
    [key]:value,
  }
  return obj;
}
const person = createObj('nmae','john');
// {
//   name : 'john',
// }
// -------------------------------------
// 函式縮寫
const options = {
  name: 'options',
  level: 10,
  create:function(){

  },
  mounted(){

  },
}
// -------------------------------------
// 解構賦值
const nums = [1,2,3];
// const first = nums[0];
// const second = nums[1];
// ==
// const [first , second] = nums;
// ==
let first;
let second;
[first , second] = nums;
// 解構賦值 預設值
const nums = [1,2];
const [first,second,third=0] = nums;
// 解構賦值 忽略元素