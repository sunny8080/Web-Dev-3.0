import axios from 'axios';
import './styles/style.css';

const addressForm = document.getElementById('address-form') as HTMLFormElement;
const addressInput = document.getElementById('address-input') as HTMLInputElement;
const mapEl = document.getElementById('map') as HTMLDivElement;

const GoogleGeocodingApi = 'https://maps.googleapis.com/maps/api/geocode/json';

// declare var google: any;

type GoogleGeocodingResponse = {
  results: {
    geometry: { location: { lat: number; lng: number } };
  }[];
  status: 'OK' | 'ZERO_RESULTS';
};

async function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  let response = await axios.get<GoogleGeocodingResponse>(`${GoogleGeocodingApi}?address=${encodeURI(enteredAddress)}&key=${process.env.GOOGLE_MAP_API_KEY}`);

  if (response.data.status !== 'OK') {
    console.log(response.data)
    return alert('Could not fetch location !');
  }
  const coordinates = response.data.results[0].geometry.location;
  const googleMap = new google.maps.Map(mapEl, {
    center: coordinates,
    zoom: 16,
  });

  new google.maps.Marker({ position: coordinates, map: googleMap });

  console.log(response.data);
}

addressForm.addEventListener('submit', searchAddressHandler);
