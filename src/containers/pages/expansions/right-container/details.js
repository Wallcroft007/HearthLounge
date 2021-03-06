import React from 'react';
import {topbar_tabs} from '../../../../data/expansion-details'
import SharedTopbarTabs from './assets/shared-topbar-tabs'
import ValidateURL from '../../../shared-assets/validateUrl';

const ExpansionDetails = props => {
  const {cards, details, expansion} = props.params;

  const content = (cards, details, expansion) =>{
    return (
        <div className="container__extension">
          <SharedTopbarTabs expansion={expansion}
                            details={details}
                            cards={cards}/>
        </div>
    )
  };

  const validateUrlProps = args => {
    let details_path = topbar_tabs.filter(x => x.expansion === expansion)[0].expansion_topbar_tabs.map(x => x.url).includes(details);

    switch (args) {
      case 'condition': return details_path;
      case 'content':   return content(cards, details, expansion);
      default:          return null;
    }
  };

  return <ValidateURL condition={validateUrlProps('condition')}
                      content={validateUrlProps('content')}
                      page="expansion detail"
                      redirect={`expansions/${expansion}`}/>
};

ExpansionDetails.propTypes = {
  cards:     React.PropTypes.array,
  details:   React.PropTypes.string,
  expansion: React.PropTypes.string
};

export default ExpansionDetails;