import React from 'react';
import _ from 'lodash';


export default class NewsItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    getItem: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  onClick = (id) => {
    this.props.onClick(id);
  };

  render() {
    const item = this.props;

    return (
        <div className="news-item">
          <h2>
            <span className="link" onClick={this.onClick.bind(this, item.id)}>{item.title}</span>
          </h2>
          <p>
            {item.new ? <span><small><u>New!</u></small><br /></span> : null }
            {item.text}
          </p>
        </div>
    );
  }
}