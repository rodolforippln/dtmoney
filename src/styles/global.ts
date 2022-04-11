import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
    --border-radius-normal: 0.25rem;
  }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background-color: var(--background);
        -webkik-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
        position: relative;
        width: 100%;
        max-width: 576px;
        padding: 3rem;        
        background-color: var(--background);        
        border-radius: var(--border-radius-normal);
    }

    .div {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 1.5rem;
        right: 1.5rem;        
    }

    button[id="react-modal-close"] {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background-color: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
    
`