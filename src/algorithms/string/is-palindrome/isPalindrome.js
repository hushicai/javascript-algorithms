export default function isPalindrome(str) {
  const len = str.length;
  const first = str[0];
  const last = str[str.length - 1];

  if (len === 0 || len === 1) {
    return true;
  }

  if (first === last) {
    return isPalindrome(str.substring(1, str.length - 1));
  }
  return false;
}
