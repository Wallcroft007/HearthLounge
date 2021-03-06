import React from 'react';
import PropTypes from 'prop-types';
import FormSelect from './select';

const InnerLeftContainer = ({activeClass, deckTitle, handleInputChange, handleSelectChange}) =>{
  return(
      <div className="inner inner__left">
        <div className="input-wrapper">
          <label htmlFor="deck_title">Deck title:</label>
          <input id="deckTitle"
                 type="text"
                 placeholder="Deck title i.e SMOrc hunter"
                 onChange={handleInputChange}
                 value={deckTitle}/>
        </div>
        <FormSelect section="type" handleSelectChange={handleSelectChange}/>
        <FormSelect section="archetype" hsClass={activeClass} handleSelectChange={handleSelectChange}/>
        <div className="input-wrapper">
          <label htmlFor="mulligan">Mulligans:</label>
          <input id="mulligan"
                 type="text"
                 placeholder="Deck title i.e SMOrc hunter"
                 onChange={handleInputChange}
                 value="random mulligans"/>
        </div>
      </div>
  )
};

InnerLeftContainer.propTypes = {
  activeClass: PropTypes.string.isRequired,
  deckTitle: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired
};

export default InnerLeftContainer;