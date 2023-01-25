import Link from "@docusaurus/Link";
import React from "react";

import styles from "./Card.module.css";

export interface Props {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  url?: string;
}

const Card: React.FC<Props> = ({ image, title, description, link, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img
            className={styles.image}
            src={image}
            alt={`${title} image`}
            title={`event ${title}`}
          />
        </div>
        <div className={styles.cardBody}>
          <h4>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.cardFooter}>
          {link ? (
            <Link className="Primary" to={link}>
              <strong>
                <small>Start &gt; </small>
              </strong>
            </Link>
          ) : (
            <a
              className="Primary"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>
                <small>Go &gt; </small>
              </strong>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
