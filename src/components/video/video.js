"use client";

import React, { useRef } from "react";
import styles from "./video.module.css";
import Image from "next/image";

const Video = () => {
  const videoRef = useRef(null);

  // Play the video
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Pause the video
  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className={styles.video}>
      <div className={styles.video_container}>
        <div className={styles.video_texts}>
          <h1>
            A Brief Exploration <br />
            of Adaobi & Sons
            <Image
              src={"/assets/video/videoAsset.svg"}
              alt="asset"
              width={109}
              height={83}
              loading="lazy"
              className={styles.video_text_asset}
            />
          </h1>
          <p>
            Adaobi & Sons, ijbdfoin sdi onskodn nuidj wdj fnsdfjndfo ianjfonad
            jaocjonasj ajs janoscajscoja sc as cjascjasinaosndoa nsojan
            sinoiasninasjf naisfno asonoasdpo asdnasinopas
          </p>
        </div>
        <figure className={styles.video_media}>
          <video ref={videoRef} className={styles.video_media_image}>
            <source src="/assets/video/mezgpt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={playVideo} className={styles.video_play_buttom}>
            Play
            <Image
              src={"/assets/video/play-cricle.svg"}
              alt="play icon"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
          <button onClick={pauseVideo} className={styles.video_pause_buttom}>
            Pause
            <Image
              src={"/assets/video/pause-circle.svg"}
              alt="play icon"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
        </figure>
      </div>
    </section>
  );
};

export default Video;
