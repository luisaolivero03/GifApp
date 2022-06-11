import React from 'react'
import { UseFetchGifs } from '../Hooks/UseFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const {data:images,loading} = UseFetchGifs(category);


  return (
    <>
      <h3> {category} </h3>

    {loading && <p>Loading</p> }
      <div className='flex flex-row flex-wrap '>
        {
          images.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />

          ))
        }


      </div>
    </>
  )
}

