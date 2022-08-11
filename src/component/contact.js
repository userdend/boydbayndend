export default function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together..</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/boyd-bayndend-616765216/"
          className="btn contact-details"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
          <span> LinkedIn </span>
        </a>
        <a
          href="mailto:boydbayndend99@gmail.com"
          className="btn contact-details"
        >
          <i class="fa-solid fa-at"></i>
          <span> Email </span>
        </a>
        <a href="tel:60128036121" className="btn contact-details">
          <i class="fa-solid fa-phone"></i>
          <span> Call </span>
        </a>
      </div>
    </div>
  );
}
