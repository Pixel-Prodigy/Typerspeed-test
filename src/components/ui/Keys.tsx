import { useContext, useEffect, useState } from 'react';
import { Key } from './Key';
import { Context } from './context/Context';

export function Keys() {
  const ctx = useContext(Context)
  const [pressed , setPressed] = useState<string>('scale-100 bg-white text-black')
  if(!ctx) throw new Error('Context Error in Keys.tsx')
  const {gen , keyVault} = ctx
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];
  useEffect(()=>{
     setPressed('scale-125 bg-red-500 backdrop-blur-xl text-white')
  },[gen])
  return (
    <div className={`flex transition-all duration-900 ml-4 flex-col -translate-y-0 items-center gap-2 p-2 ${gen ? 'translate-y-25' : 'translate-y-6'}`}>
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className='flex gap-2'>
          {row.map((key, index) => (
            <Key key={index} value={key} className={`p-3 hover:bg-blue-500/60 hover:blur-md hover:border-white hover:border-2 rounded text-center transition-all duration-150 ${key === keyVault?.toUpperCase() ? pressed :  "scale-100 bg-white text-black"}`} />
          ))}
        </div>
      ))}
      <div className='bg-white rounded-md w-40 h-9 text-black flex items-center justify-center font-bold'>NO NEED OF SPACE</div>
    </div>
  );
}
