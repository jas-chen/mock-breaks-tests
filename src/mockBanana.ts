jest.mock('./banana', () => ({
  __esModule: true,
  default: jest.fn(() => 'fake value'),
}));