import React from 'react';
import _ from 'lodash';
import FilterLink from '../containers/FilterLink';


export default class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <p>
        Показать:
        {" "}
        <FilterLink filter="SHOW_ALL" className="pseudo">
          Все
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_NEW" className="pseudo">
          Новые
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_OLD" className="pseudo">
          Старые
        </FilterLink>
      </p>
    );
  }
}