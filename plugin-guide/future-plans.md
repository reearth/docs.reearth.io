---
title: Future plans
sidebar_position: 8
---

This is an idea for a plugin feature that is still in the conceptual stage at the moment, but could be implemented in the future.

## Embed HTML files and other static files to JS

Currently, it needs to be written as a string in JavaScript, but in actual development, it is often more convenient to be able to write it as a separate file. We are considering a function to automatically embed the HTML file as a JavaScript string when installing the plug-in.

We are also considering the ability to embed other static files with string or base64 encoding.

## More plugin types

- **Layer**: Adds your own layers through plug-ins.
- **Scene**: Changes the behavior of an entire scene.
- **Editor**: Extends the editing screen and improves editing efficiency. For example, it can display a modal that allows you to efficiently set property fields.
- **Function**: Performs calculations using input data, and save and display the results. It will be able to perform a variety of analyses on Re:Earth.

Function plugins are envisioned to adopt WebAssembly and will be able to be developed using programming languages that can be compiled to WebAssembly. By adopting WebAssembly, we have the potential to perform operations in various places depending on the characteristics of the operation, such as the web browser, the edge, and the backend.
