import { Route, BrowserRouter, Routes } from "react-router-dom"
import Medicines from "./pages/Medicines"
import Addmed from "./pages/Addmed"
import Sale from "./pages/Sale"
import Bill from "./pages/bill"
import Custid from "./pages/Custid"
import Custbill from "./pages/custbill"
import Final from "./pages/finalpage"
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {/* so we import function Books from books.jsx and likewise others*/}
        <Route path="/" element = {<Medicines/>}/>  
        <Route path="/addmed" element = {<Addmed/>}/>  
        <Route path="/sale" element = {<Sale/>}/> 
        <Route path="/bill" element = {<Bill/>}/> 
        <Route path="/genbill" element = {<Custid/>}/>
        <Route path="/custbill/:cid" element = {<Custbill/>}/>
        <Route path="/total/:cid" element = {<Final/>}/>
        <Route path="/final/:cid" element={<Final/>}/>
        {/* <Route path="/book" element = {<Books/>}/> */}
        {/* <Route path="/add_m" element = {<Add_med/>}/> */}
        {/* <Route path="/update/:id" element = {<Update/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
