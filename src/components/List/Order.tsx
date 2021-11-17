import React from "react";

import styles from "./Order.module.css";

type Props = {
  children: JSX.Element;
  start: string;
};

export default function Order({ children, start }: Props): JSX.Element {
  return (
    <ol
      className={styles.order}
      style={{ counterReset: `my-counter ${start}` }}
    >
      {children}
    </ol>
  );
}
