# Autodichiarazione per spostamento

The project aims to fill in the form of the Italian Ministry of the Interior (https://www.interno.gov.it/it/notizie/line-modulo-autodichiarazione-spostamenti) and to produce a PDF on the fly directly from the browser.

The page is published on:

https://autocertificazione.self-certification.org/

The page works only on your browser and does not transfer any type of information to the server, once the form is filled in, the content is stored on the browser's local storage to be used the next time.

For the more curious, the application was created using the following main technologies:

VueJs (https://vuejs.org/)
PDFKit (https://pdfkit.org/)
Bootstrap4 (https://bootstrap-vue.org/)

The config file "comuni.json" is taked from this repository and minfied for my project scope:

https://github.com/matteocontrini/comuni-json

Thanks to matteocontrini

## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
