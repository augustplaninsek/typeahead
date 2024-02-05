# JavaScript Typeahead with AJAX

This is a simple JavaScript implementation of a typeahead functionality with AJAX, allowing users to search and select suggestions dynamically.

## Features

- **Typeahead Input**: As the user types, suggestions are fetched from the server and displayed dynamically.
- **AJAX Requests**: Utilizes AJAX (fetch API) to fetch data from the server based on user input.
- **Styling Options**: Suggestions are styled with padding, cursor pointer, and background color changes on hover and click.
- **Positioning**: Suggestions container is positioned right below the input field for a user-friendly experience.

## Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Typeahead with AJAX</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<input type="text" id="typeahead-input" placeholder="Type something...">

<script src="typeahead.js"></script>
<script>
  handleInput("#typeahead-input", "/api_endpoint");
</script>
</body>
</html>
```
