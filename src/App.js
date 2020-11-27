import React,{ useContext, createContext, useState, useEffect } from 'react'
import Global from './global'
import Routes from './Routes'

<<<<<<< HEAD
const AuthContext = createContext();



export function useAuth(){
  const context = useContext(AuthContext);
  if (!context) throw new Error('o utilizador deve ser utilizado num AuthProvider.');
  return context;
}

function App() {
const [authUser, setAuthUser] = useState ({ authenticated: false });

useEffect(() => {
  
  const userId = localStorage.getItem('userId')

  if(userId){
    setAuthUser({authenticated: true, userId})
  }


}, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
    <div className="App">
      <Global/>
      <Routes />
      {/* <Profile/> */}
=======
function App() {
  return (
    <div className="App">
      <Routes />
      <Global />
>>>>>>> e5b260e311491ff955c428d0ce4a7d5e6e52cc9b
    </div>
    </AuthContext.Provider>

  );
}

export default App;
