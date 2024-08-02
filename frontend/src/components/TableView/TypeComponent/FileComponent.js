import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px 8px;
`

const Image = styled.img`
    max-height: 24px;
    border-radius: 4px;
`

const imagesExtension = ['jpg', 'png', 'gif', 'webp']

const isImageFile = (url) => {
  return imagesExtension.some((ext) => url.includes(ext));
};

const FileComponent = ({ info }) => {
  const files = info.getValue().files;

  return (
    <Container>
      {
        files.map((item) => isImageFile(item.file.url) ?
          (<Image src={item.file.url} alt="" key={item.file.expiry_time} />) :
          (<a href={item.file.url} target="_blank" rel="noreferrer" key={item.file.expiry_time}>{item.name}</a>))
      }
    </Container>
  )
};

export default FileComponent
