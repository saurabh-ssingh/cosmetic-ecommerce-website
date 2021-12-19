import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Products from '../Products/Products'
import SignUp from '../SignUp/SignUp'
import Cart from '../Cart/Cart'
const Routes = ({productItems,cartItems,handleAddProduct,handleRemoveProduct}) => {
    return (
        <>
           <Switch>
               <Route path = '/' exact >
                     <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
               </Route>
               <Route exact path = '/signup' component={SignUp}/> 
               <Route  path = '/cart'exact>
                    <Cart cartItems={cartItems} 
                        handleAddProduct = {handleAddProduct}
                        handleRemoveProduct = {handleRemoveProduct}
                    />
               </Route>
           </Switch>
        </>
    )
}

export default Routes
