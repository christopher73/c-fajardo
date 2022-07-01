import React from "react";

export default function Stack() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className=" text-center">
        <h2 className="text-3xl font-bold mb-12">PROGRAMING LANGUAGES</h2>
        <div className="grid lg:gap-x-12 md:grid-cols-3">
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <img
                alt="js"
                src="./assets/img/icons/js.svg"
                style={{ width: "80px", height: "60px" }}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">Javascript</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <img
                alt="ts"
                src="./assets/img/icons/ts.svg"
                style={{ width: "80px", height: "60px" }}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">TypeScript</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <img
                alt="js"
                src="./assets/img/icons/cpp.svg"
                style={{ width: "80px", height: "60px" }}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">C++</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <img
                alt="js"
                src="./assets/img/icons/bash.svg"
                style={{ width: "80px", height: "60px" }}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">Bash</h3>
          </div>
        </div>
      </section>
      <section className=" text-center">
        <h2 className="text-3xl font-bold mb-12">FRAMEWORKS & LIBRARIES</h2>
        <div className="grid lg:gap-x-12 md:grid-cols-3">
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <img
                alt="react"
                src="./assets/img/icons/react.svg"
                style={{ width: "80px", height: "50px" }}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">React</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <img
                alt="react"
                src="./assets/img/icons/reactNative.svg"
                style={{ width: "80px", height: "50px" }}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">React Native</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <img
                alt="react"
                src="./assets/img/icons/redux.svg"
                style={{ width: "80px", height: "50px" }}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">Redux</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <img
                alt="react"
                src="./assets/img/icons/expressjs.svg"
                style={{ width: "80px", height: "50px" }}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">ExpressJS</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
