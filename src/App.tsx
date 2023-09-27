import { GeekPlus } from "./components/GeekPlus"
import { Hero } from "./components/Hero"
import { Regulation } from "./components/Regulation"
import { BrowseGamesSection } from "./components/browseGamesSection"
import { Cards } from "./components/cards"

function App() {
  return (
		<>
			<Hero />
			<Cards />
			<BrowseGamesSection />
			<GeekPlus />
			<Regulation />
		</>
  )
}

export default App
