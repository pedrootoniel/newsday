import React,{ useContext, createContext, useState, useEffect } from 'react'
import Global from './global'
import Routes from './Routes'

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
      <Routes authUser={authUser} />
      {/* <Profile/> */}
    </div>
    </AuthContext.Provider>

  );
}

export default App;
