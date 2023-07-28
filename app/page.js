'use client';
import Image from 'next/image';
import { HandRaisedIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useState } from 'react';

export default function Home() {
	return (
		<>
			<main className="flex flex-col h-screen bg-gray">
			
				<nav className="container navbar mx-auto">
				<a className="btn btn-lg btn-ghost text-lg">탐색</a>
				</nav>
				<section className="container mx-auto max-w-2xl flex flex-col justify-center flex-grow p-4">
				<h1 className="text-3xl">
					어서오세요,
					<p className='py-2'>내 취향의 
						<select className="select select-ghost text-3xl ml-2 mr-1 font-bold">
  							<option selected>이웃 3333</option>
  							<option>독립서점 876</option>
  							<option>도서관 444</option>
  							<option>문화공간 122</option>
						</select>
을 만나세요.
					</p>
				</h1>
				<search className="join w-full my-2 mb-6">
						{/** <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 absolute mx-2 my-3" /> */}
  						<input className="input input-lg input-bordered join-item rounded-l-full w-full" placeholder="Email"/>
  						<button className="btn btn-lg join-item rounded-r-full">검색</button>
				</search>
				</section>

				<footer className="footer container mx-auto p-4">
					<div className="items-center grid-flow-col">
						<button className="btn btn-lg btn-ghost hover:btn-primary">
							<HandRaisedIcon className="h-12 w-12" />
						</button>
						<p>Copyright (c) 2015-{'2023'} All right reserved</p>
					</div>
					<div className="grid-flow-col place-self-center lg:justify-self-end gap-4 items-center">
						<div>가나다</div>
						<div>라마바</div>
					</div>
				</footer>
				
			</main>
		</>
	);
}
