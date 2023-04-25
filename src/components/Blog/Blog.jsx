import React from "react";

const Blog = () => {
  return (
    <div className="my-container">
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            When you should use context API ?
          </div>
          <div className="collapse-content">
            <p>
              The Context API in React is a mechanism for sharing state data
              across multiple components in a React application. It can be used
              in situations where data needs to be passed down through a
              component tree, without the need for props drilling (passing data
              through multiple layers of components). <br /> Here are a few
              scenarios Benefit: <br />
              When you have deeply nested components that need to access the
              same data, and passing the data down as props would be impractical
              and create too much overhead. When you have multiple components
              that share the same data and you want to avoid prop drilling. When
              you need to pass data to a component that is not a direct child,
              or even a sibling, of the component where the data is initially
              available. When you need to manage global state that needs to be
              accessed by multiple components across the application.
            </p>
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        what is custom hook in reactjs
        </div>
        <div className="collapse-content">
          <p>A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components: <br />

A custom hook does not require a specific signature.
A software developer can choose what argument the custom hook has and what should the argument return.
A custom hook always starts with the name ‘use’.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        What is useRef in react?
          
        </div>
        <div className="collapse-content">
          <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
        </div>
      </div>
      
    </div>
  );
};

export default Blog;
