import ButtonLink from "../components/ui/ButtonLink";

export default function home() {
  return (
    <main>
      <section className="px-3 py-4">
        <div className="w-full aspect-square bg-[#eaddd1] mb-4"></div>
        <div className="flex flex-col gap-4">
          <h1 className="font-normal text-3xl">
            Des voisins talentueux, à deux pas de chez vous !
          </h1>
          <p className="opacity-60">
            Demandez d'aide et selectionnez la meilleure offre parmi 50.000
            particuliers et professionnels !
          </p>
          <div className="flex flex-row flex-wrap gap-3">
            <ButtonLink to="/request-service">
              Hulp nodig? Plaats een aanvraag
            </ButtonLink>
            <ButtonLink to="#" variant="secondary">
              Ik bied mijn diensten aan
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
