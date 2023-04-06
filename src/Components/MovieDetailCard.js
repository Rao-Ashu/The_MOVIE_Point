import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

function MovieDetailCard() {
    
    const router = useRouter()
    const movieInfo = router.query;

    const handleClick=()=>{
      router.push(`https://www.youtube.com/results?search_query=${movieInfo.title}+trailer`);
    }
    // https://www.youtube.com/results?search_query=johnwick+trailer
    //`./MovieInfo/DetailPage?imdb=${key}&title=${title}&year=${year}&poster=${poster}`
  return (
    
    <div className='mb-10 px-0 lg:px-10 bg-slate-100 dark:bg-slate-800 flex flex-col pt-5 pb-5 lg:flex-row rounded-lg shadow-lg hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out'>
              <img src={movieInfo.poster} className="h-64 md:h-72 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md" alt="" />
              <div className='grid w-full justify-evenly px-10 '>
                    <h2 className='font-bold font-serif text-center pb-2 no-underline text-2xl md:text-4xl capitalize px-10 pt-5 '>{movieInfo.title}</h2>
                    <h3 className='font-serif text-1xl text-center md:text-2xl p-4'><span className='font-bold underline decoration-6 decoration-orange-400'>Release Year</span>  - {movieInfo.year}</h3>
                    <h3 className='font-serif text-1xl text-center md:text-2xl p-4'><span className='font-bold underline decoration-6 decoration-orange-400'>Plot</span> - *NA* on API data</h3>

                    <button className='w-full bg-orange-400 h-10 rounded-lg dark:text-gray-900 hover:bg-orange-500 font-bold'
                      onClick={handleClick}
                    >Watch Trailer</button>
                
                
                
              </div>

            </div> 
  )
}

export default MovieDetailCard