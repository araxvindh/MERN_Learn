import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const UseEffectAPI = () => {
    var [posts, setPost] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPost(res.data);
            }
            )
            .catch((err) => console.log("could not fetch data", err));
    }, []);

    return (
        <div>
            <h1>This is UseEffect Api</h1>
            <h2>
                We are going to fetch data from JsonPlaceholder and display the data{" "}
            </h2>
            <ol>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>

            <button
                onClick={() => {
                    console.log("button clicked");
                }}
            >
                buttonClicked
            </button>
        </div>
    );
};
export default UseEffectAPI;
