import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Business from "./Components/Business";




export default function App() {
  return (
    <div className="main-container bg-black">
<Navbar />
<Hero />
<Business />
    </div>
  )
}