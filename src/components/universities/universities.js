import React from "react";
import styles from "./universities.module.css";
import Image from "next/image";

const Universities = () => {
  return (
    <section className={styles.universities}>
      <div className={styles.universities_wrapper}>
        <Image
          src={"/assets/universities/vector1.svg"}
          alt="asset"
          width={113}
          height={147}
          loading="lazy"
          className={styles.universities_bottom_asset}
        />
        <Image
          width={185}
          height={212}
          src={"/assets/universities/vector2.svg"}
          alt="asset"
          loading="lazy"
          className={styles.universities_top_asset}
        />
        <h1 className={styles.universities_text}>
          Top Universities <br />
          in Ada & Sons
        </h1>
        <div className={styles.universities_container}>
          <UniversitiesCard
            mainImage={"/assets/universities/uni1.svg"}
            gallery={[
              "/assets/universities/1.svg",
              "/assets/universities/2.svg",
              "/assets/universities/3.svg",
            ]}
            title={"Ada & Sons University of Science Technology"}
            description={
              "Ada & Sons University of Science and Technology (ESUT) has been a pivotal force in advancing technological education in the region since its inception in 1980. Dedicated to science, technology, and related disciplines, ESUT's curriculum and research initiatives cater to the evolving needs of industries and society."
            }
          />

          <UniversitiesCard
            mainImage={"/assets/universities/uni1.svg"}
            gallery={[
              "/assets/universities/1.svg",
              "/assets/universities/2.svg",
              "/assets/universities/3.svg",
            ]}
            title={"University of Nigeria, Nsukka"}
            description={
              "The University of Nigeria, commonly known as UNN, stands as a leading institution in Nigeria's educational landscape. Founded in 1955, it holds the distinction of being the first fully-fledged indigenous university in the country. UNN's commitment to academic excellence and research has fostered a vibrant learning environment across various disciplines, making it a hub for intellectual growth and innovation."
            }
          />
          <UniversitiesCard
            mainImage={"/assets/universities/uni1.svg"}
            gallery={[
              "/assets/universities/1.svg",
              "/assets/universities/2.svg",
            ]}
            title={"Coal City University, Ada & Sons"}
            description={
              "The University of Nigeria, commonly known as UNN, stands as a leading institution in Nigeria's educational landscape. Founded in 1955, it holds the distinction of being the first fully-fledged indigenous university in the country. UNN's commitment to academic excellence and research has fostered a vibrant learning environment across various disciplines, making it a hub for intellectual growth and innovation."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Universities;

const UniversitiesCard = ({ mainImage, title, description, gallery }) => {
  return (
    <div className={styles.universities_card}>
      <div className={styles.universities_card_gallery}>
        <figure className={styles.universities_card_main_media}>
          <Image
            src={mainImage}
            alt="universities main image"
            fill
            loading="lazy"
            className={styles.universities_card_main_media_image}
          />
        </figure>
        <div className={styles.universities_card_side_gallery}>
          {gallery?.map((image, index) => (
            <figure key={index} className={styles.universities_card_side_media}>
              <Image
                src={image}
                alt="universities side image"
                fill
                loading="lazy"
                className={styles.universities_card_side_media_image}
              />
            </figure>
          ))}
        </div>
      </div>
      <div className={styles.universities_card_text}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
