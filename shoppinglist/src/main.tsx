import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import App from './App2.tsx'
// import './index.css' -> 사용 하지 않고,  vite에서 미리 정의된 스타일을 사용 하지 않음

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <App />
  </React.StrictMode>,
)
