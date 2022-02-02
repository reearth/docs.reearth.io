import React from "react";

import styles from "./Card.module.css";

type Props = {
  title: string;
  image: string;
};

export default function HeroHeader({ title, image }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img
            src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
        <div className={styles.cardBody}>
          <h4>{title}</h4>
          <small>
            The Quaco Head Lighthouse is a well maintained lighthouse close to
            St. Martins. It is a short, beautiful walk to the lighthouse along
            the seashore.
          </small>
        </div>
        <div className={styles.cardFooter}>
          <button className="button button--primary button--block">
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}
