

import React, { useState } from 'react';

const Contact = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className={`box ${expanded ? 'active' : ''}`} onClick={() => setExpanded(!expanded)}>
        <p>{expanded ? "Email: contact@abccollege.edu Phone: +123 456 7890" : "Click to reveal contact info!"}</p>
      </div>
    </section>
  );
};

export default Contact;
