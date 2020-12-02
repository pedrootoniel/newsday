import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background: #eee;
    }

    :root {
      --color-button: #53B4CF;
      --color-background: #ffffff;
      --color-border: #ccc;
      --color-hover: #367DD9;
      --color-text: #000;
      --color-gray-text: #999;
      --color-background-geral: #eee;
      --color-comments: #333;
    }
`