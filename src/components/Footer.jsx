const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <h3 className="footer-title">About Us</h3>
          <p>We are dedicated to providing the best diary experience.</p>
        </div>
        <div>
          <h3 className="footer-title">Contact</h3>
          <p>Email: support@diaryapp.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="footer-title">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="link link-hover">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="link link-hover">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="link link-hover">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="link link-hover">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  