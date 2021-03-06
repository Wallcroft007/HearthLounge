import React from 'react';
import {Link} from 'react-router';
import {adventure_details} from '../../../../data/adventure-details';

const AdventureBosses = props => {
  const {adventure} = props;

  const tableData = (wing, adventure) => {
    let adventureDetailsFromUrl = adventure_details.filter(x => x.adventure === adventure).map(x => x.bosses.details.map(x => x.url).some(x => x === wing.url))[0];

    const checkAdventure = (adventure, boss) => {
      let src = `https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${adventure}/${wing.url}/${boss.url}.jpg`;

      if (adventureDetailsFromUrl === true) {
        return <img src={src} alt={boss.boss}/>
      }
    };

    return wing.bosses.map((boss, index) =>
        <td key={index} className={`${adventure} active-on-hover`}>
          <Link to={`/adventures/${adventure}/${wing.url}/${boss.url}`}>
            {checkAdventure(adventure, boss)}
            <p>{boss.boss}</p>
          </Link>
        </td>
    )
  };

  return (
      <div className={`bosses inner-container ${adventure && 'active'}-view`}>
        {adventure_details.map((a, index) =>
            <div className={`${adventure === a.adventure && 'active'}-view`} key={index}>
              <div>
                <p>{a.bosses.description}</p>
                <table>
                  <tbody>
                  {a.bosses.details.map((wing, i) =>
                      <tr key={i}>
                        <th className={`${adventure} active`}>{wing.wing_title}</th>
                        {tableData(wing, adventure)}
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
        )}
      </div>
  );
};

AdventureBosses.propTypes = {
  adventure: React.PropTypes.string.isRequired
};

export default AdventureBosses;