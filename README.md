# Hidden Stories of Luxury

The website for the Instagram account. It is one page (`index.html`) plus the stories (`stories.js`).

## Add or change a story

1. Open `stories.js` on github.com and click the pencil icon.
2. Copy one whole story block, from its opening `{` to its closing `},`, and paste it at the top of the list.
3. Change the text. Each field:

| Field | What it is |
|---|---|
| `id` | Short name for the link, lowercase with hyphens, unique |
| `brand` | The name stamped on the book and shown in big letters |
| `brandTold` | `true` for a paid brand story (shows "Told by the brand"), otherwise `false` |
| `art` | Illustration inside the book: `"pearls"`, `"window"`, `"road"` or `"sea"` |
| `colors` | Three colours for the scene: dark, middle, accent |
| `cover` | Colour of the book's cloth |
| `hook` | The short line under the brand name |
| `title`, `dek` | Headline and one-line introduction |
| `body` | The paragraphs. Wrap a key fact in `<mark>…</mark>` to print it in red |

4. Click **Commit changes**. The site updates in a minute or two.

## Connect the brand form

Create a form at a form service (for example Formspree), copy its endpoint address, and paste it between the quotes of `FORM_ENDPOINT` at the top of `stories.js`. Until then the site shows a short note instead of the form.
