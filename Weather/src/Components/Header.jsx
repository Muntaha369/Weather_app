import React,{useState} from 'react';
import { UilSearch } from '@iconscout/react-unicons';

const Header = ({ data, newcity }) => {
  const takeCity = (city) => {
    newcity(city);
  };

  const [newcityonsearch, setNewcityonsearch] = useState('');

  return (
    <div className='header w-screen'>
      <div className='ml-2.5 flex justify-between items-center h-14 flex-wrap'>
        <p className='mr-2.5' onClick={() => takeCity('Delhi')}>Delhi</p>
        <p className='mr-2.5' onClick={() => takeCity('Beijing')}>Beijing</p>
        <p className='mr-2.5' onClick={() => takeCity('Washington')}>Washington</p>
        <p className='mr-2.5' onClick={() => takeCity('Moscow')}>Moscow</p>
        <p className='mr-2.5' onClick={() => takeCity('Berlin')}>Berlin</p>
        <p className='mr-2.5' onClick={() => takeCity('Tokyo')}>Tokyo</p>
      </div>
      <div className='mr-2.5 ml-2.5 flex justify-center items-center'>
        <input className='bg-transparent mr-2.5 rounded-lg h-10 w-100 outline-0 p-3 border-black border-2 mb-2' type="text" value={newcityonsearch}
         onChange={(e)=>{setNewcityonsearch(e.target.value)}} />
        <button onClick={() => takeCity(newcityonsearch)}><UilSearch /></button>
      </div>
    </div>
  );
};

export default Header;