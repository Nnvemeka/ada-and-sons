import React from "react";
import styles from "./collaborate.module.css";
import { Button } from "../buttons";

const Collaborate = () => {
  return (
    <section className={styles.collaborate}>
      <div className={styles.collaborate_content_wrapper}>
        <div className={styles.collaborate_content_container}>
          <div className={styles.collaborate_content}>
            <h1 className={styles.collaborate_content_header}>
              <span className={styles.collaborate_content_header_span}>
                Collaborate with Ada & Sons:
              </span>{" "}
              Your Global Partner for Mutual Growth and Prosperity
            </h1>
            <p className={styles.collaborate_content_description}>
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.
            </p>
            <Button buttonText="Collaborate with us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
