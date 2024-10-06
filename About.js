
import React, { useState } from 'react';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="about">
      <h2>About Our College</h2>
      <div className={`box ${expanded ? 'active' : ''}`} onClick={() => setExpanded(!expanded)}>
        <p>{expanded ? "ABC College is a premier institution offering top-notch education in technology and sciences. We believe in fostering creativity, innovation, and critical thinking among our students. Our faculty comprises industry experts and experienced educators dedicated to the academic and personal growth of each student." : "Click to learn more about us!"}</p>
      </div>
    </section>
  );
};

export default About;
