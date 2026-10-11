// Hand-maintained mirrors of BE enums (BE-clone-test). Nothing checks that the values still match.
export enum ModelStatusCode {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  DRAFT = "Draft",
}

export enum RequestStatus {
  REQUESTED = "Requested",
  ASSIGNED = "Assigned",
  IN_PROCESS = "In Progress",
  COMPLETED = "Completed",
  /** Derived by the BE for a Requested request whose requestDate is in the future. */
  SCHEDULED = "Scheduled",
}
