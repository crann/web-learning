import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () =>
  (
    <div>
      <div>
        This is the homepage.
      </div>

      <div>
        Now show me the <Link to="/Generator">clicky stuff</Link> .
      </div>
    </div>
  );

export default Homepage;
