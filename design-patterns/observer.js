/* Notify subscribers across diff parts of your app whenever an event occurs */
const observers = [];
export default Object.freeze({
  notify: (data) => {},
  subscribe: (func) => {},
  unsubscribe: (func) => {},
});
