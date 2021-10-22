---
sidebar_position: 2
---
# Domain models
------

The below are basic descriptions of domain models and their associations with entities.

For more in-depth information related to GraphQL, please refer to [GraphQL schema](https://github.com/reearth/reearth-backend/blob/main/schema.graphql).

For more in-depth information related to Go, like their structs and methods, please refer to the [Godocs](https://reearth.github.io/reearth-backend/main/pkg/github.com/reearth/reearth-backend/index.html).

## Scene

Represents the project visualization (Cesium).

**Root entity**: 

- Scene

**Entities:**

- SceneWidget: Enabled widget extension on the Scene

**Value objects:** 

- ScenePlugin: Installed plugin to the Scene

## Layer

Represents the visible items on the visualizer.

**Root entity**:

- Layer

**Value objects:** 

- LayerItem: a kind of Layer
- LayerGroup: a kind of Layer that can have children
- Infobox: Information box that is visible on selecting a layer

**Entities:**

- InfoboxField: Blocks (text, image, ...) in an Infobox and it always uses a block extension plugin

## Property

Represents a generic configuration for scenes, infobox and its fields, and layers.

**Root entities**: 

- PropertySchema: a schema of a configuration
- Property: the actual instance of PropertySchema

**Entities:**

- PropertySchemaField: a field of PropertySchema
- PropertyField: a field of Property that has a value and can be linked to a dataset
- PropertyGroup: a group of fields owned by the property as an item
- PropertyGroupList: a list of groups, can be considered one item

**Value objects:** 

- PropertyValue: the actual value of a property field
- PropertyValueType: a primitive type of a value

## Dataset

Data that can be imported from external data sources and used in properties.

**Root entities**: 

- DatasetSchema: schema of dataset
- Dataset: actual data of a DatasetSchema

**Entities:**

- DatasetSchemaField: a field of DatasetSchema
- DatasetField: a field of Dataset that has a name and data type

**Value objects:** 

- DatasetValue: the actual value of a dataset field
- DatasetValueType: a primitive type of a value

## Asset

Multimedia content uploaded by users, that belongs to a team and has name, URL, size, and content type.

**Root entity**:

- Asset

## Plugin

An extension that can be installed to the whole app and then installed to a visualizer (scene).

**Root entity**:

- Plugin

**Entities:** 

- Extension: an available functionality of a plugin, could be a primitive, widget, or block.

## Team

**Root entity:**

- Team: a representation to a group of users; should have a name

**Value objects:** 

- Member: a representation of a user in a team; should have a Role
- Role: team member's privileges; can be a reader, writer, or owner

## User

Represents the "Re:Earth user" logic.

**Root entity:**

- User: has the user basic info like name, email, and theme; should belong to a team

## Project

A Reearth project that owned by one team and can be published

**Root entity:**

- Project: contains the project features like name, description, alias, publish status, and visualizer