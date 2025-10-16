import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <h1>Des voisins talentueux, à deux pas de chez vous !</h1>
        <p>
          Demandez d'aide et selectionnez la meilleure offre parmi 50.000
          particuliers et professionnels !
        </p>
        <Link to="/requestService">Hulp nodig? Plaats een aanvraag</Link>
        <Link to="#">Ik bied mijn diensten aan</Link>
      </main>
    </>
  );
}

export default App;
