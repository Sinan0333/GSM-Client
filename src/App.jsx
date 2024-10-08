import {Routes,Route} from "react-router-dom"
import UserRoutes from "./routes/UserRoutes"
import AdminRoutes from "./routes/AdminRoutes"
import ComingSoonPage from "./pages/Common/ComingSoonPage"
import AuthRoute from "./routes/AuthRoute"



function App() {

  return (
    <Routes>
      <Route path="/*" element={<UserRoutes/>}/>
      <Route path="/admin/*" element={<AdminRoutes/>}/>
      <Route path="/auth/*" element={<AuthRoute/>}/>
      <Route path="/coming-soon" element={<ComingSoonPage/>}/>
    </Routes>
  )
}

export default App
