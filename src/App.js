import "./App.css";

import TodoList from "./screens/TodoList/TodoList";

function App() {
    return (
        <div className="App">
            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1
                    style={{
                        fontSize: 50,
                    }}
                >
                    T0D0{" "}
                    <p style={{ display: "inline", color: "purple" }}>LIST</p>
                </h1>
                <TodoList />
            </section>
        </div>
    );
}

export default App;
