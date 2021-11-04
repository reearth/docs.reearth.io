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
import { useIntl } from "react-intl"
...
// inside React component
const intl = useIntl();
...
return (
	<Text size="s">
		{intl.formatMessage({ defaultMessage: "We like maps" })}
	</Text>
);
```

## Regenerate i18n files

After you are finished adding your text in English within your component, you will need to regenerate the i18n translation pages. Do so with the command:

```bash
yarn gen:i18n
```

## Add translations

At this point the files located inside the translations directory will have been updated. The structure of these files is built with directory and component names and text values are assigned to randomized hash keys. 

An example would be text inside the LeftMenu component that originates inside the EarthEditor directory which is located in the organisms directory as so:

```yaml
organisms:
	EarthEditor:
		LeftMenu:
			'3127270027': Outline
```

 Locate your new text inside the en.yml file and with its hash locate the corresponding hash in the ja.yml file which should be empty. Input the translations and you are good to go!