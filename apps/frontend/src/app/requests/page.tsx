import { RequestStatus } from "api/enums";
import { getRequests } from "api/requests";

const STATUS_LABELS: Record<RequestStatus, string> = {
  [RequestStatus.REQUESTED]: "Requested",
  [RequestStatus.ASSIGNED]: "Assigned to advisor",
  [RequestStatus.IN_PROCESS]: "In progress",
  [RequestStatus.COMPLETED]: "Completed",
  [RequestStatus.SCHEDULED]: "Scheduled",
};

export default async function RequestsPage() {
  const requests = await getRequests();

  return (
    <main>
      <h1>Advisor requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            #{request.id} model {request.modelId} — {STATUS_LABELS[request.status]} ({request.requestDate})
          </li>
        ))}
      </ul>
    </main>
  );
}
