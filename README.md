# Cursor Insight's Trap Server -- Lite version

This is a basic motion event collector server written in NodeJS, primarily
built for developers supporting their development and debugging tasks.  Thus
this Trap Server Lite is **NOT** meant to run in production environment.

Trap Server Lite works best with the following client implementations:

*   [Trap client for Android]

*   [Trap client for iOS]

*   [Trap client for the web]

## Installation and usage

Simple `make` targets provide the basic functionalities in the project:

1.  Clone this repository:

    ```sh
    $ git clone https://github.com/cursorinsight/ci-trap-server-lite
    ```

    Change your working directory:

    ```sh
    $ cd ci-trap-server-lite
    ```

2.  Use `make` to install dependencies:

    ```sh
    $ make install-deps
    ```

3.  Start the data collector server -- and watch its output:

    ```sh
    $ make server
    ```

    The server will listen on `localhost`'s port `3000`
    (<http://localhost:3000/>) and accepts both HTTP and WS connections on any
    arbitrary path.

    Output is saved to `./output` directory for further inspection.

## License

`ci-trap-server-lite` is released under the [MIT license].

[MIT license]: https://github.com/cursorinsight/ci-trap-server-lite/blob/master/LICENSE
[Trap client for Android]: https://github.com/cursorinsight/ci-trap-android
[Trap client for iOS]: https://github.com/cursorinsight/ci-trap-ios
[Trap client for the web]: https://github.com/cursorinsight/ci-trap-web
