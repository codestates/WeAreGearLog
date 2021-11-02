/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { insert } from '../../modules/board';
import { BsImage } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import './Editor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const onSubmit = () => {
    let token = localStorage.getItem('token');

    axios
      .post(
        'http://52.79.233.29:8080/post',
        {
          title: title,
          content: content,
          img: '',
        },
        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onTextChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="edit">
      <div className="Editor">
        <div className="write">
          <h1>게시물 작성</h1>

          <input
            onChange={onTitleChange}
            value={title}
            className="inputz"
            placeholder="제목을 입력하세요"
          />
          <div className="e-p">
            <BsImage />
          </div>
          <textarea
            onChange={onTextChange}
            value={content}
            className="textarea"
            autucomplate="off"
            autoCorrect="off"
            spellCheck="false"
            autocapitalize="off"
          ></textarea>
          <div className="upload-b">
            <Link to="/board">
              <button onClick={onSubmit} className="u-b-1">
                올리기
              </button>
            </Link>
            <Link to="/board">
              <button className="u-b-1">취소</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;

// import React, { useRef, useEffect } from 'react';
// import Quill from 'quill';
// import 'quill/dist/quill.bubble.css';
// import styled from 'styled-components';

// const EditorBlock = styled.div`
//   width: 500px;
//   height: 500px;
//   border: 1px solid black;
//   padding-top: 5rem;
//   padding-bottom: 5rem;
// `;

// const TitleInput = styled.input`
//   font-size: 3rem;
//   outline: none;
//   padding-bottom: 0.5rem;
//   border-bottom: 1px solid gray;
//   margin-bottom: 2rem;
// `;

// const QuillWrapper = styled.div`
//   .ql-editor {
//     padding: 0;
//     min-height: 320px;
//     font-size: 1.125rem;
//     line-height: 1.5;
//   }
//   .ql-editor.ql-blank::before {
//     left: 0px;
//   }
// `;

// const Editor = () => {
//   const quillElement = useRef(null);
//   const quillInstance = useRef(null);

//   useEffect(() => {
//     quillInstance.current = new Quill(quillElement.current, {
//       theme: 'bubble',
//       placeholder: '내용을 입력하세요',
//       modules: {
//         toolbar: [
//           [{ header: '1' }, { header: '2' }],
//           ['bold', 'italic', 'underline', 'strike'],
//           [{ list: 'ordered' }, { list: 'bullet' }],
//           ['blockquote', 'code-block', 'link', 'image'],
//         ],
//       },
//     });
//   }, []);

//   return (
//     <EditorBlock>
//       <TitleInput placeholder="제목입력" />
//       <QuillWrapper>
//         <div ref={quillElement} />
//       </QuillWrapper>
//     </EditorBlock>
//   );
// };

// export default Editor;
