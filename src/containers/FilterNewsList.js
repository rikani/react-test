import { connect } from 'react-redux';
import { showNewsItem } from '../actions/news';
import NewsList from '../components/NewsList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_NEW':
      return todos.filter(t => t.new)
    case 'SHOW_OLD':
      return todos.filter(t => !t.new)
  }
};

const mapStateToProps = (state) => {
  return {
    news: getVisibleTodos(state.news, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(showNewsItem(id))
    }
  }
};

const FilterNewsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList);

export default FilterNewsList