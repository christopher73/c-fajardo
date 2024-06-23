import React from "react";
import Image from "next/image";
export default function Stack() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className=" text-center">
        <h2 className="text-3xl font-bold mb-12">PROGRAMING LANGUAGES</h2>
        <div className="grid lg:gap-x-12 md:grid-cols-3">
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <Image
                alt="js"
                src="/assets/img/icons/js.svg"
                height={60}
                width={80}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">Javascript</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <Image
                alt="ts"
                src="/assets/img/icons/ts.svg"
                height={60}
                width={80}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">TypeScript</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <Image
                alt="js"
                src="/assets/img/icons/cpp.svg"
                height={60}
                width={80}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">C++</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <Image
                alt="js"
                src="/assets/img/icons/bash.svg"
                height={60}
                width={80}
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
              <Image
                alt="react"
                src="/assets/img/icons/react.svg"
                height={60}
                width={80}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">React</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <Image
                alt="react"
                src="/assets/img/icons/reactNative.svg"
                height={60}
                width={80}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">React Native</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <Image
                alt="react"
                src="/assets/img/icons/redux.svg"
                height={60}
                width={80}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">Redux</h3>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-gradient-to-r from-slate-300 rounded-full shadow-lg inline-block mb-6">
              <Image
                alt="react"
                src="/assets/img/icons/expressjs.svg"
                height={60}
                width={80}
              />
            </div>
            <h3 className="text-2xl font-bold  mb-4">ExpressJS</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
