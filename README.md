[![Piklor.js](http://i.imgur.com/kAqRcrp.png)](http://jillix.github.io/piklor.js)

# piklor.js
A tiny JavaScript color picker library.

[![](http://i.imgur.com/ncu4FOh.jpg)](http://jillix.github.io/piklor.js)

## Usage

```html
<script src="path/to/piklor.js"></script>
<div class="col-lg-6 picker-wrapper">
    <button class="btn btn-default">Select color</button>
    <div class="color-picker">
    </div>
</div>
<script>
window.addEventListener("load", function () {
    var pk = new Piklor(".color-picker", [
            "#1abc9c"
          , "#2ecc71"
          , "#3498db"
          , "#9b59b6"
          , "#34495e"
          , "#16a085"
          , "#27ae60"
          , "#2980b9"
          , "#8e44ad"
          , "#2c3e50"
          , "#f1c40f"
          , "#e67e22"
          , "#e74c3c"
          , "#ecf0f1"
          , "#95a5a6"
          , "#f39c12"
          , "#d35400"
          , "#c0392b"
          , "#bdc3c7"
          , "#7f8c8d"
        ], {
            open: ".picker-wrapper .btn"
        })
      , wrapperEl = pk.getElm(".picker-wrapper")
      , header = pk.getElm("header")
      , footer = pk.getElm("footer")
      ;

    pk.colorChosen(function (col) {
        wrapperEl.style.backgroundColor = col;
        header.style.backgroundColor = col;
        footer.style.backgroundColor = col;
    });
});
</script>
```

## Documentation
### `Piklor(sel, colors, options)`
Creates a new `Piklor` instance.

#### Params
- **String|Element** `sel`: The element where the color picker will live.
- **Array** `colors`: An array of strings representing colors.
- **Object** `options`: An object containing the following fields:
 - `open` (String|Element): The HTML element or query selector which will open the picker.
 - `openEvent` (String): The open event (default: `"click"`).
 - `style` (Object): Some style options:
   - `display` (String): The display value when the picker is opened (default: `"block"`).
 - `template` (String): The color item template. The `{color}` snippet will be replaced
   with the color value (default: `"<div data-col=\"{color}\" style=\"background-color: {color}\"></div>"`).
 - `autoclose` (Boolean): If `false`, the color picker will not be hided by default (default: `true`).
 - `closeOnBlur` (Boolean): If `true`, the color picker will be closed when clicked outside of it (default: `false`).

#### Return
- **Piklor** The `Piklor` instance.

### `getElm(el)`
Finds the HTML element.

#### Params
- **String|Element** `el`: The HTML element or query selector.

#### Return
- **HTMLElement** The selected HTML element.

### `render()`
Renders the colors.

### `close()`
Closes the color picker.

### `open()`
Opens the color picker.

### `colorChosen(cb)`
Adds a new callback in the colorChosen callback buffer.

#### Params
- **Function** `cb`: The callback function called with the selected color.

### `set(c, p)`
Sets the color picker color.

#### Params
- **String** `c`: The color to set.
- **Boolean** `p`: If `false`, the `colorChosen` callbacks will not be called.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
