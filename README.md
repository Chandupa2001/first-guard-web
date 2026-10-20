# First Guard Security Services website (React + Vite)

    npm install
    npm run dev       # local development
    npm run build     # production build in dist/

Contact form: copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a form provider URL
(for example a Formspree endpoint). Without it the form opens the visitor's email app instead.

Single-page app hosting needs a fallback to index.html (`public/_redirects` covers Netlify).
Replace placeholder photos in the gallery and about sections with genuine company photos.
