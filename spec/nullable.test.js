const PropTypes = require('prop-types');
const nullable = require('../index');

function check(condition, value) {
  PropTypes.checkPropTypes.resetWarningCache();
  PropTypes.checkPropTypes(condition, value, 'property', 'test condition');
}

describe('nullable.isRequired', () => {
  const condition = {
    myProp: nullable(PropTypes.string).isRequired,
  };

  it('allows values which match given subcriteria', () => {
    check(condition, {myProp: 'valid'});
    expect(getStderr()).toEqual('');
  });

  it('allows explicitly null values', () => {
    check(condition, {myProp: null});
    expect(getStderr()).toEqual('');
  });

  it('rejects undefined values', () => {
    check(condition, {myProp: undefined});
    expect(getStderr()).toEqual(
      'Warning: Failed property type: The property `myProp` is marked as ' +
      'required in `test condition`, but its value is `undefined`.\n'
    );
  });

  it('rejects missing values', () => {
    check(condition, {});
    expect(getStderr()).toEqual(
      'Warning: Failed property type: The property `myProp` is marked as ' +
      'required in `test condition`, but its value is `undefined`.\n'
    );
  });

  it('propagates rejections from subcriteria', () => {
    check(condition, {myProp: 3});
    expect(getStderr()).toEqual(
      'Warning: Failed property type: Invalid property `myProp` of type ' +
      '`number` supplied to `test condition`, expected `string`.\n'
    );
  });
});

describe('nullable', () => {
  const condition = {
    myProp: nullable(PropTypes.string),
  };

  it('allows values which match given subcriteria', () => {
    check(condition, {myProp: 'valid'});
    expect(getStderr()).toEqual('');
  });

  it('allows explicitly null values', () => {
    check(condition, {myProp: null});
    expect(getStderr()).toEqual('');
  });

  it('allows undefined values', () => {
    check(condition, {myProp: undefined});
    expect(getStderr()).toEqual('');
  });

  it('allows missing values', () => {
    check(condition, {});
    expect(getStderr()).toEqual('');
  });

  it('propagates rejections from subcriteria', () => {
    check(condition, {myProp: 3});
    expect(getStderr()).toEqual(
      'Warning: Failed property type: Invalid property `myProp` of type ' +
      '`number` supplied to `test condition`, expected `string`.\n'
    );
  });
});
