import React from 'react';
import MentorList from './component/MentorList';
import { mentors } from './Data';
import SearchBar from './component/SearchBar';
import './App.css';
import FindMentor from './component/FindMentor';

function App() {
  return (
    <div className="App">
      {/* <div className="container"> */}
      <FindMentor />
      <SearchBar/>
      <MentorList mentors={mentors} />
      </div>
    
    // </div>
  );
}

export default App;

