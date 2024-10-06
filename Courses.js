import React, { useState } from 'react';

const coursesData = [
  { name: "Computer Science", description: "This course covers programming, data structures, algorithms, and software engineering." },
  { name: "Information Technology", description: "Focuses on computer systems, networks, and database management." },
  { name: "Artificial Intelligence", description: "Learn about machine learning, neural networks, and data analytics." },
  { name: "Data Science", description: "Explore data mining, statistical analysis, and visualization techniques." },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section id="courses" className="courses">
      <h2>Our Courses</h2>
      <div className="course-list">
        {coursesData.map((course, index) => (
          <div 
            key={index} 
            className={`course-box ${selectedCourse === index ? 'active' : ''}`} 
            onClick={() => setSelectedCourse(selectedCourse === index ? null : index)}
          >
            <h3>{course.name}</h3>
            {selectedCourse === index && <p>{course.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
