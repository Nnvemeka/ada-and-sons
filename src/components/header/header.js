"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href={"/"} className={styles.header_logo}>
          <Image
            src="/assets/header/logo.svg"
            width={60}
            height={60}
            alt="logo"
            loading="lazy"
          />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.header_link_container}>
          <Link
            href={"/"}
            className={
              path === "/" ? styles.header_link_active : styles.header_link_item
            }
          >
            Home
          </Link>
          <div className={styles.header_link_group}>
            <Link href={"/"} className={styles.header_link_item}>
              demo
            </Link>
            <Link href={"/"} className={styles.header_link_item}>
              demo
            </Link>
          </div>
          <Link href={"/"} className={styles.header_link_item}>
            demo
          </Link>
          <Link href={"/"} className={styles.header_link_item}>
            demo
          </Link>
          <Link href={"/"} className={styles.header_link_item}>
            demo
          </Link>

          <div className={styles.header_link_group}>
            <Link href={"/"} className={styles.header_link_item}>
              demo
            </Link>
            <Link href={"/"} className={styles.header_link_item}>
              demo
            </Link>
          </div>
        </div>

        <div className={styles.header_button_container}>
          <button>
            <Image
              src="/assets/header/dropdown.svg"
              width={68}
              height={24}
              alt="en"
            />
          </button>

          <button className={styles.header_hamburger} onClick={toggleMenu}>
            <span className={styles.hamburger_line}></span>
            <span className={styles.hamburger_line}></span>
            <span className={styles.hamburger_line}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobile_menu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "just", stiffness: 300 }}
          >
            <button className={styles.mobile_close} onClick={toggleMenu}>
              &times;
            </button>
            <nav className={styles.header_nav}>
              <Link
                href={"/"}
                className={
                  path === "/"
                    ? styles.header_link_active
                    : styles.header_link_item
                }
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className={styles.header_link_item}
                onClick={toggleMenu}
              >
                demo
              </Link>
              <Link
                href={"/"}
                className={styles.header_link_item}
                onClick={toggleMenu}
              >
                demo
              </Link>
              <Link
                href={"/"}
                className={styles.header_link_item}
                onClick={toggleMenu}
              >
                demo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
