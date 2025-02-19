const Home = (properties) =>{       //{sjit}
    var styling ={
        textAlign:"center",
        backgroundColor:"lightblue",
        color:"white"
    }
    //var a= 20;
    return (
        <div>
            <h2 style={styling}>Home Page</h2>
            <h3>This tag is Props</h3>
            <h3>Props: {properties.sjit}</h3>
            <h3>Props: {properties.properties}</h3>
            {/* <h3>{sjit}</h3> */}
        </div>
    )
}
export default Home