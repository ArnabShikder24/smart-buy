import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h2>1. How does react works?</h2>
            <h4>Ans: React is a very popular javaScript library. Its important for developers to know how react works under the hood. When we code in react app and those code looks like HTML its called JSX. JSX is not HTML it looks like HTML in language of javaScript is called Syntactic sugar. when you start writing nested stuff, not only is this difficult to code, but it also becomes very inconvenient to maintain such a codebase. JSX thus helps you bring the cleanliness of HTML to the power of JavaScript. next React create virtual Dom for efficiently update. every time Virtual dom tree compeare with HTML dom if any change in JSX its immediately change thats changes. and react rendering process happend in index.js file.</h4>
            <h2>2. What are the differences between props and state ?</h2>
            <h4>Ans: We can pass the data between the components using Props and State. now let's go to know about difference between Props and State:
                <br />
                <br />
                Props: Props means properties it can be used to pass data from one component to another component. props cannot be modified, props read-only and immutable.
                <br />
                <br />
                State: The state represents parts of an Application that could change. Each component could have its State. The State is mutable. The Data is passed within the component only. The state is to be declared before Return.
            </h4>
        </div>
    );
};

export default Question;