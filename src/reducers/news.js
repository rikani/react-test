import _ from 'lodash';
import { ADD_NEWS, SHOW_NEWS_ITEM, SET_VISIBILITY_FILTER } from '../constants';
import { VisibilityFilters } from '../constants';

import { combineReducers } from 'redux'

const initialState = {
  news: [{
    id: 1,
    title: 'Apple начала рассылать приглашения на презентацию 21 марта',
    text: 'Эксперты прогнозируют, что на презентации компания представит iPhone 5SE и, возможно, обновленный iPad с диагональю 9,7 дюйма.',
    new: true,
  },{
    id: 2,
    title: 'Российская компания Promobot открывает производство роботов в Китае',
    text: 'Роботы-промоутеры, созданные российской компанией Promobot, вызвали большой интерес китайских бизнесменов, заключивших контракты на поставку сотни таких роботов в КНР, сообщает CNews. Пробная партия из пяти роботов была закуплена представителями Китая в декабре 2015 года на выставке Irex 2015.',
    new: false,
  },{
    id: 3,
    title: 'Вышла новая версия браузера Opera со встроенным блокировщиком рекламы',
    text: 'Новое обновление для браузера Opera предполагает наличие уже встроенного блокировщика рекламы. Тем самым пользователи получат возможность более профессионально блокировать различные всплывающие окна, предлагающие ознакомится с той или иной услугой.',
    new: true,
  },{
    id: 4,
    title: 'Google показала превью-версию ОС Android N',
    text: 'Компания Google сделала доступной для загрузки разработчиками превью-версию своей новой мобильной операционной системы Android N. Об этом пишет Ars Technica.',
    new: false,
  }],
};

function news(state = initialState.news, action) {
  switch (action.type) {
    case ADD_NEWS:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          new: true
        }
      ];

    case SHOW_NEWS_ITEM:
      return state.filter(t => t.id == action.id);

    default:
      return state
  }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const newsApp = combineReducers({
  visibilityFilter,
  news
});

export default newsApp
