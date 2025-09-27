What is JSX, and why is it used?

JSX for JavaScript XML

-  Looks like HTML, so it's easy to understand
-  Lets you mix HTML and JavaScript in one place
-  Helps build reusable components for websites



What is the difference between State and Props?

Props = data passed to a component
State = data the component controls itself
Props don’t change
State can change (like counting clicks)


What is the useState hook, and how does it work?

useState is a tool in React that lets your component remember things.

const [count, setCount] = useState(0);

- count starts at 0
- setCount changes it

How can you share state between components in React?

- Move the state up to a parent component
- Then pass it down as props to child components


How is event handling done in React?

React handles events like clicks or typing using functions.

<button onClick={handleClick}>Click me</button>
