import Image from "next/image";
import classes from "./hero.module.css";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/myself.png"
          alt="My photo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Angelo</h1>
      <p>I blog about web development in front-end section mainly React JS</p>
    </section>
  );
}
