import '../styles/tailwind.css'

const App: React.FC<{ Component; pageProps }> = ({ Component, pageProps }) => {
  return <Component className='font-sans' {...pageProps} />
}

export default App
