import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    image: "https://i.pravatar.cc/150?u=sarah",
    text: "ByteBazaar has completely changed how I shop for gadgets. The deals are amazing and the delivery is super fast!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=michael",
    text: "I found the perfect mechanical keyboard here. quality is top-notch and the customer service is very responsive.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Digital Artist",
    image: "https://i.pravatar.cc/150?u=emily",
    text: "Great selection of creative tools. I love the curated collections. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <section className="container mx-auto mt-30 mb-20">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl md:text-5xl my-4 ">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
          Hear from our satisfied customers about their experience with Byte
          Bazaar.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 xl:px-0">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-base-100 p-8 rounded-xl shadow-lg border border-blue-100 hover:border-blue-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors duration-300">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <p className="text-gray-600  italic mb-6">
              {testimonial.text}
            </p>
            <h4 className="font-bold text-lg text-gray-900 ">
              {testimonial.name}
            </h4>
            <span className="text-primary text-sm">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </section>
  );

};

export default Testimonials;
