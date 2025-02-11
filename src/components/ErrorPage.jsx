import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      {/* <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
        Oops!
      </h1>

      <p className="mt-4 text-2xl font-semibold text-gray-800">
        404 - PAGE NOT FOUND
      </p>
      <p className="mt-2 text-gray-600 max-w-md">
        We Are Extremely Sorry, But The Page You Requested
        <br /> Was Not Found!
      </p> */}

      <div>
        <img src="https://i.ibb.co.com/V05bKDL0/404-page.jpg" alt="" className="w-[600px] h-96" />
      </div>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-stone-700 text-white font-semibold rounded-xl shadow-lg hover:bg-stone-950 transition-colors"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
}
