import { isValidEmail, isAllLetters } from "./validator.js";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    return `${new Date()} | The value of ${property}} is ${Reflect.get(
      target,
      property
    )}`;
  },
  set: (target, property, value) => {
    if (property === "username") {
      if (value.length < 3) {
        throw new Error("Username must be minimum of 3 characters");
      } else if (!isAllLetters(value)) {
        throw new Error("Username can only contain letters");
      }
    }
    if (property === "email") {
      if (!isValidEmail) {
        console.log("Please provide a valid email");
        return false;
      }
    }
    if (property === "age") {
      if (typeof value !== "number") {
        throw new Error("Age must be a number");
      }

      if (value < 18) {
        throw new Error("Must be at least 18 years old");
      }
    }

    return Reflect.set(target, property, value);
  },
});

export default userProxy;
