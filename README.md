This repository demonstrates the inclusion of `jest.mock()` (even in a comment) when using `@testing-library/react` in conjunction with `esbuild-jest` causes the test environment to break.

### Reproduction
```bash
git clone git@github.com:jjorissen52/mock-breaks-tests.git
cd mock-breaks-tests
npm install
npm run test
```

|With `// jest.mock()`|Without `//jest.mock()`|
|--------|-----------|
|![Show Failure](https://user-images.githubusercontent.com/12461302/133825421-638becef-fd06-4a96-b347-a7e0523ff808.png)|![Show Success](https://user-images.githubusercontent.com/12461302/133825432-449a7ddb-1389-44c3-826d-cb84455d9b7b.png)|

### Remedy
Use babel instead. For a demonstration:
```bash
git clone git@github.com:jjorissen52/mock-breaks-tests.git
cd mock-breaks-tests
git checkout no-longer-broken
npm install
npm run test
```