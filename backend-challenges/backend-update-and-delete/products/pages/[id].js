import Product from "../components/product";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { query, push } = router;
  const { id } = router.query;

  async function updateProduct(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  const { trigger, isMutating } = useSWRMutation(
    `/api/products/${id}`,
    updateProduct
  );

  async function handleEditProduct(event) {
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    await trigger(productData);
    push("/");
  }

  return (
    <>
      <Product onSubmit={handleEditProduct} />
    </>
  );
}
