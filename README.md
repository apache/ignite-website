# Apache Ignite Website

This repository hosts the source code of the Apache Ignite website deployed at https://ignite.apache.org.

## Technology Stack

The website is built with [Docusaurus](https://docusaurus.io/), a modern static site generator.

## Development

### Prerequisites

- Node.js 18+
- npm

### Local Development

```bash
npm install
npm start
```

Opens browser at http://localhost:3000 with hot reload.

### Build

```bash
npm run build
```

Generates static files in the `build/` directory.

## Project Structure

```
ignite-website/
├── blog/                    # Blog posts (MDX)
├── src/
│   ├── components/          # React components
│   ├── css/                 # Custom styling
│   ├── data/                # Data files (downloads, events, etc.)
│   └── pages/               # Site pages (TSX)
├── static/                  # Static assets (images, etc.)
├── docs/                    # External documentation (Ignite 2.x, 3.x)
├── releases/                # API documentation (Javadoc, etc.)
├── assets/                  # Assets for external docs
├── jcache/                  # JCache API documentation
├── docusaurus.config.ts     # Site configuration
└── package.json             # Dependencies
```

## External Documentation

Documentation is built separately and mounted at:

- `/docs/ignite2/` - Apache Ignite 2.x documentation
- `/docs/ignite3/` - Apache Ignite 3.x documentation
- `/releases/` - API documentation (Javadoc, Scaladoc, etc.)

## Contributing

Refer to the Wiki for contribution guidelines:
https://cwiki.apache.org/confluence/display/IGNITE/Website+Development

## License

Licensed under the Apache License, Version 2.0.
