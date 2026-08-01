# Aarkin website

Marketing website for Aarkin's startup, MSME, grants, funding and compliance advisory services.

## Local development

```sh
npm install
npm run dev
```

Quality checks:

```sh
npm run lint
npm run build
```

## Brand assets

The current logo is a placeholder. Replace `public/brand/logo-placeholder.svg` with the approved logo, or update its reference in `src/components/site-chrome.tsx`.

## Enquiry form

Enquiries are sent through FormSubmit to `aarkin2024@gmail.com`. FormSubmit sends a one-time activation email after the first submission; the mailbox owner must approve that email before live enquiries are delivered.

## Stack

- TanStack Start
- React and TypeScript
- Tailwind CSS

This project remains compatible with the Lovable workflow. Avoid rewriting published Git history so Lovable can continue syncing commits safely.
