import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import Header from "./header"
import Navbar  from "./navbar"
import Below from "./below-nav"
import Counter from "./counter-section"
const root = ReactDOM.createRoot(document.getElementById("root"))







root.render(
  <div>
    <Header/>
  <Navbar/>
  <Below/>
  <Counter/>
  </div>
)