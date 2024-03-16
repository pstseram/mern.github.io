import React from 'react';

const Contact = () => {
  return (
    <div className="contact-us-container bg-gradient-to-b from-blue-50 via-blue-50 to-gray-50 py-16 text-black">
      <div className="contact-header">
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
        <br />
        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
      </div>

      <div className="contact-methods">
        <div className="contact-method">
          <strong>1. Phone:</strong>
          <p>General Inquiries: [+9774698328]</p>
        </div>
        {/* Repeat the structure for other contact methods */}
      </div>

      <div className="visit-us">
        <strong>2. Visit Us:</strong>
        <p>[ Doctrustcare Center, <br />
        123 Street, Suite 456 <br />
        Kathal Point, Silchar ] <br />
        </p>
      </div>

      <div className="office-hours">
        <strong>3. Office Hours:</strong>
        <p>[ Sunday to Saturday : 9 am to 6 pm ]</p>
      </div>

      <div className="social-media">
        <strong>4. Social Media:</strong>
        <p>Connect with us on Instagram/Facebook page for updates and information.<br/>
        "https://www.instagram.com/example_doctrustcare"<br/>
        "https://www.facebook.com/example_doctrustcare"</p>
      </div>

      <div className="emergency-contact">
        <strong>5. Emergency Contact:</strong>
        <p>In case of emergencies, please call [+9665438567].</p>
      </div>
<br />
      <div className="booking-specialist">
        <strong>6. Book a Specialist through calls:</strong>
        <p>You can book a specialist by calling the counter contact number: 7005746442.</p>
      </div>

      <p className="closing-message">Thank you for choosing our services. We look forward to assisting you.</p>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
