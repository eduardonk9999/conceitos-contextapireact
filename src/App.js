import React from 'react';
import Login from './components/login';
import Profile from './components/profile';
import { useAuth } from './providers/auth';

function App() {
  const {user, setUser} = useAuth()
  console.log(user)

  return (
   <>
    <h1>Olá Mundo!!!</h1>
    <Profile />
    <Login />
   </>
  );
}

export default App;
