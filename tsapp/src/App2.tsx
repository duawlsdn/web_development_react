import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    alert(`안녕, ${name}!`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={name} />
      <input type='submit' value="출력" />
    </form>
  )
}

export default App
