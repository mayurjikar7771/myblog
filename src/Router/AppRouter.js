import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './../Dashboard';
import Details from './../Pages/Details';
import Profile from './../Pages/Profile';
import About from './../Pages/About';
import Contact from './../Pages/Contact';
import CardSecond from './../Pages/CardSecond';
import CardThird from './../Pages/CardThird';
import CardFourth from './../Pages/CardFourth';
import CardFifth from './../Pages/CardFifth';
import CardSix from './../Pages/CardSix';
const AppRouter = () =>{
   
    return (<BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/first-blog" component={Details}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/about_us" component={About}></Route>
            <Route path="/contact_us" component={Contact}></Route>
            <Route path="/second-blog" component={CardSecond}></Route>
            <Route path="/third-blog" component={CardThird}></Route>
            <Route path="/fourth-blog" component={CardFourth}></Route>
            <Route path="/fifth-blog" component={CardFifth}></Route>
            <Route path="/six-blog" component={CardSix}></Route>
            
        </Switch>
    </BrowserRouter>)

}

export default AppRouter;