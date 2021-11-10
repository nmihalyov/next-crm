class API {
  static BASE_URL = 'https://jsonplaceholder.typicode.com';

  static get = async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(API.BASE_URL + url);
      const data: T = await response.json();

      return data;
    } catch (err) {
      throw err.message;
    }
  }
}

export default API;