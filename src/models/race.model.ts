export interface RaceDetails {
	startDate: string;
	endDate: string;
	featuredAthletes: string;
	status: {
		id: string;
		state: string;
		detail: string;
	};
	completed: boolean;
	gPrx: string;
	crct: string;
	evLink: string;
	isPostponedOrCanceled: boolean;
	broadcasts?: [] | unknown[];
	time?: string;
	winner?: string;
}

// Example of the data structure returned from the API for completed and uncompleted races

// "20250313": [
//     {
//       "startDate": "2025-03-14T01:30Z",
//       "endDate": "2025-03-16T04:00Z",
//       "featuredAthletes": "featuredAthletes",
//       "status": {
//         "id": "1",
//         "state": "pre",
//         "detail": "Sun, March 15th at 12:00 AM EDT"
//       },
//       "completed": false,
//       "gPrx": "Australian GP",
//       "crct": "Melbourne Grand Prix Circuit",
//       "evLink": "/f1/race/_/id/600052045",
//       "isPostponedOrCanceled": false,
//       "broadcasts": [],
//       "time": "2025-03-16T04:00Z"
//     }
//   ],

// {
//     "20240229": [
//       {
//         "startDate": "2024-02-29T11:30Z",
//         "endDate": "2024-03-02T15:00Z",
//         "featuredAthletes": "featuredAthletes",
//         "status": {
//           "id": "3",
//           "state": "post",
//           "detail": "Final"
//         },
//         "completed": true,
//         "gPrx": "Gulf Air Bahrain GP",
//         "crct": "Bahrain International Circuit",
//         "evLink": "/f1/race/_/id/600041133",
//         "isPostponedOrCanceled": false,
//         "winner": "M. Verstappen"
//       }
//     ],
