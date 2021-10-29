import React,{ useState } from 'react';
import RegisterOrEdit from '../../Components/write/RegisterOrEdit';

const RegisterPage = () =>{

    const [titleValue, setTitleValue] = useState('')
    const [contentValue, setContentValue] = useState('')

    const onTitleChange = (e) => {
        setTitleValue(e.currentTarget.value);
    }
   

    const onContentChange = (e) => {
        setContentValue(e.currentTarget.value);
    }
    

    const onSubmitArticle = (e) => {
        e.preventDefault();
        const article = {title : titleValue, content: contentValue};
        console.log(article);
    }

    const [isForUpdate, setIsForUpdate] = useState(false);


    return (
        <>
        <RegisterOrEdit 
        titleValue = {titleValue}
        contentValue = {contentValue}
        handleTitleChange = {onTitleChange}
        handleContentChange = {onContentChange}
        handleSubmit = {onSubmitArticle}
        updateRequest = {isForUpdate}
        />
        </>
    );
}

export default RegisterPage;