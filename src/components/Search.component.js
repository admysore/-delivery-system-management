import React, { useState } from 'react';
import Scroll from './Scroll.component';
import SearchList from './servicesoffered.component';
function Search({ details }) {

    const [searchField, setSearchField] = useState("");
  
    const filteredPersons = details.filter(
      person => {
        return (
         
          person
          .service
          .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .description
        .toLowerCase()
      .includes(searchField.toLowerCase())

        );
      }
    );
  
    const handleChange = e => {
      setSearchField(e.target.value);
    };
  
    function searchList() {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
    }
  
    return (
      <section className="garamond">
        <div className="navy georgia ma0 grow">
          <h2 className="f2">Search for a service</h2>
        </div>
        <div className="pa2">
          <input 
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type = "search" 
            placeholder = "Search service" 
            onChange = {handleChange}
          />
        </div>
        {searchList()}
      </section>
    );
  }
  export default Search;
