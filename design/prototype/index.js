/*
 ** Share properties AND METHODS among many objects of the same type.
 ** The sharing of functionality defined on the class (vs in the constructor) sets this apart from the factory pattern.
 ** Remember, factory pattern used a function to create objects with shared properties/methods, but in doing so also recreated those methods each time we instantiated a new object from the factory.
 ** This makes using ES6 classes the more memory efficient approach.
 */
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.email = email;
  }
  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }
  sendEmail() {
    console.log(`Email sent to ${email}`);
  }
  delete() {
    console.log("User removed");
  }
}

const user = new User("John", "Doe", "john@doe.com");

const user2 = new User("Jane", "Doe", "jane@doe.com");

console.log(user.delete === user2.delete); // TRUE

/*
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
  email,
  checkLastOnline: () => {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  },
  sendEmail: () => {
    console.log(`Email sent to ${email}`);
  },
  delete: () => {
    console.log('User removed');
  },
});

const user = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

console.log(user.delete === user2.delete); // FALSE
*/
