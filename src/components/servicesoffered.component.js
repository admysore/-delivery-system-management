
import React from 'react';
import Card from './card.component';

function SearchList({ filteredPersons }) {
    const filtered = filteredPersons.map(person =>  <Card key={person.service} person={person} />); 
    return (
      <div>
        {filtered}
      </div>
    );
  }

export default SearchList;
