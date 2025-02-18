function promiseEg(value) {
  return new Promise((resolve, reject) => {
    // resolve("The Promise is resolved")
    setTimeout(() => {
      if (value) {
        resolve("The Promise is resolved");
      } else {
        reject("The Promise is rejected");
      }
    }, 5000);
  });
}

promiseEg(false)
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });

// console.log(promiseEg());

// practice

function practice1(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve("The promise is resolved");
      } else {
        reject("The promise is rejected");
      }
    }, 5000);
  });
}

practice1(true)
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });

  //location Finder 

  //1.Promise(LocFound,LocNotFound)
  //2.Chennai,setTimeOut(2sec)

  function locationFinder(loc,time)
  {
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>
        {
            if(isLocationFound(loc,time))
            {
                locFound(loc);
            }
            else
            {
                locNotFound("Location Not Found");
            }
        },time)
    });
  }

function isLocationFound(loc,time)
{
    const location="Chennai";
    const t=1000;
    if(loc === location && t<=time)
    {
        return true;
    }
    else
    {
        return false;
    }
}
locationFinder("Chennai",3000).then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log(res);
});
