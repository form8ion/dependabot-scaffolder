import deepmerge from 'deepmerge';

import {describe, expect, it, vi} from 'vitest';
import {when} from 'jest-when';
import any from '@travi/any';

import {scaffold as scaffoldBadge} from '../badge/index.js';
import lift from './lifter.js';

vi.mock('deepmerge');
vi.mock('../badge/index.js');

describe('lifter', () => {
  it('should define dependabot branches as ones to verify', async () => {
    const mergedResults = any.simpleObject();
    const vcs = any.simpleObject();
    const badgeResults = any.simpleObject();
    when(scaffoldBadge).calledWith({vcs}).mockReturnValue(badgeResults);
    when(deepmerge).calledWith(badgeResults, {branchesToVerify: ['dependabot/**']}).mockReturnValue(mergedResults);

    expect(await lift({vcs})).toEqual(mergedResults);
  });
});
