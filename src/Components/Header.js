import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Container from "react-bootstrap/Container";
import CloseIcon from "@mui/icons-material/Close";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { ADD } from "../Redux/Actions/action.js";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, REMOVE } from "../Redux/Actions/action.js";
import { render } from "@testing-library/react";

function Header() {
  ///////////////// ** IMPORTANT
  const getdata = useSelector((state) => state.cartreducer.carts); // getting data FROM REDUCER
  // console.log(getdata); // main stuff to get the output
  /////////////
  const [run, setrun] = useState(0);

  const dispatch = useDispatch();
  const [price, setprice] = useState(0);

  let temp = 0;

  const menuref = useRef();
  useEffect(() => {
    getdata.map((element) => {
      temp = temp + element.price * element.qnty;
      //  console.log("hello");
    });
    setprice(temp);
  });
  const removeone = (element) => {
    if (element.qnty === 1) {
      dispatch(DELETE(element.id));
    } else {
      dispatch(REMOVE(element));
    }
    if (run == 1) {
      setrun(0);
    } else {
      setrun(1);
    }
  };
  const remove = (id) => {
    dispatch(DELETE(id));
    console.log(getdata);
    // getdata.map((element)=>
    // {
    //   temp=temp+(element.price*(element.qnty));
    // })
   
  };
  const send = (e) => {
    console.log(e);
    // (dispatch(ADD(e)));
    dispatch(ADD(e));
   
   
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand href="#home">Add To Cart</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
          </Nav>

          <Badge
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            badgeContent={getdata.length}
            color="primary"
          >
            <ShoppingCartIcon style={{ color: "white", cursor: "pointer" }} />
          </Badge>

          {getdata.length != 0 && (
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              ref={menuref}
            >
              <div style={{ marginBottom: "50px" }}>
                <CloseIcon onClick={handleClose} />
                <h3 style={{ position: "fixed" }}>Total:{price}</h3>
              </div>
              {getdata.map((element,key) => {
                // console.log(getdata);

                return (
                  <MenuItem key={key}>
                    <div
                      className="item_container"
                      style={{ height: "250px", width: "400px" }}
                    >
                      <div
                        className="item_image"
                        style={{ height: "250px", width: "90px" }}
                      >
                        <Link to={`/card/${element.id}`}>
                          <img
                            src={element.imgdata}
                            alt={element.rname}
                            height="70px"
                            width="90px"
                          />
                        </Link>
                      </div>
                      <div className="item_details">
                        <p>
                          {" "}
                          <b>Restaurant:</b> {element.rname}
                        </p>
                        <p>
                          <b>Price:</b> {element.price}
                        </p>
                        <p>
                          <b>Total:</b> {element.price}{" "}
                        </p>
                        <p>
                          <b>
                            <button
                              onClick={() => {
                                removeone(element);
                              }}
                            >
                              -
                            </button>{" "}
                            {element.qnty}{" "}
                            <button
                              onClick={() => {
                                send(element);
                              }}
                            >
                              +
                            </button>{" "}
                          </b>
                        </p>
                        <p>
                          <b>Remove: </b>{" "}
                          <DeleteIcon
                            color="error"
                            cursor="pointer"
                            onClick={() => {
                              remove(element.id);
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </MenuItem>
                );
              })}
            </Menu>
          )}

          {getdata.length == 0 && (
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <div style={{ marginBottom: "50px" }}>
                  <CloseIcon onClick={handleClose} />
                </div>
                Your Cart Is empty
                <ShoppingCartIcon style={{ cursor: "pointer" }} />
              </MenuItem>
            </Menu>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
