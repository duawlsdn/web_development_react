// // JavaScript 복습 및 React 활용 문법 # 2

// import { lazy } from "react";

// // 템플릿 리터럴
// let person = {firstName:'John', lastName: 'Johnson'};
// let greeting = "Hello" + person.firstName + " " + person.lastName;
// console.log(greeting);

// // greeting2를 템플릿 리터럴 적용하여 작성하고 console창에 띄우시오.
// // 백틱 사용
// let greeting2 = `Hello ${person.firstName} ${person.lastName}`;
// console.log(greeting2);

// // 객체 구조 분해
// // 해당 기능을 사용하려면 객체에서 값을 추출하여 변수에 할당할 수 있음
// // 단일 구문을 이용하여 객체의 여러 속성을 개별 변수에 할당하는 것도 가능하기 때문에 학습

// const person2 = {
//   firstName: 'Jane',
//   lastName: 'Cooper',
//   email: 'j.cooper@mail.com',
// };

// const firstName1 = person2.firstName;
// cosnt lastName1 = person2.lastName;
// const email1 = person2.email;

// // 이상의 번거로운 코드를 구조 분해하는 방법은 다음과 같습니다.

// cosnt { firstName, lastName, email } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(email);