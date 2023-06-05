import { getAllProducts } from "../../../services/productServices.js";

export default function handler(request, response) {
  console.log(getAllProducts());
  response.status(200).json({ products: getAllProducts() });
}
