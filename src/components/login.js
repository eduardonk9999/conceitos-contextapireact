import React, { useState } from "react";
import { useAuth } from "../providers/auth";

const Login = () => {
  const [input, setInpunt] = useState({
    name: ''
  })
  const { setUser } = useAuth()

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify(input))
    setUser(input)
  }

  return (
    <>
      <input type="text"  onChange={(e) => setInpunt({ name: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </>
  )
}
export default Login;