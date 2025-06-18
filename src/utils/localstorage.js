import toast from 'react-hot-toast';

export const getBlogs = ()=>{
    let blogs = [];
    const storedBlogs = localStorage.getItem("blogs")
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs)
    }
    return blogs;
}


// save blogs

export const saveBlog = (blog)=>{
    const blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id)

    if(isExist){
        return toast.error("Already Blog Bookmarked!")
    }
    blogs.push(blog)
    localStorage.setItem("blogs", JSON.stringify(blogs))
    return toast.success("Blog Bookmarked Successfully!")
}


// delete blog

export const deleteBlog = (id)=>{
    const blogs = getBlogs();

    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem("blogs",JSON.stringify(remaining))
    return toast.success("Blog Remove from Bookmark!")
}