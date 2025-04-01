import './index.css'
import {Suspense} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router";
import Login from "./pages/domain/login/Login";
import Setting from "/src/pages/domain/setting/Setting";
import Main from "/src/pages/domain/main/Main";

const loading = (
    <div className={"pt-3 text-center"}>
        <div className={"sk-spinner sk-spinner-pulse"}/>
    </div>
);

function App() {

  return (
    <>
      <Router>
          <Suspense fallback={loading}>
              <Routes>
                  <Route path={"/"} element={<Login />}/>
                  <Route path={"/setting"} element={<Setting />}/>
                  <Route path={"/main"} element={<Main />}/>
              </Routes>
          </Suspense>
      </Router>
    </>
  )
}

export default App
