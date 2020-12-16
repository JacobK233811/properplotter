"use strict";
exports.__esModule = true;
var react_window_1 = require("react-window");
var Data_1 = require("./data/Data");
var DATA = Data_1.NEW_MATERIALS.map(function (d) {
    var name = d.name, density = d.density, uts = d.uts, compress = d.compress, youngs = d.youngs, fracture = d.fracture, hardness = d.hardness;
    return { name: name, density: density, uts: uts, compress: compress, youngs: youngs, fracture: fracture, hardness: hardness };
});
var ROW_COUNT = DATA.length;
var COLUMNS = Object.keys(DATA[0]);
var COLUMN_NAMES = {
    name: 'Material',
    density: 'Density (g/cm3)',
    uts: 'UTS (Mpa)',
    compress: 'Compressive Strength (Mpa)',
    youngs: "Young's Modulus (Gpa)",
    fracture: 'Fracture',
    hardness: 'Hardness (Knoop)'
};
var Cell = function (_a) {
    var columnIndex = _a.columnIndex, rowIndex = _a.rowIndex, style = _a.style;
    var key = COLUMNS[columnIndex];
    if (rowIndex === 0) {
        return (<div className='p-1 bg-green-500 text-white border-white border-r' style={style}>
        {COLUMN_NAMES[key]}
      </div>);
    }
    var value = DATA[rowIndex][key];
    return (<div className={"p-1 text-sm border-b " + (columnIndex !== COLUMNS.length - 1 && 'border-r') + " border-gray-400 " + (rowIndex % 2 == 0 && 'bg-gray-50')} style={style}>
      {value}
    </div>);
};
var columnWidth = function (colIdx) { return (colIdx === 0 ? 200 : 150); };
var MaterialTable = function () {
    // Using react-window to create this table is an overkill, we could have simply used a simple html table
    // This would only be useful once we hit a certain data size threshold might be worth to revert back until then
    return (<react_window_1.VariableSizeGrid className='rounded overflow-auto border border-gray-400 mb-3' columnCount={COLUMNS.length} columnWidth={columnWidth} 
    // TODO: Hardcoding this is not a good idea we could use the
    // Autosizer from react-virtualized or similar
    height={ROW_COUNT * 30 + 2} width={1104} rowCount={ROW_COUNT} rowHeight={function () { return 30; }}>
      {Cell}
    </react_window_1.VariableSizeGrid>);
};
exports["default"] = MaterialTable;
