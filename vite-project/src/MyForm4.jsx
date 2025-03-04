import { useState } from "react";
import './App.css';

export default function MyForm4() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // 나머지 부분을 전부 완성해서 MyForm3.jsx 와 동일하게 동작할 수 있도록 작성

  // 단, handleChange를 정의하지 말고 연습삼아서
  // 각 input의 onChange 부분에 화살표 함수를 통해 정의
  const handleSubmit = (event) => {
    alert(`welcome ${firstName} ${lastName}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      {/* event => e, (event) , (e) 사용 가능*/}
      <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)} value={firstName}></input>
      <label>Last Name</label>
      <input type="text" name="lastName" onChange={(event) => setLastName(event.target.value)} value={lastName}></input>
      <label>Email</label>
      <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
      <input type="submit" value="제출"></input>
    </form>
  );
}