
const NewCollection = () => {
    return (
        <div>
            <h2 className="text-3xl text-center font-bold text-white">New Collections</h2>
            <hr className="mx-40 mb-10" />
            <div className="carousel w-full mx-auto h-[420px] rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/7RbwFMw/henry-becker-0-Ist-S7-STNm4-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-72 left-0 right-0 text-center text-white bg-emerald-600 mx-10 rounded-lg p-2">
                        <h3 className=" text-2xl font-bold mx-40 ">Turbo Racer</h3>
                        <p className="mx-20 text-xs">Description: Experience the thrill of high-speed racing with the Turbo Racer toy car. Its sleek design and powerful engine make it perfect for zooming through imaginary race tracks. Get ready for adrenaline-pumping adventures!</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2MkB5ht/wahid-sadiq-AKk70o-U8-Q8-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-72 left-0 right-0 text-center text-white bg-emerald-600 mx-10 rounded-lg p-2">
                        <h3 className=" text-2xl font-bold mx-40 ">Off-Road Explorer</h3>
                        <p className="mx-20 text-xs">Description: Take your toy car adventures off the beaten path with the Off-Road Explorer. This rugged vehicle is built to tackle any terrain, from rocky mountains to sandy beaches. Its large wheels and sturdy frame ensure a smooth ride on all your outdoor expeditions.</p>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/7RbwFMw/henry-becker-0-Ist-S7-STNm4-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-72 left-0 right-0 text-center text-white bg-emerald-600 mx-10 rounded-lg p-2">
                        <h3 className=" text-2xl font-bold mx-40 ">Super Speedster</h3>
                        <p className="mx-20 text-xs">Description: Get ready for lightning-fast fun with the Super Speedster toy car. With its aerodynamic shape and turbocharged engine, this car is built for speed. Watch it zoom past the competition as you race through your imaginary tracks.</p>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/T4jX2v9/ivan-diaz-ea-Hp-Lnx-Z21w-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-72 left-0 right-0 text-center text-white bg-emerald-600 mx-10 rounded-lg p-2">
                        <h3 className=" text-2xl font-bold mx-40 ">Monster Crusher</h3>
                        <p className="mx-20 text-xs">Description: Unleash the power of the Monster Crusher toy car. This beastly vehicle is designed to crush anything in its path. Its massive tires and robust suspension system allow it to conquer obstacles and crush through barriers with ease.</p>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Gphj8fJ/chips-champagner-pyoyr-HVWCgk-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-72 left-0 right-0 text-center text-white bg-emerald-600 mx-10 rounded-lg p-2">
                        <h3 className=" text-2xl font-bold mx-40 ">Convertible Cruiser</h3>
                        <p className="mx-20 text-xs">Description: Cruise in style with the Convertible Cruiser toy car. This sleek and stylish convertible is perfect for a leisurely drive along imaginary scenic routes. With its retractable roof and comfortable seats, you will enjoy a luxurious ride every time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;