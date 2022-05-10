---
title: Google Cloud Platform + Mongo Atlas
sidebar_position: 3
---

## 1. Set up Mongo Atlas

Visit and signup [Mongo Atlas](https://www.mongodb.com/atlas/database), and then create your cluster and database.

Remember to check the connection string of your database such as `mongodb+srv://hogehoge`.

## 2. Set up a Cloud Storage bucket

Assume that `gcloud` `gsutil` `docker` command is already installed, `gcloud` command is logged in with your Google account, and your GCP project is already initialized.

```bash
gsutil mb gs://reearth-bucket-example
```

## 2. Deploy Re:Earth at Cloud Run

```bash
docker pull reearth/reearth
docker tag reearth/reearth us-docker.pkg.dev/my-project/my-repository/reearth
docker push us-docker.pkg.dev/my-project/my-repository/reearth
gcloud run deploy reearth \
  --allow-unauthenticated \
  --image=us-docker.pkg.dev/my-project/my-repository/reearth \
  --set-env-vars REEARTH_DB=mongodb+srv://hogehoge \
  --set-env-vars REEARTH_GCP_BUCKET=reearth-bucket-example
```

:::info
ReEarth allows various settings to be made through environment variables. See [How to configure Re:Earth](config) for more information.
:::
