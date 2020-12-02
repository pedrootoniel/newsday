import React, { useContext, createContext, useState, useEffect } from 'react'
import Global from './global'
import Routes from './Routes'

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider.');
  return context;
}

function App() {
  const [authUser, setAuthUser] = useState({ authenticated: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user_id = localStorage.getItem('user_id_newspaper');
    if (user_id) setAuthUser({ authenticated: true, userId: user_id });
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      <div className="App">
        <Global />
        {
          loading && <h1>Carregando...</h1>
        }
        {
          !loading && <Routes authUser={authUser}/>
        }
      </div>
    </AuthContext.Provider>
  );
}

export default App;
