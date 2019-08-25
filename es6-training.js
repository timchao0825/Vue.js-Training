//Javascript es6 training
// -------------------------------------
// 屬性縮寫
// -------------------------------------
// es5
// function makePoint(x,y){
//   return{
//     x: x,
//     y: y,
//   }
// }
// es6
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
  // es5
  // const obj = {};
  // obj[key] = value;
  // es6
  const obj = {
    [key]:value,
  }
  return obj;
}
const person = createObj('nmae','john');
// output
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
// #預設值
// #忽略元素
// #變數交換
// #剩餘部分
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
// # `` backtick
// #插入表達式 expression
// #多行字串
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

// -------------------------------------
// 箭頭函式
// #語法簡短
// #自動綁定
// #箭頭函式內部的this 與外部相同
// #this 解說
// -------------------------------------
// ES5 原始寫法
var double = function(x){
  return x * 2;
}
// ES6 箭頭函式寫法
const double = () => {
  return x * 2;
}
// 如果單值的話
const double = x => x * 2;

// 範例
// es5
arr.map(function(elm , idx){
  return elm + idx;
})
// es6
arr.map((ele,idx) => elm + idx);
document.addEventListener('click' , () => console.log(10));

// #this
const a = () => {
  console.log(this);
}
console.log(this);

var b = function(){
  console.log(this);
}
console.log(this);

// this 其實就是function 中的 context
// this 是什麼東西取決於這個函式執行的情境
// 直接執行：window(global)
// 作為物件的成員函式執行：該物件
// 作為dom 的偵聽函式執行：該dom

var name = "tim";
var sayMyName = function(){
  console.log(this.name);
}
var teacher = {
  name: "white",
}
teacher.sayMyName = sanMyName;
sayMyName(); // tim
teacher.sayMyName(); // white

//如果使用箭頭韓式宣告sayMyName 將會已全域執行的name = "tim" 輸出

