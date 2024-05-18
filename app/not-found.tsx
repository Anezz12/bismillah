import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Oops! Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mb-8">
          Sepertinya halaman yang Anda cari tidak ada di sini. Silakan periksa
          kembali URL atau kembali ke dashboard.
        </p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaHome className="inline-block mr-2" />
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
