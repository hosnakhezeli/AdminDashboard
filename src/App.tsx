
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import LayoutContainer from "./components/container/LayoutContainer";
import Item from "./pages/item/Item"
function App() {

  return (
    <LayoutContainer>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="/item" element={<Item />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </LayoutContainer>
    
  )
}

export default App
