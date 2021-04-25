import { fetchArticles } from "./api";

describe('API tests', () => {
  test('Aricle object should contain specific not empty keys', async () => {
    const responseData = await fetchArticles(1, 'technology', false, false);
    const articles = responseData.data.articles;

    articles.forEach(article => {
      expect(article.hasOwnProperty('title')).toBe(true);
      expect(article.title).toBeTruthy();
      expect(article.hasOwnProperty('author')).toBe(true);
      expect(article.author).toBeTruthy();
      expect(article.hasOwnProperty('description')).toBe(true);
      expect(article.description).toBeTruthy();
      expect(article.hasOwnProperty('urlToImage')).toBe(true);
      expect(article.urlToImage).toBeTruthy();
    });
  });
})
