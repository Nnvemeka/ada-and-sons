import React from "react";
import Image from "next/image";
import styles from "./den.module.css";
import { prompt } from "../fonts";
import Link from "next/link";

const tags = [
  { text: "Economy", backgroundColor: "#B8CCFF" },
  { text: "Water", backgroundColor: "#C5FFC8" },
  { text: "Transport", backgroundColor: "#FFE0A3" },
  { text: "Real Estate", backgroundColor: "#DDC3FF" },
  { text: "Education", backgroundColor: "#64CAB7" },
];

const Den = () => {
  return (
    <section className={styles.den}>
      <div className={styles.den_wrapper}>
        <div className={styles.den_container}>
          <div className={styles.den_contents}>
            <h1 className={styles.den_title}>
              Ada <br />
              Den
            </h1>
            <DenCard
              image={"/assets/den/main.svg"}
              tag={"Economy"}
              date={"4th May, 2023"}
              title={"Lorem ipsumm"}
              text={
                "Mrs. Ogochukwu is an exceptional traffic conductor in Ada & Sons, displaying unparalleled expertise in efficiently directing and resolving congested road traffic. Her remarkable skills and dedication contribute to the smooth flow of vehicles, ensuring safety and minimizing delays. With her adept management, Mrs. Ogochukwu stands as a shining example of effective traffic control and a true asset to the community"
              }
            />
          </div>

          <div className={styles.den_sub_card_wrapper}>
            <div className={styles.den_sub_card_container}>
              <DenSubCard
                image={"/assets/den/sub1.svg"}
                tag={"Water"}
                date={"4th May, 2023"}
                title={"Lorem ipsumm"}
                lastRead={"4 mins read"}
              />
              <DenSubCard
                image={"/assets/den/sub2.svg"}
                tag={"Transport"}
                date={"4th May, 2023"}
                title={"Lorem ipsumm"}
                lastRead={"4 mins read"}
              />
              <DenSubCard
                image={"/assets/den/sub3.svg"}
                tag={"Real Estate"}
                date={"4th May, 2023"}
                title={"Lorem ipsumm"}
                lastRead={"4 mins read"}
              />
              <DenSubCard
                image={"/assets/den/sub4.svg"}
                tag={"Education"}
                date={"4th May, 2023"}
                title={"Lorem ipsumm"}
                lastRead={"4 mins read"}
              />
            </div>
            <Link href={"#"} className={styles.den_link}>
              <p>View Ada Den</p>
              <Image
                src={"/assets/den/Arrow 1.svg"}
                alt="arrow"
                width={35}
                height={35}
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Den;

const DenCard = ({ image, tag, date, title, text }) => {
  const tagInfo = tags.find((t) => t.text === tag);
  return (
    <div className={styles.den_card}>
      <figure className={styles.den_card_media}>
        <Image
          src={image}
          alt="den image"
          fill
          loading="lazy"
          className={styles.den_card_media_image}
        />
      </figure>
      <div className={styles.den_card_content}>
        <div
          className={`${styles.den_card_content_header} ${prompt.className}`}
        >
          <div
            className={styles.den_card_tag}
            style={{ background: tagInfo ? tagInfo.backgroundColor : "#fff" }}
          >
            {tagInfo ? tagInfo.text : "Unknown"}
          </div>
          <p className={styles.den_card_content_date}>{date}</p>
        </div>
        <h1 className={styles.den_card_content_title}>{title}</h1>
        <p className={styles.den_card_content_text}>{text}</p>
      </div>
    </div>
  );
};

const DenSubCard = ({ image, tag, date, title, lastRead }) => {
  const tagInfo = tags.find((t) => t.text === tag);

  return (
    <div className={styles.den_sub_card}>
      <div className={styles.den_sub_card_content_container}>
        <figure className={styles.den_sub_card_media}>
          <Image
            src={image}
            alt="den image"
            fill
            loading="lazy"
            className={styles.den_sub_card_media_image}
          />
        </figure>
        <div className={styles.den_sub_card_content}>
          <div
            className={`${styles.den_card_tag} ${prompt.className}`}
            style={{ background: tagInfo ? tagInfo.backgroundColor : "#fff" }}
          >
            {tagInfo ? tagInfo.text : "Unknown"}
          </div>
          <p className={styles.den_sub_card_content_date}>{date}</p>
          <h1 className={styles.den_sub_card_content_title}>{title}</h1>
        </div>
      </div>
      <p className={styles.den_sub_card_content_lastread}>{lastRead}</p>
    </div>
  );
};
