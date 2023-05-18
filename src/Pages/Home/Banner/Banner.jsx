import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mb-80'>
            <div className="relative h-64">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://i.ibb.co/xqjBjdS/banner.jpg"
                        alt="Background Image"
                        className="object-cover w-full h-[500px]"
                    />
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-white text-center">
                        <h1 className="text-4xl font-bold mb-4">Hey Children Wellcome to</h1>
                        <p className="text-lg mb-8">Mini Car World</p>
                        <Link
                            to="/your-link"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold uppercase hover:bg-blue-700 transition duration-300"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;