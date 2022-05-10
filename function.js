
//고차함수 : 제작자가 만드는것 
//higher order function
//알고리즘 제작법

function typeA(){
  console.log('아이워즈카')

}


function typeB(){
  //typeB의함수알고리즘은
  //무슨문자열을 콘솔에찍은다음
  //typeA()함수를호출해준다
  
  
  console.log('나는 날개달린 호랑이')
  typeA();

}
//typeB();

function typeC(target){
  target.addEventListener("click",function(){});
  target.addEventListener("scroll",function(){});
  target.addEventListener("wheel",function(){});
}

function typeC(target){
  target.addEventListener("click",()=>{});
  target.addEventListener("scroll",()=>{});
  target.addEventListener("wheel",()=>{});
}

//typeC(root);
//typeC(items);
// 객체로 묶어서 관리한다
const typeP = {
  ObjectA:function(){
    console.log('string')
  },
  ObjectB:function(){

  }
}
//eA.ObjectA('hello');
console.log(console.table('hello',test))