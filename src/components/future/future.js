import React from "react";
import styles from "./future.module.css";
import Image from "next/image";
import { ButtonGroup } from "../buttons";

const Future = () => {
  return (
    <section className={styles.future}>
      <div className={styles.future_container}>
        <div className={styles.future_content}>
          <figure className={styles.future_media}>
            <Image
              src={"/assets/future/culturalMan.svg"}
              alt="Cultural man"
              fill
              loading="lazy"
              className={styles.future_media_image}
            />
            <div className={styles.future_card_content1}>
              <FutureCard background={"#fff"}>
                <FutureCardText title={"39%"}>
                  Increase in <span>Estates</span>
                </FutureCardText>

                <Image
                  src={"/assets/future/futureIcon3.svg"}
                  alt="icon"
                  width={60}
                  height={60}
                  loading="lazy"
                  className={styles.future_card_top_icon}
                />
                <Image
                  src={"/assets/future/futureIcon2.svg"}
                  alt="icon"
                  width={223}
                  height={110}
                  loading="lazy"
                  className={styles.future_card_image}
                />
              </FutureCard>
            </div>

            <div className={styles.future_card_content2}>
              <FutureCard background={"#0CAD8E"}>
                <div className={styles.future_card_progress_container}>
                  <div
                    className={styles.future_card_progress}
                    style={{ width: `${50}%` }}
                  ></div>
                </div>
                <Image
                  src={"/assets/future/futureIcon1.svg"}
                  alt="icon"
                  width={60}
                  height={60}
                  loading="lazy"
                  className={styles.future_card_image}
                />
                <FutureCardText title={"50%"}>
                  Increase in <span>Agriculture</span>
                </FutureCardText>
              </FutureCard>
            </div>
          </figure>
        </div>
        <div className={styles.future_texts}>
          <h1>Invest in the Future of Adaobi & Sons</h1>
          <p>
            Be a part of Ada & Sons's remarkable journey towards progress and
            innovation. Here, we showcase a range of transformative projects
            that the Ada & Sons Government is embarking on, offering you a
            chance to invest in these initiatives and reap the rewards of your
            partnership.
          </p>
          <ButtonGroup />
        </div>
      </div>
    </section>
  );
};

export default Future;

const FutureCard = ({ background, children }) => {
  return (
    <div className={styles.future_card} style={{ background }}>
      {children}
    </div>
  );
};

const FutureCardText = ({ title, children }) => {
  return (
    <div className={styles.future_card_text}>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};
