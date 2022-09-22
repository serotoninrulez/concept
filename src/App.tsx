//Components
import About from './Components/About/About'
import Aufbau from './Components/Aufbau/Aufbau'
import Footer from './Components/Footer/Foter'
import Header from './Components/Header/Header'
import Traineeship from './Components/Traineeship/Traineeship'
//Style
import './styles.css'

const App: React.FC = () => {


	return (
		<>
			
			< Header /> 
			< About />
			< Aufbau />
			< Traineeship />
			< Footer />
		</>
	)
}


export default App