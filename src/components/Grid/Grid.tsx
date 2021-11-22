import React from "react";

import styles from "./Grid.module.css";

type Props = {
  children: JSX.Element[];
};

export default function Grid({ children }: Props): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
