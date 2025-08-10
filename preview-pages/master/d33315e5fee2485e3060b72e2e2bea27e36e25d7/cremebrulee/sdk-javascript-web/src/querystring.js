// querystring.js
export default {
    stringify: (obj) => {
      return Object.entries(obj)
        .map(([key, val]) => {
          if (Array.isArray(val)) {
            // Handle array values
            return val.map(v => `${key}=${encodeURIComponent(v)}`).join('&');
          }
          return `${key}=${encodeURIComponent(val)}`;
        })
        .join('&');
    },
    parse: (str) => {
      if (typeof str !== 'string' || str.length === 0) return {};
      return str.split('&').reduce((acc, pair) => {
        const [key, value] = pair.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});
    }
  };