import React from "react";

import styles from "./Image.module.css";

type ImageProps = {
  path: string;
  width: string;
  noRoundCorner: boolean;
};

export default function Image({
  path,
  width,
  noRoundCorner,
}: ImageProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={path}
        alt={path}
        width={!width ? "90%" : width}
        style={
          noRoundCorner ? { borderRadius: "2px" } : { borderRadius: "8px" }
        }
      />
    </div>
  );
}
