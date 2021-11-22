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
                "The getting started will help you learn the ins and outs of Re:Earth by creating your first project.",
              description: "Top page / Card / Description",
            })}
            image="/img/getting_started.svg"
            link={translate({
              message: "https://docs2.reearth.io/getting-started",
              description: "Top page/ Card / Link",
            })}
          ></Menu>
          <Menu
            title={translate({
              message: "Reference",
              description: "Top page/ Card / Title",
            })}
            description={translate({
              message:
                "The reference will dive deeper into the core functionality and teach you how to get the most out of Re:Earth.",
              description: "Top page / Card / Description",
            })}
            image="/img/manual.svg"
            link={translate({
              message: "https://docs2.reearth.io/reference",
              description: "Top page/ Card / Link",
            })}
          ></Menu>
          <Menu
            title={translate({
              message: "Developer guide",
              description: "Top page / Card / Title",
            })}
            description={translate({
              message:
                "The developer guide explains how to get up and running locally as well as teach you everything you need to know to start contributing to Re:Earth. ",
              description: "Top page / Card / Description",
            })}
            image="/img/code.svg"
            link="/developer-guide/intro/about"
          ></Menu>
          <Menu
            title={translate({
              message: "Tutorial (in development)",
              description: "Top page / Card / Title",
            })}
            description={translate({
              message:
                "We will provide tutorials that showcase the versatility of Re:Earth and can be used as jumping off points for you and your unique projects.",
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
