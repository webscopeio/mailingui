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
