import {fileExists, directoryExists} from '@form8ion/core';

import any from '@travi/any';
import {when} from 'jest-when';
import {describe, expect, it, vi} from 'vitest';

import shouldBeLifted from './predicate.js';

vi.mock('@form8ion/core');

describe('lift predicate', () => {
  const projectRoot = any.string();

  it('should return `true` when the project has a dependabot config file under the `.github` directory', async () => {
    when(fileExists).calledWith(`${projectRoot}/.github/dependabot.yml`).mockResolvedValue(true);

    expect(await shouldBeLifted({projectRoot})).toBe(true);
  });

  it('should return `true` when the project has a dependabot config directory', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.dependabot`).mockResolvedValue(true);

    expect(await shouldBeLifted({projectRoot})).toBe(true);
  });

  it('should return `false` when the project does not have dependabot config', async () => {
    when(directoryExists).calledWith(`${projectRoot}/.dependabot`).mockResolvedValue(false);
    when(fileExists).calledWith(`${projectRoot}/.github/dependabot.yml`).mockResolvedValue(false);

    expect(await shouldBeLifted({projectRoot})).toBe(false);
  });
});
