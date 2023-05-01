import React from 'react';
import { Card } from 'react-bootstrap';

interface PreviewProps {
  name: string;
  location: string;
  description: string;
  bed: number | string;
  price: number | string;
  wifi: any;
  image: File | null;
}

const PreviewCampground: React.FC<PreviewProps> = ({
  name,
  location,
  description,
  bed,
  price,
  wifi,
  image,
}) => {
  const [imageUrl, setImageUrl] = React.useState<string>('');

  React.useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setImageUrl('');
    }
  }, [image]);

  return (
    <Card className="bg-dark text-white mt-3">
      {imageUrl && <Card.Img variant="top" src={imageUrl} />}
      <Card.Body>
        <Card.Title>{name || 'Campground Name'}</Card.Title>
        <Card.Text>{description || 'Campground Description'}</Card.Text>
        <Card.Text>Location: {location || 'Campground Location'}</Card.Text>
        <Card.Text>Bed: {bed || 'Number of Beds'}</Card.Text>
        <Card.Text>Price: {price || 'Campground Price'}</Card.Text>
        <Card.Text>Wifi: {wifi === 'true' ? 'Yes' : 'No'}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PreviewCampground;
