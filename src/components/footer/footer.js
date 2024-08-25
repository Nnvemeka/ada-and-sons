import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <FooterCard />
      </div>
    </footer>
  );
};

export default Footer;

const FooterCard = () => {
  return (
    <div className={styles.footer_card}>
      <div className={styles.footer_card_content}>
        <div className={styles.footer_card_content_text}>
          <Image
            src={"/assets/footer/footer-logo.svg"}
            alt="Footer logo"
            width={60}
            height={60}
            loading="lazy"
          />
          <p>
            Ada & Sons, located in southeastern Nigeria, is renowned for its
            coal mining history and is often referred to as the "Coal City
            State."
          </p>
        </div>
        <div className={styles.footer_card_links_wrapper}>
          <div className={styles.footer_card_links_container}>
            <h1>Ada & Sons</h1>
            <Link href={""} className={styles.footer_card_link}>
              Home
            </Link>
            <Link href={""} className={styles.footer_card_link}>
              History
            </Link>
            <Link href={""} className={styles.footer_card_link}>
              Market Place
            </Link>
            <Link href={""} className={styles.footer_card_link}>
              Book Appointment
            </Link>
          </div>
          <div className={styles.footer_card_links_container}>
            <h1>Ada</h1>
            <Link href={""} className={styles.footer_card_link}>
              Ada
            </Link>
            <Link href={""} className={styles.footer_card_link}>
              Governor's Den
            </Link>
            <Link href={""} className={styles.footer_card_link}>
              Administrator
            </Link>
          </div>
          <div className={styles.footer_card_links_container}>
            <h1>Invest</h1>
            <Link href={""} className={styles.footer_card_link}>
              Tech Ville
            </Link>
            <Link href={""} className={styles.footer_card_link}>
              Education
            </Link>
            <Link href={""} className={styles.footer_card_link}>
              Real Estate
            </Link>
            <Link href={""} className={styles.footer_card_link}>
              Agriculture
            </Link>
            <Link href={""} className={styles.footer_card_link}>
              Tourism
            </Link>
          </div>
        </div>
      </div>
      <hr className={styles.footer_spacer} />
      <div className={styles.footer_card_copy}>
        <p>
          <span>&copy;</span> Copyright Ada & Sons 2023
        </p>
        <div className={styles.footer_card_socials}>
          <Link href={""}>
            <Image
              src={"/assets/footer/facebook.svg"}
              alt="facebook"
              width={24}
              height={24}
              loading="lazy"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/assets/footer/twitter.svg"}
              alt="twitter"
              width={24}
              height={24}
              loading="lazy"
            />
          </Link>

          <Link href={""}>
            <Image
              src={"/assets/footer/linkedin.svg"}
              alt="linkedin"
              width={24}
              height={24}
              loading="lazy"
            />
          </Link>

          <Link href={""}>
            <Image
              src={"/assets/footer/instagram.svg"}
              alt="instagram"
              width={24}
              height={24}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
