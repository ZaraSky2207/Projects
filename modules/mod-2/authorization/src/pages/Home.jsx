import { posts } from "../data"

const Home = () => {
    return (
        <div className="home">
            {posts.map(post=>(
                <Card/>

            ))}
            
        </div>
    )
}

export default Home 