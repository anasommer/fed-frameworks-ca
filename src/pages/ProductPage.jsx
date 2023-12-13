import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const params = useParams();
  console.log(params.id);

  return <h2>Paaage</h2>;
}
