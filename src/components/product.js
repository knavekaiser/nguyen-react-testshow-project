import { ETH } from "./svg";
import { Countdown } from "./FormElement";
require("./styles/product.scss");

export const ProductThumb = ({ product }) => {
  return (
    <div className={`product-thumb ${product.multiple ? "multiple" : ""}`}>
      <img src={product.img} className="thumbnail" />
      {product.animated && (
        <span className="animated">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3333 4.50016L16.5 2.8335V11.1668L12.3333 9.50016M2.33333 12.4168H11.5C11.9602 12.4168 12.3333 12.0437 12.3333 11.5835V2.41683C12.3333 1.95659 11.9602 1.5835 11.5 1.5835H2.33333C1.8731 1.5835 1.5 1.95659 1.5 2.41683V11.5835C1.5 12.0437 1.8731 12.4168 2.33333 12.4168Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
      <div className="product-detail">
        <h4>{product.name}</h4>
        <div className="product-seller">
          <img src={product.seller.profileImg} />
          <span className="product-seller">{product.seller.name}</span>
          <span className="product-favorite">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9692 7.55185C12.2807 7.07273 12.526 6.59827 12.6945 6.14086C12.8977 5.59352 13 5.05549 13 4.53916C13.0015 3.99182 12.8946 3.45999 12.6855 2.95916M11.9692 7.55185L11.5502 7.27907M11.9692 7.55185C11.4756 8.31006 10.797 9.10084 9.95426 9.90246L0.774229 5.96688C0.929493 6.38447 1.15527 6.82597 1.44983 7.27907C1.91699 7.99671 2.56804 8.75797 3.39034 9.5402L3.39039 9.54025C4.07149 10.1883 4.75115 10.7379 5.26859 11.1304C5.52694 11.3264 5.74389 11.4825 5.8991 11.5914C5.9767 11.6458 6.03872 11.6884 6.0826 11.7181C6.10456 11.7329 6.12184 11.7445 6.13414 11.7527C6.144 11.7592 6.14934 11.7627 6.15106 11.7638C6.1517 11.7642 6.15184 11.7643 6.15155 11.7641L6.15949 11.7692L6.15944 11.7693L6.49999 11.9943L6.84054 11.7693L6.84064 11.7692C6.8893 11.7371 8.24284 10.8394 9.60979 9.54006C10.432 8.75788 11.083 7.99667 11.5502 7.27907M11.9692 7.55185L11.55 7.27931C11.5501 7.27923 11.5501 7.27915 11.5502 7.27907M11.5502 7.27907C11.8453 6.82502 12.0721 6.38396 12.2253 5.96799L12.2258 5.96688C12.4108 5.46827 12.5 4.98911 12.5 4.53916V4.53778C12.5013 4.05743 12.4077 3.59158 12.2241 3.15194M12.2241 3.15194C12.2242 3.15211 12.2243 3.15227 12.2243 3.15244L12.6855 2.95916M12.2241 3.15194C12.2241 3.15191 12.2241 3.15188 12.2241 3.15185L12.6855 2.95916M12.2241 3.15194C12.047 2.72957 11.7921 2.34776 11.4743 2.02749L11.4739 2.0271C11.155 1.70501 10.7799 1.44982 10.3691 1.27471L10.3685 1.27443C9.94238 1.09206 9.48593 0.998917 9.02548 1.00001L9.0243 1.00001C8.37698 1.00001 7.74534 1.18254 7.1957 1.52804L7.19569 1.52804C7.06414 1.61073 6.93942 1.70138 6.82139 1.80003L6.50074 2.06801L6.1801 1.80003C6.06206 1.70138 5.93735 1.61073 5.8058 1.52804L5.80579 1.52804C5.25615 1.18254 4.62451 1.00001 3.97719 1.00001C3.51004 1.00001 3.05937 1.09195 2.63302 1.27444L2.63247 1.27467C2.22014 1.45057 1.84811 1.7036 1.52741 2.02725L1.52674 2.02793C1.2087 2.34766 0.953874 2.72939 0.777386 3.15185L12.6855 2.95916M0.5 4.53916C0.5 4.05785 0.59376 3.59154 0.777371 3.15189L0.774138 5.96664C0.589138 5.46811 0.5 4.98904 0.5 4.53916Z"
                stroke="#767676"
              />
            </svg>
            {product.favorite}
          </span>
        </div>
        <span className="devider" />
        {product.bid ? (
          <div className="bidDetail">
            <span>
              <span className="label">Current bid</span>
              <span className="price">
                <ETH /> {product.price} {product.currency}
              </span>
            </span>
            <span className="timer">
              <span className="label">Starts in</span>
              <Countdown time={product.bid.startsAt} />
            </span>
          </div>
        ) : (
          <span className="price">
            <ETH /> {product.price} {product.currency}
          </span>
        )}
      </div>
    </div>
  );
};
