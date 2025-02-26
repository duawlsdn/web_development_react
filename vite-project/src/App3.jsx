// firstName 과 lastName이라는 상태를 만들기 위해서 코드 작성 .md 파일 참조 작성 후 풀이
// firstName의 초기값 : Junho
// lastName의 초기값 : Bong

// import { useState } from "react";

// 상태를 업데이트

// import React, {useState} from "react";

// const [firstName, setFirstName] = useState('Junho');
// const [lastName, setLastName] = useState('Bong');

// setFirstName('Yeom');
// setLastName('Jin_Wo');

// 혹은 여러개의 const를 작성해서 속성마다 정의하는 것이 아니라 객체의 형태로 정의 가능
// const [name, setName] = useState({
//   firstName: 'Junho',
//   lastName: 'Bong',
// });

// setName을 사용하게 될 경우의 차이점
// setName({firstName: 'Yeom', lastName: 'Jin_Wo'});

// 즉 name 과 setName을 통해서 useState의 매개변수가 객체형태로 고정되어 있으므로
// setName의 argument 또한 객체가 들어가야 합니다.
// 이상을 이유로 lastName만 수정하고 싶어도 전부 다 바꾸거나
// 초기값을 동일하게 집어넣어줘야하는 귀찮은 일이 있음

// 객체의 부분 업데이트를 하기 위한 방법 :

// spread : ES2018 객체 스프레드 구문을 이용하여 name 상태 객체를 복제하고, firstName의 값을 '이등병'으로 업데이트 한다면 

// setName({...name, firstName: '이등병'});

// import {useState} from 'react';
// function App3 () {
//   const [name, setName] = useState({
//     firstName: '크리스',
//     lastName: '에반스',
//   });

//   return <div>안녕 {name.firstName} {name.lastName}</div>;
// }

// export default App3