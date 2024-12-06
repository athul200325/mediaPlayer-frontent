
import React, { useEffect, useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { addCategoryAPI, getCategoryAPI,getSingleVideoAPI,removeCategoryAPI,removeVideoAPI,updateCategoryAPI } from "../Services/allAPI";
import Videocard from "./Videocard";

const Category = ({setRemoveVideoResponseFromCategory,removeVideoRespoonseFromView}) => {
  const[allCategory,setAllCategory]=useState([])


  useEffect(()=>{
    getAllCategory()
  },[removeVideoRespoonseFromView])

  const [categoryName,setcategoryName]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleAddCategory=async()=>{
    if(categoryName){
        const categoryDetails={categoryName,allVideos:[]}
        await addCategoryAPI(categoryDetails)
        handleClose()
        setcategoryName("")
        getAllCategory()
    }else{
      alert('Please fill the form')
    }
  }

  const getAllCategory=async()=>{
    const response=await getCategoryAPI()
    setAllCategory(response.data)
  }

  console.log(allCategory);
  
  
  const deleteCategory = async(id)=>{
    await removeCategoryAPI(id)
    getAllCategory()
  }
  const dragOverCategory =e=>{
    e.preventDefault()
  }
  const videoDropOverCategory = async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("id")
    console.log(`video id : ${videoId} Dropped Inside category id : ${categoryId}`);
    // add vidoe into category
    // get dropping vidoe details - call api
    const {data} = await getSingleVideoAPI(videoId)
    console.log(data);
    
    // get details dropping category abd insert videoDEtails of caegory allVideos
    const selectedCategory = allCategory?.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    // update selected category into json file call api
    await updateCategoryAPI(categoryId,selectedCategory)
    // remove video from allvideoes-callapi
    const response = await removeVideoAPI(videoId)
    // pass response to view component
    setRemoveVideoResponseFromCategory(response)
    // get all updated categories
    getAllCategory()
  }

  const categoryVideoDragStart=(e,categoryId,video)=>{
      // console.log(`video with id:${categoryId} and ${video.id}`);
      let dataShare={categoryId,video}
      e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
      
  }


  return (
    <>
      <div className="d-flex justify-content-around align-items-center">
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-warning rounded-circle fs-5 fw-bolder' style={{ width: '50px', height: '50px', padding: '0' }}>+</button>
      </div>

      <div className="container-fluid mt-3">
{
  allCategory?.length>0?
  allCategory?.map(categoryDetails=>(
    <div droppable="true" onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropOverCategory(e,categoryDetails?.id)} className="border rounded p-3 mb-3">
    <div className="d-flex justify-content-between">
      <h4>{categoryDetails?.categoryName}</h4>
      <button onClick={()=>deleteCategory(categoryDetails?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
    </div>
    <div className="row mt-2">
      {
        categoryDetails?.allVideos?.length>0&&
        categoryDetails?.allVideos?.map(video=>(
          <div draggable={true} onDragStart={e=>categoryVideoDragStart(e,categoryDetails?.id,video)} key={video?.id} className="col-md-4">
            <Videocard displayData={video} insideCategory={true}/>
          </div>
        ))
      }
    </div>
  </div>
  )
  )
  :
  <div className="text-danger fw-bolder">No Categories</div>
}
      </div>

      <Modal show={show} onHide={handleClose}
      backdrop='static'
      keyboard={false}
      centered
      >
        
        <Modal.Header closeButton>
          <Modal.Title>Upload Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <FloatingLabel
              controlId="floatingInputName"
              label="Category Name"
              className="mb-3"
            >
              <Form.Control onChange={e=>setcategoryName(e.target.value)} type="text" placeholder="Category Name" />
            </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className="btn btn-info" >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category

