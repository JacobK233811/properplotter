import Head from 'next/head'
import MaterialCarousel from '../components/MaterialCarousel'
import Sources from '../components/Sources'
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
        <div className='flex flex-col bg-white rounded-lg pr-64 pl-64 items-center w-100'>
          <h1>
            Welcome to <span className='text-green-500'>ProperPlotter</span>
          </h1>
          <p className='p-12'>
            The future of material science is here. Find the biomaterial that fits your needs and
            help us reduce plastic!
          </p>
          <MaterialCarousel />
          <Sources />
        </div>
      </main>
    </div>
  )
}

export default Home
