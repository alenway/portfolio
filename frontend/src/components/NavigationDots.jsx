import React, { useState } from 'react';

const NavigationDots = ({ active }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation_dot'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
          onClick={() => setToggle(false)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
