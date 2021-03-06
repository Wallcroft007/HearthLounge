import React from 'react';
import PropTypes from 'prop-types';
import {handlePreviewCompiling} from '../../../../../../../shared-assets/editor/text-editor-functions';

const Preview = ({deckText}) =>{
  return (
      <div className="container__details--section container__details--description">
        <div className="section__header">
          <div className="line"></div>
          <h1>Preview</h1>
        </div>
        <div className="section__body">
          {handlePreviewCompiling(deckText)}
        </div>
      </div>
  )
};

Preview.propTypes = {
  deckText: PropTypes.string
};

export default Preview;