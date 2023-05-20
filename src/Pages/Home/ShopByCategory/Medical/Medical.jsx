
const Medical = ({car}) => {
    const {photo, toyName} = car;
    return (
        <div className="">
            <img className="w-[200px]" src={photo} alt="" />
            <h2>{toyName}</h2>
        </div>
    );
};

export default Medical;