export const data = [
    {
        question: 'What is the JSX',
        answer: `React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display
        Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.
        React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
        With that out of the way, let’s get started!`
    }, 

    {
        question: 'What is the Component',
        answer: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.'
    },

    {
        question: 'What is the VirtualDOM',
        answer: `To understand the virtual DOM and learn why React implements it, let’s first refresh our knowledge of what the actual browser DOM is.
        Normally, whenever a user requests a webpage, the browser receives an HTML document for that page from the server. The browser then constructs a logical, tree-like structure from the HTML to show the user the requested page in the client.
        This tree-like structure is called the Document Object Model, also known as the DOM. It is a structural representation of the web document as nodes and objects, in this case, an HTML document.
        The DOM serves as an interface for the web document so that JavaScript and other scripting languages can access, manipulate, and programmatically interact with the document’s content. For example, developers can use DOM APIs to add or remove elements, modify their appearance, and perform user actions on web elements.`
    },

    {
        question: 'What is the JavaScript',
        answer: `Here we'll actually start looking at some code, and while doing so, explore what actually happens when you run some JavaScript in your page.
        Let's briefly recap the story of what happens when you load a web page in a browser (first talked about in our How CSS works article). When you load a web page in your browser, you are running your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab). This is like a factory that takes in raw materials (the code) and outputs a product (the web page).`

    }
]