import { useEffect } from "react"

const React =() => {
    useEffect(()=>{console.log("hii")},[]);
    return(
       <>
       <div className="javascript-container">

       <div className="js-inside">
       <h3>Hooks</h3>
       <ul>
       <li>These are special functions.</li>
       <li>These will provide additional functionality to your component.</li>
       <li>These are mostly stateful functions.</li>
       <li>Hooks have the ability to re-render a component.</li>
       </ul>
       </div>
       
       <div className="js-inside">
       <h3>Axios</h3>
       <ul>
         <li>This is a better way to make API Calls.This is a very good alternative to fetch.</li>
         <li>To install: npm install axios</li>
       </ul>
       </div>

       <div className="js-inside">
       <h3>Virtual Dom</h3>
       <p>This is also commonly referred to as VDOM.This is like a copy/reference of the real DOM.This copy is a virtual (In memory) reference of the DOM.ReactDOM does this for us.</p>
       <h3>Reconcilation & diffing keywords</h3>
       <ul>
       <li>We as a programmer do not need to handle connection and updation to the Real DOM.</li>
       <li>When we are changing multiple things in a very short period. Like in 1 tick of the event loop.</li>
       <li>Then, it will push all those updates in the Virtual DOM and make 1 update to the Real DOM.</li>
       <li>Virtual DOM helps for high performance and optimizations.</li>
       <li>When we change something, that change is written on the Virtual DOM first, then React will check and update the real DOM.</li>
       <li>Diffing is a programming concept, not specific to react. This defines are two trees are compared.</li>
       <li>Diffing is short for checking difference between 2 things.</li>
       <li>Reconcilation is basically syncing of both the DOMs (Virtual DOM and Real DOM).</li>
       <li>React DOES NOT want the programmers to use/connect to the Real DOM. We should always refer to the virtual dom.</li>
       </ul>
       <h3>Fragment</h3>
       <ul>
        <li>Typically from a component we return a div. These tags are added to the actual DOM.</li>
        <li>What if we don't want them? Maybe we want to minimize the size.</li>
        <li>We cannot add any tags. We need tags because from a component, we cannot return multiple elements.</li>
        <li>Because we cannot return multiple elements, we wrap them inside another element.</li>
        <li>The solution is fragment. <> </></li>
        <li>This looks like a tag, but it's not a real DOM tag. This thing is only added to the virtual DOM, not seen in th real dom. The size of the real dom is reduced. We did something to optimize our code.</li>
        <li>Fragments cannot take any attributes.</li>
        
       </ul>
       </div>

       <div className="js-inside">
       <h3>Context Api</h3>
       <p>this is about Promises</p>
       </div>
       
       

       
     
     </div>
       </>
    )
}

export default React