

const Banner = () => {
    return (
        <div className='mb-80'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/xqjBjdS/banner.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to these children</h1>
                        <p className="mb-5 text-3xl">Mini Car World</p>
                        <button className="btn btn-primary">Lets By A Car</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;