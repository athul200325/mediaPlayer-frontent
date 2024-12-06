import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [removeVideoRespoonseFromView,setremoveVideoRespoonseFromView]=useState("")
  const [removeVideoResponseFromCategory,setRemoveVideoResponseFromCategory]=useState("")
  const [videoUpRes,setVideoUpRes]=useState()
  return (
    <div className='container-fluid' style={{padding:'100px'}}> 
        <div className="container-fluid mt-5 d-flex justify-content-between">
          <Add setVideoUpRes={setVideoUpRes}/>
          <Link style={{marginRight:'90px'}} to={'/history'}>Watch  history</Link>
        </div>
        <div className="container-fluid row">
            <div className="col-lg-6">
              <h2>All videos</h2>
                <View setremoveVideoRespoonseFromView={setremoveVideoRespoonseFromView} removeVideoResponseFromCategory= {removeVideoResponseFromCategory} videoUpRes={videoUpRes}/>
            </div>
            <div className="col-lg-6">
                  <Category removeVideoRespoonseFromView={removeVideoRespoonseFromView} setRemoveVideoResponseFromCategory={setRemoveVideoResponseFromCategory} />
              </div>
        </div>
    </div>
  )
}

export default Home
