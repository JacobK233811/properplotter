"use strict";
exports.__esModule = true;
var Sources_1 = require("./data/Sources");
var Sources = function () {
    return (<div className='flex flex-col'>
      <h2>Sources</h2>
      {Sources_1.SOURCES.map(function (source, i) { return (<a className='pl-5' key={i} href={source.href}>
          → {source.name}
        </a>); })}
    </div>);
};
exports["default"] = Sources;
