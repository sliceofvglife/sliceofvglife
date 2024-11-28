# SliceOfVGLife

This is the website of SliceOfVGLife.

## Setup

Clone the repository:

```bash
$ git clone https://github.com/sliceofvglife/sliceofvglife.git
```

Clone the comics repository:

```bash
$ git clone https://github.com/sliceofvglife/comics.git sliceofvglife/public/cdn/comics
```

Create `.env.development`:

```
NEXT_PUBLIC_WEBSITE_TITLE="SliceOfVGLife"
NEXT_PUBLIC_COMICS_PUBLIC_DIR="public/cdn/comics"
NEXT_PUBLIC_COMICS_IMAGE_URL="/cdn/comics"
NEXT_PUBLIC_COMICS_UNLOCK_ALL="1"
NEXT_PUBLIC_WEBSITE_URL="https://sliceofvglife.github.io/sliceofvglife"
NEXT_PUBLIC_GITHUB_URL="https://github.com/sliceofvglife/sliceofvglife"
```

Run the server:

```bash
$ npm i
$ npm run dev
```

## Release

Convert images to webp:

```bash
$ python compress_images.py
```

Commit the changes to comics repository.

Commit the changes to this repository.

Wait for the publish job to complete.
