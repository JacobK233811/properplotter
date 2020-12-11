"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var MaterialCarousel_1 = require("../components/MaterialCarousel");
var Sources_1 = require("../components/Sources");
var TopBar_1 = require("../components/TopBar");
var Home = function () {
    return (<div className='font-sans h-screen w-screen'>
      <head_1["default"]>
        <title>ProperPlotter</title>
        <link rel='icon' href='/icon.png'/>
      </head_1["default"]>
      <main className='flex flex-col w-100'>
        <TopBar_1["default"] />
        <div className='flex flex-col bg-white rounded-lg pr-64 pl-64 items-center w-100'>
          <h1>
            Welcome to <span className='text-green-500'>ProperPlotter</span>
          </h1>
          <p className='p-12'>
            The future of material science is here. Find the biomaterial that fits your needs and
            help us reduce plastic!
          </p>
          <MaterialCarousel_1["default"] />
          <Sources_1["default"] />
        </div>
      </main>
    </div>);
};
exports["default"] = Home;
