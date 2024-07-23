import {fileExists, directoryExists} from '@form8ion/core';

export default async function ({projectRoot}) {
  return (await fileExists(`${projectRoot}/.github/dependabot.yml`))
    || directoryExists(`${projectRoot}/.dependabot`);
}
