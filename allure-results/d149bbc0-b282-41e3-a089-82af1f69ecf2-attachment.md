# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DoubleClick.spec.js >> Right click
- Location: tests\DoubleClick.spec.js:3:5

# Error details

```
Error: locator.dblclick: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[text()=\'Copy Text\']')
    - locator resolved to <button ondblclick="myFunction1()">Copy Text</button>
  - attempting dblclick action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```