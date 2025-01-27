import { Link } from "react-router-dom";

const BillingShipping = ({
  countries,
  setCountry,
  state,
  setStateCode,
  city,
  setSlide,
  setFormHeight,
  slide2Ref,
}) => {
  return (
    <section>
      <div className="namediv">
        <div className="nametext">
          <label htmlFor="fname">
            First name<span>*</span>
          </label>
          <input type="text" id="fname" />
        </div>
        <div className="nametext">
          <label htmlFor="lname">
            Last name <span>*</span>
          </label>
          <input type="text" id="lname" />
        </div>
      </div>
      <div className="nametext">
        <label htmlFor="cname">Company name (optional)</label>
        <input type="text" id="cname" />
      </div>
      <div className="nametext">
        <label htmlFor="Country">Country / Region *</label>
        <select id="Country" onChange={(e) => setCountry(e.target.value)}>
          <option hidden>Select Country</option>
          {countries.map((item) => (
            <option key={item.isoCode} value={item.isoCode}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="nametext">
        <label htmlFor="State">State *</label>
        <select id="State" onChange={(e) => setStateCode(e.target.value)}>
          <option hidden>Select State</option>
          {state.map((item) => (
            <option key={item.isoCode} value={item.isoCode}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="nametext">
        <label htmlFor="">City *</label>
        <select id="city">
          <option hidden>Select City</option>
          {city.map((item) => (
            <option key={item.isoCode} value={item.isoCode}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {/* Other input fields remain similar */}
      <div className="btn">
        <Link to="/shop">
          <p>Back to cart</p>
        </Link>
        <p
          onClick={() => {
            setSlide(1);
            setFormHeight(slide2Ref.current.clientHeight + 250);
          }}
        >
          Next
        </p>
      </div>
    </section>
  );
};

export default BillingShipping;
