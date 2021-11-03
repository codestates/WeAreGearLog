import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import './styles.css';

export const Edit = ({ state, handleChange }) => {
  //   const [state, setState] = useState({ value: null });
  //   const handleChange = (value) => {
  //     setState({ value });
  //   };
  //   console.log(state);
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={'본문을 적어주세요'}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Edit;
