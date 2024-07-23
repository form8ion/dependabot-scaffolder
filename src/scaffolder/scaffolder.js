import {info} from '@travi/cli-messages';

import scaffoldConfig from './config.js';

export default async function ({projectRoot}) {
  info('Configuring Dependabot');

  await scaffoldConfig({projectRoot});

  return {};
}
