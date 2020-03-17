/* eslint-disable react/no-deprecated */
/* eslint-disable no-undef */
/**
 *
 * StockList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './StockList.scss';
import Modal from 'components/Modal';
import { getTrackedDBLen } from '../../utils/data';

class StockList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      selectedStock: undefined,
      showList: true,
    };
  }

  componentWillUpdate() {
    getTrackedDBLen()
      .then(len => {
        if (len >= 5) {
          this.setState({ showList: false });
        }
      })
      .catch(err => {
        console.info(err);
      });
  }

  showModal = stock => {
    this.setState({ isModal: true, selectedStock: stock });
  };

  hideModal = (moreError = false, doc = null) => {
    if (moreError) {
      this.setState({
        showList: false,
        isModal: false,
        selectedStock: undefined,
      });
      return;
    }
    this.setState({ isModal: false, selectedStock: undefined });
    if (doc) {
      this.props.onAdd(doc);
    }
  };

  render() {
    return (
      <>
        {this.state.showList && (
          <div className="list">
            {this.props.stocks.map(
              stock =>
                !stock.isTracking && (
                  <div className="list-item" key={stock.symbol}>
                    <button
                      className="btn StockButton"
                      type="button"
                      onClick={() => this.showModal(stock)}
                    >
                      {stock.symbol}
                    </button>
                    <div className="list-name"> {stock.name} </div>
                  </div>
                ),
            )}
          </div>
        )}
        {!this.state.showList && (
          <div className="alert alert-danger">
            You can only add 5 stocks to track
          </div>
        )}
        {this.state.isModal && (
          <Modal
            stock={this.state.selectedStock}
            onModalHide={this.hideModal}
          />
        )}
      </>
    );
  }
}
StockList.propTypes = {
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string,
      isTracking: PropTypes.bool,
    }),
  ).isRequired,
  onAdd: PropTypes.func,
};

export default StockList;
