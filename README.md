# registerFormRakamin
Register form with oop
# Person Class and index.js Documentation

This documentation explains the `Person` class and the `index.js` file for a web application that handles user registration and data display.

## Person Class

The `Person` class is responsible for creating and validating person objects. It includes the following methods:

### Constructor

#### `constructor(userName, age, allowance)`

- Initializes a `Person` object with the provided attributes: `userName`, `age`, and `allowance`.

### Validation Methods

#### `_validateUserName()`

- Validates the `userName` attribute.
- Checks if the name contains at least 10 characters and contains only letters (no numbers or special characters).
- Returns `true` if the name is valid; otherwise, returns `false`.

#### `_validateAge()`

- Validates the `age` attribute.
- Checks if the age is greater than or equal to 25.
- Returns `true` if the age is valid; otherwise, returns `false`.

#### `_validateAllowance()`

- Validates the `allowance` attribute.
- Checks if the allowance is between 100,000 and 1,000,000.
- Returns `true` if the allowance is valid; otherwise, returns `false`.

### Asynchronous Validation

#### `async validate()`

- Performs asynchronous validation of all attributes using the above methods.
- If all attributes are valid, returns `true`.
- If any attribute is invalid, throws an error with a specific message and returns `false`.

## index.js

The `index.js` file handles the functionality of the web application.

### Initialization and DOM Elements

- Initializes variables to store references to various DOM elements.

### `pushToData(person)`

- A helper function to add a validated person's data to the `data` array.

### Asynchronous Validation Function

#### `validation(person)`

- An asynchronous function that simulates validation with a 2-second delay.
- Uses the `Person` class to validate user input.
- Resolves if validation is successful and adds the person's data to the `data` array.
- Rejects with an error if validation fails.

### Average Calculation Functions

#### `averageAge(arr)`

- Calculates the average age of all registered individuals in the `data` array.
- Returns the average age as a whole number.

#### `averageAllowance(arr)`

- Calculates the average allowance of all registered individuals in the `data` array.
- Returns the average allowance as a whole number.

### Event Listener for Registration

- Listens for a click event on the "Register" button.
- Disables the button during validation and shows a loading state.
- Creates a new `Person` object with user input.
- Calls the `validation` function and handles success or failure.
- Adds the registered person's data to the table and updates the average values.
- Re-enables the "Register" button after validation is complete.
