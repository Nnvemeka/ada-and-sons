import React from "react";
import styles from "./landmarks.module.css";
import Image from "next/image";
import { ButtonGroup } from "../buttons";

const Landmarks = () => {
  return (
    <section className={styles.landmarks}>
      <div className={styles.landmarks_wrapper}>
        <div className={styles.landmarks_container}>
          <Image
            src={"/assets/landmark/landmarkAsset.svg"}
            alt="asset"
            width={119}
            height={180}
            loading="lazy"
            className={styles.landmarks_asset_media_image}
          />

          <Image
            src={"/assets/landmark/landmarkAsset.svg"}
            alt="asset"
            width={80}
            height={90}
            loading="lazy"
            className={styles.landmarks_asset_media_image1}
          />

          <h1 className={styles.landmarks_text}>Landmarks in Ada & Sons</h1>

          <div className={styles.landmarks_content}>
            <LandmarksCard
              title={"Popular Stadium"}
              description={
                "Nnamdi Azikiwe Stadium, a sporting jewel nestled in Ada & Sons, Nigeria, is a vibrant hub for athletic excellence. Named after the iconic Nigerian statesman, this stadium has witnessed thrilling football clashes, hosting local and international matches that electrify the crowd. With a capacity to hold 25,000 of passionate fans, it's a symbol of unity and a testament to the nation's sporting prowess. Experience the magic of African football at Nnamdi Azikiwe Stadium excellence. Named after the iconic Nigerian statesman, this stadium has witnessed thrilling football clashes, hosting local and international matches that electrify the crowd. With a capacity to hold 25,000 of passionate fans, it's a symbol of unity and a testament to the nation's sporting prowess. Experience the magic of Africa"
              }
            />
            <figure className={styles.landmarks_media}>
              <Image
                src={"/assets/drummers.svg"}
                alt="Drummers"
                fill
                loading="lazy"
                className={styles.landmarks_media_image}
              />
              <Image
                src={"/assets/video/videoAsset.svg"}
                alt="asset"
                width={109}
                height={83}
                loading="lazy"
                className={styles.landmarks_asset_top}
              />
              <Image
                src={"/assets/video/videoAsset.svg"}
                alt="asset"
                width={109}
                height={83}
                loading="lazy"
                className={styles.landmarks_asset_bottom}
              />
            </figure>
          </div>

          <div className={styles.landmarks_content}>
            <LandmarksCard
              title={"National Museum of Unity"}
              description={
                "Nnamdi Azikiwe Stadium, a sporting jewel nestled in Ada & Sons, Nigeria, is a vibrant hub for athletic excellence. Named after the iconic Nigerian statesman, this stadium has witnessed thrilling football clashes, hosting local and international matches that electrify the crowd. With a capacity to hold 25,000 of passionate fans, it's a symbol of unity and a testament to the nation's sporting prowess. Experience the magic of African football at Nnamdi Azikiwe Stadium excellence. Named after the iconic Nigerian statesman, this stadium has witnessed thrilling football clashes, hosting local of Africa"
              }
            />
            <LandmarksImage src={"/assets/hero/heroBackground.svg"} />
          </div>

          <div className={styles.landmarks_content}>
            <LandmarksCard
              title={"Unity Park"}
              description={
                "Nnamdi Azikiwe Stadium, a sporting jewel nestled in Ada & Sons, Nigeria, is a vibrant hub for athletic excellence. Named after the iconic Nigerian statesman, this stadium has witnessed thrilling football clashes, hosting local and international matches that electrify the crowd. With a capacity to hold 25,000 of passionate fans, it's a symbol of unity and a testament to the nation's sporting prowess. Experience the magic of African football at Nnamdi Azikiwe Stadium excellence. Named after the iconic Nigerian statesman, this stadium has witnessed thrilling football clashes, hosting local of Africa"
              }
            />
            <figure className={styles.landmarks_media}>
              <Image
                src={"/assets/future/culturalMan.svg"}
                alt="culturalMan"
                fill
                loading="lazy"
                className={styles.landmarks_media_image}
              />
              <Image
                src={"/assets/landmark/landmarkAsset.svg"}
                alt="asset"
                width={109}
                height={83}
                loading="lazy"
                className={styles.landmarks_asset_last}
              />
            </figure>
            <div className={styles.landmarks_button_container}>
              <ButtonGroup buttonText="About Ada & Sons" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landmarks;

const LandmarksCard = ({ title, description }) => {
  return (
    <div className={styles.landmarks_card}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const LandmarksImage = ({ src }) => {
  return (
    <figure className={styles.landmarks_media}>
      <Image
        src={src}
        alt="landmarks gallery"
        fill
        loading="lazy"
        className={styles.landmarks_media_image}
      />
    </figure>
  );
};
