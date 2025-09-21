// Base URLs for different prediction services
const BASE_URL_MADURA = 'https://batik-maduraku-792988373365.asia-southeast2.run.app';
// Added Nusantara service base URL (same function as Madura but different backend)
const BASE_URL_NUSANTARA = 'https://batik-nusantara-792988373365.asia-southeast2.run.app';

const ENDPOINT = {
  madura: `${BASE_URL_MADURA}/predict`,
  nusantara: `${BASE_URL_NUSANTARA}/predict`,
};

class PredictAPI {
  // predict(formData, service = 'madura') - service can be 'madura' or 'nusantara'
  static async predict(data, service = 'madura') {
    const url = ENDPOINT[service] || ENDPOINT.madura;

    const response = await fetch(url, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const contentType = response.headers.get('content-type');

    if (!response.ok) {
      // Try to read error message from JSON response if available
      let errorMessage = `HTTP error ${response.status}`;
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      }
      throw new Error(errorMessage);
    }

    const json = await response.json();
    return json;
  }

  // Convenience wrapper for Nusantara predictions
  static async predictNusantara(data) {
    return this.predict(data, 'nusantara');
  }
}
