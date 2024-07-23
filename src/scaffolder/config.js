import {promises as fs} from 'node:fs';
import {resolve} from 'node:path';

export default async function ({projectRoot}) {
  await fs.copyFile(
    resolve(__dirname, '..', 'templates', 'config.yml'),
    `${projectRoot}/.github/dependabot.yml`
  );
}
