## If you were working on a React application that was rendering a page very slowly, how would you go about investigating and fixing the issue?

React famously utilises the virtual DOM to render crisp user interfaces, a notch above the previous standard of the HTML DOM. This allows for dynamic and data heavy single page applications to be served to users with no hiccups in performance. But even the fastest car can slow down and knowing where to look under the hood is important.

### The performance profiler audit

We can use Chrome's inbuilt Dev Tools to do a performance audit. To create an audit, we open the page that's slow and hit the "Start profiling and reload page" button on the performance tab. This takes a snapshot of the performance when the page reloads.

As per [Ben Schwarz](https://twitter.com/benschwarz), red indicators on the graph indicate "significant CPU burn" (long tasks). That's a good plae to start investigating slow performing code on the page.

### why-did-you-render

By default, React will re-render the entire subtree when the state of the parent node is changed. This also means children components also get re-rendered even when their props haven't changed.

why-did-you-render is a nifty library that hooks into React and notifies about avoidable re-renders. It can also help you to simply track when and why a certain component re-renders. The page might be slowing down due to it's parent and this will help discover the bottleneck which would otherwise be unknown.

### Visualization improvements

If the page is a list of data with a lot of mapped data cells, any state manipulation will re-render every single data point on that page. Even though the action (eg: delete entry) is happening on one cell, the DOM **will** re-render the whole set.

A good and quick fix for this is pagination where the data is split up to show only a certain number of entries per page.

But what if we want infinite scrolling? A concept called Virtualization can be implemented here. We 'listen' for scroll events on the container and add-remove elements on the list below-above respectively. Now, only the items in the viewport are rendered and the others are on hold.

### Code Splitting

Maybe its not just the page but the entire app that's slowing the app down due to its bundle size. Splitting the bundle will help in dynamically loading only the required part at runtime. Also called 'lazy-load', this dramatically improves the performance on the page.
