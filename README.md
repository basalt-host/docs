# Basalt Docs

Documentation site for [Basalt](https://basalt.host), the self-hosted game
server platform. Built with [Next.js](https://nextjs.org) and
[Fumadocs](https://fumadocs.dev).

## Development

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3001 with your browser to see the result.

## Explore

- `src/app/(home)`: The route group for the landing page and other marketing pages.
- `src/app/docs`: The documentation layout and pages.
- `src/app/api/search/route.ts`: The Route Handler for search.
- `src/lib/source.ts`: Content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access content.
- `src/lib/shared.ts`: Shared site configuration (name, description, URLs).

### Fumadocs MDX

A `source.config.ts` file configures the MDX content source, including the
frontmatter schema. Read the [Introduction](https://fumadocs.dev/docs/mdx)
for further details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.dev)

## License

[MIT](./LICENSE)
