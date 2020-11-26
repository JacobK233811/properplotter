import { VariableSizeGrid as Grid } from 'react-window'
import { NEW_MATERIALS } from './data/Data'
import AutoSizer from 'react-virtualized-auto-sizer'
const DATA = NEW_MATERIALS.map((d) => {
  const { name, density, uts, compress, youngs, fracture, hardness } = d
  return { name, density, uts, compress, youngs, fracture, hardness }
})

const ROW_COUNT = DATA.length
const COLUMNS = Object.keys(DATA[0])

const COLUMN_NAMES = {
  name: 'Material',
  density: 'Density (g/cm3)',
  uts: 'UTS (Mpa)',
  compress: 'Compressive Strength (Mpa)',
  youngs: "Young's Modulus (Gpa)",
  fracture: 'Fracture',
  hardness: 'Hardness (Knoop)',
}

const Cell = ({ columnIndex, rowIndex, style }) => {
  const key = COLUMNS[columnIndex]
  if (rowIndex === 0) {
    return (
      <div className='p-1 bg-green-500 text-white border-white border-r' style={style}>
        {COLUMN_NAMES[key]}
      </div>
    )
  }
  const value = DATA[rowIndex][key]
  return (
    <div
      className={`p-1 text-sm border-b ${
        columnIndex !== COLUMNS.length - 1 && 'border-r'
      } border-gray-400 ${rowIndex % 2 == 0 && 'bg-gray-50'}`}
      style={style}
    >
      {value}
    </div>
  )
}

const columnWidth = (colIdx: number) => (colIdx === 0 ? 200 : 150)

const MaterialTable: React.FC = () => {
  // Using react-window to create this table is an overkill, we could have simply used a simple html table
  // This would only be useful once we hit a certain data size threshold might be worth to revert back until then
  return (
    <Grid
      className='rounded overflow-auto border border-gray-400'
      columnCount={COLUMNS.length}
      columnWidth={columnWidth}
      // TODO: Hardcoding this is not a good idea we could use the
      // Autosizer from react-virtualized or similar
      height={ROW_COUNT * 30 + 2}
      width={1104}
      rowCount={ROW_COUNT}
      rowHeight={() => 30}
    >
      {Cell}
    </Grid>
  )
}

export default MaterialTable
