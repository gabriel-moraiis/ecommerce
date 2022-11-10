import { BackgroundImage, Body, Container } from './directory-item.styles';

function DirectoryItem({ categorie }) {
  const { title, imageUrl } = categorie;

  return (
    <Container>
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
