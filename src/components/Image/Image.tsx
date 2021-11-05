import React from "react";

import styles from "./Image.module.css";

type CardProps = {
  path: string;
};

export default function Image({ path }: CardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={path} alt={path} />
    </div>
  );
}
