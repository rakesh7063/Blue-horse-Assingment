# Next.js Authentication

This project demonstrates a simple authentication system using Next.js. It includes a login and signup page with password hashing using `bcrypt`.

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/yourproject.git
    cd yourproject
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Install `bcrypt`:
    ```bash
    npm install bcrypt
    # or
    yarn add bcrypt
    ```

## Configuration

### Database Connection

Ensure you have a MongoDB instance running. Update the database connection settings in `config/db.js`.

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:
```plaintext
MONGODB_URI=your_mongodb_uri
