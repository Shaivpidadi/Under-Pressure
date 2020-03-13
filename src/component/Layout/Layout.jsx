import React from 'react'
import Header from './Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shop from '../Shop/Shop'
import ProductDeatails from '../Product/ProductDetails/ProductDetails'
import Blog from '../Blog/Blog'
import SpecificBlogPage from '../Blog/SpecificBlogPage/SpecificBlogPage'
import Checkout from '../Checkout/Checkout'
import ContactUs from '../ContactUs/ContactUs'
import Login from '../Authentication/Login/Login'
import Registration from '../Authentication/Registration/Registration'
import ForgotPassword from '../Authentication/ForgotPassword/ForgotPassword'
import ResetPassword from '../Authentication/ResetPassword/ResetPassword'

const Layout = (props) => (
  <React.Fragment>
    <Router>

      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/shop'>
          <Shop />
        </Route>

        <Route path='/product-details'>
          <ProductDeatails />
        </Route>

        <Route exact path='/blog'>
          <Blog />
        </Route>

        <Route exact path='/single-blog'>
          <SpecificBlogPage />
        </Route>

        <Route path='/checkout'>
          <Checkout />
        </Route>

        <Route path='/contact-us'>
          <ContactUs />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/registration'>
          <Registration />
        </Route>

        <Route path='/forgot-password'>
          <ForgotPassword />
        </Route>

        <Route path='/reset-password'>
          <ResetPassword />
        </Route>
      </Switch>

      <Footer />
    </Router>

  </React.Fragment>
)

export default Layout
