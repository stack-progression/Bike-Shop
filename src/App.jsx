import { ShopContext } from "./Context/ShopContext";
import { useCategories } from "./Hooks/useCategories";
import { useProducts } from "./Hooks/useProducts";
import { useReviews } from "./Hooks/useReviews";
import { useVariants } from "./Hooks/useVariants";
// import { useQuery } from "@tanstack/react-query";
function App() {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () =>
  //     fetch('https://bike-shop-xe1j.onrender.com/categories').then((res) =>
  //       res.json(),
  //     ),
  // })

  // if (isPending) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message

  const { data: products, isPending: productsLoading } = useProducts();
  const { data: categories, isPending: categoriesLoading } = useCategories();
  const { data: variants, isPending: variantsLoading } = useVariants();
  const { data: reviews, isPending: reviewsLoading } = useReviews();

  if (productsLoading || categoriesLoading || variantsLoading || reviewsLoading)
    return "Loading...";

  return (
    <div>
      {products?.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            {
              item?.variants?.map((variant, i) => {
                return(
                  <div key={i}>
                    <h2>{variant.label}</h2>
                    {variant.images.map((img, idx) => {
                      return(
                        img && <img style={{width: "100px"}} key={idx} src={img}/>
                      )
                    })}
                  </div>
                )
              })
            }
          </div>
        )
      })}
      {categories?.map((item) => {
        return (
          <h1 key={item.id}>
            {item.name} - {item.slug}
          </h1>
        );
      })}
      {variants?.map((item) => {
        return (
          <h1 key={item.id}>
            {item.colorKey} - {item.label}
          </h1>
        );
      })}
      {reviews?.map((item) => {
        return (
          <h1 key={item.id}>
            {item.userName} - {item.rating}
          </h1>
        );
      })}
    </div>
  );
}

export default App;
