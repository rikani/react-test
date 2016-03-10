import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import DocumentTitle from 'react-document-title';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Filter from '../components/Filter';
import FilterNewsList from '../containers/FilterNewsList';

/* actions */
import * as actionCreators from '../actions/news';


@connect(state => ({
  news: state.news
}))
export default class Home extends React.Component {
  static propTypes = {
    news: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <DocumentTitle title={'Home'}>
        <div className="main">
          <h1>News List</h1>
          <Filter />
          <FilterNewsList />
        </div>
      </DocumentTitle>
    );
  }
};