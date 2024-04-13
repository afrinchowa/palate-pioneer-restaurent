

const MenuItem = ({item}) => {
    const {image, price,name , recipe} =item;

    return (
        <div className="flex justify-between space-x-4 mb-16">
            <img className="w-48 " src={image} alt="" />
            <div>
                <h3 className="uppercase text-2xl font-bold border-y-2">{name}</h3>
                <p className="my-4 text-[#1A1423]">{recipe}</p>
              
            </div>
            <p className="text-[#96705B]">${price}</p>
        </div>
    );
};

export default MenuItem;