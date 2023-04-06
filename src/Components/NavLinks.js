import React from 'react'
import NavLink from './NavLink';
import {usePathname} from "next/navigation";
import { useRouter } from 'next/router';

function NavLinks() {
    const Genres = ["Sci-Fi", "Adventure", "Comedy", "Drama", "Horror", "Romance", "Action","Thriller"];

    // const pathname = usePathname();
     const router = useRouter()
    const movieInfo = router.query;
    const isActive=(path) =>{
        return movieInfo.genre === path;
    }; 
   
    
  return (
    <nav className='grid grid-cols-4 md:grid-cols-8 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto'>
        {Genres.map((genre)=>(
            <NavLink key={genre} genre={genre} isActive={isActive(genre)}/>
        ))}
    </nav>
  )
}

export default NavLinks