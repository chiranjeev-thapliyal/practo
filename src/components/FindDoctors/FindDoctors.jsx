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
        <div class="c-icon-list">
          <div class="c-icon-list__list_wrapper">
            <a
              class="c-icon"
              href="/consult?product=fabric&amp;attribution=Home_Banner_Footer"
            >
              <i class="tab-icon c-icon__img icon-ic_chat"></i>
              <span>Consult with a doctor</span>
            </a>
            <a class="c-icon" href="/order?utm_source=practo_home">
              <i class="tab-icon c-icon__img icon-ic_cart"></i>
              <span>Order Medicines</span>
            </a>
            <a
              class="c-icon"
              href="https://drive.practo.com?utm_source=practo_home"
            >
              <i class="tab-icon c-icon__img icon-ic_records_3"></i>
              <span>View medical records</span>
            </a>
            <a class="c-icon" href="/tests?utm_source=practo_home">
              <div class="tab-offer">
                <i class="tab-icon c-icon__img icon-ic_lab_home"></i>
                <span class="c-offer-tag u-round-corner u-border-white u-t-bold u-t-white">
                  New
                </span>
              </div>
              <span>Book test</span>
            </a>
            <a class="c-icon" href="/healthfeed?utm_source=practo_home">
              <i class="tab-icon c-icon__img icon-ic_read"></i>
              <span>Read articles</span>
            </a>
            <a class="c-icon" href="/providers?utm_source=practo_home">
              <i class="tab-icon c-icon__img icon-ic_briefcase"></i>
              <span>For healthcare providers</span>
            </a>
          </div>
        </div>
        <div className={styles.secondPage}>
          <div></div>
        </div>
      </div>
    </>
  );
}
