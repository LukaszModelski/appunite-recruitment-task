import { formatAuthor } from "./utils";

describe('Getting author name from url', () => {
  test('Should get author name from url', () => {
    expect(formatAuthor('https://www.engadget.com/about/editors/stack-commerce')).toBe('stack commerce');
    expect(formatAuthor('https://www.engadget.com/about/editors/nathan-ingraham')).toBe('nathan ingraham');
  });

  test('Should keep author unchanged', () => {
    expect(formatAuthor('Stack Commerce')).toBe('Stack Commerce');
  });
})
