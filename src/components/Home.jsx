import Navbar from "./Nav-bar"
import Profile from "./Profile"

export default function Home(){
    return (
        <div className="flex flex-col justify-center">
            <Navbar />
            <Profile />
                {/* <h1 className="text-3xl font-bold">
                    Homepage
                </h1> */}
            
        </div>

    )
}