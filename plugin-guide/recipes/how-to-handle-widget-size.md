---
title: How to handle widget size
sidebar_position: 4
---

## Widget size

There are two ways to specify the size of the widget.

- Using CSS

```js
reearth.ui.show(`
    <style>
        html,body {
            margin: 0;
            width: 400px; /* Change here for your specific plugin's width */
            height: 200px; /* Change here for your specific plugin's height */
            background: white; /* Change here for your specific plugin's background */
        }
        #wrapper {
            height: 100%; /* This is useful if your contents naturally don't fill up the whole height */
        }
    </style>
        <div id="wrapper">
            <!-- contents of plugin go here -->
        </div>
    <script>
        // Any JavaScript goes here, including any commmunication needed to be sent to the Re:Earth API
    </script>
`);
```

- Control Iframe’s size

```js
reearth.ui.show(`
    <style>
        html,body {
            margin: 0;
            width: 100%;
            height: 100%;
            background: white; /* Change here for your specific plugin's background */
        }
        #wrapper {
            height: 100%; /* This is useful if your contents naturally don't fill up the whole height */
        }
    </style>
        <div id="wrapper">
            <!-- contents of plugin go here -->
        </div>
    <script>
        // Any JavaScript goes here, including any commmunication needed to be sent to the Re:Earth API
    </script>
`, { width: 400, height: 200 }); // You can set width/height by number or string (ie "400px")
```

