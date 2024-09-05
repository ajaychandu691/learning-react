const heading = React.createElement("h1", {id:"heading"}, "Hello from React")

console.log(heading);//object

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading) //takes the objects and convert those into html tags

/* <div id="parent">
        <div id="child">
            <h1>I'm h1 tag from html</h1>
            <h2>I'm h2 tag from html</h2>
        </div>
        <div id="child">
            <h1>I'm h1 tag from html</h1>
            <h2>I'm h2 tag from html</h2>
        </div>
    </div> */
//ReactElement(Object) => HTML(Browser Understands)
const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div", {id: "child"}, [
        React.createElement("h1",{}, "I'm h1 tag from React"),
        React.createElement("h2",{}, "I'm h2 tag from React")
    ]),
    React.createElement("div", {id: "child"}, [
        React.createElement("h1",{}, "I'm h1 tag from React"),
        React.createElement("h2",{}, "I'm h2 tag from React")
    ])
])

console.log(parent)
const root1 = ReactDOM.createRoot(document.getElementById("root1"))
root1.render(parent)
