import React from 'react';
import ManaCurve from './mana-curve';
export const DeckSnippetBody = (props) => {
  let prefix = props.prefix;
  return (
      <div className={`${prefix}-body`}>
        <div className={`${prefix}-body-header`}>
          <div className={`${prefix}-mode`}><span className="hs-icon icon-kraken"></span></div>
          <ManaCurve prefix={prefix}/>
          <div className={`${prefix}-type`}>Renohunter</div>
          <div className={`${prefix}-dust-needed`}>
            <span className="hs-icon icon-dust"></span>
            <p>8910</p>
          </div>
        </div>
        <div className={`${prefix}-body-body`}>
          <div className={`${prefix}-minions`}>10 minions</div>
          <div className={`${prefix}-spells`}>14 spells</div>
          <div className={`${prefix}-weapons`}>6 weapons</div>
        </div>
        <div className={`${prefix}-body-footer`}>
          <div className={`${prefix}-views`}>
            <span className="hs-icon icon-eye"></span>
            <p>10k.</p>
          </div>
          <div className={`${prefix}-comments`}>14 comments</div>
          <div className={`${prefix}-votes`}><span className="hs-icon icon-circle-up"></span> 14</div>
        </div>
      </div>
  );
};

export default DeckSnippetBody;