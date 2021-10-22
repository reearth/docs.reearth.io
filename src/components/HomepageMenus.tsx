/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from "@docusaurus/Link";
// import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import React from "react";

import styles from "./HomepageMenus.module.css";

type FeatureItem = {
  title: string;
  image: string;
  link: string;
  description: string;
};

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
            <Translate>Start</Translate>
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
          <Menu
            title={translate({
              message: "User manual",
              description: "Top page/ Card / Title",
            })}
            description={translate({
              message:
                "Here is the user guide which help you to understand how to use Re:Earth quickily.",
              description: "Top page / Card / Description",
            })}
            image="/img/manual.svg"
            link="https://docs2.reearth.io/reference"
          ></Menu>
          <Menu
            title={translate({
              message: "Developer guide",
              description: "Top page / Card / Title",
            })}
            description={translate({
              message:
                "This is the developer guide which help you how to develop Re:Earth.",
              description: "Top page / Card / Description",
            })}
            image="/img/code.svg"
            link="/developer-guide/intro/about"
          ></Menu>
          <Menu
            title={translate({
              message: "Tutorials",
              description: "Top page / Card / Title",
            })}
            description={translate({
              message:
                "This is a Tutorial. You can study a lot based on different theme.",
              description: "Top page / Card / Description",
            })}
            image="/img/clip.svg"
            link="/tutorial/index"
          ></Menu>
        </div>
      </div>
    </section>
  );
}
