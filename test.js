//Javascript es6 training
// -------------------------------------
//屬性縮寫
// -------------------------------------
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
// -------------------------------------
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
// -------------------------------------
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
// -------------------------------------
// 陣列解構
const nums = [1,2,3];
// const first = nums[0];
// const second = nums[1];
// ==
// const [first , second] = nums;
// ==

// 陣列解構 **方型中括號

let first;
let second;
[first , second] = nums;//[1 , 2]
// 解構賦值 預設值
const nums = [1,2];
const [first,second,third=0] = nums;// [1 , 2 , 0]

// 解構賦值 忽略元素
const nums = [1,2,3,4];
const [,second] = nums;//只取第二個值

// 變數交換
let a = 1;
let b = 1;
[a,b] = [b,a]

// 剩餘部分
const nums = [1,2,3,4];
const [first, ...others] = nums;
// first === 1
// other == [2,3,4]
// -------------------------------------
// 物件解構 ＊＊大括號
// 記憶法 
// 宣告陣列的時候用中括號 const array = [];
// 宣告物件的時候用大括號 const object = {};

const point = {
  x: 100,
  y: 150,
}
//original 
const x = point.x;
const y = point.y;
// es6 **方型中括號
const {x , y} = point;

// 指派新名稱
//original
const px = point.x;
//es6
const {x:px,y:py} = point;

// 函式參數解構
function distance(point){
  const {x,y} = point;
  return Math.sqrt(x*x + y*y)
}

//可變成
function distance({x ,y}){
  return Math.sqrt(x*x + y*y)
}

// -------------------------------------
// 字串模板
// -------------------------------------

//原始寫法
function greet(name){
  console.log('Hello , ' + name + '!');
}
greet('Jack');// Hell , Jack!

// ES6 字串模板寫法
// `` backtick
function green(name){
  console.log(`Hello , ${name}!`);
}
greet('jack');
// 插入表達式 expression
// example: (const a) , (a + 2)
// 陳述式
// example: if(1<2) , (break) , (continue)
//範例：
function greet(name , days){
  // const hours = days * 24;
  // console.log(`Hello , ${name}! It's been ${hours} hours`);
  console.log(`Hello , ${name}! It's been ${days * 24} hours`);
}
greet('jack',3);
// 也可以加入判斷表達式
console.log(`Hello , ${name}! ${ (days < 7) ? '' : 'long time no see'}`);
greet('jack' , 14)
// Hello , Jack! long time no see

// 多行字串
// 原始寫法
const words = 'dddddddd\n' + 'dddddddddddddddddd\n' + 'ddddddddddd\n';
// ES6 多行字串寫法
const words = `
ddddddddddd
ddddddddd
ddddd
ddddddddddddd
ddddddd
`;