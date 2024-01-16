import React from 'react'

import '../App.css'
import MyHeader from './MyHeader';
import Cards from './Cards';
import MainSec from './MainSec';
import BlogPost from './BlogPost';


function CommonComp() {
  return (
    <>
        <MyHeader/>
        <MainSec/>
        <Cards/>
        <BlogPost/>
        

        
    </>
  )
}

export default CommonComp