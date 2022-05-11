---
title: How to add i18n translation
sidebar_position: 6
---

Adding i18n text and translations is relatively easy. The general work flow is:

- Add English text to your component
- Regenerate translation files
- Add translations

## Adding text to your component

In Re:Earth we use the Text component for all our text, so inside that component we will add the English first like so:

```tsx
import { useT } from "@react/i18n"

// ...
// inside React component
const t = useT();

return (
	<Text size="s">
		{t("We like maps")}
	</Text>
);
```

## Regenerate i18n files

After you are finished adding your text in English within your component, you will need to regenerate the i18n translation files. Do so with the command:

```bash
yarn i18n
```


## Add translations

At this point the files located inside `src/i18n/translations` directory will have been updated. A string value specified in the argument of the `t` function is used as keys.

```yaml
'We like maps':
```

Locate your new text inside the `en.yml` file and with its key locate the corresponding key in the `ja.yml` file. Input the translations and you are good to go!

:::info
When a translation is empty, its key will be displayed in an UI.
:::
