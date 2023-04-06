
import Title from '@/Components/Title'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import MovieDetailCard from '@/Components/MovieDetailCard'


function DetailPage() {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
    <div className=' bg-gray-100 dark:bg-zinc-900 transition-all duration-900'>
      <Title />
      <div className='max-w-[2xl] md:px-40 px-10'>
      <MovieDetailCard />
      </div>
      
    </div>
    </ThemeProvider>
  )
}

export default DetailPage