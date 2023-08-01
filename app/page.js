'use client';
import Image from 'next/image';
import {
  HandRaisedIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import BI from '@/public/img/logo.svg';
import { useState } from 'react';
var data = require('./fruit.json'); 

export default function Home() {
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  }
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log('search', searchTerm);
  }
  return (
    <>
      <main className="flex flex-col h-screen">
        <nav className="container navbar mx-auto">
          <a className="btn btn-lg btn-ghost text-lg">맞나? </a>
        </nav>
        <section className="container mx-auto max-w-3xl flex flex-col justify-center flex-grow p-4">
          <h1 className="text-3xl">
            어서오세요,
            <p className="py-2">
              내 취향의
              <select defaultValue='all' className="select select-ghost text-3xl ml-2 mr-1 font-bold">
                <option value='all'>이웃 3333</option>
                <option value='bookshop'>독립서점 876</option>
                <option value='library'>도서관 444</option>
                <option value='culture_space'>문화공간 122</option>
              </select>
              을 만나세요.
            </p>
          </h1>

          <search className="join w-full border rounded-full my-2 shadow-sm">
            <button className="btn btn-lg rounded-l-full bg-transparent noHover join-item">
              {/** 동네서점 심볼 */}
              <MagnifyingGlassIcon className="h-6 w-6 absolute" />
            </button>

            <input value={value} onChange={onChange}
              className="input input-lg text-2xl input-bordered rounded-l-full w-full join-item "
              placeholder="상호 또는 주소 입력.."
            />
            <button onClick={()=>onSearch(value)} className="btn btn-lg btn-primary rounded-r-full join-item">
              검색
            </button>
          </search>
          
          <search-result className='w-full'>
            <ul className='menu rounded-box border shadow-sm bg-base-100'>
          {data.filter(item => {
            const searchTerm = value.toLowerCase();
            const fruitName = item.fruit.toLowerCase();

            return searchTerm && fruitName.startsWith(searchTerm) && fruitName !== searchTerm;
          }).slice(0,10)
          .map((item) => (
            <li key={item.fruit} onClick={() => onSearch(item.fruit)}>
              <a>
                <div clasName=''>
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-300 mr-1" /> 
                </div>
                <div>
                  <div className='text-xl'>{item.fruit}</div>
                  <div className='text-sm text-gray-400'>강원도 고성군 한누리대로 2135</div>
                </div>
            </a>
            
            </li>
          ))} 
            </ul>
          </search-result>

        </section>



        <footer className="footer container mx-auto p-4">
          <div className="items-center grid-flow-col">
            <button className="btn btn-md btn-ghost">
              <BI
                alt="Bookshopmap Symbol"
                color={'gray'}
                width={36}
                height={36}
              />
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
