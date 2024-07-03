/*
* 변수와 자료형(data type)

[기본타입, primitive type]
- undefined
- number
- string
- boolean

[객체***]
- object
    1. new 생성자 함수 사용해서 생성 (이미 정의가 되어있는)
        Number()    => object 타입의 객체
        String()    => object 타입의 객체
        Boolean()   => object 타입의 객체
        Object()    => object 타입의 객체
        Array()     => object 타입의 객체
        RegExp()    => object 타입의 객체
        Function()  => function 타입의 객체
    2. {}
    3. []
    4. null
- function
 
*/
console.log("=== 기본타입(undefined, number, string, boolean) ===");
var u;  // var u = undefined; 과 동일, 자바스크립트는 선언과 정의가 구분없다.
var i=10;   
var s= 'hello world';
var b= true;

console.log("u:" + typeof(u));
console.log("i:" + typeof(i));
console.log("s:" + typeof(s));
console.log("b:" + typeof(b));

console.log("=== 객체타입(object) ===");
var i2= new Number(10);
var s2= new String("hello world");
var b2= new Boolean(false);
var o2= {};
var a2= [];
var n= null;

console.log("i2:"+ typeof(i2) + ":" + (i2 instanceof(Number)));
console.log("s2:"+ typeof(s2) + ":" + (i2 instanceof(String)));
console.log("b2:"+ typeof(b2)+ ":" + (i2 instanceof(Boolean)));
console.log("o2:"+ typeof(o2)+ ":" + (i2 instanceof(Object)));
console.log("a2:"+ typeof(a2)+ ":" + (i2 instanceof(Array)));
console.log("n:"+ typeof(n));

console.log("=== 객체타입(function) ===");
function f1(a,b) {
    return a+b;
}

var f2 = function(a,b) {
    return a+b;
}

var f3= new Function('a','b','return a+b;');

console.log(f1(10,20), f2(10,20), f3(10,20));
console.log("f1:" + typeof(f1));
console.log("f2:" + typeof(f2)); 
console.log("f3:" + typeof(f3));

console.log("=== Primitive Type도 메소드를 호출할 수 있다.(유사객체) ===");
console.log(b2.valueOf());
console.log(b.valueOf());