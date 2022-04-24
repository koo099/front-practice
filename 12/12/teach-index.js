// 定数
const test1=2;
// test1 = 2 // ✗

// 変数
let test2=1;
test2=2 // ○

// 数字・文字列の場合
const test3=2;
const test4='10';

// if 条件分岐
if(test3===1) {
  console.log('成功');
} else if(test3 === 2) {
  console.log('成功2');
} else {
  console.log('失敗');
}

// console.log(); 表示
// for ループ
let count = 0
let wariCount = 0
for(let i=0;i<20;i++){
  count+=i;
  if(count%2===0) {
    console.log('偶数:' + count);
  } else {
    console.log('奇数:' + count);
  }
}
console.log('総合計'+count);
console.log('2で割り切れた数'+wariCount);
