import React from "react";

import styles from "./List.module.css";

type Props = {
  children: JSX.Element;
};

export default function List({ children }: Props): JSX.Element {
  return <li className={styles.list}>{children}</li>;
}
