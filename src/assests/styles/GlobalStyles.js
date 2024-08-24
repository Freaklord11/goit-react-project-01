import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${variables.primaryColor};
    --secondary-color: ${variables.secondaryColor};
    --text-color: ${variables.textColor};
    --background-color: ${variables.backgroundColor};
    --button-background: ${variables.buttonBackground};
    --button-text: ${variables.buttonText};
    --border-color: ${variables.borderColor};
    --border-radius: ${variables.borderRadius};
    --spacing-small: ${variables.spacingSmall};
    --spacing-medium: ${variables.spacingMedium};
    --spacing-large: ${variables.spacingLarge};
    --font-size-small: ${variables.fontSizeSmall};
    --font-size-medium: ${variables.fontSizeMedium};
    --font-size-large: ${variables.fontSizeLarge};
    --footer-background: ${variables.footerBackground};
    --footer-text-color: ${variables.footerTextColor};
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;