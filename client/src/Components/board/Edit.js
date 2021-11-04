import React, { useState, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import { Quill } from 'react-quill';
import AWS from 'aws-sdk';
import 'react-quill/dist/quill.snow.css';
import './styles.css';
import axios from 'axios';
export const Edit = ({ state, handleChange }) => {
  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:e9b847f3-a29c-4e48-8662-74daca9726d0',
    }),
  });

  const imageHandler = () => {
    console.log('에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!');

    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      console.log('온체인지');
      const file = input.files[0];

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'gearlogimagestorage',
          // eslint-disable-next-line no-useless-concat
          Key: 'profileImg_' + '.jpg',
          Body: file,
        },
      });

      const promise = upload.promise();

      promise.then(
        function (data) {
          const IMG_URL = data.Location;
          const editor = quillRef.current.getEditor();

          const range = editor.getSelection();

          editor.insertEmbed(range, 'image', IMG_URL);
        },
        function (err) {
          console.log('실패했어요ㅠ');
        },
      );
    });
  };

  const quillRef = useRef();
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['image'],
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'image',
  ];

  return (
    <div className="text-editor">
      <ReactQuill
        ref={quillRef}
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
