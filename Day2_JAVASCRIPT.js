// 3. 형변환
// 자바스크립트는 동적언어이기 때문에 자료형을 정의할 필요가 없이 알아서 정의됩니다. 이런 편리함은 복잡한 프로젝트에서는 독이 됩니다. 그러므로 입력받은 자료형을 변환해서 사용할 때가 있습니다.
// 자료형을 변환하는 것은 강제변환(forced conversion)이라고 합니다.
Boolean(5); // true
Boolean(0); // false
String(5); // "5"
Number(5); // 5

/* 실습을 위해 데이터 입력받기
alert
prompt
comfirm
*/

// 사용자에게 수학점수를 입력받고, 영어점수를 입력받은 후 콘솔창에 평균점수를 출력해주세요. 

var math = Number(prompt('수학점수'));
var eng = Number(prompt('영어점수'));
var avg = (math + eng) / 2;
console.log(avg)

// 자료형 차이를 극복하기 위해 형변환을 했습니다. 
// 이외에도 자바스크립트에는 자료형 차이를 극복하기위한 몇가지 방법이 있습니다

// isNaN() - is not a number : number 혹은 string에 숫자가 아닌 경우가 들어있으면 true가 나옵니다. 
isNaN(0) // false
isNaN('사과') // true

// eval() - 따옴표 안에 있는 문자 혹은 숫자를 따옴표가 없는 것처럼 인식하게 만드는 함수입니다. 권장하지 않습니다. 
// 보안 문제가 있고, 검색엔진은 eval()함수 자체가 나쁜일에 워낙 많이 쓰이기 때문에(hijacking) 검색품질 저하, 개발자가 디버깅할 때도 어렵습니다  
eval('5+5')  // 10
eval('alert("hello world")')  // hello world라는 알림창이 뜸

/* 4. 연산자

- 연산자 우선순위는 다음과 같습니다.
1) () 
2)  ** 
3) -(negative)  
4)  *, /, %(나머지)  
5) +, -

우선순위를 외워두고 사용하기 보다는 ()를 통해서 - 나는 외우고 있을 수 있다 하지만 동료가 보기에 복잡한 코드는 좋지 않습니다. ()로 우선순위를 감싸주는 것, 
우선순위를 명확하게 명시하도록 코드를 작성 하시는게 훨씬 쉬운 방법 입니다.
*/ 

// 증감연산자  ++ -- 라는 증감연산자를 사용합니다. 
a += 1 // a = a + 1  
a = 1; 
a++; // 후위연산자 -> 지금 연산에는 있는 값을 쓰고 메모리에는 하나 더한 값으로 바꿔 놓는다  
++a; // 전위연산자 -> 메모리에 있는 값에 하나를 더해서 지금 연산에도 쓰고 메모리 값도 바꿔놓는다. 

// = : 대입연산자
// ==: 값만 비교 - 비교연산자
// ===: 값과 자료형을 모두 일치하는지 비교 - 완전일치연산자, 항등연산자 
var a = null;
a === null;
// null은 자바스크립트의 잡지 않은 버그(object로 인식) 때문에 꼭 항등연산자로 값을 비교하셔야 합니다

// 논리연산자 - &&(and) ||(or) !(not) 
// falsy가 되는 경우: NaN, 0, -0, null, undefined, '', "", `` (빈 문자열), false
console.log( true && false );
console.log( true || false ); // shift + 역슬래시(파이프 라인)
console.log( !true );

// 실습  var a = 3;를 사용하여 다음의 내용을 표현 혹은 확인해보세요.
// 1) a는 5보다 크고 1보다 작다
    // a는 5보다 작고 1보다 크다
    1 < a && a < 5
// 2) '5'는 2+a와 자료형이 같지 않다
  '5' !== 2+a
// 3) 논리연산자만으로 a를 true로 형변환
   !!a
// 4) y의 값은 얼마인지 생각해보고 실제로 결과를 출력해보세요 -> python tutor에서 확인해보세요
  // var y = a-- + 5 + --a;
  // var a = 3;


/* 5. 객체(Object, Reeference Type, 참조자료형 ) 
 - 앞의 자료형은 변수명 하나에 하나의 값만 넣었다. (원시자료형, 기본자료형 - primitive data type)
 - 근데 객체는 여러개의 변수, 함수를 한번에 담을 수 있는 상자
 - 키:값 쌍으로 데이터를 저장합니다. 키를 통해 값을 꺼내올 수 있습니다.
     Primitive Type : 데이터의 실제 값 할당
     Reference Type : 데이터의 위치 값만 할당
 */
var car = {
  color : ['blue', 'red', 'yellow'],
  name : 'Morning',
  company : {0:'Kia', 1:'Hyundai'}, 
  0: 'speed',
  true: '트루임',
  'index col': 11
}
// 객체의 속성에 접근하는 방법: 점표기법 or 대괄호 표기법
car.name
car['name']
car['index col'] // 얘는 점표기법으로는 접근 못함

// 객체를 만드는 두가지 방법 
// 1)  처음부터 값까지 다 집어넣는다
var car = {
  color : ['blue', 'red', 'yellow'],
  name : 'Morning',
  company : {0:'Kia', 1:'Hyundai'}, 
  0: 'speed',
  true: '트루임',
  'index col': 11
}
//2) 빈 객체를 만들고 그 안에 변수를 담아서 사용한다
var car1 = new Object();
car1.color = 'red';

// car라는 객체를 만들고 여러분의 드림타에 대해 소개해주세요. 차이름(name), 희망색깔(color) - 3개 넣습니다, 회사(company), 달리고 싶은 속도(speed), 국산여부(true/false)

var car = {
    name : 'SAAB 37 Viggen',
    color : ['dark','blue','green'],
    company : 'SAAB',
    speed : '마하 2.1',
    국산여부 : false}

// car라는 변수를 car1 이라는 변수에 복사를 해볼게요 
// 자바스크립트는 얕은 복사를 기본 복사 방법으로 차용하고 있습니다. 
var car1 = car; // 얕은복사
car1.color = 'yellow'
car.color

var car1 = JSON.parse(JSON.stringify(car)) // 깊은 복사 -> 복사할 때의 car의 값을 모두 string으로 떠온 다음에, 그 string을 재파싱(분해)해서 새 객체 메모리에 집어넣는 방식
car1.color = 'yellow'
car.color

var car1 = Object.assign({}, car); // 첫번째 뎁스까지만 별도 메모리장소에 저장하는 (결국) 얕은 복사
car1.color[0] = 'yellow'
car.color

/* 5_1. 배열(Array) 
- 순서대로 값을 저장하는 객체
- 순서(index)는 0부터 시작하여 자동 정의됩니다. 
- 각 index에는 서로 다른 자료형이 올 수 있습니다. 
*/

var array = []; 
var array = Array(); // Array 클래스의 생성자를 사용해서 객체 생성
var array = new Array(); // new 연산자를 이용한 Array 객체 생성 

var array = ['banana', 'carrot', 'egg']


var array = ['banana', 'carrot', 'egg']

// array.length // 전체 길이를 확인하는 함수

array.push('egg')  // 해당 배열의 맨 마지막에 값 추가하는 메소드
// 배열을 호출하는 메소드들
console.log(array["length"]);
array.push('fig'); // 배열의 마지막에 요소를 추가합니다.
array

array.unshift('apple')  // 배열의 시작에 새 값을 추가합니다.
array

array.pop(); // 배열의 마지막 요소를 제거합니다.
array

array.shift(); // 배열의 시작에 있는 요소를 제거합니다.
array;

// 공식문서에서 가져온 사용예제
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
/* splice - 배열의 요소를 삭제하거나 추가하는 메소드, 
            중간 요소에 많이 활용
array.splice(start, deleteCount [, item1 [, item2 [, ...] ] ])
start: 기준이 되는 배열의 index를 지정합니다.
deleteCount: start index부터 몇 개의 요소를 제거할지 지정합니다.
item.. : 삽입할 요소를 지정합니다.
*/

var array = ['banana', 'carrot', 'egg', 'durian']
array.splice(1, 1, ['cake', 'coke'])
array.splice(1, 1, 'cake', 'coke')

// 중복을 피하고 싶을 때는 Set(집합)을 사용하는게 좋습니다. Set은 Array와 달리 중복을 허용하지 않습니다.
let array = [1, 2, 3, 4, 1, 2, 3, 3, 6];
let set = new Set(array);
console.log( set );
var array1 = [...set] // ... : 스프레드 연산자 -> 반복가능한 객체를 분리할 때 사용
var array1 = Array.from(set) // 위와 같은 방법
console.log(array1)

// unpacking
var a, b, c;
[a, b, ...c] = [1, 2, 3, 4, 5]
// Uncaught SyntaxError: Unexpected token '...' : 스프레드연산자 오른쪽 뒤에 쉼표가 있으면 신택스 에러가 발생합니다. 
// [a, ...c, b] = [1, 2, 3, 4, 5]

// 실습. aa라는 key에는 10, bb라는 key에는 20이 할당되어있는 num이라는 Object를 만들어보세요. 
// 구조 분해 할당 (Destructing Assignment)
var num = {
  aa: 10,
  bb: 20
}

// unpacking 구조분해할당(Destructuring assignment)과 ...(스프레드 연산자)
var aa, bb; 
[aa, bb] = [1, 2, 3, 4, 5] // aa=1, bb=2, 나머지는 버려짐
[aa, ...bb] = [1, 2, 3, 4, 5] // aa=1, bb=[2,3,4,5]
// ({ aa, bb } = { aa: 10, bb: 20 }); // key와 같은 변수명에 할당하셔야 제대로 값이 unpacking됩니다.
console.log(aa); // 10
console.log(bb); // 20

({a, b, ...rest} = {aa: 10, bb: 20, cc: 30, dd: 40}); // 꼭 ( ) 호출연산자로 감싸주어야 합니다.
console.log(a); // undefined
console.log(b); // undefined
console.log(rest); // {aa: 10, bb: 20, cc: 30, dd: 40})

var a = 1;
var b = 3;
// 실습. a = 3, b = 1 의 값을 가지도록 바꿔주세요. swap/swapping
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

var array = ['banana', 'carrot', 'egg', 'durian']
array = [array[0], array[1], array[3], array[2]]
// durian과 egg의 순서를 바꿔보세요
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
let user = {};
[user.name, user.surname] = "연지 김".split(' ');

alert(user.name); // 연지

//6. 조건문
// 파이썬에서는
  // if 명제 () else ()
  // if 명제 () elif 명제 () else ()

// 자바스크립트에서는
// if (명제) { 명제가 참일 때 실행문 };
 
// if (명제) { 
//   명제가 참이 때 실행문 
// } else {
//   명제가 거짓일 때 실행문 
// };

// if (명제1) {
//  명제 1이 참일 때 실행문 
// } else if (명제2) {
// 명제2가 참일 때 실행문
// } else { 
//  명제 1과 명제2 모두 거짓일 때 실행문
// };


var a = '3'; 
// 1. if~else 기본형
//    a 가 3보다 크거나 같으면 콘솔에 3인 경우에는 3임 이라고 콘솔에 출력되도록 조건문을 변경해주세요

if (a >= 3) {
  console.log('3과 같거나 3보다 큼')
} else {
  console.log('3보다 작음')
};

// 2. if ~ else if ~ else 기본형
// a 가 3보다 크면 콘솔에 3, 3이면 3임, 3보다 작으면 3보다 작음이라고 콘솔에 출력되도록 조건문을 변경해주세요
if (a > 3) {
  console.log('3보다 큼')
} else if ( a === 3) {
  console.log('3임')
} else {
  console.log('3보다 작음')
};

// 3. 활용 - 다중조건 (a && b), 중첩조건(if 안에 if)
// 문자로 들어온 경우에는 '숫자 자료형이 아니라 값을 비교할 수 없습니다'까지 출력되도록 조건문을 변경해주세요
// typeof a == 'number'

// 1) 중첩 조건문으로 구현(조건문 안에 조건문)
// if (자료형 확인) {
//   if ~ else if ~ else }
if (typeof a == 'number') {
  if (a > 3) {
    console.log('3보다 큼')
  } else if (a == 3) {
    console.log('3임')
  } else if (a < 3) {
    console.log('3보다 작음')
  };
} else {
  console.log('숫자 자료형이 아니라서 값을 비교할 수 없습니다.')
};

// 2) 다중 조건문으로 구현 (여러개의 조건을 하나의 명제에서 판별)
// if (자료형 확인 && 값 확인) {
// } else if (자료형 확인 && 값 확인) {
// } else {
// }
var a = 5; 

if (typeof a == 'number' && a > 3) {
  console.log('3보다 큼')
} else if (a === 3) {
  console.log('3임')
} else if ( typeof a == 'number' && a < 3) {
  console.log('3보다 작음')
} else {
  console.log('숫자 자료형이 아니라서 값을 비교할 수 없습니다.')
};

// 실습. prompt 창을 활용하여 숫자로 값을 입력받고 양수, 0, 음수를 판별하는 조건문을 만들어보세요. 