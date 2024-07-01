import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <b>Kanban Board</b>
      </header>

      <div className="App-content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "30px",
            gap: "15px",
          }}
        >
          <b>Form</b>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" />
          </div>

          <button>Submit</button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>Unclaimed</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              ></div>
            </div>
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>First Contact</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              ></div>
            </div>
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>Preparing Work Offer</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              ></div>
            </div>
            <div
              style={{
                flexBasis: "100%",
              }}
            >
              <b>Send to Therapists</b>
              <div
                style={{
                  background: "blue",
                  border: "1px solid white",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
