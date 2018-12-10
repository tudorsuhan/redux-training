import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import styles from './dogContainer.module.scss';

class DogSagaWrapper extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div className={styles.dog}>
        <header className={styles.dogHeader}>
          <img src={dog || logo} className={styles.dogHeaderLogo} alt="logo" />
        </header>

        {fetching ? (
          <button className={styles.button} disabled>
            Fetching...
          </button>
        ) : (
          <button className={styles.button} onClick={onRequestDog}>
            Request a Dog
          </button>
        )}

        {error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.dogsFetchReducer.fetching,
    dog: state.dogsFetchReducer.dog,
    error: state.dogsFetchReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: 'API_CALL_REQUEST' })
  };
};

const DogsSagaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DogSagaWrapper);

export default DogsSagaContainer;
