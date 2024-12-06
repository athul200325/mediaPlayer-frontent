import React, { useState } from 'react'
import { Card,Modal } from 'react-bootstrap'
import {removeVideoAPI, saveVideoDetailsAPI} from '../Services/allAPI'


const Videocard = ({displayData,setDeleteResponse,insideCategory}) => {
    const [show, setShow] = useState(false);

    const handleClose = () =>  setShow(false);
    const handleShow = async() => {
      setShow(true);
      const {caption,link}=displayData
      const today=new Date()
      const timeStamp=today.toLocaleString('en-US',{timeZoneName:'short'})
      console.log(timeStamp);
      const videoDetails={caption,link,timeStamp}
      await saveVideoDetailsAPI(videoDetails)
      
    }



    const deleteVideo=async(id)=>{
     const result= await removeVideoAPI(id)
     setDeleteResponse(result)
  
    }

    const videoDragStart=(e,videoId)=>{
      // console.log(`${videoId}`);
      e.dataTransfer.setData("id",videoId)
      
    }

  return (
    <>
    <Card draggable={true} onDragStart={e=>videoDragStart(e,displayData?.id)} className='mt-5 shadow-lg' style={{ height: '250px' }}>
      <Card.Img onClick={handleShow} style={{objectFit:'cover' ,objectPosition:'top'}} variant="top" height={'170px'} src={displayData?.url} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          {!insideCategory&& <button  onClick={()=>deleteVideo(displayData?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="500" src={`${displayData?.link}?autoplay=1`} title="JAM | Final Part | Karikku | Comedy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard
