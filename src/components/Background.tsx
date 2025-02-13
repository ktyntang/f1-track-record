const Background = () => {
	return (
		<div aria-hidden='true' className='absolute inset-0 grid grid-cols-2 opacity-40'>
			<div className='from-primary h-56 bg-gradient-to-br to-purple-400 blur-[106px]'></div>
			<div className='h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px]'></div>
		</div>
	);
};

export default Background;
