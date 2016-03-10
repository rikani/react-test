import 'whatwg-fetch';
import { ADD_NEWS, SHOW_NEWS_ITEM, SET_VISIBILITY_FILTER } from '../constants';

export function addNews(id, title, text) {
  return { type: ADD_NEWS, id, title, text }
}

export const showNewsItem = (id) => {
  return {
    type: SHOW_NEWS_ITEM,
    id
  }
};


export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}