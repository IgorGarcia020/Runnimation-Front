import { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import { mockShows } from "../../../mockData/mockShows";
import { getRecentReleases } from "../../../services/api";

function Releases() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRecentReleases()
      .then((data) => setShows(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando estrenos recientes...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <Carousel shows={shows} />
    </div>
  );
}

export default Releases;
