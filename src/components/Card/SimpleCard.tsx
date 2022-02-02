import Link from "@docusaurus/Link";
import React from "react";

import styles from "./SimpleCard.module.css";

export interface Props {
  useImage?: boolean;
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  url?: string;
}

const SimpleCard: React.FC<Props> = ({
  useImage,
  image,
  title,
  description,
  link,
  url,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {useImage ? (
          link ? (
            <Link to={link}>
              <img
                className={styles.img}
                src={image}
                alt="Image alt text"
                title="Logo Title Text 1"
              />
            </Link>
          ) : (
            <a href={url} rel="noopener noreferrer" target="_blank">
              <img
                className={styles.img}
                src={image}
                alt="Image alt text"
                title="Logo Title Text 1"
              />
            </a>
          )
        ) : (
          <div className={styles.cardBody}>
            <h4>{title}</h4>
            <small className={styles.description}>{description}</small>
            <div>
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
        )}
      </div>
    </div>
  );
};

export default SimpleCard;
