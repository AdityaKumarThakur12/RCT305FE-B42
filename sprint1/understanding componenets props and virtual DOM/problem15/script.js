const {useState} = React;

const blogs = [
    { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
    { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
    { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
];
function Blog({title, content, isFeatured}){
    return(
        <div className={`blog ${isFeatured ? 'featured' : ''}`}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}
function Bloglist(){
    return(
        <div>
            {blogs.map((ele,i)=>(
                <Blog key={i} title={ele.title} content={ele.content} isFeatured={ele.isFeatured}/>
            ))}
        </div>
        
    )
}

  


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Bloglist/>)