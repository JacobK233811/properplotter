import Head from 'next/head'
import MaterialTable from '../components/MaterialTable'
import TopBar from '../components/TopBar'

const Home: React.FC = () => {
  return (
    <div className='font-sans h-screen w-screen'>
      <Head>
        <title>ProperPlotter</title>
        <link rel='icon' href='/icon.png' />
      </Head>
      <main className='flex flex-col w-100'>
        <TopBar />
        <div className='flex flex-col bg-white rounded-lg p-10 items-center w-100'>
          <h1>
            Welcome to <span className='text-green-500'>ProperPlotter</span>
          </h1>
          <p>
            The future of material science is here. Find the biomaterial that fits your needs and
            help us reduce plastic!
          </p>
          <MaterialTable />
        </div>
      </main>
    </div>
  )
}

export default Home
