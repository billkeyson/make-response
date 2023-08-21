# JSON Response Structures in API Communication

JSON response structures are vital components in diverse API scenarios, serving as effective conduits for communication between client applications and servers. They enable streamlined information exchange and enhance the user experience.

## Standard Response Format

The Standard Response format provides a reliable means of communicating the results of API requests. It consistently conveys the success status of the request and allows for the inclusion of optional data payloads. This format ensures a common understanding of API interactions.

## Examples of JSON Response Structures

1. **Standard Response:**
    ```json
    {
        "status": "success",
        "message": "Request was successful.",
        "data": {
            // Actual response data goes here
        }
    }
    ```

2. **Error Response:**
    ```json
    {
        "status": "error",
        "message": "An error occurred while processing the request.",
        "error_code": "123",
        "details": {
            // Additional error details
        }
    }
    ```

3. **Pagination Response:**
    ```json
    {
        "status": "success",
        "message": "Request was successful.",
        "data": {
            "current_page": 1,
            "total_pages": 10,
            "items": [
                // List of items on this page
            ]
        }
    }
    ```

4. **Validation Error Response:**
    ```json
    {
        "status": "error",
        "message": "Input validation failed.",
        "errors": {
            "field_name": ["Error message 1", "Error message 2"],
            // Other fields and error messages
        }
    }
    ```

5. **Single Resource Response:**
    ```json
    {
        "status": "success",
        "message": "Request was successful.",
        "data": {
            // Single resource data
        }
    }
    ```

These examples showcase the versatility of JSON response structures, illustrating how they can effectively convey different types of information and outcomes in API interactions.