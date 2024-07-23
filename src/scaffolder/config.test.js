import {promises as fs} from 'node:fs';
import {resolve} from 'node:path';

import any from '@travi/any';
import {describe, expect, it, vi} from 'vitest';

import scaffoldConfig from './config.js';

vi.mock('node:fs');

describe('config scaffolder', () => {
  it('should create the file under the `.github`` directory', async () => {
    const projectRoot = any.string();

    await scaffoldConfig({projectRoot});

    expect(fs.copyFile).toHaveBeenCalledWith(
      resolve(__dirname, '..', 'templates', 'config.yml'),
      `${projectRoot}/.github/dependabot.yml`
    );
  });
});
