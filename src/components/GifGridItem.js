import React from 'react'

export const GifGridItem = ({id,tittle,url}) => {

    console.log(id,tittle,url)


  return (
    <div className='content-center border-[1px] fill-white overflow-hidden margi mb-[10px] mr-[10px] animate__animated animate__bounce animate__delay-2s'>
        <img className='max-h-[170px]' src={ url } alt={tittle}/>
        <p className='p-[5px] text-center '> {tittle} </p>
    </div>
  )
}

