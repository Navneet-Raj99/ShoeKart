import React from "react";
import Card from "react-bootstrap/Card";
import StarIcon from "@mui/icons-material/Star";
import Button from "react-bootstrap/Button";
import CardsData from "./CardsData.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Actions/action.js";
function Cards() {
  const dispatch = useDispatch(); // use to call functions named in action.js
  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> Add To Cart Page</h2>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {CardsData.map((element) => {
          return (
            // <Link to={`/card/${element.id}`} className='text-decoration-none' style={{"color":"black"}}>
            <Card
              style={{ width: "22rem", boxShadow: "2px 2px 2px grey" }}
              className="mx-2 my-2"
            >
              <Card.Img
                variant="top"
                src={element.imgdata}
                style={{ height: "50%" }}
                className="mt-2 ml-2"
              />
              <Card.Body>
                <Card.Title>
                  <b>{element.rname}</b>
                </Card.Title>
                <Card.Text>
                  <b>Price</b>: Rs {element.price}
                </Card.Text>
                <Card.Text>
                  <b>Ratings</b>: Rs {element.rating}{" "}
                  <StarIcon
                    fontSize="smaller"
                    style={{ marginBottom: "4px", marginLeft: "-2px" }}
                  />
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    send(element);
                  }}
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
            // </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
