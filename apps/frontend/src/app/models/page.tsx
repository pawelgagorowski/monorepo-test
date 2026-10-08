import Link from "next/link";
import { getModels } from "api/models";
import { RiskBadge } from "components/RiskBadge";

export default async function ModelsPage() {
  const models = await getModels();

  return (
    <main>
      <h1>Models</h1>
      <ul>
        {models.map((model) => (
          <li key={model.id}>
            <Link href={`/models/${model.id}`}>{model.name}</Link> <RiskBadge riskLevel={model.riskLevel} />
          </li>
        ))}
      </ul>
    </main>
  );
}
