## Application Description

The application is composed of two main components aimed at streamlining user data submission and display.

The first component is a user-friendly form designed to capture four essential fields: **First Name**, **Last Name**, **Email**, and **Message**. Built-in form validations ensure that all fields meet specific criteria before submission. For instance, the First Name, Last Name, and Email are mandatory fields, while the Email must also be a valid address. Additionally, the Message field requires a minimum of 10 characters. Currently, upon successful validation and form submission, the data is mocked to be sent to a server via an API, and an alert function serves as a placeholder for this interaction.

The second component is a table that dynamically displays the most recently submitted user data. This table serves as an immediate reflection of what data is about to be or has been sent to the server, with the latest submission appearing at the top. All submitted data is stored and managed using Redux, providing a seamless and efficient state management solution for the application.

## Prerequisites

- Node.js >= 18.0
- npm >= 9.0

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/SKonvisar/uc8-form-component
    ```

2. Navigate to the project directory:
    ```
    cd uc8-form-component
    ```

3. Install the dependencies:
    ```
    npm install
    ```

## Running the App

To start the development server, run the following command:
```
npm start
```

This will start the development server, usually on port 3000. Open your web browser and navigate to `http://localhost:3000` to see the application in action.

## Building the App

To build a production-ready version of the application, run the following command:

```
npm run build
```

This will create a `build` directory containing the compiled code, which can be served by any static hosting service.

## Additional Features

- **Form Validations**: The application has built-in validations for the form fields. Make sure to fill in all required fields with valid data before submitting.
- **Redux State Management**: All form data is stored in a global Redux state, making it easier to manage and access.

