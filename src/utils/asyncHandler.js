const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
};





export {asyncHandler};


// const asyncHandler =()=>{()=>{}}  

    // const asyncHandler = (fn)=> async (req,res,next)=>{
    //     try {
    //         wait fn(req,res,next)
    //     } catch (error) {
    //         res.status(error.code || 500).json(
    //             {
    //                 success:false,
    //                 message:err.message
    //             }
    //         )
    //     }
    // }


