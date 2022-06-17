import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  navigate("/homepage", { replace: true });
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Laptop</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;

// <li>
//           <Link to="/products/p2">Mobile</Link>
//         </li>
//         <li>
//           <Link to="/products/p3">Watch</Link>
//         </li>
