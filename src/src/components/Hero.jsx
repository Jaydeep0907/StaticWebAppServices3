import friesImg from "../assets/fries.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-yellow-100">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-yellow-900 mb-4">
          Not Just Fries. A Golden Legacy.
        </h1>
        <p className="text-yellow-800 text-lg mb-6">
          Discover gourmet fries crafted with heritage, passion, and flavor.
        </p>
        <button className="bg-yellow-700 text-white px-6 py-2 rounded-full hover:bg-yellow-800 transition">
          Order Now
        </button>
      </div>
      <img
        src={friesImg}
        alt="French Fries"
        className="w-full md:w-1/2 mt-8 md:mt-0 rounded-xl shadow-xl"
      />
    </section>
  );
};

export default Hero;
