/* eslint-disable default-case */
import { createAction } from 'react-actions';

const WRITE = 'board/WRITE';

const LIKE = 'board/LIKE';

const READNUM = 'board/READNUM';
const INSERT = 'board/INSERT';

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

let likes = 0;

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
  input: '',

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
        ...state,
        items: { input: action.payload.input, text: action.payload.text },
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
        items: action.payload.likes++,
      };
    }
    default:
      return state;
  }
}
