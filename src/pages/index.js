import Header from '@/Components/Header'
import MovieList from '@/Components/MovieList'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>The MOVIE Point</title>
      </Head>
      <ThemeProvider enableSystem={false} attribute="class">
      <div className=' bg-gray-100 dark:bg-zinc-900 transition-all duration-900'>
        <Header />
        <MovieList searchName={"general"}/>
      </div>
      </ThemeProvider>
      
    </>
  )
}
