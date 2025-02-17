const Background = () => {
	return (
		<div aria-hidden='true' className='fixed inset-0 grid grid-cols-2 opacity-50'>
			<div className='from-primary h-96 bg-gradient-to-br to-purple-500 blur-[106px]'></div>
			<div className='h-72 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px]'></div>
		</div>
	);
};

export default Background;
