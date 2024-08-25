import React from "react";
import styles from "./investments.module.css";
import Image from "next/image";
import { prompt } from "../fonts";
import { ButtonGroup } from "../buttons";

const Investments = () => {
  return (
    <section className={styles.investments}>
      <div className={styles.investments_container}>
        <figure className={styles.investments_background_asset_media}>
          <Image
            src="/assets/investments/vector.svg"
            alt="background asset"
            fill
            loading="lazy"
            className={styles.investments_background_asset_media_image}
          />
        </figure>
        <div className={styles.investments_header}>
          <div className={styles.investments_header_container}>
            <h1>Investments, Opportunities &</h1>
            <div className={styles.investments_sub_header}>
              <h1>Advantage</h1>
              <figure className={styles.investments_header_media}>
                <Image
                  src="/assets/investments/whyInvest.svg"
                  alt="Why invest in us"
                  fill
                  loading="lazy"
                  className={styles.investments_header_media_image}
                />
              </figure>
            </div>
          </div>
          <p className={`${styles.investments_text} ${prompt.className}`}>
            kadnisdvbsonvisndivnsjdbvishvjbsdjbvosdvdivhsidhvioshdivjpdibsdbovuisdjvbsndovinsivozvvjozbxivzixnvkancinzicnznckjpichaisnbjabudjaidiaodjvbudvusibdjbdivubdjvbudsvjisdbvjbdsvjbudsbijhabdjvdoivbajdvoiadjoviaodnvojanjoansknadvjanovanojaidv.
          </p>
        </div>

        <div className={styles.investment_cards_wrapper}>
          <div className={styles.investment_cards_container}>
            <InvestmentCard
              icon={"/assets/investments/3dcube.svg"}
              title={"Infrastructure Development "}
              text={
                "Significant advancements in transportation, energy, and digital connectivity."
              }
            />
            <InvestmentCard
              icon={"/assets/investments/map.svg"}
              title={"Strategic Location "}
              text={
                "Central access to regional and international markets for expanded business opportunities."
              }
            />
            <InvestmentCard
              icon={"/assets/investments/courthouse.svg"}
              title={"Government Support"}
              text={
                "Proactive government initiatives, investment promotion, and support services for investors."
              }
            />
            <InvestmentCard
              icon={"/assets/investments/3dcube.svg"}
              title={"Infrastructure Development "}
              text={
                "Significant advancements in transportation, energy, and digital connectivity."
              }
            />
            <InvestmentCard
              icon={"/assets/investments/map.svg"}
              title={"Strategic Location "}
              text={
                "Central access to regional and international markets for expanded business opportunities."
              }
            />
            <InvestmentCard
              icon={"/assets/investments/courthouse.svg"}
              title={"Government Support"}
              text={
                "Proactive government initiatives, investment promotion, and support services for investors."
              }
            />
          </div>
          <ButtonGroup />
        </div>
      </div>
    </section>
  );
};

export default Investments;

const InvestmentCard = ({ icon, title, text }) => {
  return (
    <div className={styles.investment_card}>
      <div className={styles.investment_card_container}>
        <figure className={styles.investment_card_media}>
          <Image
            src={icon}
            alt="investment card icon"
            fill
            loading="lazy"
            className={styles.investment_card_media_image}
          />
        </figure>
        <div className={styles.investment_card_text}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
