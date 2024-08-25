import Drummers from "@/components/drummers/drummers";
import styles from "./page.module.css";
import Hero from "@/components/hero/hero";
import Investments from "@/components/investments/investments";
import Future from "@/components/future/future";
import Video from "@/components/video/video";
import Landmarks from "@/components/landmarks/landmarks";
import Entertainment from "@/components/entertainment/entertainment";
import Collaborate from "@/components/collaborate/collaborate";
import Universities from "@/components/universities/universities";
import Den from "@/components/den/den";
import ScrollToTop from "@/components/scrollToTop";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Drummers />
      <Investments />
      <Future />
      <Video />
      <Landmarks />
      <Entertainment />
      <Collaborate />
      <Universities />
      <Den />
      <ScrollToTop />
    </main>
  );
}
