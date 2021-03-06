import React from 'react';
import Topbar from './right-container/topbar';
import Cards from './right-container/content-assets/cards/cards'
import DeckOptions from './right-container/content-assets/deck-description/deck-options';

const RightContainer = ({deck, filtersView, handleOptionsClick, handleImgSaveClick, cards, activeClass, query, summarizedDeck, editingTool, user, imgReadyDecklist}) =>{

  const currentView = () => {
    return !editingTool ? <Cards cards={cards}/> : <DeckOptions activeClass={activeClass} summarizedDeck={summarizedDeck} user={user}/>
  };

  return (
      <div className="container__page--inner container__page--right">
        <Topbar filtersView={filtersView}
                query={query}
                activeClass={activeClass}
                deck={deck}
                handleImgSaveClick={handleImgSaveClick}
                handleOptionsClick={handleOptionsClick}
                imgReadyDecklist={imgReadyDecklist}/>
        <div className="content">
          {currentView()}
        </div>
      </div>
  )
};

export default RightContainer;