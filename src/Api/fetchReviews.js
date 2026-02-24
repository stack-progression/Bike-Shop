export const fetchReviews = async() => {
    const res = await fetch("https://bike-shop-xe1j.onrender.com/reviews");
    if(!res.ok){
        throw new Error("Network response was not ok");
    }
    return res.json();
}