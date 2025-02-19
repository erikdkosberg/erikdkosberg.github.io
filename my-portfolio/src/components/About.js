import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about-section">
        <div className="about-content">
        <img
            src='/tera.jpeg'
            alt="Tera"
            className="about-image"
        />
        <div className="about-text">
            <p>Hello :) My name is Erik and this is my puppy, Terabyte.</p>

            <p>I graduated from Marquette in 2020 and am currently working at Adobe as an Application Security Engineer.</p>

            <p>When I'm not programming, I'm usually either playing chess, piano, or running.</p>


        </div>
        </div>
    </section>
  );
};

export default About;
