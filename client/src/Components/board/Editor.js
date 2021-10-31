/* eslint-disable react/style-prop-object */
import React from 'react';

import { BsImage } from 'react-icons/bs';
import './Editor.css';
const Editor = () => {
  return (
    <div className="Editor">
      <div className="write">
        <h1>게시물 작성</h1>

        <input className="inputz" placeholder="제목을 입력하세요" />
        <div className="e-p">
          <BsImage />
        </div>
        <textarea
          className="textarea"
          autucomplate="off"
          autoCorrect="off"
          spellCheck="false"
          autocapitalize="off"
        ></textarea>
        <div className="upload-b">
          <button className="u-b-1">올리기</button>
          <button className="u-b-1">취소</button>
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
