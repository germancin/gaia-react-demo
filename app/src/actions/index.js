import Types from './types';
import axios from 'axios';
import config from '../config';

export const getData = () => {
    const url = config.subcat_end_point + '/119931';

    return async dispatch => {

        dispatch({type: Types.FETCHING, payload: true});

        try {
            const response = await axios.get(`${url}`);
            
            dispatch({type: Types.GET_DATA, 
                      term: response.data.term,
                      heroImg: response.data.heroImg,
                      initialTiles: response.data.initialTiles,
                      moreTiles: response.data.moreTiles  
                    });
            
            dispatch({type: Types.FETCHING, payload: false});
                   
        } catch (error) {
            // TODO: handle error
            console.log(error);
        }

    };
};

