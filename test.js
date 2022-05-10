let dropdownButtons = function(){

}
//(function(){})? 함수를 감싸는 소괄호가 있다

let dropdownWrappers = document.getElementsByClassName();
//문서에서 클래스를 가지고왔구나
let activeDropdowns = [];
//?배열만선언했네
//*원소가 없는데 왜선언했지?
//왜 배열안에 아무것도 없이 선언만해놨지

for(let i = 0; i<dropdownWrappers.length;i++){
  //for문으로 해당하는 클래스를 무언가 제어하려고 하는가보다
  if(dropdownWrappers[i].classList.contains('active')){
    //?if문 조건식이 클래스를가지고있는지 여부를판단하고있구나  아는상태
  }

  for(c = 0; c < dropdownWrappers[i].getElementsByClassName('js-button-dropdown').length; c++){
    //문세이 있는 클래스를 가지고 for()loop 를 확인했다는것은 확실
  }
}

function hideDropdowns(activeDropdowns){
  //? 이기능은 무언가 숨기는가보다
  //매개변수가 배열이네 배열을 반복문돌려서 클래스를 지우는 작업을한다
  ('active');
}

function toggleDropdown(){
//무언가 토글을 하고 싶은가보다
//this 가 무얼 의미하지 parentnode 부모 뭐 인거같은데 써본적은없어 찾아보자
//toggle()이건뭐지
//for()
//loop 를 돌려서 무언가 하고있다
for (i = 0; i < activeDropdowns.length; i++){}}
//if()로 무언가 구별하기 시작했다
//!==조건식이 특이하구나


//{} 는 강사가 무조건 객체라고했는데 ?키와 값인 프로퍼티 두개가있네

//return 무언가 반환하는 것