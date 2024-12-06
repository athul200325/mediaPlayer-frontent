import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getSingleCategoryAPI, getVideoAPI, updateCategoryAPI, uploadVideoAPI } from '../Services/allAPI'


const View = ({videoUpRes,removeVideoResponseFromCategory,setremoveVideoRespoonseFromView}) => {
  const [delteVideoResponse,setDeleteResponse]=useState("")

  const [allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    getAllVideos()
  },[videoUpRes,delteVideoResponse,removeVideoResponseFromCategory])

  const getAllVideos=async()=>{
    try{
      const response=await getVideoAPI()
      // console.log(response);
      setAllVideos(response.data)
      
    }catch(err){
      
    }
    // console.log(allVideos);
    
  }

  const dragOverView=(e)=>{
    e.preventDefault()
  }

  const categoryVideoDrop= async(e)=>{
   

    const { categoryId, video } = JSON.parse(e.dataTransfer.getData("dataShare"));
      console.log(`video id: ${video.id} catid: ${categoryId}`);
      const {data}=await getSingleCategoryAPI(categoryId)
      const updateAllData= data?.allVideos?.filter(item=>item.id!=video?.id)
      const updateCategoryDetails={id:categoryId,categoryName:data.categoryName,allVideos:updateAllData}
      const response=await updateCategoryAPI(categoryId,updateCategoryDetails)
      setremoveVideoRespoonseFromView(response)
      await uploadVideoAPI(video)
      getAllVideos()
  
  }

  return (
    <>
      <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDrop(e)}>
        {
          allVideos.length>0?
          allVideos?.map(video=>(
            <Col key={video?.id} className='mb-3' sm={12} md={6} lg={4}>
          <Videocard setDeleteResponse={setDeleteResponse} displayData={video}/>
        </Col>
          )):
          <div className="text-danger fw-bolder">No videos</div>
        }
        
      </Row>
    </>
  )
}

export default View
