import {promises as fs} from 'node:fs';

import {Given} from '@cucumber/cucumber';
import any from '@travi/any';

Given('the project uses a dependabot config in the modern location', async function () {
  this.vcsOwner = any.word();
  this.vcsName = any.word();

  await fs.mkdir(`${this.projectRoot}/.github`, {recursive: true});
  await fs.writeFile(`${this.projectRoot}/.github/dependabot.yml`, JSON.stringify(any.simpleObject()));
});
