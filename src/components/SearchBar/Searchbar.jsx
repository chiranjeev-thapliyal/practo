import React, { useState } from "react";
import "../Main/icoons/ionicons.min.css";
import axios from "axios";
import style from "./SearchBar.module.css";

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
    <div className={style["main-section"]}>
      <div className={style.inputDiv}>
        <div>
          <div className={`${style.placeInputDiv}  ${style.div}`}>
            <i className={`ion-ios7-location-outline ${style.icons}`} />
            <input
              name="place"
              onClick={handleClick}
              type="text"
              placeholder="place"
            />
          </div>
          <div
            className={style.placesHidden}
            style={{
              visibility: placeList.length === 0 ? "hidden" : "visible",
            }}
          >
            {placeList !== [] &&
              placeList.map((el) => (
                <div
                  className={style.placesHiddenDiv}
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
          <div className={`${style.doctorInputDiv} ${style.div}`}>
            <i className={`ion-ios7-search ${style.icons}`} />
            <input
              className={style.doctorInput}
              onClick={handleClick}
              name="doctors"
              type="text"
              placeholder="Search doctors"
            />
          </div>
          <div
            className={style.doctorsHidden}
            style={{
              visibility: doctorList.length === 0 ? "hidden" : "visible",
            }}
          >
            {doctorList !== [] &&
              doctorList.map((el) => (
                <div className={style.doctorsHiddenDiv}>
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
      <div className={style.imageDiv}>
        <img
          className={style.imagetag}
          src="https://www.practostatic.com/subscriptions/images/plus-tag.png"
          alt="img"
        />
      </div>
    </div>
  );
}
