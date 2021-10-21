import React, { useState, useEffect } from 'react';

import { Editor } from '@toast-ui/react-editor';

function PostEditor() {

    return (
        <>
            <Editor
                initialValue="글을 입력하세요"
            />
        </>
    )
}

export default PostEditor;