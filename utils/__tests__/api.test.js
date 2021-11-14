import API from '../api';

describe('API utility class:', () => {
  it('base url matches url pattern', () => {
    expect(API.BASE_URL).toMatch(/https?:\/\/\S{5,}/);
  });

  describe('get method', () => {
    const fetchedData = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
      }
    ];
    const mockFetch = {
      json: () => Promise.resolve(fetchedData)
    };

    it('correctly returns data', async () => {
      global.fetch = jest.fn().mockResolvedValue(mockFetch);
      const url = '/todos';
      const data = await API.get(url);

      expect(fetch).toHaveBeenCalledWith(API.BASE_URL + url);
      expect(data).toEqual(fetchedData);
    });

    it('correctly throws error', async () => {
      const errorText = 'Server unavailable';
      global.fetch = jest.fn().mockRejectedValue(new Error(errorText));
      expect.assertions(1);

      try {
        await API.get('/todos');
      } catch (e) {
        expect(e).toBe(errorText);
      }
    });
  });
});