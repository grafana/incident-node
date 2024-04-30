// Code generated by oto; DO NOT EDIT.

import Client from './client';
import { decodeJson, APIResponse } from './utils/json';

import { z } from 'zod';

export { GrafanaIncidentClient } from './client';

// ActivityItem describes an event that occurred related to an Incident.
export function ActivityItemSchema() {
  return z.object({
    activityItemID: z.string(),
    incidentID: z.string(),
    user: UserPreviewSchema(),
    subjectUser: UserPreviewSchema(),
    createdTime: z.string(),
    eventTime: z.string(),
    activityKind: z.enum([
      'incidentUpdated',
      'incidentTitleChanged',
      'incidentStatusChanged',
      'incidentSeverityChanged',
      'incidentCreated',
      'incidentDeleted',
      'incidentClosed',
      'roleAssigned',
      'roleUnassigned',
      'actionRun',
      'userNote',
      'dataQuery',
      'hookRunMetadata',
      'taskAdded',
      'taskUpdated',
      'taskCompleted',
      'taskDeleted',
      'messageReaction',
      'contextAttached',
      'incidentIsDrillChanged',
      'incidentStart',
      'incidentEnd',
      'incidentSummary',
      'labelAdded',
      'labelRemoved',
      'siftResult',
      '',
    ]),
    body: z.string(),
    url: z.string(),
    tags: z.enum(['important', 'starred', '']).array(),
    immutable: z.boolean(),
    fieldValues: z.record(z.unknown()),
    attachments: AttachmentSchema().array(),
  });
}

export type ActivityItem = z.infer<ReturnType<typeof ActivityItemSchema>>;

// ActivityQuery is the response from the QueryActivity method.
export function ActivityQuerySchema() {
  return z.object({
    incidentID: z.string(),
    limit: z.number(),
    tag: z.string().nullish(),
    orderDirection: z.enum(['ASC', 'DESC', '']),
    activityKind: z.string().array().nullish(),
  });
}

export type ActivityQuery = z.infer<ReturnType<typeof ActivityQuerySchema>>;

// AddActivityRequest is the request for the AddActivity method.
export function AddActivityRequestSchema() {
  return z.object({
    incidentID: z.string(),
    activityKind: z.enum(['userNote', '']),
    body: z.string(),
    eventTime: z.string().nullish(),
  });
}

export type AddActivityRequest = z.infer<ReturnType<typeof AddActivityRequestSchema>>;

// AddActivityResponse is the response from the AddActivity method.
export function AddActivityResponseSchema() {
  return z.object({
    activityItem: ActivityItemSchema(),
    error: z.string().nullish(),
  });
}

export type AddActivityResponse = z.infer<ReturnType<typeof AddActivityResponseSchema>>;

// AddLabelRequest is the request for the AddLabel method.
export function AddLabelRequestSchema() {
  return z.object({
    incidentID: z.string(),
    label: IncidentLabelSchema(),
  });
}

export type AddLabelRequest = z.infer<ReturnType<typeof AddLabelRequestSchema>>;

// AddLabelResponse is the response for the AddLabel method.
export function AddLabelResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    error: z.string().nullish(),
  });
}

export type AddLabelResponse = z.infer<ReturnType<typeof AddLabelResponseSchema>>;

// AddTaskRequest is the request for the AddTask method.
export function AddTaskRequestSchema() {
  return z.object({
    incidentID: z.string(),
    text: z.string(),
    assignToUserID: z.string(),
  });
}

export type AddTaskRequest = z.infer<ReturnType<typeof AddTaskRequestSchema>>;

// AddTaskResponse is the response from the AddTask method.
export function AddTaskResponseSchema() {
  return z.object({
    incidentID: z.string(),
    task: TaskSchema(),
    taskList: TaskListSchema(),
    error: z.string().nullish(),
  });
}

export type AddTaskResponse = z.infer<ReturnType<typeof AddTaskResponseSchema>>;

// ArchiveRoleRequest is the request to archive a role.
export function ArchiveRoleRequestSchema() {
  return z.object({
    roleID: z.number(),
  });
}

export type ArchiveRoleRequest = z.infer<ReturnType<typeof ArchiveRoleRequestSchema>>;

// ArchiveRoleResponse is the response to archive a role.
export function ArchiveRoleResponseSchema() {
  return z.object({
    error: z.string().nullish(),
  });
}

export type ArchiveRoleResponse = z.infer<ReturnType<typeof ArchiveRoleResponseSchema>>;

// AssignRoleRequest is the request for the AssignRole method.
export function AssignRoleRequestSchema() {
  return z.object({
    incidentID: z.string(),
    userID: z.string(),
    role: z.enum(['commander', 'investigator', 'observer', '']),
  });
}

export type AssignRoleRequest = z.infer<ReturnType<typeof AssignRoleRequestSchema>>;

// AssignRoleResponse is the response for the AssignRole method.
export function AssignRoleResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    didChange: z.boolean(),
    error: z.string().nullish(),
  });
}

export type AssignRoleResponse = z.infer<ReturnType<typeof AssignRoleResponseSchema>>;

// Relation between a User and a Role inside the incident
export function AssignmentSchema() {
  return z.object({
    user: UserPreviewSchema(),
    role: RoleSchema(),
  });
}

export type Assignment = z.infer<ReturnType<typeof AssignmentSchema>>;

// Attachment is a file attached to something.
export function AttachmentSchema() {
  return z.object({
    attachmentID: z.string(),
    attachedByUserID: z.string(),
    sourceURL: z.string(),
    useSourceURL: z.boolean(),
    path: z.string(),
    uploadTime: z.string(),
    deletedTime: z.string(),
    contentType: z.string(),
    fileType: z.enum(['file', 'video', 'image', 'audio', 'screenshare', '']),
    ext: z.string(),
    contentLength: z.number(),
    displayType: z.enum(['list', 'embed', '']),
    downloadURL: z.string(),
    hasThumbnail: z.boolean(),
    thumbnailURL: z.string(),
    sHA512: z.string(),
    attachmentErr: z.string(),
  });
}

export type Attachment = z.infer<ReturnType<typeof AttachmentSchema>>;

// CreateIncidentRequest is the request for the CreateIncident method.
export function CreateIncidentRequestSchema() {
  return z.object({
    title: z.string(),
    severity: z.string(),
    labels: IncidentLabelSchema().array(),
    roomPrefix: z.string(),
    isDrill: z.boolean(),
    status: z.enum(['active', 'resolved', '']),
    attachCaption: z.string(),
    attachURL: z.string(),
  });
}

export type CreateIncidentRequest = z.infer<ReturnType<typeof CreateIncidentRequestSchema>>;

// CreateIncidentResponse is the response for the CreateIncident method.
export function CreateIncidentResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    error: z.string().nullish(),
  });
}

export type CreateIncidentResponse = z.infer<ReturnType<typeof CreateIncidentResponseSchema>>;

// CreateRoleRequest is the request to create a role.
export function CreateRoleRequestSchema() {
  return z.object({
    role: RoleSchema(),
  });
}

export type CreateRoleRequest = z.infer<ReturnType<typeof CreateRoleRequestSchema>>;

// CreateRoleResponse is the response to create a role.
export function CreateRoleResponseSchema() {
  return z.object({
    role: RoleSchema(),
    error: z.string().nullish(),
  });
}

export type CreateRoleResponse = z.infer<ReturnType<typeof CreateRoleResponseSchema>>;

// Cursor describes the position in a result set. It is passed back into the same
// API to get the next page of results.
export function CursorSchema() {
  return z.object({
    nextValue: z.string(),
    hasMore: z.boolean(),
  });
}

export type Cursor = z.infer<ReturnType<typeof CursorSchema>>;

// DeleteRoleRequest is the request to delete a role.
export function DeleteRoleRequestSchema() {
  return z.object({
    roleID: z.number(),
  });
}

export type DeleteRoleRequest = z.infer<ReturnType<typeof DeleteRoleRequestSchema>>;

// DeleteRoleResponse is the response to delete a role.
export function DeleteRoleResponseSchema() {
  return z.object({
    error: z.string().nullish(),
  });
}

export type DeleteRoleResponse = z.infer<ReturnType<typeof DeleteRoleResponseSchema>>;

// DeleteTaskRequest is the request for the DeleteTask method.
export function DeleteTaskRequestSchema() {
  return z.object({
    incidentID: z.string(),
    taskID: z.string(),
  });
}

export type DeleteTaskRequest = z.infer<ReturnType<typeof DeleteTaskRequestSchema>>;

// DeleteTaskResponse is the response from the DeleteTask method.
export function DeleteTaskResponseSchema() {
  return z.object({
    incidentID: z.string(),
    taskList: TaskListSchema(),
    error: z.string().nullish(),
  });
}

export type DeleteTaskResponse = z.infer<ReturnType<typeof DeleteTaskResponseSchema>>;

// GetHomescreenVersionRequest is the request for the GetHomescreenVersion method.
export function GetHomescreenVersionRequestSchema() {
  return z.object({});
}

export type GetHomescreenVersionRequest = z.infer<ReturnType<typeof GetHomescreenVersionRequestSchema>>;

// GetHomescreenVersionResponse is the response for the GetHomescreenVersion
// method.
export function GetHomescreenVersionResponseSchema() {
  return z.object({
    version: z.number(),
  });
}

export type GetHomescreenVersionResponse = z.infer<ReturnType<typeof GetHomescreenVersionResponseSchema>>;

// GetIncidentMembershipRequest is the request for the GetIncidentMembership
// method.
export function GetIncidentMembershipRequestSchema() {
  return z.object({
    incidentID: z.string(),
  });
}

export type GetIncidentMembershipRequest = z.infer<ReturnType<typeof GetIncidentMembershipRequestSchema>>;

// GetIncidentMembershipResponse is the response for the GetIncidentMembership
// method.
export function GetIncidentMembershipResponseSchema() {
  return z.object({
    assignments: AssignmentSchema().array(),
    error: z.string().nullish(),
  });
}

export type GetIncidentMembershipResponse = z.infer<ReturnType<typeof GetIncidentMembershipResponseSchema>>;

// GetIncidentRequest is the request for the GetIncident method.
export function GetIncidentRequestSchema() {
  return z.object({
    incidentID: z.string(),
  });
}

export type GetIncidentRequest = z.infer<ReturnType<typeof GetIncidentRequestSchema>>;

// GetIncidentResponse is the response for the GetIncident method.
export function GetIncidentResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    error: z.string().nullish(),
  });
}

export type GetIncidentResponse = z.infer<ReturnType<typeof GetIncidentResponseSchema>>;

// GetIncidentVersionRequest is the request for the GetIncidentVersion method.
export function GetIncidentVersionRequestSchema() {
  return z.object({
    incidentID: z.string(),
  });
}

export type GetIncidentVersionRequest = z.infer<ReturnType<typeof GetIncidentVersionRequestSchema>>;

// GetIncidentVersionResponse is the response for the GetIncidentVersion method.
export function GetIncidentVersionResponseSchema() {
  return z.object({
    version: z.number(),
  });
}

export type GetIncidentVersionResponse = z.infer<ReturnType<typeof GetIncidentVersionResponseSchema>>;

// GetRolesRequest is the request to get all roles.
export function GetRolesRequestSchema() {
  return z.object({});
}

export type GetRolesRequest = z.infer<ReturnType<typeof GetRolesRequestSchema>>;

// GetRolesResponse is the response to get all roles.
export function GetRolesResponseSchema() {
  return z.object({
    roles: RoleSchema().array(),
    error: z.string().nullish(),
  });
}

export type GetRolesResponse = z.infer<ReturnType<typeof GetRolesResponseSchema>>;

// Incident is a single incident.
export function IncidentSchema() {
  return z.object({
    incidentID: z.string(),
    severityID: z.string(),
    labels: IncidentLabelSchema().array(),
    isDrill: z.boolean(),
    createdTime: z.string(),
    modifiedTime: z.string(),
    createdByUser: UserPreviewSchema(),
    closedTime: z.string(),
    durationSeconds: z.number(),
    status: z.enum(['active', 'resolved', '']),
    title: z.string(),
    overviewURL: z.string(),
    incidentMembership: IncidentMembershipSchema().nullish(),
    taskList: TaskListSchema(),
    summary: z.string(),
    heroImagePath: z.string(),
    incidentStart: z.string(),
    incidentEnd: z.string(),
  });
}

export type Incident = z.infer<ReturnType<typeof IncidentSchema>>;

// IncidentLabel is a label associated with an Incident.
export function IncidentLabelSchema() {
  return z.object({
    label: z.string(),
    description: z.string(),
    colorHex: z.string(),
  });
}

export type IncidentLabel = z.infer<ReturnType<typeof IncidentLabelSchema>>;

// IncidentMembership represents a list of people involved in an Incident.
export function IncidentMembershipSchema() {
  return z.object({
    assignments: AssignmentSchema().array(),
    totalAssignments: z.number(),
    totalParticipants: z.number(),
  });
}

export type IncidentMembership = z.infer<ReturnType<typeof IncidentMembershipSchema>>;

// IncidentsQuery is the query for the QueryIncidentsRequest.
export function IncidentsQuerySchema() {
  return z.object({
    limit: z.number(),
    includeStatuses: z.enum(['active', 'resolved', '']).array().nullish(),
    excludeStatuses: z.enum(['active', 'resolved', '']).array().nullish(),
    incidentLabels: z.string().array().nullish(),
    dateFrom: z.string().nullish(),
    dateTo: z.string().nullish(),
    onlyDrills: z.boolean().nullish(),
    orderDirection: z.enum(['ASC', 'DESC', '']),
    severity: z.string().nullish(),
    queryString: z.string().nullish(),
  });
}

export type IncidentsQuery = z.infer<ReturnType<typeof IncidentsQuerySchema>>;

// IncomingWebhookResponse is the response sent back to the webhook caller when an
// incoming webhook has been received.
export function IncomingWebhookResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    processingErrors: z.string().array(),
  });
}

export type IncomingWebhookResponse = z.infer<ReturnType<typeof IncomingWebhookResponseSchema>>;

// OutgoingWebhookPayload represents the webhook HTTP POST body and contains
// metadata for the webhook.
export function OutgoingWebhookPayloadSchema() {
  return z.object({
    version: z.string(),
    id: z.string(),
    source: z.string(),
    time: z.string(),
    event: z.string(),
    incident: IncidentSchema(),
  });
}

export type OutgoingWebhookPayload = z.infer<ReturnType<typeof OutgoingWebhookPayloadSchema>>;

// QueryActivityRequest is the request for the QueryActivity method.
export function QueryActivityRequestSchema() {
  return z.object({
    query: ActivityQuerySchema(),
    cursor: CursorSchema(),
  });
}

export type QueryActivityRequest = z.infer<ReturnType<typeof QueryActivityRequestSchema>>;

// QueryActivityResponse is the response from the QueryActivity method.
export function QueryActivityResponseSchema() {
  return z.object({
    activityItems: ActivityItemSchema().array(),
    query: ActivityQuerySchema(),
    cursor: CursorSchema(),
    error: z.string().nullish(),
  });
}

export type QueryActivityResponse = z.infer<ReturnType<typeof QueryActivityResponseSchema>>;

// QueryIncidentsRequest is the request for the QueryIncidents method.
export function QueryIncidentsRequestSchema() {
  return z.object({
    query: IncidentsQuerySchema(),
    cursor: CursorSchema(),
  });
}

export type QueryIncidentsRequest = z.infer<ReturnType<typeof QueryIncidentsRequestSchema>>;

// QueryIncidentsResponse is the response for the QueryIncidents method.
export function QueryIncidentsResponseSchema() {
  return z.object({
    incidents: IncidentSchema().array(),
    query: IncidentsQuerySchema(),
    cursor: CursorSchema(),
    error: z.string().nullish(),
  });
}

export type QueryIncidentsResponse = z.infer<ReturnType<typeof QueryIncidentsResponseSchema>>;

// RemoveActivityRequest is the request for the RemoveActivity method.
export function RemoveActivityRequestSchema() {
  return z.object({
    incidentID: z.string(),
    activityItemID: z.string(),
  });
}

export type RemoveActivityRequest = z.infer<ReturnType<typeof RemoveActivityRequestSchema>>;

// RemoveActivityResponse is the response from the RemoveActivity method.
export function RemoveActivityResponseSchema() {
  return z.object({
    activityItem: ActivityItemSchema(),
    error: z.string().nullish(),
  });
}

export type RemoveActivityResponse = z.infer<ReturnType<typeof RemoveActivityResponseSchema>>;

// RemoveLabelRequest is the request for the RemoveLabel method.
export function RemoveLabelRequestSchema() {
  return z.object({
    incidentID: z.string(),
    label: z.string(),
  });
}

export type RemoveLabelRequest = z.infer<ReturnType<typeof RemoveLabelRequestSchema>>;

// RemoveLabelResponse is the response for the RemoveLabel method.
export function RemoveLabelResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    error: z.string().nullish(),
  });
}

export type RemoveLabelResponse = z.infer<ReturnType<typeof RemoveLabelResponseSchema>>;

// Role represents a role that will be used to assign people in the incident.
export function RoleSchema() {
  return z.object({
    roleID: z.number().nullish(),
    orgID: z.string(),
    name: z.string(),
    description: z.string().nullish(),
    important: z.boolean(),
    mandatory: z.boolean(),
    archived: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string().nullish(),
  });
}

export type Role = z.infer<ReturnType<typeof RoleSchema>>;

// Task is an individual task that somebody will do to resolve an Incident.
export function TaskSchema() {
  return z.object({
    taskID: z.string(),
    immutable: z.boolean(),
    createdTime: z.string(),
    modifiedTime: z.string(),
    text: z.string(),
    status: z.enum(['todo', 'progress', 'done', '']),
    authorUser: UserPreviewSchema().nullish(),
    assignedUser: UserPreviewSchema().nullish(),
  });
}

export type Task = z.infer<ReturnType<typeof TaskSchema>>;

// TaskList is a list of tasks.
export function TaskListSchema() {
  return z.object({
    tasks: TaskSchema().array(),
    todoCount: z.number(),
    doneCount: z.number(),
  });
}

export type TaskList = z.infer<ReturnType<typeof TaskListSchema>>;

// UnarchiveRoleRequest is the request to unarchive a role.
export function UnarchiveRoleRequestSchema() {
  return z.object({
    roleID: z.number(),
  });
}

export type UnarchiveRoleRequest = z.infer<ReturnType<typeof UnarchiveRoleRequestSchema>>;

// UnarchiveRoleResponse is the response to unarchive a role.
export function UnarchiveRoleResponseSchema() {
  return z.object({
    error: z.string().nullish(),
  });
}

export type UnarchiveRoleResponse = z.infer<ReturnType<typeof UnarchiveRoleResponseSchema>>;

// UnassignRoleRequest is the request for the UnassignRole method.
export function UnassignRoleRequestSchema() {
  return z.object({
    incidentID: z.string(),
    userID: z.string(),
    role: z.enum(['commander', 'investigator', 'observer', '']),
  });
}

export type UnassignRoleRequest = z.infer<ReturnType<typeof UnassignRoleRequestSchema>>;

// UnassignRoleResponse is the response for the UnassignRole method.
export function UnassignRoleResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    didChange: z.boolean(),
    error: z.string().nullish(),
  });
}

export type UnassignRoleResponse = z.infer<ReturnType<typeof UnassignRoleResponseSchema>>;

// UpdateActivityBodyRequest is the request for the UpdateActivityBody method.
export function UpdateActivityBodyRequestSchema() {
  return z.object({
    incidentID: z.string(),
    activityItemID: z.string(),
    body: z.string(),
  });
}

export type UpdateActivityBodyRequest = z.infer<ReturnType<typeof UpdateActivityBodyRequestSchema>>;

// UpdateActivityBodyResponse is the response from the UpdateActivityBody method.
export function UpdateActivityBodyResponseSchema() {
  return z.object({
    activityItem: ActivityItemSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateActivityBodyResponse = z.infer<ReturnType<typeof UpdateActivityBodyResponseSchema>>;

// UpdateActivityEventTimeRequest is the request for the UpdateActivityEventTime
// method.
export function UpdateActivityEventTimeRequestSchema() {
  return z.object({
    incidentID: z.string(),
    activityItemID: z.string(),
    eventTime: z.string(),
  });
}

export type UpdateActivityEventTimeRequest = z.infer<ReturnType<typeof UpdateActivityEventTimeRequestSchema>>;

// UpdateActivityEventTimeResponse is the response from the UpdateActivityEventTime
// method.
export function UpdateActivityEventTimeResponseSchema() {
  return z.object({
    activityItem: ActivityItemSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateActivityEventTimeResponse = z.infer<ReturnType<typeof UpdateActivityEventTimeResponseSchema>>;

// UpdateIncidentEventTimeRequest is the request for the UpdateIncidentEventTime
// method.
export function UpdateIncidentEventTimeRequestSchema() {
  return z.object({
    incidentID: z.string(),
    eventTime: z.string(),
    activityItemKind: z.enum(['incidentEnd', 'incidentStart', '']),
  });
}

export type UpdateIncidentEventTimeRequest = z.infer<ReturnType<typeof UpdateIncidentEventTimeRequestSchema>>;

// UpdateIncidentEventTimeResponse is the response for the UpdateIncidentEventTime
// method.
export function UpdateIncidentEventTimeResponseSchema() {
  return z.object({
    error: z.string().nullish(),
  });
}

export type UpdateIncidentEventTimeResponse = z.infer<ReturnType<typeof UpdateIncidentEventTimeResponseSchema>>;

// UpdateIncidentIsDrillRequest is the request for the UpdateIncidentIsDrill
// method.
export function UpdateIncidentIsDrillRequestSchema() {
  return z.object({
    incidentID: z.string(),
    isDrill: z.boolean(),
  });
}

export type UpdateIncidentIsDrillRequest = z.infer<ReturnType<typeof UpdateIncidentIsDrillRequestSchema>>;

// UpdateIncidentIsDrillResponse is the response for the UpdateIncidentIsDrill
// method.
export function UpdateIncidentIsDrillResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateIncidentIsDrillResponse = z.infer<ReturnType<typeof UpdateIncidentIsDrillResponseSchema>>;

// UpdateRoleRequest is the request to update a role.
export function UpdateRoleRequestSchema() {
  return z.object({
    role: RoleSchema(),
  });
}

export type UpdateRoleRequest = z.infer<ReturnType<typeof UpdateRoleRequestSchema>>;

// UpdateRoleResponse is the response to update a role.
export function UpdateRoleResponseSchema() {
  return z.object({
    role: RoleSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateRoleResponse = z.infer<ReturnType<typeof UpdateRoleResponseSchema>>;

// UpdateSeverityRequest is the request for the UpdateSeverity method.
export function UpdateSeverityRequestSchema() {
  return z.object({
    incidentID: z.string(),
    severity: z.string(),
  });
}

export type UpdateSeverityRequest = z.infer<ReturnType<typeof UpdateSeverityRequestSchema>>;

// UpdateSeverityResponse is the response for the UpdateSeverity method.
export function UpdateSeverityResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateSeverityResponse = z.infer<ReturnType<typeof UpdateSeverityResponseSchema>>;

// UpdateStatusRequest is the request for the UpdateStatus method.
export function UpdateStatusRequestSchema() {
  return z.object({
    incidentID: z.string(),
    status: z.enum(['active', 'resolved', '']),
  });
}

export type UpdateStatusRequest = z.infer<ReturnType<typeof UpdateStatusRequestSchema>>;

// UpdateStatusResponse is the response for the UpdateStatus method.
export function UpdateStatusResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateStatusResponse = z.infer<ReturnType<typeof UpdateStatusResponseSchema>>;

// UpdateTaskStatusRequest is the request for the UpdateTaskStatus method.
export function UpdateTaskStatusRequestSchema() {
  return z.object({
    incidentID: z.string(),
    taskID: z.string(),
    status: z.enum(['todo', 'progress', 'done', '']),
  });
}

export type UpdateTaskStatusRequest = z.infer<ReturnType<typeof UpdateTaskStatusRequestSchema>>;

// UpdateTaskStatusResponse is the response from the UpdateTaskStatus method.
export function UpdateTaskStatusResponseSchema() {
  return z.object({
    incidentID: z.string(),
    task: TaskSchema(),
    taskList: TaskListSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateTaskStatusResponse = z.infer<ReturnType<typeof UpdateTaskStatusResponseSchema>>;

// UpdateTaskTextRequest is the request for the UpdateTaskText method.
export function UpdateTaskTextRequestSchema() {
  return z.object({
    incidentID: z.string(),
    taskID: z.string(),
    text: z.string(),
  });
}

export type UpdateTaskTextRequest = z.infer<ReturnType<typeof UpdateTaskTextRequestSchema>>;

// UpdateTaskTextResponse is the response from the UpdateTaskText method.
export function UpdateTaskTextResponseSchema() {
  return z.object({
    incidentID: z.string(),
    task: TaskSchema(),
    taskList: TaskListSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateTaskTextResponse = z.infer<ReturnType<typeof UpdateTaskTextResponseSchema>>;

// UpdateTaskUserRequest is the request for the UpdateTaskUser method.
export function UpdateTaskUserRequestSchema() {
  return z.object({
    incidentID: z.string(),
    taskID: z.string(),
    userID: z.string(),
  });
}

export type UpdateTaskUserRequest = z.infer<ReturnType<typeof UpdateTaskUserRequestSchema>>;

// UpdateTaskUserResponse is the response from the UpdateTaskUser method.
export function UpdateTaskUserResponseSchema() {
  return z.object({
    incidentID: z.string(),
    task: TaskSchema(),
    taskList: TaskListSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateTaskUserResponse = z.infer<ReturnType<typeof UpdateTaskUserResponseSchema>>;

// UpdateTitleRequest is the request for the UpdateTitle method.
export function UpdateTitleRequestSchema() {
  return z.object({
    incidentID: z.string(),
    title: z.string(),
  });
}

export type UpdateTitleRequest = z.infer<ReturnType<typeof UpdateTitleRequestSchema>>;

// UpdateTitleResponse is the response for the UpdateTitle method.
export function UpdateTitleResponseSchema() {
  return z.object({
    incident: IncidentSchema(),
    error: z.string().nullish(),
  });
}

export type UpdateTitleResponse = z.infer<ReturnType<typeof UpdateTitleResponseSchema>>;

// UserPreview is a user involved in an Incident.
export function UserPreviewSchema() {
  return z.object({
    userID: z.string(),
    name: z.string(),
    photoURL: z.string(),
  });
}

export type UserPreview = z.infer<ReturnType<typeof UserPreviewSchema>>;

// ActivityService provides access to incident activity. You can post notes to the
// timeline, and query and update the individual timeline items.
export class ActivityService {
  private readonly _client: Client;
  public constructor(client: Client) {
    this._client = client;
  }

  // AddActivity posts an activity item to an Incident.
  public async addActivity(addActivityRequest: AddActivityRequest): Promise<APIResponse<AddActivityResponse>> {
    const response = await this._client.fetch('ActivityService.AddActivity', addActivityRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, AddActivityResponseSchema());
  }

  // QueryActivity gets a selection of activity items.
  public async queryActivity(queryActivityRequest: QueryActivityRequest): Promise<APIResponse<QueryActivityResponse>> {
    const response = await this._client.fetch('ActivityService.QueryActivity', queryActivityRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, QueryActivityResponseSchema());
  }

  // RemoveActivity removes an activity item.
  public async removeActivity(
    removeActivityRequest: RemoveActivityRequest,
  ): Promise<APIResponse<RemoveActivityResponse>> {
    const response = await this._client.fetch('ActivityService.RemoveActivity', removeActivityRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, RemoveActivityResponseSchema());
  }

  // UpdateActivityBody updates the body of a specific activity item.
  public async updateActivityBody(
    updateActivityBodyRequest: UpdateActivityBodyRequest,
  ): Promise<APIResponse<UpdateActivityBodyResponse>> {
    const response = await this._client.fetch('ActivityService.UpdateActivityBody', updateActivityBodyRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateActivityBodyResponseSchema());
  }

  // UpdateActivityEventTime updates the event time of a specific activity item.
  public async updateActivityEventTime(
    updateActivityEventTimeRequest: UpdateActivityEventTimeRequest,
  ): Promise<APIResponse<UpdateActivityEventTimeResponse>> {
    const response = await this._client.fetch(
      'ActivityService.UpdateActivityEventTime',
      updateActivityEventTimeRequest,
    );
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateActivityEventTimeResponseSchema());
  }
}

// IncidentsService provides the ability to query, get, declare (create), update,
// and manage Incidents programatically. You can also assign roles and update
// labels.
export class IncidentsService {
  private readonly _client: Client;
  public constructor(client: Client) {
    this._client = client;
  }

  // AddLabel adds a label to the Incident.
  public async addLabel(addLabelRequest: AddLabelRequest): Promise<APIResponse<AddLabelResponse>> {
    const response = await this._client.fetch('IncidentsService.AddLabel', addLabelRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, AddLabelResponseSchema());
  }

  // AssignRole assigns a role to a user.
  public async assignRole(assignRoleRequest: AssignRoleRequest): Promise<APIResponse<AssignRoleResponse>> {
    const response = await this._client.fetch('IncidentsService.AssignRole', assignRoleRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, AssignRoleResponseSchema());
  }

  // CreateIncident creates a new Incident.
  public async createIncident(
    createIncidentRequest: CreateIncidentRequest,
  ): Promise<APIResponse<CreateIncidentResponse>> {
    const response = await this._client.fetch('IncidentsService.CreateIncident', createIncidentRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, CreateIncidentResponseSchema());
  }

  // GetIncident gets an existing Incident by ID.
  public async getIncident(getIncidentRequest: GetIncidentRequest): Promise<APIResponse<GetIncidentResponse>> {
    const response = await this._client.fetch('IncidentsService.GetIncident', getIncidentRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, GetIncidentResponseSchema());
  }

  // GetIncidentMembership will return the full list of people involved in an
  // incident
  public async getIncidentMembership(
    getIncidentMembershipRequest: GetIncidentMembershipRequest,
  ): Promise<APIResponse<GetIncidentMembershipResponse>> {
    const response = await this._client.fetch('IncidentsService.GetIncidentMembership', getIncidentMembershipRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, GetIncidentMembershipResponseSchema());
  }

  // QueryIncidents gets a list of Incidents.
  public async queryIncidents(
    queryIncidentsRequest: QueryIncidentsRequest,
  ): Promise<APIResponse<QueryIncidentsResponse>> {
    const response = await this._client.fetch('IncidentsService.QueryIncidents', queryIncidentsRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, QueryIncidentsResponseSchema());
  }

  // RemoveLabel removes a label from the Incident.
  public async removeLabel(removeLabelRequest: RemoveLabelRequest): Promise<APIResponse<RemoveLabelResponse>> {
    const response = await this._client.fetch('IncidentsService.RemoveLabel', removeLabelRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, RemoveLabelResponseSchema());
  }

  // UnassignRole removes a role assignment from a user.
  public async unassignRole(unassignRoleRequest: UnassignRoleRequest): Promise<APIResponse<UnassignRoleResponse>> {
    const response = await this._client.fetch('IncidentsService.UnassignRole', unassignRoleRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UnassignRoleResponseSchema());
  }

  // UpdateIncidentEventTime updates the start or end times of an Incident.
  public async updateIncidentEventTime(
    updateIncidentEventTimeRequest: UpdateIncidentEventTimeRequest,
  ): Promise<APIResponse<UpdateIncidentEventTimeResponse>> {
    const response = await this._client.fetch(
      'IncidentsService.UpdateIncidentEventTime',
      updateIncidentEventTimeRequest,
    );
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateIncidentEventTimeResponseSchema());
  }

  // UpdateIncidentIsDrill changes whether an Incident is a drill or not.
  public async updateIncidentIsDrill(
    updateIncidentIsDrillRequest: UpdateIncidentIsDrillRequest,
  ): Promise<APIResponse<UpdateIncidentIsDrillResponse>> {
    const response = await this._client.fetch('IncidentsService.UpdateIncidentIsDrill', updateIncidentIsDrillRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateIncidentIsDrillResponseSchema());
  }

  // UpdateSeverity updates the severity of an Incident.
  public async updateSeverity(
    updateSeverityRequest: UpdateSeverityRequest,
  ): Promise<APIResponse<UpdateSeverityResponse>> {
    const response = await this._client.fetch('IncidentsService.UpdateSeverity', updateSeverityRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateSeverityResponseSchema());
  }

  // UpdateStatus updates the status of an Incident.
  public async updateStatus(updateStatusRequest: UpdateStatusRequest): Promise<APIResponse<UpdateStatusResponse>> {
    const response = await this._client.fetch('IncidentsService.UpdateStatus', updateStatusRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateStatusResponseSchema());
  }

  // UpdateTitle updates the title of an Incident.
  public async updateTitle(updateTitleRequest: UpdateTitleRequest): Promise<APIResponse<UpdateTitleResponse>> {
    const response = await this._client.fetch('IncidentsService.UpdateTitle', updateTitleRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateTitleResponseSchema());
  }
}

// RolesService defines the interface for interacting with roles, providing CRUD
// operations and more fatures related to roles.
export class RolesService {
  private readonly _client: Client;
  public constructor(client: Client) {
    this._client = client;
  }

  // ArchiveRole archives a role.
  public async archiveRole(archiveRoleRequest: ArchiveRoleRequest): Promise<APIResponse<ArchiveRoleResponse>> {
    const response = await this._client.fetch('RolesService.ArchiveRole', archiveRoleRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, ArchiveRoleResponseSchema());
  }

  // CreateRole creates a role.
  public async createRole(createRoleRequest: CreateRoleRequest): Promise<APIResponse<CreateRoleResponse>> {
    const response = await this._client.fetch('RolesService.CreateRole', createRoleRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, CreateRoleResponseSchema());
  }

  // DeleteRole deletes a role.
  public async deleteRole(deleteRoleRequest: DeleteRoleRequest): Promise<APIResponse<DeleteRoleResponse>> {
    const response = await this._client.fetch('RolesService.DeleteRole', deleteRoleRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, DeleteRoleResponseSchema());
  }

  // GetRoles gets all roles.
  public async getRoles(getRolesRequest: GetRolesRequest): Promise<APIResponse<GetRolesResponse>> {
    const response = await this._client.fetch('RolesService.GetRoles', getRolesRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, GetRolesResponseSchema());
  }

  // UnarchiveRole unarchives a role.
  public async unarchiveRole(unarchiveRoleRequest: UnarchiveRoleRequest): Promise<APIResponse<UnarchiveRoleResponse>> {
    const response = await this._client.fetch('RolesService.UnarchiveRole', unarchiveRoleRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UnarchiveRoleResponseSchema());
  }

  // UpdateRole updates a role.
  public async updateRole(updateRoleRequest: UpdateRoleRequest): Promise<APIResponse<UpdateRoleResponse>> {
    const response = await this._client.fetch('RolesService.UpdateRole', updateRoleRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateRoleResponseSchema());
  }
}

// TasksService provides methods for managing tasks relating to Incidents.
export class TasksService {
  private readonly _client: Client;
  public constructor(client: Client) {
    this._client = client;
  }

  // AddTask adds a task to an Incident.
  public async addTask(addTaskRequest: AddTaskRequest): Promise<APIResponse<AddTaskResponse>> {
    const response = await this._client.fetch('TasksService.AddTask', addTaskRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, AddTaskResponseSchema());
  }

  // DeleteTask deletes a task.
  public async deleteTask(deleteTaskRequest: DeleteTaskRequest): Promise<APIResponse<DeleteTaskResponse>> {
    const response = await this._client.fetch('TasksService.DeleteTask', deleteTaskRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, DeleteTaskResponseSchema());
  }

  // UpdateTaskStatus updates the task's Status.
  public async updateTaskStatus(
    updateTaskStatusRequest: UpdateTaskStatusRequest,
  ): Promise<APIResponse<UpdateTaskStatusResponse>> {
    const response = await this._client.fetch('TasksService.UpdateTaskStatus', updateTaskStatusRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateTaskStatusResponseSchema());
  }

  // UpdateTaskText updates the task's text.
  public async updateTaskText(
    updateTaskTextRequest: UpdateTaskTextRequest,
  ): Promise<APIResponse<UpdateTaskTextResponse>> {
    const response = await this._client.fetch('TasksService.UpdateTaskText', updateTaskTextRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateTaskTextResponseSchema());
  }

  // UpdateTaskUser updates the task's assigned user. Passing an empty user ID will
  // clear the assigned user.
  public async updateTaskUser(
    updateTaskUserRequest: UpdateTaskUserRequest,
  ): Promise<APIResponse<UpdateTaskUserResponse>> {
    const response = await this._client.fetch('TasksService.UpdateTaskUser', updateTaskUserRequest);
    if (!response.success) {
      return response;
    }
    return decodeJson(response.payload, UpdateTaskUserResponseSchema());
  }
}
