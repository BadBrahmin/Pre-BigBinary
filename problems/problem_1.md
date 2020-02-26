## Explain the Virtual DOM, and a pragmatic overview of how React renders it to the DOM.

> **tl;dr**: The Virtual DOM is a memory copy of the HTML DOM.
> When a state change is triggered, the UI is rendered in the Virtual DOM and the difference between the previous copy and the new one is calculated. React then sync's the updated data to the actual DOM (helper: ReactDOM library)

### Let's start with the DOM:

DOM is an abbreviation for “Document Object Model”. The DOM is essentially an in-memory representation of the UI (comprised of HTML code). In the DOM, the elements of HTML become _nodes_ (element and text nodes). We interact and modify with the nodes in the DOM using its API with JavaScript.

```js
var item = document.getElementById('loot');
item.parentNode.removeChild(item);
```

The DOM represents HTML in a tree structure and every node on the tree is an object. At every change, the entire DOM tree is replaced. This forces a complete repaint of the UI. As DOM trees become really huge with dynamic web apps, the need and the urgency to modify the tree increases exponentially. SPA's have a ton of elements and events. Manually targetting the exact node for each specific interaction is not something you'd want to do.

This is where React helps. It's declarative nature helps the devs concentrate more on creating the UI than finding efficient ways to re-render the updated component.

### What's that gotta do with Virtual DOM?

Everytime the state of your application UI changes, the DOM needs to update and render the change. In the react world of SPA's, a lot of state changes happen, very fast and DOM manipulation takes a hit, slowing the updation of the UI down. A generally well advised practise of having atomic components would be frowned upon in a world without the virtual DOM.

According to the official React docs, virtual DOM (VDOM) is explained as `a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM`

Like the real DOM, the virtual DOM is also represented as a tree of node elements. When there is a state change, a new virtual DOM tree is created. The new tree is then compared to the old representation and the virtual DOM calculates how to efficiently change the HTML DOM.

### How does React leverage the Virtual DOM?

React is made of UI components that has state. React listens for any state changes and when it detects a change, it updates the virtual DOM (same proccess as mentioned above). Once updated, React compares the new tree to the old one in a process called [diffing](https://en.wikipedia.org/wiki/Diff). This enables React to know which virtual DOM objects have changed and it updates just those objects in the real DOM.

React's render() method (from the react-dom package) called at the root creates the node tree from all the children components. When the state changes, the render() method is invoked again, a different tree is created and the diff updated.

While direct DOM manipulation would repaint the entire tree, now only the new subtree and its children are rerendered. This reduces operations on the real DOM and the user feels the app is very zippy! User + developer satisfaction achieved!
