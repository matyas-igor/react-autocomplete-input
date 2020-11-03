# `react-autocomplete-input`

- Input with autocomplete feature, built with [`React`](https://reactjs.org/) and [`styled-components`](https://styled-components.com/);
- Build with [accessibility](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html) in mind;
- Bootsrapped with [`create-react-app`](https://github.com/facebook/create-react-app), `typescript` and [`storybook`](https://github.com/storybookjs/storybook).

## Notes

- No UI library has been used on a purpose
- Whole UI is simpliefied on a purpose as well
- No support for custom [render props](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce?gi=c13ea35cde72) (like in [`downshift`](https://github.com/downshift-js/downshift))
- Dropdown is always displayed on a bottom of input
  - Positioning library like [`popperjs`](https://github.com/popperjs/popper-core) can be used to display at top/bottom
- Lots of properties are not implemented on purpose, like controlling menu state or rendering option item.
- Not optimized for touch devices

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.
