import { useState, useEffect } from 'react';

const TimezoneClock = ({ timeZone, city }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-UK', {
        year:'numeric',
        month:'long',
        weekday:'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: timeZone,
      }).format(now);
      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className=' w-screen h-14 flex justify-between items-center px-8 '>
      <h3 className='text-2xl font-bold'>{city}</h3>
      <p className="bg-gradient-to-r from-black to-pink-800 font-mono bg-clip-text 
      text-transparent text-xl font-bold ">
      {time}
      </p>
    </div>
  );
};

export default TimezoneClock;