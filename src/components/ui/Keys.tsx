import React, { useContext } from 'react';
import { Key } from './Key';
import { Context } from './context/Context';

export function Keys() {
  const {gen} = useContext(Context)
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];
  return (
    <div className={`flex transition-all duration-900 ml-3 flex-col -translate-y-0 items-center gap-2 p-2 ${gen ? 'translate-y-30' : '-translate-y-0'}`}>
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className='flex gap-2'>
          {row.map((key, index) => (
            <Key key={index} value={key} className='p-3 border rounded text-center' />
          ))}
        </div>
      ))}
      <div className='bg-white rounded-md w-40 h-9'></div>
    </div>
  );
}
