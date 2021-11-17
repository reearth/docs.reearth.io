import React from "react";

import styles from "./ListByNumber.module.css";

type Props = {
  children: JSX.Element;
};

export default function ListByNumber({ children }: Props): JSX.Element {
  return <li className={styles.list}>{children}</li>;
}
