import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  console.log("request.query: ", request.query);
  const { id } = request.query;
  const product = await Product.findById(id);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }
  return response.status(200).json(product);
}
