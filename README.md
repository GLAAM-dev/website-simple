# GLAAM — Greater Los Angeles Area Mensa (simple static site)

Plain HTML and CSS. No install step. No build step. No framework.

## Edit the site

- Pages are regular HTML files at the repository root (`index.html`, `about/index.html`, and so on).
- Shared look-and-feel lives in [`assets/css/site.css`](assets/css/site.css).
- Images live in [`assets/images/`](assets/images/).
- Header and footer markup is duplicated on each page on purpose so anyone can edit a single file without a template tool.

## Navigation

Every page shows the same sidebar. It has a short "Start here" block (Home, Join Mensa) followed by an alphabetical list of all topics.

To add, rename, or reorder a sidebar item, edit the `<nav class="sidebar">` block. It is duplicated on each page, so change it everywhere (a find-and-replace across `*.html` does the job).

## Pages

| Topic | Path |
|-------|------|
| Home | [`index.html`](index.html) |
| Join Mensa | [`join/index.html`](join/index.html) |
| Areas | [`areas/index.html`](areas/index.html) |
| Awards | [`history/awards/index.html`](history/awards/index.html) |
| Bylaws | [`bylaws/index.html`](bylaws/index.html) |
| Contacts | [`contact/index.html`](contact/index.html) |
| Elections | [`elections/index.html`](elections/index.html) |
| Events | [`events/index.html`](events/index.html) |
| Finance | [`finance/index.html`](finance/index.html) |
| Gifted Youth | [`gifted-youth/index.html`](gifted-youth/index.html) |
| History | [`history/index.html`](history/index.html) |
| Meetings | [`meetings/index.html`](meetings/index.html) |
| Motions | [`motions/index.html`](motions/index.html) |
| Newsletters | [`newsletters/index.html`](newsletters/index.html) |
| Open Forum | [`open-forum/index.html`](open-forum/index.html) |
| Regional Gathering | [`regional-gathering/index.html`](regional-gathering/index.html) |
| Scholarships | [`scholarships/index.html`](scholarships/index.html) |
| SIGHT | [`sight/index.html`](sight/index.html) |
| Special Interest Groups | [`special-interest-groups/index.html`](special-interest-groups/index.html) |
| Testing | [`testing/index.html`](testing/index.html) |

Linked from the footer rather than the sidebar: [`about/index.html`](about/index.html) and [`resources/index.html`](resources/index.html).

## History source notes

Raw historical text for the archive still sits in [`history_data/`](history_data/). The public pages under [`history/`](history/) are the finished HTML. If you update the archive, edit the HTML pages directly (or regenerate them yourself from the markdown).

## Preview locally

Any static file server works. Example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Deploy

Publish the repository root as static files (for example Cloudflare Pages, Netlify, GitHub Pages, or any ordinary web host). There is nothing to compile.
