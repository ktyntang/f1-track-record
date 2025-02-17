import { FC, useEffect, useState } from "react";
import RaceDetailsCard from "src/components/RaceDetailsCard";
import { httpGetAllRacesForYear } from "src/requests/api-requests";

const currentYear = new Date().getFullYear();

const RacesContainer: FC = () => {
	const [races, setRaces] = useState([]);
	const [selectedYear, setSelectedYear] = useState(currentYear);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const fetchRaces = async () => {
			setIsLoading(true);
			let mostRecentlyCompletedRaces = [];
			const scheduledRaces = await httpGetAllRacesForYear(selectedYear.toString());
			const completedRaces = scheduledRaces.filter((race: { completed: boolean }) => race.completed);
			if (!completedRaces.length) {
				// fetch previous year
				const previousYear = currentYear - 1;
				setSelectedYear(previousYear);
				return;
			} else {
				mostRecentlyCompletedRaces = completedRaces;
			}
			setIsLoading(false);
			if (scheduledRaces.error) {
				setHasError(true);
				return;
			}
			setRaces(mostRecentlyCompletedRaces);
			setIsLoaded(true);
		};
		fetchRaces();
	}, [selectedYear]);

	return (
		<div className='z-30 mx-auto w-full max-w-7xl px-4 md:px-6'>
			{/* TODO : Handle edge case of min and max f1 years */}
			{/* TODO : Error display if no races completed yet for current year */}
			<div className='m-2 flex w-fit flex-row gap-2 rounded-2xl bg-white p-2 shadow-md'>
				<button className='' onClick={() => setSelectedYear(selectedYear - 1)}>
					&lt;
				</button>

				<div>{selectedYear}</div>
				<button onClick={() => setSelectedYear(selectedYear + 1)}>&gt;</button>
			</div>

			{/* TODO: Search bar */}

			{isLoading && !hasError && <h3>Loading...</h3>}
			{hasError && <h1>Something went wrong. Please try again later.</h1>}
			{isLoaded && !hasError && !!races.length
				? races.map((race) => <RaceDetailsCard key={race.startDate} race={race} />)
				: null}
		</div>
	);
};

export default RacesContainer;
