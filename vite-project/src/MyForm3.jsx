import { useState } from "react";

export default function MyForm3() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // 입력 상자의 내용이 변경되면 값을 상태에 저장
  const handleChange = (event) => {
    setUser({...user, [event.target.name]:
      event.target.value});
  }

  // handleSubmit을 리액트 형식으로 정의
  // 제출 버튼을 클릭하면 welcome {user.firstName}  {user.lastName}이 알람으로 나오게끔 작성할 예정
  const handleSubmit = (event) => {
    alert(`welcome ${user.firstName} ${user.lastName}`);
    event.preventDefault();
  }

  // return 파트에 firstName 작성란, lastName 작성란, email 작성란을 만들고 제출 버튼까지 생성
  return (
    <form onSubmit={handleSubmit}>

      <label>Frist Name </label>
      <input type="text" name="firstName" onChange={handleChange} value={user.firstName} />

      {/* 이상을 기준으로 LastName 과 email 부분을 정의 */}
      <label>Last Name </label>
      <input type="text" name="lastName" onChange={handleChange} value={user.lastName} />

      <label>Email </label>
      <input type="email" name="email" onChange={handleChange} value={user.email} />

      <input type="submit" value="제출"></input>
    </form>
  );
}