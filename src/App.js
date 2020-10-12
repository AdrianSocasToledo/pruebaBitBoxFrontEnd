import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemPage from "./pages/itemPage";
import ItemDetailPage from "./pages/itemDetailPage";
import Login from "../src/components/login";
import { getItemsAction } from "./redux/actions/itemsActions";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const session = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) dispatch(getItemsAction(session));
  }, [session, dispatch]);

  if (session) {
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">BitBox</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/items">Items</Link>
            </Nav.Link>
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
  return <Login />;
}

export default App;
