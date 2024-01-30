import React from "react";
import TestimonialBox from "./TestimonialBox";

function TestimonialBoxes({testimonials}) {
  return (
    <>
      {testimonials.map((testimonial)=>(
       <TestimonialBox
       key={testimonial.id}
       testimonial={testimonial}
      /> 
      ) )} 
    </>
  );
  
}

export default TestimonialBoxes;
