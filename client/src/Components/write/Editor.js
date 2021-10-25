import React from 'react'
import { useState, useEffect } from 'react'


export default function postwirte() {

    
    const [newpost, setNewpost] = useState['']

    return (
        <div className ="postwirte_body">
            <input className="post_title"> 
                {newpost.title}
            </input>
        <textarea >

        </textarea>
        </div>
    )

} 

