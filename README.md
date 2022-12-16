<h1 align="center">Download Upload</h1>

<p align="center">
  <a href="https://github.com/wow-actions/download-upload/actions/workflows/release.yml"><img alt="build" src="https://img.shields.io/github/actions/workflow/status/wow-actions/download-upload/release.yml?branch=master&logo=github&style=flat-square" ></a>
  <a href="/LICENSE"><img alt="MIT License" src="https://img.shields.io/github/license/wow-actions/download-upload?style=flat-square"></a>
  <a href="https://www.typescriptlang.org" rel="nofollow"><img alt="Language" src="https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square"></a>
  <a href="https://github.com/wow-actions/download-upload/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square" ></a>
  <a href="https://github.com/marketplace/actions/download-upload" rel="nofollow"><img alt="website" src="https://img.shields.io/static/v1?label=&labelColor=505050&message=marketplace&color=0076D6&style=flat-square&logo=google-chrome&logoColor=0076D6" ></a>

</p>

<p align="center">
  <strong>Download a file from url and then upload it to your repo</strong>
</p>

## 🚀 Usage

Create a `.github/workflows/download-upload.yml` file in the repository you want to install this action, then add the following to it:

```yml
name: Update File
on:
  push:
    branches:
      - master
jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: wow-actions/download-upload@v1
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          url: the-file-url-to-download
          dir: the-dir-to-save-the-file
          filename: the-file-name-to-save-default-parsed-from-url
```

## Inputs

Various inputs are defined to let you configure the action:

> Note: [Workflow command and parameter names are not case-sensitive](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-commands-for-github-actions#about-workflow-commands).

| Name | Description | Default |
| --- | --- | --- |
| `GITHUB_TOKEN` | The GitHub token for authentication | N/A |
| `url` | The file url to download | N/A |
| `dir` | The dir path to save the file | N/A |
| `filename` | The file name to save | Parsed from url |
| `commit_message` | Commit message when update the file | `'chore: update file [skip ci]'` |

## Outputs

| Name       | Description                      |
| ---------- | -------------------------------- |
| `filepath` | The file path saved in your repo |

## 🔖 License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
