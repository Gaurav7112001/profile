import React from 'react';
import './Card.css';



const Card = ({ name, role, experience, rating, reviews, profileImg,linkedInURL,book }) => {
  
 
  return (
    <div className="card">
      <img src={profileImg} alt={`${name}`} className="profile-img" />
      <h2>{name}</h2>
      <p>{role} • {experience} years</p>
      <div className="rating">
        <span>⭐ {rating} ({reviews})</span>
      </div>
      <div className="actions">
      <a href={linkedInURL} target='_blank'>
        <button className="profile"  >View Profile</button></a>
        <a href={book} target='_blank'><button className="book" >Book Consultation</button></a>
      </div>
    </div>
  )
};

export default Card;
