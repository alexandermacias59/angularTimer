import { BadWordsLocalPipe } from './bad-words-local-pipe';

describe('BadWordsLocalPipe', () => {
  it('create an instance', () => {
    const pipe = new BadWordsLocalPipe();
    expect(pipe).toBeTruthy();
  });
});
