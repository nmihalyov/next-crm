class API {
  static BASE_URL = 'https://jsonplaceholder.typicode.com';

  static get = async <T>(url: string): Promise<T | string> => {
    try {
      const response = await fetch(API.BASE_URL + url);
      const data: T = await response.json();
  
      return data;
    } catch (err) {
      return err.message;
    }
  }
}

export default API;