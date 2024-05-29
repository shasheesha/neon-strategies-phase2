"use client"
import React, { useEffect, useRef, useState } from 'react';
import AnimatedSection from '../Animation/AnimationFadeUp/page';
import './style.scss';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState<string | number>('0px');
    const contentRef = useRef<HTMLDivElement>(null);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight || 'auto');
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="accodion">
      <button className="trigger-btn" onClick={toggleOpen}>
        <span className="question">{title}</span>
        <span>  
            <div className={`arrow-icon ${isOpen ? "expand" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24.023" height="13.426" viewBox="0 0 24.023 13.426">
                    <path id="Vector_4" data-name="Vector 4" d="M21.195,0,10.6,10.6,0,0" transform="translate(22.609 12.012) rotate(180)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
                </svg>
            </div>
        </span>
      </button>
      <div ref={contentRef} style={{ maxHeight: height }} className="answer-wrap">
        <div className="answer">{content}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <>
    <div className="w-full">
      {items.map((item, index) => (
        <>
        <AnimatedSection>
          <AccordionItem key={index} title={item.title} content={item.content} />
        </AnimatedSection>
        </>
      ))}
    </div>
    </>
  );
};

export default Accordion;
