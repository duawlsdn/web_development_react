import './App.css'
import { useReducer } from 'react'
import LoginForm from './components/LoginForm';
import Reducer from './reducer/Reducer';

export default function App() {
  const [ state, dispatch ] = useReducer(Reducer, { isLogin: false, message: ''});

  return (
    <div>
      {state.isLogin ? (
        <>
          <strong>welcome 😁</strong>
          <button onClick={() => dispatch({type: "LOGOUT"})}>로그아웃</button>
        </>
      ) : (
        <LoginForm state={state} dispatch={dispatch}/>
      )}
    </div>
  )
}
