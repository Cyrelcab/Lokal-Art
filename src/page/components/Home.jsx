import Navbar from "./Nav-bar"
import Profile from "./Profile"

export default function Home(){
    return (
        <div>
            <Navbar />
            <div className="mt-[64px]">
            <Profile />
            </div>
        </div>
    )
}