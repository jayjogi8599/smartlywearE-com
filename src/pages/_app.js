import '@/styles/globals.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'

function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState('')
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState('')
  const [progress, setProgress] = useState('')
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(60)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
    console.log("hey i am useeffect")
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }

    } catch (error) {
      console.error(error)
    }
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }
  }, [router.query])

  const logout = () => {
    localStorage.removeItem("token")
    setUser({ value: null })
    setKey(Math.random())
    router.push('/')
  }

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }

  const addToCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty
    }
    else {
      newCart[itemcode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const buyNow = (itemcode, qty, price, name, size, variant) => {
    let newCart = { itemcode: { qty: 1, price, name, size, variant } }
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - qty
    }
    if (newCart[itemcode]["qty"] <= 0) {
      delete newCart[itemcode]
    }
    setCart(newCart)
    saveCart(newCart)
  }



  return (
    <>
      <LoadingBar
        color='#FF0000'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar user={user} logout={logout} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} clearCart={clearCart} />
      <Component {...pageProps} buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} subTotal={subTotal} clearCart={clearCart} />
      <Footer />
    </>
  )
};
export default App;
