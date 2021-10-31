/* eslint-disable default-case */

export const WRITE = 'board/WRITE';

export const LIKE = 'board/LIKE';

export const READNUM = 'board/READNUM';
export const INSERT = 'board/INSERT';

export const write = (input, text) => ({
  type: WRITE,
  payload: {
    input,
    text,
  },
});

let id = 2;

export const insert = (input, text) => ({
  type: INSERT,
  payload: {
    id: id++,
    input,
    text,
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
    case WRITE:
      return {
        items: [
          ...state,
          { input: action.payload.input, text: action.payload.text },
        ],
      };
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
