
const initialState = {
    fetching: null,
    term: [],
    heroImg: [],
    initialTiles: [],
    moreTiles: [],
    select: 'select',
};

export const subCategories = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {...state, 
                term: action.term,
                heroImg: action.heroImg,
                initialTiles: action.initialTiles,
                moreTiles: action.moreTiles
            };
        case 'FETCHING':
            return {...state, 
                fetching: action.payload,
            };
        default:
            return state;
    }
};