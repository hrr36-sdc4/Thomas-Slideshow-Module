const utils = require('../../db/generation/utils');

describe('getPhotos', () => {
  test('should return an array', () => {
    return utils.getPhotos()
      .then((photos) => {
        expect(Array.isArray(photos)).toBe(true);
      });
  });

  test('should contain 1003 items', () => {
    return utils.getPhotos()
      .then((photos) => {
        expect(photos.length).toBe(1003);
      });
  });
});
