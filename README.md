# Prop-Types Nullable

Small convenience function for
[`prop-types`](https://github.com/facebook/prop-types) which allows
explicitly null props but rejects omissions.

## Install dependency

```bash
npm install --save git+https://github.com/davidje13/prop-types-nullable.git#semver:^1.0.1
```

## Usage

This builds on top of
[`prop-types`](https://github.com/facebook/prop-types),
so see that project's documentation for the basics of the API.

Simple usage:

```javascript
const nullable = require('prop-types-nullable');

MyReactClass.propTypes = {
  foobar: nullable(PropTypes.func).isRequired,
};

// foobar is now a required property, but can be explicitly null
```

It is possible to use `nullable` without `isRequired`, but this is
pointless (as null will be allowed for a non-required property anyway).
This project maintains the need for `isRequired` for consistency with
the `prop-types` API, and to better integrate with linting rules.

See <https://github.com/facebook/react/issues/3163> for a discussion
around adding similar functionality to the core `prop-types` project.
