import Layout from  '../components/Layout'

const GitHub = ({user}) =>{

    return(

        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.login}</h1>
                        <img src={user.avatar_url} alt=""/>
                        <p>{user.bio}</p>
                        <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">My Blog</a>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary my-2">My Go to GitHub</a>
                    </div>
                </div>
            </div>
        </Layout>
    
    )

} 

export async function getServerSideProps(){
    const res = await fetch ('https://api.github.com/users/RobiStark')
    const data = await res.json();

    return{
        props:{
            user: data
        }
    }
}

export default GitHub;
