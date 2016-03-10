import React from 'react';
import _ from 'lodash';

import NewsItem from './NewsItem'


export default class NewsList extends React.Component {
  static propTypes = {
    news: React.PropTypes.array,
    onClick: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { news, onClick } = this.props;

    return (
      <div className="news-list">
        {
          _.map(news, (item, key) => {
            return (<NewsItem key={key} {...item} onClick={onClick} />)
          })
        }
      </div>
    );
  }
}