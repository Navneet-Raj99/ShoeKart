import React from "react";
import "./CardDetails.css";
import CardsData from "./CardsData.js";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../Redux/Actions/action.js";
// import {useSelector} from 'react-redux';

function CardDetails() {
  const dispatch = useDispatch();

  let history = useNavigate();

  let { id } = useParams();
  // console.log((id));
  // id=id.id;
  ///////////////// ** IMPORTANT
  const getdata = useSelector((state) => state.cartreducer.carts); // getting data FROM REDUCER
  console.log(getdata); // main stuff to get the output
  /////////////
  const removes = (id) => {
    dispatch(DELETE(id));
    history("/");
  };
  return (
    <>
      <Header />
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Item Details Page
      </h2>
      <div className="item_container">
        <div className="item_image">
          <img
            src={CardsData[id - 1].imgdata}
            alt={CardsData[id - 1].rname}
            height="300px"
            width="400px"
          />
        </div>
        <div className="item_details">
          <h6>
            {" "}
            <b>Restaurant:</b> {CardsData[id - 1].rname}
          </h6>
          <br />

          <h6>
            <b>Price:</b> {CardsData[id - 1].price}
          </h6>
          <h6>
            <b>Ratings</b>:
            <span
              style={{
                backgroundColor: "rgb(29, 182, 29)",
                borderRadius: "5px",
                color: "white",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              {" "}
              {CardsData[id - 1].rating}{" "}
              <StarIcon
                fontSize="smaller"
                style={{ marginBottom: "4px", marginLeft: "-2px" }}
              />
            </span>
          </h6>
          <h6>
            <b>Dishes:</b> {CardsData[id - 1].address}
          </h6>
          <h6>
            <b>Order Review:</b> {CardsData[id - 1].somedata}
          </h6>

          <br />
          <h6>
            <b>Total:</b> {CardsData[id - 1].price}{" "}
          </h6>
          <h6>
            <b>Remove: </b>{" "}
            <DeleteIcon color="error" cursor="pointer" onClick={() => {}} />
          </h6>
        </div>
      </div>
    </>
  );
}

export default CardDetails;
