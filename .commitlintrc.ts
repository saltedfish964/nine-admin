export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', Infinity],
    'type-enum': [2, 'always', ['feat', 'fix', 'doc', 'package', 'art']],
  },
};
