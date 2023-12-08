import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../styles/navebar.css";
import { LinkContainer } from "react-router-bootstrap";
import { Badge, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userSignout } from "../../redux/user/UserAction";
import SearchBox from "../SearchBox";

function NavBar() {
  const cartData = useSelector((state) => state.cart.cart.cartItems);

  const userInfo = useSelector((state) => state.user.userInfo);

  const signoutHandler = () => {
    userSignout({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>NAVA</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="collapse">
          <Nav
            className="me-auto my-2 my-lg-0 linkContainer "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {" "}
            <Nav.Link className="mainLink" href="#section3">
              About
            </Nav.Link>
            <Nav.Link className="mainLink" href="#section6">
              Blog
            </Nav.Link>
            <Nav.Link>
              <Link className="mainLink" to="menu">
                menu
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="mainLink" to="shopping">
                <i className="fa-solid fa-bag-shopping"></i>

                {cartData.length > 0 && (
                  <Badge pill bg="danger">
                    {cartData.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav.Link>
          </Nav>
          <SearchBox />
          {userInfo ? (
            <NavDropdown
              title={
                <span>
                  {userInfo.name} <i className="fa-regular fa-user"></i>
                </span>
              }
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/profile">
                <NavDropdown.Item>User Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/orderhistory">
                <NavDropdown.Item>Order History</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <Link
                className="dropdown-item"
                to="#signout"
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </NavDropdown>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <NavDropdown
              title={`Admin: ${userInfo.name}`}
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/Dashbord">
                <NavDropdown.Item>Dashbord</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/productList">
                <NavDropdown.Item>Product</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/addproduct">
                <NavDropdown.Item>Add Product</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/orderList">
                <NavDropdown.Item>Order</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/userlest">
                <NavDropdown.Item>User</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
            </NavDropdown>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
