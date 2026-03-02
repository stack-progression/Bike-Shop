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
function App() {
  // const { data: products, isPending: productsLoading } = useProducts();
  // const { data: categories, isPending: categoriesLoading } = useCategories();
  // const { data: variants, isPending: variantsLoading } = useVariants();
  // const { data: reviews, isPending: reviewsLoading } = useReviews();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<ShopLayout />}>
          <Route index element={<ShopHome />} />
          <Route path="category/:categorySlug" element={<Category />} />
          <Route path="brand/:brandSlug" element={<Filter />} />
        </Route>
        <Route path="product/:id" element={<Product />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
