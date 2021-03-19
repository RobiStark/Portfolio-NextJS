import Layout from  '../components/Layout'

const Index = () => (

<Layout>
    <h1>Hello World</h1>

    {/**Header Card */}
    <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-secondary text-light">
                <div className="row">
                    <div className="col-md-4">
                        <img src="ryan-ray-profile2.jpeg" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-8">
                        <h1>Rayn Ray</h1>
                        <h3>FullStack Developer</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia laudantium suscipit culpa? Aut, ab? Dolorum blanditiis possimus quibusdam aliquid ducimus quo molestias alias aperiam. Quasi perferendis rem et ducimus!
                        </p>
                        <a href="/hireme">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</Layout>

    )

export default Index;