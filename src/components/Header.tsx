import racecarLogo from "src/assets/racecar.jpg";

const Header = () => {
	return (
		<header className='sticky top-0 w-full bg-white/30 py-2 backdrop-blur-sm backdrop-filter md:py-6'>
			<div className='w-full px-4 sm:px-6'>
				<div className='relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]'>
					<img src={racecarLogo} alt='racecar' className='h-10 w-10 rounded-full' />
					<div className='flex flex-1 items-center whitespace-nowrap'>F1 TRACKRECORD</div>
					<ul className='flex flex-1 items-center justify-end gap-3'>
						{/* TODO: Add language and locale switcher */}
						<li>EN</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
