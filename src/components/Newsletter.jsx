const Newsletter = () => {
  return (
    <div className="mt-16 max-w-6xl mx-auto w-5/6 bg-gray-100 py-12 px-6 md:px-12 rounded-2xl text-center bg-gradient-to-b from-base-200 via-gray-100 to-white">
      <h2 className="text-3xl font-bold text-gray-800">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-600 mt-2">
        Stay updated with the latest news and exclusive offers.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-stone-700"
        />
        <button className="bg-stone-700 text-white px-6 py-2 rounded-lg hover:bg-stone-950 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
