import any from '@travi/any';
import {describe, expect, it, vi} from 'vitest';

import scaffoldConfig from './config.js';
import {scaffold} from '../index.js';

vi.mock('./config.js');

describe('scaffolder', () => {
  it('should configure dependabot', async () => {
    const projectRoot = any.string();

    expect(await scaffold({projectRoot})).toEqual({});
    expect(scaffoldConfig).toHaveBeenCalledWith({projectRoot});
  });
});
