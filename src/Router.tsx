import { Route, Routes } from "react-router-dom"
import { SignUp } from "./pages/SignUp"
import { MainScreen } from "./pages/MainScreen"
import { LoadingScreen } from "./pages/LoadingScreen"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoadingScreen />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/mainscreen" element={<MainScreen />}/>
    </Routes>
  )  
}