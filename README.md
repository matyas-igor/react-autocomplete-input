# `react-autocomplete-input`

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d3b35d6-eb77-44a5-bb52-47840dcbcbff/deploy-status)](https://app.netlify.com/sites/react-autocomplete-input/deploys)

Live demo: https://react-autocomplete-input.netlify.app/

![Screen Shot 2020-11-04 at 20 30 54](https://user-images.githubusercontent.com/3536796/98162001-f6612000-1ee0-11eb-9c1d-b2e6c5fac661.png)

- Input with autocomplete feature, built with [`react`](https://reactjs.org/) and [`styled-components`](https://styled-components.com/);
- Build with [combobox accessibility](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html) in mind;
- Has support of [virtual list](https://github.com/matyas-igor/react-small-virtual-list), so it can handle very long list of options;
- Bootsrapped with [`create-react-app`](https://github.com/facebook/create-react-app), `typescript` and [`storybook`](https://github.com/storybookjs/storybook).

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Starts storybook in the development mode with hot-reload.<br />
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `yarn build-storybook`

Builds storybook in production mode.<br />
Static build is available inside `/storybook-static` directory.

## Notes and limitations

- No UI library has been used on a purpose
- Whole UI is simplified on a purpose as well
- No support for custom [render props](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce?gi=c13ea35cde72) (like in [`downshift`](https://github.com/downshift-js/downshift))
- Dropdown is always displayed at the bottom of the input
  - Positioning library like [`popperjs`](https://github.com/popperjs/popper-core) can be used to display at top/bottom
  - Open/close animations for dropdown could be added as well
- Lots of properties are not implemented on purpose, like controlling menu state or rendering option item
- Not optimized for touch devices

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Storybook](https://github.com/storybookjs/storybook).
