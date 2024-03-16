import React from 'react';
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 via-purple-50 to-gray-50 py-16 text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-black">Our clinic specialities <div className="h-1 w-20 bg-purple-900 mx-auto mt-2"></div></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
