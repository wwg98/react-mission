import styles from "./ProductCard.module.css";
const ProductCard = ({ data }) => {
  const productList = data.map(({ id, name, price, brand }) => (
    <li key={id} className={styles.card}>
      <p>{name}</p>
      <p>{price}</p>
      <p>{brand}</p>
    </li>
  ));
  return (
    <>
      <article>
        <ul>{productList}</ul>
      </article>
    </>
  );
};

export default ProductCard;
