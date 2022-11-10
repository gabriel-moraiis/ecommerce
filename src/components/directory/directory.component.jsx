import DirectoryItem from '../directory-item/directory-item.component';
import { Container } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'chapéus',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jaquetas',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'tênis',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'mulheres',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'homens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens',
  },
];

function Directory() {
  return (
    <Container>
      {categories.map((categorie) => (
        <DirectoryItem key={categorie.id} categorie={categorie} />
      ))}
    </Container>
  );
}

export default Directory;
