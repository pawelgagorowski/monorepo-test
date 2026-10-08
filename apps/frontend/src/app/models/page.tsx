import { getModels } from "api/models";

export default async function ModelsPage() {
  const models = await getModels();

  return (
    <main>
      <h1>Models</h1>
      <ul>
        {models.map((model) => (
          <li key={model.id}>
            {model.name} ({model.riskLevel})
          </li>
        ))}
      </ul>
    </main>
  );
}
