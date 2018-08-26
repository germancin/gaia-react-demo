import { combineReducers } from 'redux';
import { subCategories } from './subCategories';

export default combineReducers({
    subCategory: subCategories,
});
