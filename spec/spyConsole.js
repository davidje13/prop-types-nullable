const spyConsole = console;

beforeEach(() => {
  jest.spyOn(spyConsole, 'error').mockReturnValue(null);
});

afterEach(() => {
  spyConsole.error.mockRestore();
});

function getReportedErrors() {
  return spyConsole.error.mock.calls.map((parts) => parts.join(' '));
}

Object.assign(exports, {
  getReportedErrors,
});
