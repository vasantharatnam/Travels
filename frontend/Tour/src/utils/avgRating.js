
const calculateAvgRating = reviews =>{
    const totalRating  = reviews?.reduce((total , item) => total + item?.rating , 0);

    const avgRating = totalRating / reviews?.length;

    return {totalRating , avgRating ,};
};

export default calculateAvgRating;