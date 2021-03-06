import React from "react";
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: null,
      pageCount: null
    }
  }
  
  componentWillMount() {
    const startingPage = this.props.startingPage
      ? this.props.startingPage
      : 1;
    const data = this.props.data;
    const pageSize = this.props.pageSize;
    let pageCount = parseInt(data.length / pageSize);
    if (data.length % pageSize > 0) {
      pageCount++;
    }
    this.setState({
      currentPage: startingPage,
      pageCount: pageCount
    });
  }
  
  setCurrentPage(num) {
    this.setState({currentPage: num});
  }

  createControls() {
    let controls = [];
    const pageCount = this.state.pageCount;
    for (let i = 1; i <= pageCount; i++) {
      const baseClassName = 'pagination-controls__button';
      const activeClassName = i === this.state.currentPage ? `${baseClassName}--active` : '';
      controls.push(
        <div
          key={i}
          className={`${baseClassName} ${activeClassName}`}
          onClick={() => this.setCurrentPage(i)}
        >
          {i}
        </div>
      );
    }
    return controls;
  }

  createPaginatedData() {
  
    const data = this.props.data;
    const pageSize = this.props.pageSize;
    const currentPage = this.state.currentPage;
    const upperLimit = currentPage * pageSize;
    const dataSlice = data.slice((upperLimit - pageSize), upperLimit);
    return dataSlice;
  }
  render() {
    return (
      <div className='pagination'>
        <div className='pagination-controls'>
          {this.createControls()}
        </div>
        <div className='pagination-results'>
          {React.cloneElement(this.props.children, {data: this.createPaginatedData()})}
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  data: PropTypes.array.isRequired, 
  pageSize: PropTypes.number.isRequired,
  startingPage: PropTypes.number.isRequired
};

Pagination.defaultProps = {
  pageSize: 9,
  startingPage: 1
};

export default Pagination;