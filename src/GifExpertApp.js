import React , {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['mariposas'])

   /* const handleAdd =()=>{
        seTcategories([...categories,'ollas'])
    }*/
  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setcategories={setcategories}/>
        <hr/>
           
        <ol className='list-decimal'>
            {
                categories.map(category=>(
                 <GifGrid
                    key={category}
                    category={category}
                />    
                ))
            }
        </ol>

    </div>
  )
}
