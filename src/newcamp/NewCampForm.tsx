import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
interface Props {
  token : string | null
}
const NewCampForm: React.FC<Props> = ({token}) => {
  const [name, setName] = useState<string >('');
  const [location, setLocation] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [bed, setBed] = useState<string | number>('');
const [price, setPrice] = useState<string | number>('');
 const [wifi, setWifi] = useState<any>(false);
  const [image, setImage] = useState<File | null>(null);

// calling out use navigate
const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
      const formData = new FormData();
      formData.append('file', image!);
      formData.append('name', name);
      formData.append('location', location);
      formData.append('description', description);
      formData.append('bed', Number(bed).toString());
      formData.append('price', Number(price).toString());
      formData.append('wifi', wifi.toString());
try{
      const res = await fetch('/camps', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData
      });
      const data = await res.json();
      setName('');
      setLocation('');
      setDescription('');
       setBed('');
      setPrice('');
      setWifi(false);
      setImage(null);
      navigate('/search')
    } 
    catch (error){
        console.log(error)
    }
}

  return (
    <>
    <form onSubmit={handleSubmit} className="bg-light p-3 add">
      <h2 className="text-center">Add New Camp</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="form-control"
          />
          </div>
          <div className="form-group">
          <label htmlFor="bed">Number of beds:</label>
          <input
          type="number"
          id="bed"
          value={bed}
          onChange={(event) =>
            setBed(event.target.value === '' ? '' : parseInt(event.target.value))
          }
          className="form-control"
          />
          </div>
          <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
          type="number"
          id="price"
          value={price}
          onChange={(event) =>
            setPrice(event.target.value === '' ? '' : parseInt(event.target.value))
          }
          className="form-control"
          />
          </div>
                <div className="form-group">
          <label htmlFor="wifi">Wifi:</label>
          <select
          id="wifi"
          value={wifi}
          onChange={(event) => setWifi(event.target.value)}
          className="form-control">
          <option value="">Select Wifi</option>
          <option value="true">True</option>
          <option value="false">False</option>
          </select>
          </div>
                    <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                    type="file"
                    name='file'
                    id="image"
                    onChange={(event) => setImage(event.target.files![0])}
                    className="form-control"
                    />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Add Camp</button>
                    </form>
                    </>
                    );
                    };

                export default NewCampForm;