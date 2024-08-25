import React from "react";
import styles from "./drummers.module.css";
import Image from "next/image";
import { prompt } from "../fonts";

const Drummers = () => {
  return (
    <section className={styles.drummers}>
      <div className={styles.drummers_container}>
        <div className={styles.drummers_content}>
          <h1>
            Lorem Ipsum <br />
            asifsdijsjbijsfoi
          </h1>
          <p>
            "Where vibrant culture thrives! Nestled in Nigeria, our rich
            heritage resonates through traditional dances, captivating
            festivals, and warm hospitality. Explore landmarks, savour cuisine,
            and immerse in Ada & Sons's cultural embrace. Discover the magic of
            our cherished cultural treasure."
          </p>
          <figure className={styles.drummers_content_media}>
            <Image
              src={"/assets/drummers.svg"}
              alt="Drummers"
              fill
              loading="lazy"
              className={styles.drummers_content_media_image}
            />
          </figure>
        </div>

        <div className={styles.drummers_stats_wrapper}>
          <div className={styles.drummers_stats}>
            <DrummerStats number={"17"} />
            <DrummerStats number={"25"} />
            <DrummerStats number={"107+"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drummers;

const DrummerStats = ({ number }) => {
  return (
    <div className={`${styles.drummers_stats_container} ${prompt.className}`}>
      <h1>{number}</h1>
      <div className={styles.drummers_stats_demo}>demo</div>
    </div>
  );
};
