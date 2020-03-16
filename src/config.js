import {promises as fs} from 'fs';
import {resolve} from 'path';
import makeDir from '../thirdparty-wrappers/make-dir';

export default async function ({projectRoot}) {
  const dependabotConfigDirectory = await makeDir(`${projectRoot}/.dependabot`);

  await fs.copyFile(
    resolve(__dirname, '..', 'templates', 'config.yml'),
    `${dependabotConfigDirectory}/config.yml`
  );
}
