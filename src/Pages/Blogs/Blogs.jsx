import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=> {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="my-16 mx-5">
            <h1 className="text-center font-bold mb-10 text-3xl">Blogs</h1>
        <div className="max-w-5xl mx-auto flex flex-col gap-5 lg:gap-10 ">
            {
                blogs.map(blog => {
                    return(
                        <Blog key={blog.id} blog={blog}/>
                    )
                })
            }
        </div>
        </div>
    );
};

export default Blogs;