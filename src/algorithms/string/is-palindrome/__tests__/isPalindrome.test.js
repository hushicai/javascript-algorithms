import isPalindrome from '../isPalindrome';

describe('isPalindrome', () => {
  it('should be a palindrome string', () => {
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('noon')).toBe(true);
  });
  it('should not be a palindrome string', () => {
    expect(isPalindrome('devel')).toBe(false);
  });
});
