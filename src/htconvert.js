const redirectRegex = /(?:Redirect\s*(\d*)\s*)(\S*)(?:\s*)(\S*)/g;
const nginxPattern =
`location $2 {
  return $1 $3;
}`;

export default htaccessRules => htaccessRules.replace(redirectRegex, nginxPattern);
