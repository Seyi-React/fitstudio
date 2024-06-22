import { useEffect, useState } from "react";
import { Routes,Route,useLocation,useNavigate} from "react-router-dom"
import Login from "./components/onboard/Login/Login"


import "./App.css";
import CreateAcoount from "./components/onboard/CreateAcoount";
import Loading from "./components/LoadingSpin/Loading";
import ForgetPassword from "./components/onboard/ForgetPassword/ForgetPassword";
import PersonalDetails from "./components/onboard/PersonalDetails/PersonalDetails";
import Role from "./components/onboard/Role/Role";

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
      {loading && <Loading />}
        <Routes>
          <Route path="/" Component={CreateAcoount} />
          <Route path="/login" Component={Login} />
          <Route path="/forget" Component={ForgetPassword} />
          <Route path="/details" Component={PersonalDetails} />
          <Route path="/role" Component={Role} />
        </Routes>
    </>
  );
}

export default App;
