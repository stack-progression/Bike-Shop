import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { ShopContext } from "./Context/ShopContext";
// import { useCategories } from "./Hooks/useCategories";
// import { useProducts } from "./Hooks/useProducts";
// import { useReviews } from "./Hooks/useReviews";
// import { useVariants } from "./Hooks/useVariants";
// import { useBrands } from "./Hooks/useBrands";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import ShopLayout from "./Layout/ShopLayout";
import Category from "./Pages/Category";
import Filter from "./Pages/Filter";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopHome from "./Pages/ShopHome";
import NotFound from "./Pages/NotFound";
import LoginSignup from "./Pages/LoginSignup";
import Error from "./Components/Error/Error";

function App() {
  // const {data: brand, isPending: brandLoading} = useBrands();
  // const { data: products, isPending: productsLoading } = useProducts();
  // const { data: categories, isPending: categoriesLoading } = useCategories();
  // const { data: variants, isPending: variantsLoading } = useVariants();
  // const { data: reviews, isPending: reviewsLoading } = useReviews();

  // if(brandLoading) return "Loading..."
  // console.log(brand);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="autentification" element={<LoginSignup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<ShopLayout />}>
          <Route index element={<ShopHome />} />
          <Route
            path="category/:categorySlug"
            element={<Category />}
            errorElement={<Error />}
          />
          <Route
            path="brand/:brandSlug"
            element={<Filter />}
            errorElement={<Error />}
          />
        </Route>
        <Route
          path="product/:id"
          element={<Product />}
          errorElement={<Error />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
