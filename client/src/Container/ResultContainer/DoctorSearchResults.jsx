import React from "react";
import "./DoctorSearchResults.css";

function DoctorSearchResults() {
  const doctors = [
    {
      name: "Dr. John Smith",
      location: "New York",
      imageUrl: "https://dummyimage.com/100x100/000/fff",
    },
    {
      name: "Dr. Jane Doe",
      location: "Los Angeles",
      imageUrl: "https://dummyimage.com/100x100/000/fff",
    },
    {
      name: "Dr. David Lee",
      location: "Chicago",
      imageUrl: "https://dummyimage.com/100x100/000/fff",
    },
    {
      name: "Dr. Sarah Chen",
      location: "San Francisco",
      imageUrl: "https://dummyimage.com/100x100/000/fff",
    },
    {
      name: "Dr. Michael Johnson",
      location: "Houston",
      imageUrl: "https://dummyimage.com/100x100/000/fff",
    },
    {
      name: "Dr. Lisa Kim",
      location: "Miami",
      imageUrl: "https://dummyimage.com/100x100/000/fff",
    },
  ];

  return (
    <div className="doctor-search-results">
      <h2>Doctors Near You</h2>
      <ul className="doctor-list">
        {doctors.map((doctor, index) => (
          <li key={index} className="doctor-card">
            <img
              src={doctor.imageUrl}
              alt={`Portrait of ${doctor.name}`}
              className="doctor-card__image"
            />
            <div className="doctor-card__info">
              <h3 className="doctor-card__name">{doctor.name}</h3>
              <p className="doctor-card__location">{doctor.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorSearchResults;
