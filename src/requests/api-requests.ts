const API_URL = import.meta.env.VITE_API_URL;

function getErrMsgForGeneralIssues(response) {
	try {
		if (response.status === 422) {
			throw Error("Please check that all fields are filled in correctly.");
		}
		if (response.status === 500) {
			throw Error("Server error. Please refresh the page or try again later.");
		}
		return null;
	} catch (err) {
		return { error: err.message };
	}
}

async function httpGetAllRacesForYear(year: string) {
	try {
		const response = await fetch(`${API_URL}/races/schedule?year=${year}`);
		const error = getErrMsgForGeneralIssues(response);
		if (error) {
			return error;
		}

		const data = await response.json();

		const races = data?.responseObject;
		if (!races.length) {
			return { error: "No races found." };
		}
		return races;
	} catch (err) {
		console.error(err.message);
		return { error: "Network Error. Please check your connection or try again later." };
	}
}

export { httpGetAllRacesForYear };
