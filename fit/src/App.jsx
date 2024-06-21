import { useEffect, useState } from "react";
import { Routes,Route,useLocation,useNavigate} from "react-router-dom"
import Login from "./components/onboard/Login/Login"


import "./App.css";
import CreateAcoount from "./components/onboard/CreateAcoount";
import Loading from "./components/LoadingSpin/Loading";

function App() {

  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds

    return () => clearTimeout(timer);
  }, [location]);
 

  return (
    <>
      {/* <BrowserRouter> */}
      {loading && <Loading />}
        <Routes>
        
          <Route path="/" Component={CreateAcoount} />
          <Route path="/login" Component={Login} />
        </Routes>
      
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
