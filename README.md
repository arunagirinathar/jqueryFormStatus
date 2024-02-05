# jqueryFormStatus

jqueryFormStatus is a lightweight jQuery plugin designed for managing and displaying dynamic status messages in web forms.

## Features

- Real-time feedback during form submissions
- Customizable alert styles
- Easy integration with jQuery-based projects
- Bootstrap 5x compatible
- Uses Fontawesome 4.7 for icons

## Getting Started

Include jQuery and jqueryFormStatus along with Bootstrap 5x and Fontawesome 4x in your project:

   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   <script src="path/to/jqueryFormStatus.min.js"></script>
   <link type="text/css" rel="stylesheet" href="/path/to/fontawesome.css" />
```

## Usage

  1. To incorporate status field in a specific area of your form, use the "status_container" markup as follows

  ```html
      <div class="status_container"></div>
  ```

  The necessary markup will automatically be updated inside this container.

  If no such tag is found within the form, the plugin will apend the status markup to the form (at the end).

Use this plugin as follows

  ```js
     $('#yourForm').status('Your message', 'success');
  ```

## Options
The second function parameter "status" can be one of the following bootstrap alert component classes

- primary
- secondary
- success
- danger
- warning
- info

and defaults to secondary if none is given or any thing other than the above is passed.

Contributing
I am clueless as to why anyone would want to contribute to this. Nonetheless Contributions are welcome! Feel free to fork the project and make Pull requests. Depending on availability of time, I may consider or get back to you for clarifications.

License
This project is licensed under the terms as jQuery i.e. MIT License - see the LICENSE file for details.
