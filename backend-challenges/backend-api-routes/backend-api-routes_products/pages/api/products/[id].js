import {
  getAllProducts,
  getProductById,
} from "../../../services/productServices";
import { useSWR } from "swr";

export default function handler(request, response) {
  const id = request.query.id;
  console.log("id: ", id);
  const products = getAllProducts();
  const product = products.find((product) => product.id === id);
  if (!product) {
    response.status(404).json({ status: "product not found" });
    console.log("product: ", products);
    return;
  }
  response.status(200).json(product);
}

// export default function handler(request, response) {
//   const id = request.query.id;
//   console.log("productId: ", id);
//   console.log("IdProduct :", getProductById("5"));
//   const product = getProductById(id);
//   if (!product) {
//     response.status(404).json("Product not found");
//   }
//   response.status(200).json({ product: getProductById(id) });
// }
