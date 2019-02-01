import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'semantic-ui-react';

const FactGenerator = ({
  seed,
  onInputChanged,
  onClick,
  generationInProgress,
}) =>
  (
    <div>
      <div style={{ width: '110px', margin: '0 auto' }}>
        <Input
          action={{
            color: 'blue',
            icon: 'repeat',
            loading: generationInProgress,
            onClick: () => onClick(),
          }}
          disabled={generationInProgress}
          placeholder="Max Value"
          defaultValue={seed}
          onChange={e => onInputChanged(e.target.value)}
          fluid
        />
      </div>
    </div>
  );

FactGenerator.propTypes = {
  seed: PropTypes.number.isRequired,
  onInputChanged: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  generationInProgress: PropTypes.bool.isRequired,
};

export default FactGenerator;
