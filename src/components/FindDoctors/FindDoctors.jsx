import React from "react";
import styles from "./FindDoctors.module.css";
import SearchBar from "../SearchBar/Searchbar";

export default function FindDoctors() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>Your home for health</h1>
        </div>
        <div className={styles.headerSmallTitle}>
          <h3>Find and Book</h3>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <div class="c-popular-searches">
            <span data-qa-id="popular-searches">Popular searches:</span>
            <a href="/bangalore/dermatologist">Dermatologist</a>
            <a href="/bangalore/pediatrician">Pediatrician</a>
            <a href="/bangalore/gynecologist-obstetrician">
              Gynecologist/Obstetrician
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
