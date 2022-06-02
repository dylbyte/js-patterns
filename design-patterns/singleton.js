/*
 **  Share a single global instance throughout our app.
 **  https://javascriptpatterns.vercel.app/patterns/design-patterns/singleton-pattern
 */
let instance;

class Counter {
  constructor() {
    // Check to make sure the class hasn't already been instantiated
    if (instance) {
      throw new Error("You can only create one instance");
    }
    this.counter = counter;
    instance = this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

// Ensure the newly created instance is not modifiable
const singletonCounter = Object.freeze(new Counter());

// Export the singleton as default to make globally accessible
export default singletonCounter;
