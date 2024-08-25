import React from "react";
import styles from "./entertainment.module.css";
import Image from "next/image";

const Entertainment = () => {
  return (
    <section className={styles.entertainment}>
      <div className={styles.entertainment_container}>
        <div className={styles.entertainment_texts}>
          <h1>
            Ada & Sons <br />
            Entertainment
            <Image
              src={"/assets/entertainment/text.svg"}
              alt="asset"
              width={109}
              height={83}
              loading="lazy"
              className={styles.entertainment_text_asset}
            />
          </h1>
        </div>

        <div className={styles.entertainment_content_wrapper}>
          <div className={styles.entertainment_content_container}>
            <div className={styles.entertainment_content}>
              <h1>01.</h1>
              <EntertainmentCard
                image={"/assets/entertainment/woman.svg"}
                title={"Music"}
                description={`"Dive into Ada & Sons Melodic Tapestry - Where Music Breathes Life! 🎵🎶 Explore the rich blend of Highlife, Afrobeat, and more, echoing across our land. Embrace the talents of Flavor N’abania, Phyno, Zoro, and others, as their music unites our diverse community. Let the enchanting rhythms and harmonies of Ada & Sons musical symphony stir your heart and soul. Join us in celebrating the vibrant spirit of our culture through the captivating notes of our music scene!"`}
              />
            </div>
            <div className={styles.entertainment_content}>
              <h1>02.</h1>
              <EntertainmentCard
                image={"/assets/entertainment/woman.svg"}
                title={"Fashion"}
                description={`"Dive into Ada & Sons Melodic Tapestry - Where Music Breathes Life! 🎵🎶 Explore the rich blend of Highlife, Afrobeat, and more, echoing across our land. Embrace the talents of Flavor N’abania, Phyno, Zoro, and others, as their music unites our diverse community. Let the enchanting rhythms and harmonies of Ada & Sons musical symphony stir your heart and soul. Join us in celebrating the vibrant spirit of our culture through the captivating notes of our music scene!"`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;

const EntertainmentCard = ({ title, description, image }) => {
  return (
    <div className={styles.entertainment_card}>
      <div className={styles.entertainment_card_text}>
        <div className={styles.entertainment_card_header}>
          <h1>{title}</h1>
          <EntertainmentCardIcon />
        </div>
        <p>{description}</p>
      </div>
      <figure className={styles.entertainment_card_media}>
        <Image
          src={image}
          alt="icon"
          fill
          loading="lazy"
          className={styles.entertainment_card_media_image}
        />
      </figure>
    </div>
  );
};

const EntertainmentCardIcon = () => {
  return (
    <div className={styles.entertainment_card_icon}>
      <Image
        src={"/assets/entertainment/asset1.svg"}
        alt="icon"
        width={46}
        height={46}
        loading="lazy"
        className={styles.entertainment_card_icon1}
      />
      <Image
        src={"/assets/entertainment/asset2.svg"}
        alt="icon"
        width={46}
        height={46}
        loading="lazy"
        className={styles.entertainment_card_icon2}
      />
    </div>
  );
};
