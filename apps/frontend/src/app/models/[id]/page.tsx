import Link from "next/link";
import { getModel } from "api/models";
import { RiskBadge } from "components/RiskBadge";

export default async function ModelDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const model = await getModel(Number(id));

  return (
    <main>
      <Link href="/models">← Back to models</Link>
      <h1>{model.name}</h1>
      <p>
        Risk level: <RiskBadge riskLevel={model.riskLevel} />
      </p>
    </main>
  );
}
