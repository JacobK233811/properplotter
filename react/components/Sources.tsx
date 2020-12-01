import { SOURCES } from './data/Sources'

const Sources: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <h2>Sources</h2>
      {SOURCES.map((source, i) => (
        <a className='pl-5' key={i} href={source.href}>
          → {source.name}
        </a>
      ))}
    </div>
  )
}

export default Sources
