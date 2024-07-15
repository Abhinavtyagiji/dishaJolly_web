import React from 'react';

const benefits = [
  { title: 'Anti-Aging', image: 'images/9.jpg' },
  { title: 'Gut Health', image: 'images/10.png' },
  { title: 'Weight Loss', image: 'images/11.png' },
  { title: 'Immunity', image: 'images/12.jpg' },
  { title: 'Lymphs', image: 'images/13.png' },
  { title: 'Hormones', image: 'images/14.png' },
  { title: 'Heart', image: 'images/15.png' },
  { title: 'Brain', image: 'images/16.png' },
];

const Bene = () => {
  return (
    <div className="container mx-auto py-8 bg-teal-600 pl-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
          <div key={index} className=" p-4">
            <img src={benefit.image} alt={benefit.title} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="text-left mt-4">
              <h3 className="text-white text-lg font-semibold">{benefit.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bene;
