import React from "react";
import { H2profile, ImgIcon2 } from "../styles/profileStyles";
import pending from "../assets/img-orders-pending.png";
import { CardOrders } from "../styles/searchStyles";
import Navbar from "../components/Navbar";
import next from "../assets/icon-next.png";

export default function Orders() {
  return (
    <div>
      <H2profile
        style={{
          margin: "30px 0",
        }}
      >
        All orders
      </H2profile>

      <CardOrders>
        <img src={pending} alt="icon" />

        <span
          style={{
            display: "block",
            margin: "0 10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Pardes restaurant
        </span>
        <span>$ 132.00</span>
        <ImgIcon2 src={next} alt="second-icon" />
      </CardOrders>
      <Navbar />
    </div>
  );
}
