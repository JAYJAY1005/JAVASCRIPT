// 백엔드 - 프론트엔드 사이에 서로 다른 언어로 만들어져 있다면 데이터를 주고 받을 때 
// 형변환, 유니코드 변환 문제라든지 데이터 오염 / 손실이 굉장히 많습니다
// 근데 백엔드 - 프론트엔드를 같은 언어로 만들면 데이터 손실 문제가 덜 하겠죠 
// 그리고 요즘은 인터넷이 빨라서 웬만한 서비스는 웹에서 다 동작합니다. 
// 그래서 자바스크립트로 엔진까지 만들고 싶어하는 움직임이 2000년대 후반부터 많아지고 있습니다. 

// 0. 기본 문법
console.log('hello javascript')
// 프로그래밍 언어를 인식하려면 컴파일러가 있어야 합니다 
// 백엔드를 자바스크립트로 구현할 수 있는 
// node.js는 구글(요즘 총대메고 자바스크립트를 개발 중인)이 
// 개발한 V8 엔진을 자체적으로 내장하고 있다. 

// 자바스크립트 1일차_0130

// 주석은 css와 같습니다. 
/* 여러줄 주석을
해야 하는 경우는
파이썬에서는 ''' ''' */

/* 자바스크립트는 들여쓰기나 줄바꿈을 하지 않아도 코드를 이해하는데는 문제가 없습니다. */
console.log('hello');console.log('javascript');

// 명령어 뒤에 세미콜론을 붙여주는게 원칙입니다. 근데 한줄에 하나 쓰시면 인터프리터가 알아서 세미콜론을 붙인 것처럼 인식합니다.
// console.log('hello')console.log('javascript'); // Uncaught SyntaxError: Unexpected identifier 'console' 
// 들여쓰기는 2칸 혹은 4칸 혹은 탭키 사용하는 걸 권장합니다. 근데 안써도 동작해요. 
 // alert('javascript')
 //   alert('ja')
 var a = 1; 

 /* 
 변수를 만드는 이유는 무엇인가요?? 나중에 다시 갖다쓰려고 
 - 값(value)은 식(표현식, expression)이 평가(evaluate)되어 생성된 결과를 말합니다.
 - 표현식 : '식'이란 값을 얻기 위한 모든 연산을 말합니다. (선언문은 표현식이 아닙니다)
     - 리터럴: 소스 코드의 고정된 값을 나타내는 표기법
     - 리터럴 표현식 : 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 '생성'하는 표기
         a = 1;
     - 식별자 표현식 :  선언이 이미 존재할 경우 변수, 함수 등의 식별자로 사용하는 표기
         a
         a.name
         a[1]
     - 연산자 표현식 : 연산자를 사용해 값을 생성하는 표기 
         a = 1 + 2; // 대입연산자
         a == 1; // 비교 연산자 - 값 자체가 같은지만 비교 
         a === 1; // 완전 항등 비교 연산자, 일치 연산자라고도 부릅니다
     - 함수/메서드 표현식 : 선언이 이미 존재할 경우 이를 호출하는 표기
         a()
         a.getName()    
 
 - 문 : 프로그램을 구성하는 기본 단위이자 최소 실행단위. 
        문을 순서에 맞게 나열하는 것이 프로그래밍.
 - 토큰 : 문법적으로 더이상 나눌 수 없는 코드의 기본 요소. 
        세미콜론으로 종료 표시.(자동 삽입기능으로 생략 가능) 
 var sum = 1; -> 전체가 '문' 1개, 
 토큰은 5개 -> var, sum, =, 1, ;
 */ 
 
 // 우리가 변수를 만들어 값을 넣는 이유.
 1;  // 이 경우 다시 값을 호출할 수 없습니다. 그래서 변수라는 공간을 만들어서 거기에 저장을 합니다. 
 apple = 1; // 우리가 지금까지 사용했던 파이썬에서는 이렇게 선언하고 나면 언제든 값을 꺼내 쓸 수 있었습니다. 
 
 // 1. var, let, const
 //  자바스크립트에는 어떻게 이 변수(메모리의 공간을 사용할 것인지를 약속하는 방법)이 있습니다.
 /*  변수의 생성 과정
   1. 선언: 변수명을 등록해서 자바스크립트 엔진에 변수의 존재를 알려줍니다. var apple;
   2. 초기화(Initializaion): 값을 저장하기 위해 메모리 공간을 암묵적으로 확보합니다. undefined
   3. 할당: 변수에 값을 넣는다  apple = 1
 */
 var apple = 1; // 자바스크립트에서는 이렇게 var, let, const라는 명령어를 붙여서 처음 선언을 합니다. 
 
 // 1_1. Hoisting(호이스팅)
 // 선언되기 전에 쓰이는 변수가 만드는 에러를 막기 위해서 선언 혹은 함수들은 인터프리터가 다 읽어서 가장 윗단에 코드가 있었던 것처럼 다시 배열을 하는 방법
 
 // 1) var - 선언, 초기화가 동시에 됩니다. 이미 있어도 다시 메모리의 공간을 지우고 똑같은 이름으로 생성할 수 있습니다
 
 // console.log(var1)
 
 // var var1 = 'var'
 

 // 2) let - 선언은 되지만 초기화가 되지 않습니다
 // 변수가 선언되기 전에 쓰이면 에러가 납니다 
 // console.log(let2)
 
 // let let2 = 'let'
 // // ReferenceError: Cannot access 'let2' before initialization
 
 // 3) const 
 /* - 선언, 초기화, 할당이 동시에 되지 않으면 변수가 안 만들어집니다.
    - 그러므로 한번 만들어진 변수의 내용을 바꿀 수 없습니다 
 */
 // const const1;  // Uncaught SyntaxError: Missing initializer in const declaration
 // const const1 = 1; // 정상 동작
 // const1 = 2; // Uncaught TypeError: Assignment to constant variable.  - const는 한 번 넣은 값은 못 바꾸는 거야!!! 
 
 // var는 좀더 자유롭게 공간을 만듦
 //       -> 여러 개발자가 혹은 코드줄이 길어질 때 에러, 혹은 변수의 덮어써짐을 캐치하기 어려움
 // 그래서 ES6 문법에서는 
 // 선언과 초기화, 할당을 다른 방식으로 하게 하는 let, const 라는 예약어가 등장함
 
 /* 2. 자바스크립트의 기본 자료형 
 - number (정수건 실수건 음수건 양수건 모두 number 자료형)
 - string (문자열)
 - boolean (true, false)
 - null (값이 없음) - 방에 null 값이 들어있음
 - undefined (정의가 되지 않음) - 문(변수명)은 만들었으나 방은 안 파놓은 상태
 - symbol (ES6에서 추가된 자료형. 바깥에서 검색하기 어려운, 고유하고 변경할 수 없는 값 - 은닉성)
 - object (객체) - dict, list 요런 종류의 자료형들 모두 다 object의 하위 자료형이라고 생각하시면 됩니다. 
 */
 /* 1. number
   - 정수, 실수 가리지 않고 모두 number 자료형입니다
   - 그외 
   - 0b11 (2진법) 3
   - 0o11 (8진법) 9
   - 0x11 (16진법) 17
   지수표기법 : e 뒤에 나오는 숫자만큼 10의 거듭제곱
   - 3e3 == 3e+3  3000
   - 3e-3 0.003
   
   
   2. string
   - '', "". ``(백틱문자)
   typeof `김연지`
   - 시작할 때 감싸준 따옴표로 끝따옴표도 맞춰주어야 합니다 
   - 따옴표 안에 따옴표를 사용하고 싶을 때는 외부 따옴표와 내부 따옴표를 다른 따옴표로 표기하여야 합니다.
 */ 
 let hello = 'hello';
 hello.length
 hello[2] // 0부터 시작하는 인덱스로 해당 위치의 문자열을 확인
 hello.charAt(2) // 위와 같음 
 hello.charCodeAt(2) // 아스키코드 번호
 hello.toUpperCase() // 전체 문자열을 대문자로 출력
 hello.toLowerCase() // 전체 문자열을 소문자로 출력 
 console.log(str) //Uncaught ReferenceError: str is not defined 
 const str = 'str 이라는 변수명에\n여러 줄에\n걸쳐\n표시됩니다'// 선언 + 초기화 + 할당
  // Uncaught SyntaxError: Missing initializer in const declaration 
 
 str=`str 이라는 변수명에
 여러 줄에
 걸쳐
 표시됩니다2`//  Uncaught TypeError: Assignment to constant variable.   - const는 한 번 넣은 값은 못 바꾸는 거야!!! 
 