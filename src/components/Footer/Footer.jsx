import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-left-container">
          <div className="footer-left-item-container">
            <div className="footer-left-left-item-container">
              <h3 className="footer-left-heading">Online Shopping</h3>
              <div className="footer-left-items">
                <div className="footer-left-item">Electronics</div>
                <div className="footer-left-item">Jewelery</div>
                <div className="footer-left-item">Men's Clothing</div>
                <div className="footer-left-item">Women's Clothing</div>
              </div>
            </div>
            <div className="footer-left-right-item-container">
              <h3 className="footer-left-heading">Useful Links</h3>
              <div className="footer-left-items">
                <div className="footer-left-item">Contact Us</div>
                <div className="footer-left-item">FAQ</div>
                <div className="footer-left-item">Terms of Use</div>
                <div className="footer-left-item">Blog</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center-container">
          <h3 className="footer-center-heading">Keep in touch</h3>
          <div className="footer-social-icons">
            <FacebookIcon className="footer-social-icon" />
            <InstagramIcon className="footer-social-icon" />
            <TwitterIcon className="footer-social-icon" />
            <WhatsAppIcon className="footer-social-icon" />
          </div>
        </div>
        <div className="footer-right-container">
          <h3 className="footer-right-heading">Buy Hassle Free</h3>
          <p className="footer-right-original">
            100% ORIGINAL guarantee for all products.
          </p>
          <p className="footer-right-return">
            Return within 30 days of receiving your order
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-right-container-mobile">
        <h3 className="footer-right-heading-mobile">Buy Hassle Free</h3>
        <p className="footer-right-original">
          100% ORIGINAL guarantee for all products.
        </p>
        <p className="footer-right-return">
          Return within 30 days of receiving your order
        </p>
      </div>
      <hr />
      <p className="footer-rights-reserved">
        © {currentYear} www.estore.com. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
