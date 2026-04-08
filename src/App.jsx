import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">MyApp v1</h1>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-6">
          Welcome to My First Version 🚀
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          This is Version 1 of my project. Built using React + Tailwind. More
          features coming soon!
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">Fast</h3>
          <p className="text-gray-600">
            Lightning fast React application setup.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">Responsive</h3>
          <p className="text-gray-600">
            Fully responsive and mobile friendly UI.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">Scalable</h3>
          <p className="text-gray-600">
            Ready to grow into a full MERN project.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
