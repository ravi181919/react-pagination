import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/pages/Homepage"

const App = () => {
  return (
    <div className="dark:bg-black/85 bg-white/85 dark:text-white/85 text-black/85 w-full lg:w-full">
      <Navbar />
      <Homepage />
    </div>
  )
}
export default App