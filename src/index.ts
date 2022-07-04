import path from 'path'
import fetch from 'node-fetch'
import * as core from '@actions/core'
import * as github from '@actions/github'

function getOctokit() {
  const token = core.getInput('GITHUB_TOKEN', { required: true })
  return github.getOctokit(token)
}

async function getContent(
  octokit: ReturnType<typeof getOctokit>,
  filepath: string,
) {
  try {
    return await octokit.rest.repos.getContent({
      ...github.context.repo,
      path: filepath,
    })
  } catch (e) {
    return null
  }
}

function getOptions() {
  return {
    url: core.getInput('url'),
    dir: core.getInput('dir'),
    filename: core.getInput('filename'),
    commitMessage: core.getInput('commit_message'),
  }
}

async function run() {
  try {
    const octokit = getOctokit()
    const options = getOptions()
    core.debug(JSON.stringify(options, null, 2))

    const filename = options.filename || path.basename(options.url)
    const filepath = path.join(options.dir, filename)
    const res = getContent(octokit, filepath)
    const resp = await fetch(options.url)
    const buffer = await resp.arrayBuffer()

    await octokit.rest.repos.createOrUpdateFileContents({
      ...github.context.repo,
      path: filepath,
      content: Buffer.from(buffer).toString('base64'),
      message: options.commitMessage,
      sha: res ? (res as any).data.sha : undefined,
    })

    core.setOutput('filepath', filepath)
  } catch (e) {
    core.error(e)
    core.setFailed(e.message)
  }
}

run()
