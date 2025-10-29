# Apache Ignite Website (Docusaurus)

This directory contains the Docusaurus-based Apache Ignite marketing website.

## Development

```bash
npm install
npm start
```

Opens browser at http://localhost:3000

## Build

```bash
npm run build
```

Generates static files in `build/` directory.

## Project Structure

- `src/components/` - Custom React components
- `src/css/` - Custom styling
- `src/pages/` - Standalone pages
- `static/` - Static assets
- `docusaurus.config.js` - Site configuration

## External Documentation

External documentation is built separately using Jekyll and mounted at:
- `/docs/ignite2/` - Apache Ignite 2.x docs
- `/docs/ignite3/` - Apache Ignite 3.x docs

See `/_docs/build.sh` for documentation build process.
