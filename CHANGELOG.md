## 1.0.0

- Adds a license, code linting, bower.json, package.json, and a build process.

## 1.0.2

- AMD and Node/CommonJS module support.
- Prevents listener from firing when initializing drop down.
- Adds the close drop down listener only once.
- Ability to customize animation time.
- Respecting the drop down holder id.

## 1.0.3

- jQuery dependency updated, <3.0 has XSS vulnerabilities
- Demo file included for integration testing
- Accessibility improvements
- Use <button> instead of <a> to ensure focus from keyboard navigation.
- Improve z-index to ensure focus ring is not hidden behind other elements.
- Maintain focus after selecting an item from dropdown.
- Use aria-haspopup='listbox' for dropdown and remove conflicting <a> tags from options.
- Use aria-hidden and aria-expanded to notify browser of widget state.
- Handle keyboard navigation between options when listbox is expanded.