// import { useState, useEffect } from 'react';
import { useState } from 'react';
import './App.css'

// function App() {
//   // let drink = 0;

//   // const drinkWater = () => {
//   //   drink += 1;
//   //   console.log(`버튼 클릭 횟수 : ${drink}번`);
//   // };

//   const [ drink , setDrink ] = useState(0);
//   useEffect(() => {
//     console.log('물을 마십니다.');
//     return() => {
//       console.log(`버튼 클릭 횟수 : ${drink + 1}번 `);
//     }
//   },[drink]);
//   // console.log(`버튼 클릭 횟수 : ${drink}번 `);

//   return (
//     <>
//       <p>
//         🥛오늘은 물을 <strong>{drink}</strong> 잔을 충전
//       </p>
//       <br />
//       <button onClick={drinkWater}>🥛</button>
//       <button onClick={() => setDrink(drink + 1)}>🥛</button>
//     </>
//   );
// }

// 1차 수정
function App() {

  const [drink, setDrink] = useState(0);

  const drinkWater = () => {
    setDrink(drink + 1);
  };

  return (
    <>
      <p>
        오늘은 물을 <strong>{drink}</strong> 잔을 충전
      </p>
      <br />
      <button onClick={drinkWater}>물</button>
      {console.log(`버튼 클릭 횟수 : ${drink} 번`)}
    </>
  );
}
export default App;