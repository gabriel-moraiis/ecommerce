import { useNavigate } from 'react-router-dom';

import { BackgroundImage, Body, Container } from './directory-item.styles';

function DirectoryItem({ categorie }) {
  const { title, imageUrl } = categorie;

  const navigate = useNavigate();

  const handleClickContainer = () => {
    navigate(`/catalogo/${title}`);
  };

  return (
    <Container
      onClick={handleClickContainer}
    >
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Compre agora</p>
      </Body>
    </Container>
  );
}

export default DirectoryItem;
