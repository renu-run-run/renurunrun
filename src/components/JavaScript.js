const JavaScript = () =>{
    return(
        <>

        <div className="javascript-container">
          
        <div className="js-inside">
        <h3>What is JavaScript</h3>
        
        <ul>
          <li>JavaScript is a Synchronous Single-Threaded Dynamic Interpretedd Programming Language</li>
          <li>Single Threaded - At max, Js will execute only 1 task at a time.</li>
          <li>Asynchronous - The ability of Js to execute the functions/instructions out of their sequence.</li>
          <li>Loosely Typed - Data-type is not a restriction in Js.</li>
          <li>It is case sensitive.</li>
        </ul>
          
        <h3>Anonymous fuctions expression</h3>
        
         <ul>
           <li>There is no fuction name present</li>
           <li>There is a reference stored, that can be in a variable , or a constant</li>
         </ul>
         
        <h3>IIFE</h3>
        <ul>
        <li> Immediately Invoked function expression</li>
        <li>self Invoking function / self Executing Funciton</li>
        <li>These are those Functions that we execute only once.These can be executed Immediately just after the defination of the function</li>
        <li>Because we don't have any reference of the function , we can not Invoke this function even if we wanted to.</li>
        </ul>
        

        </div>

          <div className="js-inside">
          <h3>Block of Code</h3>
          <p>Any code that we write inside curly brackets is a single block.</p>
          <h3>Scope</h3>
          <p>It tells us whether a variable can be accessed (reference) in a block of code or not.Scope defined where the variabe can be referenced.</p>
          <h3>Global Scope</h3>
          <p>This can be accessed from anywhere.Even from a different file.</p>
          <h3>Window Scope</h3>
          <p>This is very very similar to global scope. This is the highest scope as so is the Global scope.</p>
          <h3>Functional Scope</h3>
          <p>This is for access inside a function.</p>
          <h3>Module Scope</h3>
          <p>If we define in a module, we can only access it there. If we define a variable on a single file, we can only use it on that file.</p>
          <h3>Block Scope</h3>
          <p>Access of the variable is limited to the block of code where it is created.</p>
          <p>This is also referred to as local scope.</p>
          <h3>Shadowing</h3>
          <ul>
           <li>The parent block cannot access the child block.</li>
           <li>So, if there is a variable in the child block with the same name, it will NOT care about it.</li>
           <li>If we are using var. The inner variable will shadow and update the value. VAR DOES NOT CARE ABOUT BLOCK SCOPE.</li>
          </ul>

          <h3>Scope Chaining</h3>
          <ul>
          <li>This means the child block can access the variable of parent block.</li>
          <li>It will keep on going parent, parent of parent, parent of parent of parent until it reaches the global scope.</li>
          <li>If at the global scope also it is not able to find the variable. Then we have a reference error and the script will crash.</li>
          </ul>
          </div>



          <div className="js-inside">
          <h3>let vs const</h3>
          <li>Let is used when we are going to UPDATE the value in the code.</li>
          <li>Const is used when we will never UPDATE after assigning once. (Except for Non Primitive Data Type, Objects & Arrays)</li>
          <li>About 95% of the times, you will prefer const.</li>
          <h3>let vs var vs const</h3>
          <ul>
          <li>let and const are block scoped. That means they are more secure.</li>
          <li>var is global/function.</li>
          <li>If we are using a function, var CANNOT be accessed outisde of that function.</li>
          </ul>
         
           <p>If we don't use ANY scope specifier, by default it becomes global/window scoped. That means, even inside a function we create that variable (without let/var/const). That can be accessed outside the function. That is truly global.</p>
          </div>

          <div className="js-inside">
          <h3>Hoisting</h3>
          <ul>
            <li>This is a process which is done in the background during JIT phase.</li>
            <li>This refers to the process of shifting the declaration of variable to top of the scope. (block, function, class, global).</li>
            <li>This is also applied to functions and classes.</li>
            <li>Variable, function, classes.</li>
            <li>Hoisting is BAD, VERY BAD.</li>
            <li>The value automatically defined is undefined.</li>
            <li>The datatype of undefined is also undefined.</li>
          
            </ul>
            <h3>TDZ (Temporal Dead Zone)</h3>
            <ul>
              <li>TDZ is an additional layer implemented to stop the output of let and const as per the hoisting.</li>
              <li>To block the effect of hoisting on let and const.</li>
              <li>Introduced in ES6 (2015).</li>
            </ul>
          </div>
          
          <div className="js-inside">
          <h3>Promises</h3>
          <ul>
           <li>The Data type of a Promise is an Object.</li>
           <li>These are those Objects which contain reference to the execution method.</li>
           <li>The method will be executed, but later.Later happens when there is no load on the thread.By default, it is in a Pending state.</li>
            <li>When the execution is completed, it can either be in:</li>
            <ul>
            <li>Resolved / Successful / Fulfilled / Completed</li>
            <li>Rejected / Unsuccessful / Unfulfilled / Failed.</li>
            </ul>
            <li>We need to use Promises for heavy tasks. Technically called as blocking tasks.</li>
            <li>Blocking Task</li>
            <ul>
             <li>These are those logic/functions which can take some time to execute.</li>
             <li>Therefore while they are executing, they might block the main and only thread. </li>
             <ul>
               <li>Network Call</li>
               <li>Database Calls</li>
               <li>Permission Access Request</li>
             </ul>
            </ul>
            <li>Non Blocking Task</li>
            <ul>
              <li>These are regular tasks.</li>
              <li>Example:</li>
              <ul>
               <li>Mathematical Calculation.</li>
               <li>Looping.</li>
               <li>Array methods</li>
              </ul>
            </ul>
           </ul>
          </div>

          <div className="js-inside">
          <h3>Clouser</h3>
          <p>this is about Promises</p>
          </div>

          <div className="js-inside">
          <h3>EventLoop</h3>
           <ul>
             <li>This allows the use of asynchronous code in JS.</li>
             <li>This makes promises possible.</li>
             <li>This is an infinite running loop which checks some queues and decides which task to pick next.</li>
             <li>It can pick tasks from 3 places: </li>
             <ul>
               <li>Call Stack - Currently whatever is executing, it will pick from that.</li>
               <li>Micro Task Queue - Promise based (Promises, ticks, mutation Observer)</li>
               <li>Macro Task Queue - Web APIs (setInterval, setTimeout, requestAnimationFrame).</li>
             </ul>
           </ul>
           <h3>CallBack</h3>
           <ul>
            <li>This is where the main execution happens.</li>
            <li>When a function needs to be executed, it is pushed into the call stack.</li>
            <li>When the execution is finished, it is popped from the call stack.</li>
            <li>If there is anything in the call stack, that thing is executed first.</li>
            <li>Call stack has HIGHEST priority of execution.</li>
            <li>Stack is a LIFO system, that means, the function which is added last to the stack will complete it's execution first.</li>
           </ul>
           <h3>Micro Task Queue</h3>
           <ul>
             <li>These are all mostly for promises.</li>
             <li>Mostly used for Logic execution. Like we got data from the server, so we need to manipulte that.</li>
             <li>This stores references to the function executions.</li>
             <li>If a promise has multiple .then, in that case, they will be executed according to the sequence they were added at.</li>
           </ul>
          <h3>Macro Task Queue</h3>
          <ul>
            <li>This is primarily used for UI Updation.</li>
            <li>Mostly used by WebAPIs.</li>
            <li>This is also known as a Callback queue.</li>
            <li>This is a lowest priority queue.</li>
            <li>This will onyl be checked once the Call stack is empty and the microtask queue is also empty.</li>
          </ul>
          <h3>Starvation</h3>
          <ul>
           <li>Means no resources.</li>
           <li>In Event loop, it is possible to starve the Macrotask queue.</li>
           <li>The JS engine is busy executing the Call stack and microtask queue that it doesn't get resources to execute the macrotask queue.</li>
           <li>This is something we need to be careful about when writing promises inside loops/recursions.</li>
          </ul>
          </div>

          

          

          <div className="js-inside">
          <h3>async/await</h3>
          <ul>
           <li>This is just syntactical suger.</li>
           <li>Instead of writing .then, we use await keyword.</li>
           <li>Await keyword tells that the JS Engine needs to WAIT for this promise to complete before moving ahead to the next line of code.</li>
           <li>Anywhere if we are using an await keyword, we need to tell the JS Engine, that the respective function is an async function.</li>
           <li>That means, anywhere we are using await, we also need to use async. The other way round is not true. We CAN have async function with does not contain any await keyword.</li>
           <li>This is just a different way of writing promises.</li>
           <li>async tells that there is an asynchronous code inside that function.</li>
           <li>For handling of errors. We use a regular try catch block. If any of the promises fail, then we have the catch block exectued and handling the error.</li>
           <li>In order to use async await inside useEffect, we need to use an IIFE.</li>
           </ul>
          </div>
        
        </div>
         
        </>
    )
}

export default JavaScript;