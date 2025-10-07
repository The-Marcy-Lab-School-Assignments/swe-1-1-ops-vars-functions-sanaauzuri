// Basic Variable & Expression Functions
const calculateArea = (width, height) => {
  return width * height
  // TODO: Calculate and return the area of a rectangle
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
  // TODO: Return true if the number is even, false if odd
};

const convertToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32
  // TODO: Convert celsius to fahrenheit using the formula: (celsius * 9/5) + 32
}

// String & Variable Functions
const createGreeting = (name) => {
  return `Hello, ${name}!`
  // TODO: Return a greeting string like "Hello, [name]!"
};

const getInitials = (firstName, lastName) => {
  return firstName.charAt(0) + lastName.charAt(0)
  // TODO: Return initials by taking first letter of each name
};

const formatPrice = (price) => {
  return `$${price}.00`
  // TODO: Return price formatted as "$[price].00" (e.g., "$5.00")
};

// Function Logic Functions
const getLarger = (num1, num2) => {
  return Math.max(num1, num2)
  // TODO: Return the larger of the two numbers
};

const isValidAge = (age) => {
  if (age <= 120 && age >= 0) {
    return true
  } else {
    return false
  }
  // TODO: Return true if age is between 0 and 120, false otherwise
};

module.exports = {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
};
