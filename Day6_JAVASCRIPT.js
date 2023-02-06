var person1 = {
    name : '토니',
    age : '1039',
    introduce : function() {
        console.log('안녕하세요! 토니입니다!')
    } 
}


person1.name('Tony')
person1.age('900')

// 2 . 빈 객체를 만들고 거기에 하나씩 속성, 함수를 채워넣는 방법

var person2 = new Object();
