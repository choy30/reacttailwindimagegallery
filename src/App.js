import React, { useState, useEffect } from 'react';

function App() {
	return (
		<div className="mx-w-sm rounded overflow-hidden shadow-lg">
			<img src="https://source.unsplash.com/random" alt="" className="w-full" />
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">
					Photo by Ranbdom
				</div>
			</div>
		</div>
	);
}

export default App;
