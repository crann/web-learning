import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as generatorSelectors from '../../state/selectors/generatorSelectors';
import { generateFactAction } from '../../state/actions/actions';

import FactVisualisation from '../../components/FactVisualisation';
import FactGenerator from '../../components/FactGenerator';

class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seed: 10,
    };
  }

  onInputChanged = (seed) => {
    this.setState({ seed });
  }

  onGenerateClicked = () => {
    this.props.onGenerateValue(this.state.seed);
  }

  render() {
    return (
      <div style={{ paddingTop: '30px' }}>
        <div style={{ paddingBottom: '10px' }}>
          <FactGenerator
            onInputChanged={this.onInputChanged}
            onClick={this.onGenerateClicked}
            {...this.props}
            {...this.state}
          />
        </div>

        <div>
          <FactVisualisation
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

Generator.propTypes = {
  onGenerateValue: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  generationInProgress: generatorSelectors.inProgressSelector(),
  generationHasSucceeded: generatorSelectors.hasSucceededSelector(),
  generationHasFailed: generatorSelectors.hasFailedSelector(),
  generatedFact: generatorSelectors.factSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGenerateValue: seed => dispatch(generateFactAction(seed)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
