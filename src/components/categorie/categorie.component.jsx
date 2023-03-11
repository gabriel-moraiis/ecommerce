import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';
import { Container, ContainerProducts } from './categorie.styles';
import { selectCategories } from '../../store/categories/category.selector';

const Categorie = () => {
  const { categorieRoute } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[categorieRoute]);
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
