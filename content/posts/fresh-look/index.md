---
title: OMG, A Fresh Look! 🆕
description: Bye-bye wordpress, hello fresh and minimalistic UI
date: '2020-04-18'
draft: false
slug: '/blog/omg-a-fresh-look'
tags:
  - justreleased
---

## Fresh Refresh?

Okay - so I ditched Wordpress. Somehow, I feel writing posts in the Wordpress (Gutenberg) Editor is pretty gloomy at times. I do prefer [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) more. I love it how _Jekyll_ and _Gatsby_ can auto generate static websites from Markdown. Hence the switch. Apart from that, I find the UI of this website pretty cool, all thanks to [Brittany Chiang](https://bchiang7.github.io/)'s contributions.

## It's over CI/CD!

In order to create a new blog post, it's as simple as creating a new `.md` file, giving it some metadata and writing the post itself. I can simple add, commit and push to my repository and [GitHub Actions](https://github.com/features/actions) takes care of the rest. Here's the `yml` file for quick look:

```yaml
name: CI/CD over FTP

on:
  push:
    branches: [master]

jobs:
  build:
    name: Build and Deploy
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Install Packages using yarn
        run: yarn

      - name: Build for prooduction using npm
        run: npm run build

      - name: Upload over FTP
        uses: sebastianpopp/ftp-action@releases/v2
        with:
          host: ${{ secrets.FTP_SERVER }}
          user: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          localDir: 'public'
          remoteDir: '.'
```

On a push to the `master` branch, it automatically builds the static website and deploys it to my server over FTP.

All of this code is open-sourced and publicly available over at this [repository](https://github.com/triethyl/v4).

## Pledge

I have this bad habit of creating something cool and then forgetting to write or even speak about it. Hope it doesn't happen this time. I will try to keep my website up-to-date with all the projects I'm building.
