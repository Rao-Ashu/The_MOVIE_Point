import Header from '@/Components/Header'
import MovieList from '@/Components/MovieList'
import NavLinks from '@/Components/NavLinks'
import SearchBox from '@/Components/SearchBox'
import SearchBoxGenre from '@/Components/SearchBoxGenre'
import Title from '@/Components/Title'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import React from 'react'

function Genres() {
    const router = useRouter()
    const movieInfo = router.query;
    // console.log(movieInfo);


  //   const isActive=(path) =>{
  //     return pathname?.split("/").pop() === path;
  // }; 
  return (
    <>
    <ThemeProvider enableSystem={false} attribute="class">
      <div className=' bg-gray-200 dark:bg-zinc-900 transition-all duration-900'>
        <Title />
        <NavLinks />
        <SearchBox />
        {/* <hr className='border-gray-400 h-3'/> */}
        <h1 className='text-1xl md:text-3xl font-serif capitalize px-16 pt-5'>Showing Results for: <span className='underline decoration-orange-400 decoration-2 underline-offset-4'>{movieInfo.genre}</span> </h1>
        <MovieList searchName={movieInfo.genre}/>
      </div>
    </ThemeProvider>
    </>
  )
}

export default Genres