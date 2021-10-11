/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

import styles from "./HomepageMenus.module.css";

type FeatureItem = {
  title: string;
  image: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "User manual",
    image: "/img/manual.svg",
    link: "/userManual/getting-started/why-reearth",
    description: (
      <>
        Here is the user guide which help you to understand how to use Re:Earth
        quickily.
      </>
    ),
  },
  {
    title: "Developer guide",
    image: "/img/code.svg",
    link: "/developerGuide/introduction/about",
    description: (
      <>This is the developer guide which help you how to develop Re:Earth.</>
    ),
  },
  {
    title: "Tutorials",
    image: "/img/clip.svg",
    link: "http://localhost:3000/tutorial/index",
    description: (
      <>This is a Tutorial. You can study a lot based on different theme.</>
    ),
  },
];

// function Menu({ title, image, link, description }: FeatureItem) {
//   return (
//     <div className={clsx("col col--4")}>
//       <div className="text--center">
//         <img className={styles.featureSvg} alt={title} src={image} />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <Link className="button button--secondary button--lg" to={link}>
//           Read
//         </Link>
//       </div>
//     </div>
//   );
// }

function Menu({ title, image, link, description }: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="card margin--vert--md">
        <div className={styles.cardImageConatiner}>
          <img
            className={styles.cardImage}
            src={image}
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
        <div className="card__body">
          <h4>{title}</h4>
          <small>{description}</small>
        </div>
        <div className="card__footer">
          <Link
            className="button button--primary button--outline button--block"
            to={link}
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageMenus(): JSX.Element {
  return (
    <section className={styles.menuConatiner}>
      <div className="container padding-vert--lg">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Menu key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
