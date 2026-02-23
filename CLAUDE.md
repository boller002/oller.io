# oller.io

Personal website and blog for Brian Oller.

## Architecture

- **Frontend**: React with Material-UI
- **Hosting**: CloudFront + S3 (assumed, same pattern as drive.oller.io)
- **Domain**: oller.io, www.oller.io

## Project Structure

```
oller.io/
├── public/
│   ├── favicon-b-32x32.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── assets/
    │   ├── logo-black.png      # Dark logo on transparent
    │   ├── logo-white.png      # Light logo on transparent
    │   ├── favicon_io_b/       # "B" favicon set
    │   └── favicon_io_boller/  # "boller" favicon set
    ├── components/
    │   ├── Header.js           # Uses logo-white.png
    │   └── Footer.js
    ├── pages/
    │   ├── Home.js
    │   ├── Blog.js
    │   ├── Projects.js
    │   └── posts/
    │       ├── FundamentalProjects.js
    │       ├── StaticWebsite.js
    │       └── Todo.js
    ├── App.js
    ├── index.js
    ├── index.css
    └── theme.js
```

## Shared Assets

The assets in `src/assets/` are the canonical source for branding across all oller.io properties:

| Asset | Usage |
|-------|-------|
| `logo-white.png` | Header logo (dark text, use on light backgrounds) |
| `logo-black.png` | For dark backgrounds |
| `favicon_io_b/` | Minimal "B" favicon set |
| `favicon_io_boller/` | Full "boller" favicon set |

### Copying Assets to Other Projects

```bash
# Copy to drive.oller.io
cp src/assets/logo-*.png /path/to/drive.oller.io/frontend/src/assets/
cp src/assets/favicon_io_b/favicon.ico /path/to/drive.oller.io/frontend/public/
cp src/assets/favicon_io_b/android-chrome-192x192.png /path/to/drive.oller.io/frontend/public/logo192.png
cp src/assets/favicon_io_b/android-chrome-512x512.png /path/to/drive.oller.io/frontend/public/logo512.png
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page |
| `/blog` | Blog | Blog post listing |
| `/blog/fundamental-projects` | FundamentalProjects | Blog post |
| `/blog/static-website` | StaticWebsite | Blog post |
| `/blog/todo` | Todo | Blog post |
| `/projects` | Projects | Projects showcase |

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Deploy
```bash
npm run build
AWS_PROFILE=oller.io aws s3 sync build s3://<frontend-bucket> --region us-east-1 --delete
AWS_PROFILE=oller.io aws cloudfront create-invalidation --distribution-id <dist-id> --paths "/*" --region us-east-1
```

## AWS Resources (us-east-1)

- **CloudFront**:
  - `E1TEC3WJP7M542` (oller.io)
  - `EEA0YV358BAHR` (www.oller.io)

## AI Agent Instructions

- When creating reference docs, put them in `claude_docs/`. Use the file structure `YYYY > MM > DD > <file>.md` using today's date in the US Pacific Time Zone.  

## Related Projects

- **drive.oller.io**: Cloud storage app (uses same branding assets)
- **@boller002/ui**: Shared UI component library (npm package)

## Next Steps

1. Consolidate favicon usage (currently `favicon-b-32x32.png` in public, but full set in assets)
2. Consider moving shared assets to `@boller002/ui` package
3. Add more blog posts
4. Add project showcases
