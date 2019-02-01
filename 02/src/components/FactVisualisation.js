import React from 'react';
import PropTypes from 'prop-types';

const FactVisualisation = ({
  generationInProgress,
  generationHasSucceeded,
  generationHasFailed,
  generatedFact,
}) =>
  (
    <div>
      <div>In Progress: {generationInProgress ? 'true' : 'false'}</div>
      <div>Succeeded: {generationHasSucceeded ? 'true' : 'false'}</div>
      <div>Failed: {generationHasFailed ? 'true' : 'false'}</div>
      <div style={{ paddingTop: '10px' }}>
        {generatedFact}
      </div>
    </div>
  );

FactVisualisation.propTypes = {
  generationInProgress: PropTypes.bool.isRequired,
  generationHasSucceeded: PropTypes.bool.isRequired,
  generationHasFailed: PropTypes.bool.isRequired,
  generatedFact: PropTypes.string.isRequired,
};

export default FactVisualisation;
