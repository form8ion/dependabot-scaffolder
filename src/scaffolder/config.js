import {promises as fs} from 'fs';
import {resolve} from 'path';

export default async function ({projectRoot}) {
  await fs.copyFile(
    resolve(__dirname, '..', 'templates', 'config.yml'),
    `${projectRoot}/.github/dependabot.yml`
  );
}
