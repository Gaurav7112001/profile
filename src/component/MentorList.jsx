import React from "react";

import './Data.css';

import Card from './Card';

const MentorList = ({ mentors }) => {
  return (
    <div className="mentor-list">
      {mentors.map((mentor,index) => (
        <Card key= {index}{...mentor} />
      ))}
    </div>
  );
};

export default MentorList;
