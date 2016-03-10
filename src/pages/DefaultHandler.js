import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

export default class DefaultHandler extends React.Component {

  render() {
    return (
      <DocumentTitle title={'test'}>
        <div>
          test1111
        </div>
      </DocumentTitle>
    );
  }
}
