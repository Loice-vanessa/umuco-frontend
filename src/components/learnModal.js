import React from "react";
import styled from "styled-components";
import paypal from "./../assets/images/paypal.svg.png";
import { RiCloseLine } from "react-icons/ri";

export default function LearnModal(props) {
  const { setIsModalVisible, data } = props;
  return (
    <Container>
      <div className="learn-form" onBlur={() => setIsModalVisible(false)}>
        <button onClick={() => setIsModalVisible(false)} className="cancel">
          <RiCloseLine />
        </button>
        <form action="" method="post">
          <div className="input">
            <label htmlFor="price">Fee:</label>
            <input type="text" name="price" id="price" value={data.price} />
          </div>
          <div className="input">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First name"
            />
          </div>
          <div className="input">
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last name"
            />
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.description}</td>
                  <td>{data.priceUSD}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>TOTAL</td>
                  <td>{data.priceUSD}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="payment">
            <img src={paypal} alt="Paypal img/icon" />
            <p>Pay via your PayPal acount</p>
            <input type="checkbox" name="terms" id="terms" />I have read and
            agree to the terms of service*
          </div>
          <input type="submit" value="Get Started" />
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000000dd;
  z-index: 300;
  top: 0;
  left: 0;
  //   transfom: translate(-50%, -50%);
  .learn-form {
    position: relative;
    width: 40%;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 20px;
    border-radius: 3px;
    padding-bottom: 40px;
  }
  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  .input label {
    width: 100%;
    margin-bottom: 10px;
  }
  .input input {
    border: 1px solid #000000a5;
    background: #fff;
    padding: 5px;
    font-size: 16px;
    border-radius: 6px;
  }
  .table {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 100%;
  }
  .table table {
    width: 100%;
  }
  td,
  th {
    border: 1px solid #0000006f;
    text-align: left;
    padding: 5px;
  }
  .payment img {
    width: 40px;
  }
  input[type="submit"] {
    width: 100%;
    background: #000;
    color: #fff;
    margin-top: 25px;
    border: none;
    border-radius: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .cancel {
    position: absolute;
    left: auto;
    right: 3%;
    top: 2%;
    bottom: auto;
  }
`;
