import React, { useState } from "react";
import "./icoons/ionicons.min.css";
import axios from "axios";
import "./SearchBar.css";

export default function Searchbar() {
  const [doctorList, setDoctorsList] = useState([]);
  const [placeList, setPlaceList] = useState([]);

  const handleClick = (e) => {
    const { name, value } = e.target;
    if (value === "") getEmptyData(name);
    else getData(name, value);
  };

  const getEmptyData = async (name) => {
    let res = await axios.get(`http://localhost:3001/${name}`);
    console.log(res.data);
    if (name === "place") {
      setPlaceList(res.data);
      setDoctorsList([]);
    } else {
      setDoctorsList(res.data);
      setPlaceList([]);
    }
  };
  const getData = async (name, value) => {
    let res = await axios.get(`http://localhost:3001/${name}`, {
      params: {
        q: value,
      },
    });
    if (name === "place") {
      setPlaceList(res.data);
      setDoctorsList([]);
    } else {
      setDoctorsList(res.data);
      setPlaceList([]);
    }
    console.log(res.data);
  };

  return (
    <div className="main-section">
      <div className="inputDiv">
        <div>
          <div className="placeInputDiv div">
            <i className="ion-ios7-location-outline icons" />
            <input
              name="place"
              onClick={handleClick}
              type="text"
              placeholder="place"
            />
          </div>
          <div
            className="placesHidden"
            style={{
              visibility: placeList.length === 0 ? "hidden" : "visible",
            }}
          >
            {placeList !== [] &&
              placeList.map((el) => (
                <div
                  className="placesHiddenDiv"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid black",
                    borderBottom: "none",
                  }}
                >
                  <div>{el.i}</div>
                  <div>{el.title}</div>
                  <div>{el.speaciality}</div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className="doctorInputDiv div">
            <i className="ion-ios7-search icons" />
            <input
              className="doctorInput"
              onClick={handleClick}
              name="doctors"
              type="text"
              placeholder="Search doctors"
            />
          </div>
          <div
            className="doctorsHidden"
            style={{
              visibility: doctorList.length === 0 ? "hidden" : "visible",
            }}
          >
            {doctorList !== [] &&
              doctorList.map((el) => (
                <div className="doctorsHiddenDiv">
                  <span>
                    <i className={el.i} />
                    <span>{el.title}</span>
                  </span>
                  <div>{el.speaciality}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="imageDiv">
        <img
          className="imagetag"
          src="https://www.practostatic.com/subscriptions/images/plus-tag.png"
          alt="img"
        />
      </div>
    </div>
  );
}
