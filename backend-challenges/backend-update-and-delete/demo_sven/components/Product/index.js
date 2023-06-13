import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product({ onSubmit, onDelete }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/products/${id}` : null);
  const [isEditMode, setIsEditMode] = useState(false)

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledButton type="button" onClick={() => router.push("/")}>
        Back to all
      </StyledButton>
      <button type="button" onClick={() => { setIsEditMode(!isEditMode) }}>Toggle editmode</button>
      <button type="button" onClick={() => { onDelete(id) }}>Delete product</button>
      {isEditMode && <ProductForm onSubmit={onSubmit}/>}
    </ProductCard>
  );
}
