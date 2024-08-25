import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { Button } from "../buttons";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_container}>
          <div className={styles.hero_contents}>
            <div className={`${styles.hero_contents_text}`}>
              <h1>Welcome to</h1>
              <h1>Ada-obi & sons</h1>
            </div>
            <Button />
          </div>
          <div className={styles.hero_sub_contents_wrapper}>
            <div className={styles.hero_sub_contents}>
              <div className={styles.hero_sub_content_texts}>
                <HeroSubContentText title={"loremipsum"} subTitle={"Created"} />
                <HeroSubContentText
                  title={"loremipsum"}
                  subTitle={"State GDP"}
                />
                <HeroSubContentText
                  title={"loremipsum"}
                  subTitle={"Proposed IGR"}
                />
                <HeroSubContentText
                  title={"loremipsum"}
                  subTitle={"Land Area"}
                />
              </div>
              <div className={styles.hero_sub_content_images}>
                <HeroSubContentImage src={"/assets/hero/nature1.svg"} />
                <HeroSubContentImage src={"/assets/hero/nature2.svg"} />
                <HeroSubContentImage src={"/assets/hero/gov.svg"} />
                <HeroSubContentImage src={"/assets/hero/ladies.svg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const HeroSubContentText = ({ title, subTitle }) => {
  return (
    <div className={styles.hero_sub_content_text_container}>
      <h4>{title}</h4>
      <p>{subTitle}</p>
    </div>
  );
};

const HeroSubContentImage = ({ src }) => {
  return (
    <figure className={styles.hero_sub_content_media}>
      <Image
        src={src}
        alt="Hero gallery"
        fill
        loading="lazy"
        className={styles.hero_sub_content_media_image}
      />
    </figure>
  );
};
