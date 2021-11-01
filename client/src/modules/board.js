/* eslint-disable array-callback-return */

export const WRITE = 'board/WRITE';

export const LIKE = 'board/LIKE';

export const READNUM = 'board/READNUM';
export const INSERT = 'board/INSERT';

let id = 1;

export const insert = (input, text) => ({
  type: INSERT,
  payload: {
    id: id++,
    input,
    text,
    like: 0,
    clicked: false,

    comment: 0,
    view: 0,
    img: 'sdf',
  },
});

export const likes = (id, like) => ({
  type: LIKE,
  payload: {
    id,
  },
});

const initialState = {
  items: [
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
    {
      id: 0,
      input: '',
      text: '',
      like: 0,
      clicked: false,
    },
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
    case LIKE: {
      let idx = state.items.findIndex((el) => el.id === action.payload.id);
      return {
        ...state,
        items: state.items.map((el, index) => {
          if (index === idx && el.clicked === false) {
            el.like++;
            el.clicked = true;
          } else if (index === idx && el.clicked === true) {
            el.like--;
            el.clicked = false;
          }

          return el;
        }),
      };
    }

    case INSERT: {
      // eslint-disable-next-line no-lone-blocks
      return {
        items: [action.payload, ...state.items],
      };
    }

    default:
      return state;
  }
}

export default board;
