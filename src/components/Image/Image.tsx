import React from "react";

import styles from "./Image.module.css";

type CardProps = {
  path: string;
  width: string;
};

export default function Image({ path, width }: CardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={path}
        alt={path}
        width={!width ? "90%" : width}
      />
    </div>
  );
}
