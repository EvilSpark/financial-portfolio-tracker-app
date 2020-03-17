import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // variables
    :root {
      --primary-color: #2a7f62;
      --tertiary-color: #d9f2ea;
      --font-color: #353d2f;
      --info-color: #bbdefb;
      --danger-color: #ef5350;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      font-size: 62.5%;
    }

    body {
      box-sizing: border-box;
      font-size: 1.6rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: var(--font-color);
    }

    // utilities
    .text-cap {
      text-transform: capitalize !important;
    }

    // Components
    .alert {
      padding: 1.5rem;
      border-radius: 4px;
      font-size: 1.5rem;
      color: var(--font-color);
      text-align: left;
      letter-spacing: 0.5px;
      border: 1px solid #e8e8e8;
      margin: 1.5rem 0;
      font-weight: 500;

      &-info {
        background-color: var(--info-color);
        color: var(--font-color);
      }

      &-danger {
        background-color: var(--danger-color);
        color: #fff;
      }
    }

    .btn {
      background-color: #f5f5f5;
      border: 1px solid #e8e8e8;
      cursor: pointer;
      padding: 0.5rem 1.5rem;
      border-radius: 0.6rem;
      box-shadow: 2px 2px .6rem rgba($color: #000000, $alpha: 0.3);

      &--danger {
        background-color: var(--danger-color);
        color: #fff;
      }
    }

`;

export default GlobalStyle;
