import { useRouter } from 'next/router';
import React from 'react'

function DetailButton({key, poster, title, year,imdb}) {
  const router = useRouter();

  const handleClick = () =>{
    const url = `./DetailPage?imdb=${key}&title=${title}&year=${year}&poster=${poster}`;
    router.push(url);
    // ?imdb=${key}&title=${title}&year=${year}&poster=${poster}
  }
  
  
  
  
    return (
    <button className='w-full bg-orange-400 h-8 rounded-b-lg dark:text-gray-900 hover:bg-orange-500' 
    onClick={handleClick}>DETAILS</button>
  )
}

export default DetailButton