import React, {useState} from 'react';
import '../App.css'
import { useHistory } from "react-router";
import axios from 'axios';





const Board = () => {

    const history = useHistory();
    const[inputs, setInputs] = useState({
        title: '',
        content: '',
        image: null,
    })

    const handleChange = (e) => {
        const {value, name} = e.currentTarget;
        setInputs({
            ...inputs,
            [name] : value
        });
    } 

    return (
        <div className='board-page'>
          <div className='board-list'>
                게시글 작성 
        </div>

        <div className='board-box'>

        <input 
        className='board-title' 
        name='title'
        defaultValue={'제목을 입력하세요'}
        onFocus={(e)=>{
            if(e.target.value === e.target.defaultValue){
                e.target.value = ''
            }
        }}
        onChange={handleChange}
        ></input>

        <textarea name='content'
        className = 'board-content'
        defaultValue= {'내용을 입력하세요'}
        rows='10'
        onFocus={(e)=>{
            if(e.target.value === e.target.defaultValue){
                e.target.value = ''
            }
        }}
        onChange={handleChange}
        >
        </textarea>

        <button className='button-submit'>등록</button>
        </div>

        </div>

    )
}

export default Board
