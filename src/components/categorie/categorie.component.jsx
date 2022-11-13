import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categoriesContext.component';

import ProductCard from '../product-card/product-card.component';
import { Container, ContainerProducts } from './categorie.styles';

const Categorie = () => {
  const { categorieRoute } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categorieFind = categories.find((categorie) => {
      return categorie.title.toLowerCase() === categorieRoute.toLowerCase();
    });
    setProducts(categorieFind.items);
  }, [categorieRoute, categories]);
  return (
    <Container>
      <h2>{categorieRoute}</h2>
      <ContainerProducts>
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </ContainerProducts>
    </Container>
  );
};

export default Categorie;
