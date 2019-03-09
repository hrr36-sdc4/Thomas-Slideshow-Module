const dbutils = require('../db/dbutils')

describe('database fetch request', () => {

  test('should return at least 6 images', () => {
    return dbutils.fetchImages(1).then(images => {
      expect(images.length).toBeGreaterThanOrEqual(5);
    })
  })

});