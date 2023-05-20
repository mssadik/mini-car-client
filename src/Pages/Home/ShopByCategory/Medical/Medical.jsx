
const Medical = ({car}) => {
    const {image, name} = car;
    return (
        <div className="">
            <img className="w-[200px]" src={image} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Medical;