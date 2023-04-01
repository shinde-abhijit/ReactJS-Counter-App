import React, { useState } from 'react';
import './bootstrap.min.css';
import './count.css';


export default function Counter() {
    const [count, setCount] = useState(0);
   
    function handleAdd(){
        setCount (count + 1);
        // console.log(count);
    }
    function handleSub(){
        setCount (count - 1);
        // console.log(count);
    }

    function handleReset(){
        setCount(0);   
    }

  return (
    <div>
        <div className="box">
            <div className="row">
                <div className="container col-12">
                    <div className="row">
                        <div className="counter col-12">
                            <p>{count}</p>
                        </div>
                        <div className="buttons col-12">
                            <button className='btn btn-primary col-3' onClick={handleReset}>Reset</button>
                            <button className='btn btn-success col-3'onClick={handleAdd}>Increment</button>
                            <button className='btn btn-danger col-3'onClick={handleSub}>Decrement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
