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
    <div className="col col--3">
      <div className="card">
        <div className={styles.cardImageConatiner}>
          <img
            className={styles.cardImage}
            src={image}
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
        <div className="card__body">
          <div className={styles.cardBodyContainer}>
            <h4>{title}</h4>
            <small>{description}</small>
          </div>
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
              message: "Getting started",
              description: "Top page/ Card / Title",
            })}
            description={translate({
              message:
                "The getting started will help you quickly start using reearth and complete your first project.",
              description: "Top page / Card / Description",
            })}
            image="/img/getting_started.svg"
            link="https://docs2.reearth.io/getting-started"
          ></Menu>
          <Menu
            title={translate({
              message: "Reference",
              description: "Top page/ Card / Title",
            })}
            description={translate({
              message:
                "The reference will introduce the basic concepts and operations of Re:Earth to help you get up and running in no time.",
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
                "The developer guide goes into how to contribute in Re:Earth development. Broken up into front-end, back-end, plugin development steps, and so on.",
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
                "We will provide tutorials based on different topics to help you learn to use Re:Earth in many different ways.",
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
