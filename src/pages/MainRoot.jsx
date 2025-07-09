import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from 'react-router-dom'

const MainRoot = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default MainRoot
