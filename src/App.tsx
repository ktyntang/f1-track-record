import "src/App.css";

import Background from "src/components/Background";
import Header from "src/components/Header";
import RacesContainer from "src/components/RacesContainer";

function App() {
	return (
		<>
			<Background />
			<div className='relative z-1'>
				<Header />
				<RacesContainer />
			</div>
		</>
	);
}

export default App;
