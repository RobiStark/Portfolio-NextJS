
import Layout from '../components/Layout'

const Error = ({statusCode}) => {
    return ( 

        <Layout>
            {
                statusCode ? (
                    <p className="text-center">Could not load your page: Status Code {statusCode}</p>
                ):(
                    <p className="text-center">Could not load your page</p>
                )
            }
            
        </Layout>
     );
}
 
export default Error;