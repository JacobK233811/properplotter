import Sources from './Sources'

const TopTable: React.FC<{ data: string[]; name: string }> = ({ data, name }) => (
  <table>
    <tbody>
      <tr>
        <th className='p-1 rounded-tr rounded-tl bg-green-500 text-white'>{name}</th>
      </tr>
      {data.map((row, i) => (
        <tr key={i} className={`text-sm ${i % 2 == 0 && 'bg-gray-50'}`}>
          <td className='p-1'>{row}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default TopTable
