import React, { useState } from 'react'

const Counter = () => {

    const [value, setValue]= useState(0);
    // console.log("number set=========>" , value);
    
    const handleAddvalue = () =>{
        // alert("added")
        setValue(value + 1)
    }

    const handleDecrement = ()=>{

        if (value === 0){
            return
        }
        // alert("Decrement")
        setValue(value - 1)
    }

  return (
    <>
    <section className='lyt-section'>
        <div className="container">
            <h1 className='text-center'>Counter Function</h1>
            <div className="counter-box d-flex justify-content-center flex-wrap mt-5">
                <button onClick={()=> handleAddvalue()} className='btn btn-success' name='inc'>Increment</button>
                <h2 className='bs-heading text-center mx-4'>{value}</h2>
                <button onClick={()=> handleDecrement()} className='btn btn-danger' name='dec'>Decrement</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Counter