# Talk is cheap, show me the code - Assignment

## Is JSX mandatory for React?

No, JSX is not mandatory for React, but it is a popular and recommended way of writing React code. JSX is a syntax extension for JavaScript that allows developers to write HTML-like syntax directly in their JavaScript code. This can make it easier to write and reason about complex UI components. However, it is possible to write React code using plain JavaScript without using JSX, although it may be more verbose and harder to read and maintain.

## Is ES6 mandatory for React?

No, ES6 is not mandatory for React. But ES6 features are highly recommended and commonly used in React development. React can be used with earlier versions of JavaScript, but using ES6 can greatly enhance the development experience and provide access to newer language features and improvements.

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`

In JSX, there are three different ways to render a React component:

`{TitleComponent}:` This syntax is used when you want to render the component as a self-closing tag, similar to an HTML tag without any children. This is appropriate when the component does not have any nested content or children elements. For example: `<TitleComponent />`.

`{<TitleComponent/>}:` This syntax is also used for rendering a component as a self-closing tag, but it explicitly wraps the component with curly braces. It is equivalent to the previous syntax but provides a more explicit representation.

`{<TitleComponent></TitleComponent>}:` This syntax is used when you want to render a component with nested content or children elements. It allows you to include other JSX elements or text content within the component tags. This syntax is typically used when you need to pass children to the component. For example:

`<TitleComponent> <h1>Hello, JSX!</h1> </TitleComponent>`

In summary, the first two syntaxes (`{TitleComponent}` and `{<TitleComponent/>}`) are used for rendering a component without nested content, while the third syntax (`{<TitleComponent></TitleComponent>}`) is used when the component requires nested content or children elements.

## How can I write comments in JSX?

Writing comments in JSX is just like writing JavaScript in JSX, so we have to write curly brackets for comments.
For example, `{ /*  your comments */}`

## Why do we need keys in React?

In React, when we render an array/list, each of the list items should be uniquely representative. A key is a special attribute we need to include when creating lists of elements in React and we have to pass a unique ID in the key.
Whenever we are looping over an array in JSX we always have to pass a key prop.
**Why?**
Because when components are on the same level then they have to be uniquely representative, suppose there is another item added to the list and it was added in the first place, and we did not uniquely identify the items then react will re-render all the items, Because it did not know which item is new, react did not uniquely identify the new item. React will treat all the items as the same, But if we gave IDs to the component then React exactly knows which element is new, and React will only re-render one component instead of re-rendering all the components.

## Can we use index as keys in React?

Yes, we can use the index as keys, but it is not recommended and not considered good practice to use them because the order of items may change. This can negatively impact performance and may cause issues with the component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

## Resources

[React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture "React Fiber Architecture")

[Index as a key is an anti-pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/ "Index as a key is an anti-pattern")
