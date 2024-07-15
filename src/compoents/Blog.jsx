import React from 'react';

const BlogPost = ({ title, date, content }) => (
  <div className="bg-teal-500 text-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-sm mb-4">{date}</p>
    <p className="text-sm">{content}</p>
  </div>
);

const Blog = () => {
  const posts = [
    {
      title: "NUTRITION AND THE MICROBIOME",
      date: "MARCH 28, 2024",
      content: "ABOUT THE MICROBIOME Microbes are microscopic non-human creatures that inhabit virtually every part of our body. What they lack in size, they make up in numbers. There are trillions of..."
    },
    {
      title: "Hemoglobin A1C",
      date: "MARCH 27, 2024",
      content: "THE IMPORTANCE OF HbA1c IN THE CANCER LANDSCAPE BLOOD SUGAR EVALUATION Hyperglycemia (high blood glucose) is one of the main characteristics of diabetes, and is possibly one of the reasons..."
    },
    {
      title: "A GUIDE TO VITAMIN E",
      date: "MARCH 27, 2024",
      content: "VITAMIN E Vitamin E is made of a group of fat soluble compounds which posses distinctive antioxidant activities(13)THE VARIOUS FORMS OF NATURAL VITAMIN E: There are 8 forms: Tocopherol: Alpha-..."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold  text-teal-600 mb-6">Blog posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
      <button className="mt-8 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300">
        View all
      </button>
    </div>
  );
};

export default Blog;