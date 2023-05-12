## Contributing

Want to contribute? That's great! There are many ways you can contribute.

## Feedback

We appreciate your feedback and want to make sure it gets to the right team or individual for review. Depending on the nature of your feedback, you may want to report an issue or join the discussion. Here's some guidance to help you decide which option is right for you:

### Report an issue

Provide as much detail as possible about the issue, including any error messages or steps to reproduce the problem. Our team will review the issue and work to resolve it as quickly as possible.

### Suggesting features

Explain the proposed feature, what it should do, why it is useful, how users should use it. Give us as much info as possible so it will be easier to discuss, access and implement the proposed feature. When you’re unsure about a certain aspect of the feature, feel free to leave it open for others to discuss and find an appropriate solution.

## Building new components

We’re open to expanding the catalog of components to cover as many use cases as possible. We suggest to open an issue for discussion first.

### About Dark Mode

We strongly suggest accounting for the Dark mode version for your components. Email clients have different strategies in how they render dark mode:

- **Color inversion**: If we rely only on color inversion, it seems that this isn’t consistent across clients (i.e. Outlooks does a Partial Color Inversion as opposed to Windows that does a Full Color Inversion).
- **Dark mode**: If we choose to enable dark mode, there is limited client support (mostly Apple mail, Hey and some versions of Outlook). However, if the client doesn’t support it, it will default to color inversion. After setting some meta tags to indicate that your email has a dark mode available, this works by doing the regular: class assignments and media queries.

### How to integrate Dark Mode in your MJML components

1. Make sure to declare the following meta tags:

```html
<mj-raw>
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
</mj-raw>
```

2. Add CSS classses using the `css-class` attribute:

```html
<mj-button css-class="badge-green" color="#059669" background-color="#D1FAE5">
  Badge
</mj-button>
```

3. Write your CSS inside your `<mj-style>` element:

```html
<mj-style>
  :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }
  @media (prefers-color-scheme: dark) {
    .badge-green td,
    .badge-green p {
      background: #012d1f !important;
    }
  }
</mj-style>
```

- **Accessing the right element**: test your component and make sure you're accessing the right element using css classes. Different `mjml` elements might require different nesting.
- **Can you write your dark mode CSS anywhere?**: No. We suggest that your dark mode styles should come in last when you declare your CSS to avoid any rendering issues.
