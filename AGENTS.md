<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep the product as a single public, stateless presentation route; service destinations are external links and entrance animations are CSS-only.
- Serve brand media (logo, share image, favicon) as real files in public/ with a PNG fallback and preload the logo; CDN asset pointers failed to load reliably on the live site.
