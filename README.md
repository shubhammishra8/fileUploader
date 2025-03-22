# File Upload Backend

This is the backend service for the file upload application. It provides APIs for file upload and management using Express.js and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Docker (optional, for running with Docker)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://mongo:27017/fileupload
   ```

## Running the Application

### Using Node.js directly

1. Start the development server:
   ```bash
   npm run dev
   ```
   The server will start on port 5000 (or the port specified in your .env file)

### Using Docker

1. Build and run using Docker Compose:
   ```bash
   docker-compose up --build
   ```

## API Endpoints

- `POST /api/upload` - Upload a file
- `GET /api/files` - Get list of uploaded files
- `GET /api/files/:id` - Get file details by ID

```

## Technologies Used

- Express.js
- MongoDB with Mongoose
- Multer for file uploads
- Docker for containerization
- Helmet for security
- CORS for cross-origin requests

## Security Features

- Helmet.js for security headers
- CORS enabled
- File upload size limits
- Input validation
- Secure file storage

## Development

To run the application in development mode with auto-reload:

```bash
npm run dev
```
