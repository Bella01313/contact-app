import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"

const MainPage = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
    </div>
  )
}

export default MainPage