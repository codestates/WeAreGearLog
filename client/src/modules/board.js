/* eslint-disable default-case */

export const WRITE = 'board/WRITE';

export const LIKE = 'board/LIKE';

export const READNUM = 'board/READNUM';
export const INSERT = 'board/INSERT';

let id = 2;

export const insert = (input, text) => ({
  type: INSERT,
  payload: {
    id: id++,
    input,
    text,
    like: 0,
    readnum: 0,
    comments: 0,
  },
});

export const like = () => ({
  type: LIKE,
  payload: {
    likes: 0,
  },
});

export const readnum = () => ({
  type: READNUM,
  payload: {
    readnum: 0,
  },
});

const initialState = {
  items: [
    {
      id: 1,
      input: 'fdsafadsfasfas',
      text: 'fdsfasdfasfsad',
      like: 0,
      readnum: 0,
    },
  ],
};

function board(state = initialState, action) {
  switch (action.type) {
    case LIKE: {
      return {
        ...state,
        items: state.items.like++,
      };
    }
    case READNUM: {
      return {
        ...state,
        items: action.payload.readnum++,
      };
    }
    case INSERT: {
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    }
    default:
      return state;
  }
}

export default board;
