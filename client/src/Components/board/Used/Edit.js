import React, { useState, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import { Quill } from 'react-quill';
import ImageResize from '@looop/quill-image-resize-module-react';
import AWS from 'aws-sdk';
import 'react-quill/dist/quill.snow.css';
import '../styles.css';

export const Edit = ({ state, handleChange, thumbnail, setThumbnail }) => {
  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_IDENTITYPOOLID,
    }),
  });

  const imageHandler = () => {
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
          Key: 'postImg_' + Date.now().toString() + '.jpg',
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
          if (!thumbnail) {
            setThumbnail(data.Location);
          }
          console.log('업로드 성공 썸네일은???', thumbnail);
        },
        function (err) {
          console.log('s3 이미지 업로드 실패');
        },
      );
    });
  };

  Quill.register('modules/ImageResize', ImageResize);
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
      ImageResize: { modules: ['Resize'] },
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
