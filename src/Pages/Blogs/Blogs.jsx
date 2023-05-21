
const Blogs = () => {
    return (
        <div>
            <h2 className="text-3xl text-center text-white font-bold my-10">Blogs</h2>
            <div className="p-10">
                <h2 className="text-3xl text-white mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="text-white">An access token is a credential used to authenticate and authorize a client to access protected resources on a server. It is typically issued by an authentication server after the client successfully authenticates using their credentials (e.g., username and password). The access token is then sent with each subsequent request to the server to access protected resources.</p>
            </div>
            <div className="p-10">
                <h2 className="text-3xl text-white mb-4">Compare SQL and NoSQL databases?</h2>
                <p className="text-white">SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems that have different approaches to storing and retrieving data. Here is a comparison between the two SQL: SQL databases follow a structured, tabular data model. They use predefined schemas to define the structure of the data, and each row in a table represents a single record with fixed columns.
                    NoSQL: NoSQL databases employ various data models, including key-value, document, columnar, and graph. They offer flexibility by allowing data to be stored in a more dynamic and schema-less manner.</p>
            </div>
            <div className="p-10">
                <h2 className="text-3xl text-white mb-4">What is express js? What is Nest JS?</h2>
                <p className="text-white">Express.js is a fast and minimalist web application framework for Node.js. It provides a robust set of features for building web applications and APIs, with a focus on simplicity and flexibility. Express.js allows developers to create server-side applications and handle HTTP requests, define routes, handle middleware, and render dynamic content using various template engines. It is widely used and has a large ecosystem of plugins and extensions.</p>
            </div>
            <div className="p-10">
                <h2 className="text-3xl text-white mb-4">What is MongoDB aggregate and how does it work?</h2>
                <p className="text-white">
                    In MongoDB, the aggregate function is used to perform advanced data processing and analysis on collections of documents. It allows you to perform complex data transformations, aggregations, and computations on the data stored in MongoDB.
                    The aggregate function works by taking a pipeline of stages as input. Each stage in the pipeline performs a specific operation on the documents. The output of one stage is passed as input to the next stage, creating a chain of operations.</p>
            </div>
        </div>
    );
};

export default Blogs;