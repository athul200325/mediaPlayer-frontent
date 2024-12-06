import commonAPI from "./commonAPI";
import SERVER_URL from "./serverurl";




export const uploadVideoAPI= async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}


export const getVideoAPI= async (video)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}


export const saveVideoDetailsAPI= async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}


export const removeHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

// removeCategoryAPI - called by category
export const removeCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}
// getSingleVideoAPI - called by category
export const getSingleVideoAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")

}
// updateCategoryAPI - CALLED by category
export const updateCategoryAPI = async (categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}

export const getSingleCategoryAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${id}`,"")
}