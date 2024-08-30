
import { BrowserRouter , Routes, Route } from "react-router-dom";
// import Layout from "./pages/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import LayoutContainer from "./components/container/LayoutContainer";
import Item from "./pages/item/Item"
// import Layout from "./pages/layout/Layout";
import ClippedDrawer from "./components/sidebar/ClippedDrawer"
import Userinfo from "./pages/item/Userinfo";



function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
          <Routes>
            <Route path="/" element={<ClippedDrawer />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="/Add" element={<Item />}></Route>
              <Route path="user/:userId" element={<Userinfo />} />
            </Route>
          </Routes>
        </LayoutContainer>
    </BrowserRouter>
  )
}

export default App
