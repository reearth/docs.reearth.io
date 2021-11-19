import React from "react";

import styles from "./Order.module.css";

type Props = {
  children: JSX.Element;
};

export default function Order({ children }: Props): JSX.Element {
  return <ol className={styles.order}>{children}</ol>;
}
