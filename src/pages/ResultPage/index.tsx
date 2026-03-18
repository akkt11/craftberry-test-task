import "./result-page.scss";
import { useEffect, useMemo, useState } from "react";
import type { ProductResponse, ProductType } from "../../common/types";
import { ResultInner } from "./components/ResultInner";
import { ResultBlocks } from "./components/ResultBlocks";
import useLocalStorage from "../../components/Hooks/useLocalStorage";
import { ANSWERS_KEY, PRODUCTS_URL } from "../../common";
import { useNavigate } from "react-router";
import { useWishlist } from "../../components/Hooks";

const filterProduct = (
  { title, body_html, tags }: ProductType,
  answers: Record<string, string[]>,
) => {
  const text = [title, body_html, ...(tags || [])].join(" ").toLowerCase();

  const keywords = Object.values(answers)
    .join(" ")
    .toLowerCase()
    .split(/[\s,/]+/)
    .filter((kw) => kw.length > 3); // 👈

  return keywords.filter((kw) => text.includes(kw)).length;
};

export const ResultPage = () => {
  const navigateTo = useNavigate();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const { storedValue: answers } = useLocalStorage<Record<string, string[]>>(
    ANSWERS_KEY,
    {},
  );

  const { wishlist } = useWishlist();

  useEffect(() => {
    const hasAnswers = Object.keys(answers).length > 0;
    if (!hasAnswers) navigateTo("/");
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .map((product) => ({
        ...product,
        score: filterProduct(product, answers),
      }))
      .sort((a, b) => {
        const aW = wishlist.includes(a.id) ? 1 : 0;
        const bW = wishlist.includes(b.id) ? 1 : 0;
        if (bW !== aW) return bW - aW;
        return b.score - a.score;
      })
      .filter(({ score }) => score > 0);
  }, [products, answers, wishlist]);

  const getProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch(PRODUCTS_URL);
      const newResponse: ProductResponse = await response.json();

      setProducts(newResponse.products);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="result">
      <div className="result__container">
        <div className="result__overlay" />

        <ResultInner />
      </div>

      <ResultBlocks products={filteredProducts} loading={loading} />
    </section>
  );
};
