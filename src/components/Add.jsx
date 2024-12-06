import React,{useState} from 'react'
import { Button,Modal,Form,FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../Services/allAPI'

const Add = ({setVideoUpRes}) => {
  const[isInvalidLink,setIsInvalidLink] = useState(false)
  const[videoDetails,setVideoDetails] = useState({
    caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(videoDetails);
  
  const getEmbedLink = (YoutubeLink)=>{
    if(YoutubeLink.includes("v=")){
      const videoId = YoutubeLink.split("v=")[1].slice(0,11)
      console.log(videoId);
      setVideoDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
      setIsInvalidLink(false)
      

    }else{
      setIsInvalidLink(true)
      // console.log("invalid youtube link");
      setVideoDetails({...videoDetails,link:""})
      
    }
  }

  const handleUploadVideo = async ()=>{
    const{caption,url,link} = videoDetails
    if(caption && url && link){
// alert("call api")
try{
  const response = await uploadVideoAPI(videoDetails)
  // console.log(response);
  if(response.status>=200 && response.status<300){
    handleClose()
    setVideoDetails({...videoDetails,caption:"",url:"",link:""})
    setVideoUpRes(response.data)
    alert("video uploaded successfully")
  }
  
}catch(err){
  // console.log(err);
  
}
    }else{
alert("plese fill the form completed")
    }
  }

  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fs-5 fw-bolder'>+</button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
          <FloatingLabel
        controlId="floatingInputCaption"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="video caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputUrl"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,url:e.target.value})} type="text" placeholder="Image URL" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputLink"
        label="Youtube Link"
        
      >
        <Form.Control onChange={e=>getEmbedLink(e.target.value)} type="text" placeholder="Youtube link" />
      </FloatingLabel>
      {isInvalidLink &&
        <div className="mt-3 text-danger fw-bolder">
        Invalid Youtue Link
      </div>}

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-info'>
           Upload 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add