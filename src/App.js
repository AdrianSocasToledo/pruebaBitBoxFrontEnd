import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemPage from "./pages/itemPage";
import ItemDetailPage from "./pages/itemDetailPage";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">BitBox</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/items">Items</Nav.Link>
          <Nav.Link href="#">Desactivations</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/items">
          <ItemPage></ItemPage>
        </Route>
        <Route
          path="/itemsDetails/:id"
          children={<ItemDetailPage></ItemDetailPage>}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
