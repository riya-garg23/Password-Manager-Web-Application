import React from 'react'

const Navbar = () => {
	return (
		<nav className='bg-slate-800 text-white '>
			<div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

				<div className="logo font-bold text-white text-2xl">
					<span className='text-green-500'> &lt;</span>
					<span>Pass</span><span className='text-green-500'>OP/&gt;</span>
				</div>

				<button className='text-white my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'>
					<img className='invert w-10 p-2' src="/icons/github.png" alt="github logo" />
					<span className='font-bold px-2'>GitHub</span>

				</button>
			</div>
		</nav >
	)
}

export default Navbar