import Link from 'next/link'
import React from 'react'

function NavLink({genre, isActive}) {
  return (
    <Link href={`./Genres?genre=${genre}`}
        className={`"decoration-orange-400 text-center decoration-2 active:underline-offset-8 rounded-full p-4 cursor-pointer hover:underline hover:font-bold capitalize hover:scale-110 transition-transform duration-200"
        ${ isActive && "underline decoration-orange-400 underline-offset-4 font-bold text-lg"}`}
    >{genre}
    </Link>
  )
}

export default NavLink