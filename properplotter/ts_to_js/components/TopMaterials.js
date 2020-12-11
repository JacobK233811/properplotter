"use strict";
exports.__esModule = true;
var TopTable = function (_a) {
    var data = _a.data, name = _a.name;
    return (<table>
    <tbody>
      <tr>
        <th className='p-1 rounded-tr rounded-tl bg-green-500 text-white'>{name}</th>
      </tr>
      {data.map(function (row, i) { return (<tr key={i} className={"text-sm " + (i % 2 == 0 && 'bg-gray-50')}>
          <td className='p-1'>{row}</td>
        </tr>); })}
    </tbody>
  </table>);
};
exports["default"] = TopTable;
