const PaymentMethod = ({ setSlide, setFormHeight, slide2Ref }) => {
  return (
    <section>
      <div className="deliverytype">
        <div>
          <h3>PAYMENT METHOD</h3>
        </div>
        <div className="delivery" style={{ marginBottom: "0" }}>
          <input type="radio" name="paymentType" id="bankTransfer" />
          <label htmlFor="bankTransfer">Direct Bank Transfer</label>
        </div>
        <p style={{ margin: "0 10px", paddingBottom: "5px" }}>
          Make your payment directly into our bank account. Please use your
          Order Id as your payment preference. Your orders will not be shipped
          until your funds have been cleared from your account.
        </p>
      </div>
      <div className="total" style={{ fontWeight: "1" }}>
        <p style={{ marginLeft: "10px", padding: "10px 0" }}>
          Your personal Details will be use to process your Order, Support aypur
          expirence throughout this website, and for other purposes discribed in
          our privacy policy.
        </p>
      </div>
      <div className="order-btn">
        <button>PLACE ORDER</button>
      </div>
      <div className="btn-container">
        <div className="btn-next">
          <p
            onClick={() => {
              setSlide(1);
              setFormHeight(slide2Ref.current.clientHeight + 250);
            }}
          >
            Previous
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
