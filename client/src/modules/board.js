/* eslint-disable array-callback-return */

export const WRITE = 'board/WRITE';
export const READPOST = "'/board/READPOST";
export const LIKE = 'board/LIKE';
export const READNUM = 'board/READNUM';
export const COMMENT = 'board/COMMENT';

export const likes = (id, like) => ({
  type: LIKE,
  payload: {
    id,
  },
});

export const readpost = (data) => ({
  type: READPOST,
  payload: {
    data: data,
  },
});

const initialState = {
  comment: [
    {
      id: 0,
      content: '',
      createdAt: '2021-10-30T06:35:57.000Z',
      updatedAt: '2021-11-02T08:11:00.000Z',
      username: '성현테스트',
      profile_img: null,
    },
  ],

  read: [
    {
      category: 'sample3',
      comment: 0,
      content: 'sample3',
      createdAt: '2021-10-30T06:35:57.000Z',
      id: 3,
      img: 'sample3',
      like: 0,
      profile_img: null,
      title: 'sample3',
      updatedAt: '2021-11-02T08:11:00.000Z',
      username: '성현테스트',
      view: 10,
      writerId: 2,
    },
  ],

  items: [
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
  ],
};

function board(state = initialState, action) {
  switch (action.type) {
    case READPOST: {
      return { ...state, read: action.payload.data };
    }

    default:
      return state;
  }
}

export default board;
