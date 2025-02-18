// async function asAw() {
//     var a = 15;
//     setTimeout(function() {
//         console.log("hello");
//     }, 5000);
//     console.log(await a);
// }
// console.log(asAw().then((res)=>{console.log(res)}));
// console.log(asAw()); 

// asAw().then((res)=>{
//     console.log(res);

// }).catch((res)=>
//  {
//      console.log("res");
//  })

// Instagram console demo for post ,like ,comment ,share


shareCode = async() => {
    return new Promise((sharePost) => 
    {
        setTimeout(() => {
            sharePost("Post shared");
        }, 5000);
    })
}

commentCode = async() => {
    return new Promise((commentPost) => 
    {
        setTimeout(() => {
            commentPost("Commented on the post");
        }, 5000);
    })
}


likeCode = async() => {
    return new Promise((likePost) => 
    {
        setTimeout(() => {
            likePost("Post liked");
        },5000);
    })
}


async function postCode()
{
    var post = new Promise((createPost) => {
        
        setTimeout(() => {
            createPost("Post created");
        }, 5000);
    })

    const [pos,like,comment,share] = await Promise.all([post,likeCode(),commentCode(),shareCode()]);

    console.log(pos);
    console.log(like);
    console.log(comment);
    console.log(share);
}
postCode()
// console.log( postCode());