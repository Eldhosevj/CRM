import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import NewQuationForm from "./modules/NewQuatation/NewQuationForm"
import Login from './modules/Login/Component/Login';
import NavBar from './sharedModules/NavigationBar/Navigation';
import FileUpload from "./modules/fileUpload/fileUpload"
import FullProjectRecordTable from "./modules/FullProjectRecordTable/component/FullProjectRecordTable"
function App(){




return (<div>

<BrowserRouter>

<Routes>

        <Route path="/NewQuation" element={
<NewQuationForm />

        } />
        <Route path="/" element={<Login/>} />
        <Route path="/FileUpload" element={<FileUpload/>} />
        <Route path="/DashBord" element={<FullProjectRecordTable/>} />

        </Routes>
</BrowserRouter>
 

  

</div>)

}

export default App

