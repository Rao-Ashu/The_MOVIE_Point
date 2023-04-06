import React from 'react'
import DetailButton from './DetailButton'

function MovieCard({key, poster, title, year, imdb}) {
  return (
    // id={movie.Title.toLowerCase()}
    <div className=' bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out'>
              <img src={poster} className="w-full h-56 object-cover rounded-t-lg shadow-md" alt="" />
              <div>

                    <h2 className='font-bold font-serif text-lg text-center p-4'>{title}</h2>

                {/* DetailButton */}
                <DetailButton poster={poster} title={title} year={year} imbd={imdb}/>
              </div>

            </div> 
  )
}

export default MovieCard