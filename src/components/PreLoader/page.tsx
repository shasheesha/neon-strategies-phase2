"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import './preloader.scss';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Preloader: React.FC = () => {
    useEffect(() => {
      const timeline = gsap.timeline();
      
      timeline.to(".encus-preloader-animation", {
          opacity: 1,
      });

      timeline.fromTo(
          ".encus-animation-one .encus-h3", {
              y: "30px",
              opacity: 0
          }, {
              y: "0px",
              opacity: 1,
              stagger: 0.4
          },
      );

      timeline.to(".encus-animation-one .encus-h3", {
          opacity: 0,
          y: '-30',
      }, "+=.3");

      timeline.fromTo(".encus-reveal-box", 0.1, {
          opacity: 0,
      }, {
          opacity: 1,
          x: '-30',
      });

      timeline.to(".encus-reveal-box", 0.45, {
          width: "100%",
          x: 0,
      }, "+=.1");
      timeline.to(".encus-reveal-box", {
          right: "0"
      });
      timeline.to(".encus-reveal-box", 0.3, {
          width: "0%"
      });
      timeline.fromTo(".encus-animation-two .encus-h3", {
          opacity: 0,
      }, {
          opacity: 1,
      }, "-=.5");
      timeline.to(".encus-animation-two .encus-h3", 0.6, {
          opacity: 0,
          y: '-30'
      }, "+=.5");
      timeline.to(".encus-preloader", 0.8, {
          opacity: 0,
          ease: 'sine',
      }, "+=.2");
      timeline.fromTo(".encus-up", 0.8, {
          opacity: 0,
          y: 40,
          scale: .98,
          ease: 'sine',

      }, {
          y: 0,
          opacity: 1,
          scale: 1,
          onComplete: function () {
              document.querySelector(`.${'encus-preloader'}`)?.classList.add('encus-hidden');
          },
      }, "-=1");
    }, []);
  
    return (
      <div className="encus-preloader">
          <div className="encus-preloader-animation">
              <div className="encus-animation-one">
                  <p className="encus-h3">Design</p>
                  <p className="encus-h3">Develop</p>
                  <p className="encus-h3">Creativity</p>
              </div>
              <div className="encus-animation-two">
                  <div className="encus-reveal-frame">
                      <p className="encus-reveal-box"></p>
                      <p className="encus-h3">Neon Strategies</p>
                      <p className='encus-up'></p>
                  </div>
              </div>
          </div>
      </div>
    );
  };

export default Preloader;
