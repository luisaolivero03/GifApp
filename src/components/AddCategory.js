import React, { useState } from 'react'


export const AddCategory = ({setcategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputchange = (e) => {
        setinputValue(e.target.value); //ultimo valor actualizado que escribe la persona 
    }

    const handleSubmit = (e) => { // para que no recargue la pagina 
        e.preventDefault();
        setcategories(cats => [ inputValue , ...cats] ); //se llama un callback el cual lleva el mismo orden y añade lo que se pida (..., lo que tu quieras)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input className='w-[100%] text-[1.3rem] rounded-lg text-blue-400'
                value={inputValue}
                onChange={handleInputchange}
            ></input>
        </form>

    )
}



