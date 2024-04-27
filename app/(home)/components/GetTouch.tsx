import React from "react";
import Title from "./Title";

function GetTouch() {
  return (
    <div className="animate-move-down">
      <div>
        <Title
          text="Get in touch"
          className="flex flex-col items-center justify-center -rotate-6 cursor-pointer"
        />
      </div>
      <div className=" py-8">
        <div>
          <form id="contactFrom">
            <div className=" grid grid-cols-2 gap-4">
              <div>
                <span className=" text-sm after:content-['_*']">Name</span>
                <input
                  type="text"
                  className="w-full bg-gray-800 mt-2 p-3 rounded-xl focus:outline-none focus:shadow-outline"
                  placeholder="your name"
                  name="from"
                  required
                />
              </div>
              <div>
                <span className=" text-sm after:content-['_*']">Email</span>
                <input
                  type="text"
                  className="w-full  bg-gray-800 mt-2 p-3 rounded-xl focus:outline-none focus:shadow-outline"
                  placeholder="your Email"
                  name="from"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm after:content-['_*'] after:text-waikawa-gray-400">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-gray-800 mt-2 p-3 rounded-xl focus:outline-none focus:shadow-outline"
                placeholder="type some thing... has 1024 max length."
                name="msg"
                maxLength={1024}
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                className="w-full disabled:opacity-75 disabled:pointer-events-none text-center bg-gray-800 hover:bg-gray-600 px-4 py-3 rounded-xl transition duration-200 ease-in-out"
                type="submit"
              >
                Send Message{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetTouch;
