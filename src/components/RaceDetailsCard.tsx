import { FC } from "react";
import { RaceDetails } from "src/models/race.model";

interface RaceDetailsCardProps {
	race: RaceDetails;
}

const RaceDetailsCard: FC<RaceDetailsCardProps> = ({ race }: RaceDetailsCardProps) => {
	return (
		<div className='group mb-4 space-y-4 rounded-lg bg-white p-6 shadow-md'>
			<a href={`https://www.espn.com${race?.evLink}`} target='_blank' rel='noopener noreferrer'>
				<div className='mb-2'>
					<h2 className='transition-duration-300 transition-delay:100 text-2xl font-bold text-gray-900 group-hover:underline'>
						{race.gPrx}
					</h2>
					<h3 className='text-lg font-semibold text-gray-700'>{race.crct}</h3>
				</div>

				<div className='space-y-3'>
					<div className='flex items-center justify-between text-gray-600'>
						<p>Start Date:</p>
						<p className='font-medium'>{new Date(race.startDate).toLocaleString()}</p>
					</div>
					<div className='flex items-center justify-between text-gray-600'>
						<p>End Date:</p>
						<p className='font-medium'>{new Date(race.startDate).toLocaleString()}</p>
					</div>

					<div className='flex items-center justify-between text-gray-600'>
						<p>Status:</p>
						<p className='text-gray-700'>
							{race.completed ? (
								<span className='font-medium text-green-600'>Completed</span>
							) : (
								<span className='font-medium text-yellow-600'>Not Completed</span>
							)}
						</p>
					</div>
					<p className='text-gray-700'>
						{race.isPostponedOrCanceled ? (
							<span className='font-medium text-red-600'>Race is Postponed or Canceled</span>
						) : null}
					</p>

					{race.completed && race.winner && (
						// TOO: Add a link to the winner's profile
						<p className='text-gray-700'>
							Winner: <span className='font-semibold text-indigo-600'>{race.winner}</span>
						</p>
					)}
				</div>
			</a>
		</div>
	);
};

export default RaceDetailsCard;
