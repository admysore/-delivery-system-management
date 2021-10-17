import React from 'react';

function Card({person}) {
  return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          <img className="br-100 h3 w3 dib" alt={ person.description, person.service} src={process.env.PUBLIC_URL } />
          <div>
            
            <p>{person.description}</p>
          </div>
        </div>
      );
}
  export default Card;
