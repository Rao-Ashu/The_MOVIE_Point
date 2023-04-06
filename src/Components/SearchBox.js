import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'

function SearchBox() {
    const [input, setInput] = useState("");
    const router = useRouter();

    const pathname = usePathname();


    const handleSearch = (e)=>{
        e.preventDefault();
        if(!input) return;
        // pathname?.split("/").pop() === path

        const path = pathname?.split("/");
        // console.log(("http://localhost:3000/MovieInfo/MovieInfo/Genres?genre=work")?.split("/"));
        
          router.push(`./Genres?genre=${input}`);
        }
          
    
  return (
    <form 
        onSubmit = {handleSearch} 
        className='max-w-4xl  items-center flex mx-auto justify-between px-5 border-t-2 border-gray-300'>
        <input type="text" placeholder='Search THE Movie...' className='w-full h-14 rounded-sm placeholder-gray-500 text-orange-400 flex-1 bg-transparent outline-none dark:text-orange-400' 
         value={input}
         onChange={(e)=>setInput(e.target.value)}/>

        <button type='submit' disabled={!input} 
        className="text-orange-400 disabled:text-gray-400">Search</button>

    </form>
  )
}

export default SearchBox