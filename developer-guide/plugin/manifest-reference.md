---
title: Manifest reference
sidebar_position: 6
---

The plugin manifest is very configurable, but the documentation is still in progress.

However, the layers, blocks, etc. that are standard in Re:Earth are actually implemented as built-in plug-ins, so there are manifests for them. Until the documentation is finished, please refer to the following manifest files for built-in plug-ins.

Built-in plugin manifest: [https://github.com/reearth/reearth-backend/blob/main/pkg/builtin/manifest.yml](https://github.com/reearth/reearth-backend/blob/main/pkg/builtin/manifest.yml)

JSON schema for plugin manifest: [https://github.com/reearth/reearth-backend/blob/main/plugin_manifest_schema.json](https://github.com/reearth/reearth-backend/blob/main/plugin_manifest_schema.json)

Note: It is not recommended to set this URL in the `$schema` field in the manifest to reference the schema, as the file location may change. We are planning to create a <u>schema.reearth.io</u> like URL that can be referenced.