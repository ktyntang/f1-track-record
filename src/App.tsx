import "src/App.css";

import Background from "src/components/Background";
import Header from "src/components/Header";
import RaceDetailsCard from "src/components/RaceDetailsCard";
import Races from "src/models/exampleRaceDetails";

function App() {
	return (
		<>
			<Background />
			<div className='relative z-1'>
				<Header />
				<div className='z-30 mx-auto w-full px-6'>
					{Races ? Races.map((race) => <RaceDetailsCard key={race.startDate} race={race} />) : null}
				</div>
			</div>
		</>
	);
}

export default App;
