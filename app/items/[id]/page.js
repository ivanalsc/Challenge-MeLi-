
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./product.module.css";
import ProductPageContainer from "@/app/components/ProductPageContainer";

export default async function ProductPage({ params }) {


  const productInfo = await fetch(
    `https://api.mercadolibre.com/items/${params.id}`
  ).then((res) => res.json());

  const productDescription = await fetch(
    `https://api.mercadolibre.com/items/${params.id}/description`
  ).then((res) => res.json());

  const brandAttr = (element) => element.id === "BRAND";
  const relatedProductsIndex = productInfo.attributes.findIndex(brandAttr);
  const relatedProductTerm =
    productInfo.attributes[relatedProductsIndex].value_name;

  const relatedProducts = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${relatedProductTerm}&limit=3`
  ).then((res) => res.json());

  const attributes = productInfo.attributes;

  const pictures = productInfo.pictures;

  const stock = productInfo.available_quantity ? "Stock disponible" : "";



  return (
    <>
      <Header />
      <div className={styles.productPageContainer}>
        <main>
          <ProductPageContainer 
                                productInfo={productInfo}
                                productDescription ={productDescription}
                                relatedProducts={relatedProducts}
                                attributes = {attributes}
                                pictures = {pictures}    
                                stock ={stock}
          />
       
        </main>
      </div>
      <Footer />
    </>
  );
}
