import React from "react";
import {
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitter,
  BsGoogle,
} from "react-icons/bs";

const footer = () => {
  return (
    <div className="bg-blue-500 flex flex-col min-h-screen">
      <div className="flex flex-grow justify-center items-center text-7xl">
        Footer
      </div>

      <footer>
        <div className="bg-gray-500  text-white ">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-36">
              <div className="mb-5">
                <h1 className="text-xl mb-4 block">Company</h1>
                <span className="mb-4 block">
                  A123 lost street
                  <br />
                  Karimnagar,Pincode:505001
                  <br />
                  India
                  <br />
                </span>
                <span className="font-semibold  ">Phone:</span>
                <span className="font-normal">
                  9567346738 <br />
                </span>
                <span className="font-semibold">Email:</span>
                <span className="font-normal">karimnagar@gmail.com</span>
              </div>
              <div className="">
                <h1 className="text-xl mb-4 block">Links</h1>
                <a href="#" className="hover:underline">
                  Home
                  <br />
                  About
                  <br />
                  services
                  <br />
                  Terms of Services
                  <br />
                  Privacy policy
                </a>
              </div>
              <div className="mb-5">
                <h1 className="text-xl mb-4 block">Our Services </h1>
                <span className="">
                  Web Design
                  <br />
                  Web Development
                  <br />
                  Product Management
                  <br />
                  Marketing
                  <br />
                  Graphic design
                </span>
              </div>
              <div className="mb-5">
                <h1 className="text-xl">Join our Newsletter</h1>
                <p className="">Join 25,000+ others and tutorials, and more</p>
                <span className="flex flex-row mt-4">
                  <input
                    type="text"
                    classname="text-white focus:border-blue-200"
                    placeholder="email@example.com"
                  />
                  <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Subscribe
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-500 text-white px-10">
          <div className=" max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
            <div class="text-center">
              <span>
                Copyright <span className="font-semibold">Company</span>. All
                Rights Reserved <br />
              </span>
              <span className="">
                Designed by
                <span className="font-bold text-gray-700">Tailwind</span>
              </span>
            </div>
            <div className=" ">
              <BsFillTelephoneFill className="mx-4 inline-block pt-1 h-8 w-8 " />
              <BsGoogle className="mx-4 inline-block pt-1 h-8 w-8" />
              <BsInstagram className="mx-4 inline-block pt-1 h-8 w-8" />
              <BsTwitter className="mx-4 inline-block pt-1 h-8 w-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
