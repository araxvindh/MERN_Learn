import { lazy,Suspense } from "react"
const LazyComp=lazy(()=>import("../Sign.jsx"))                
const LazyLoadingAndSuspense =()=>
{
   return(
    <div>
        <Suspense fallback={<h1>Loading .. .....</h1>}>
        <h1>
            this is lazy 
        </h1>
        </Suspense>
    </div>
   )
}

export default LazyLoadingAndSuspense