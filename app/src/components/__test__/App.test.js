import React from 'react';
import { shallow } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

import Header from '../header/Header';
import Spinner from '../spinner/Spinner';
import Hero from '../hero/Hero';
import Selectmenu from '../selectmenu/Selectmenu';
import Content from '../content/Content';
import LoadMore from '../content/LoadMore';
import Videotile from '../content/Videotile';

const store = createStore(rootReducer, applyMiddleware(thunk));

let component;

it('shows a header component', () => {
	component = shallow(<Header /> );
	expect( (component.length)).toEqual(1)
})

it('shows a spinner component', () => {
	component = shallow(<Spinner /> );
	expect( (component.length)).toEqual(1)
})

it('shows a hero component', () => {
	component = shallow(<Hero store={store} /> );
	expect( (component.length)).toEqual(1)
})

it('shows a select menu component', () => {
	component = shallow(<Selectmenu store={store} /> );
	expect( (component.length)).toEqual(1)
})

it('shows a content component', () => {
	component = shallow(<Content store={store} /> );
	expect( (component.length)).toEqual(1)
})

it('shows a load more component', () => {
	component = shallow(<LoadMore store={store} /> );
	expect( (component.length)).toEqual(1)
})
