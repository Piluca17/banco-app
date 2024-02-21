import "./Login.css";
import {useRef} from 'react';


function Login({onLogin}) {
  const userRef = useRef(null)
  const pinRef = useRef(null)

  const handleLogin = (e) =>{
    e.preventDefault()
    const user = userRef.current.value
    const pin = Number(pinRef.current.value)
    onLogin(user, pin)
    
    // Dos pegas: 
    // 1. accounts no está definido
    // 2. no puedo seleccionar el account actual logueado mediante setAccount (currentAccount)
    // const currentAccount = accounts.find (
    //   (account)=> account.username === user && account.pin === pin)
    // )
  }
  return (
    <form className="login">
      <input
        type="text"
        placeholder="user"
        className="login__input login__input--user"
        ref={userRef}
      />
      <input
        type="text"
        placeholder="PIN"
        maxlength="4"
        className="login__input login__input--pin"
        ref={pinRef}
      />
      <button className="login__btn" onClick={handleLogin}>&rarr;</button>
    </form>
  );
}

export default Login;
