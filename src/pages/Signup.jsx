import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Foooter-print-logo.png';

import AuthImage from '../images/Signup-image.jpg';

function Signup() {
  return (
    <main className="bg-white">

      <div className="relative md:flex">

        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">

            <div className="max-w-sm mx-auto px-4 py-8">
              <div className="flex items-center">
                <h1 className="">Create your Account</h1>
                <img src={Logo} alt="Logo" width="52" height="52" />
              </div>

              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name <span className="text-rose-500">*</span></label>
                    <input id="name" className="form-input w-full" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Username<span className="text-rose-500">*</span></label>
                    <input id="email" className="form-input w-full" type="email" />
                  </div>
                  <div>

                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                      <input id="password" className="form-input w-full" type="password" autoComplete="on" />
                    </div>
                    <label className="block text-sm font-medium mb-1" htmlFor="houseType">Living in apartment or individual house<span className="text-rose-500">*</span></label>
                    <select id="houseType" className="form-select w-full">
                      <option>Apartment</option>
                      <option>Individual House</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="country">
                      Country
                    </label>
                    <select id="country" className="form-select">
                      <option>French</option>
                      <option>United kingdom</option>
                      <option>Germany</option>
                      <option>Belgium</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Your Work Place<span className="text-rose-500">*</span></label>
                    <input id="Work place" className="form-input w-full" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="age">Age<span className="text-rose-500">*</span></label>
                    <input id="age" className="form-input w-full" type="number" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="familySize">Family Size<span className="text-rose-500">*</span></label>
                    <input id="familySize" className="form-input w-full" type="number" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm ml-2">Email me about product news.</span>
                    </label>
                  </div>
                  <Link className="btn bg-green-500 hover:bg-green-600 text-white ml-3 whitespace-nowrap" to="/">Sign Up</Link>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Have an account? <Link className="font-medium text-green-500 hover:text-green-600" to="/signin">Sign In</Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img className="object-cover object-center w-full h-full" src={AuthImage} width="760" height="1024" alt="Authentication" />
          {/* <img className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src={AuthDecoration} width="218" height="224" alt="Authentication decoration" /> */}
        </div>

      </div>

    </main>
  );
}

export default Signup;