# piklor.js
A tiny JavaScript color picker library.

## Usage



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
