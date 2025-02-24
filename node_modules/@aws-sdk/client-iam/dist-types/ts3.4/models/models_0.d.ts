import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { IAMServiceException as __BaseException } from "./IAMServiceException";
export declare const AccessAdvisorUsageGranularityType: {
  readonly ACTION_LEVEL: "ACTION_LEVEL";
  readonly SERVICE_LEVEL: "SERVICE_LEVEL";
};
export type AccessAdvisorUsageGranularityType =
  (typeof AccessAdvisorUsageGranularityType)[keyof typeof AccessAdvisorUsageGranularityType];
export interface AccessDetail {
  ServiceName: string | undefined;
  ServiceNamespace: string | undefined;
  Region?: string | undefined;
  EntityPath?: string | undefined;
  LastAuthenticatedTime?: Date | undefined;
  TotalAuthenticatedEntities?: number | undefined;
}
export declare const StatusType: {
  readonly Active: "Active";
  readonly Inactive: "Inactive";
};
export type StatusType = (typeof StatusType)[keyof typeof StatusType];
export interface AccessKey {
  UserName: string | undefined;
  AccessKeyId: string | undefined;
  Status: StatusType | undefined;
  SecretAccessKey: string | undefined;
  CreateDate?: Date | undefined;
}
export interface AccessKeyLastUsed {
  LastUsedDate?: Date | undefined;
  ServiceName: string | undefined;
  Region: string | undefined;
}
export interface AccessKeyMetadata {
  UserName?: string | undefined;
  AccessKeyId?: string | undefined;
  Status?: StatusType | undefined;
  CreateDate?: Date | undefined;
}
export declare class AccountNotManagementOrDelegatedAdministratorException extends __BaseException {
  readonly name: "AccountNotManagementOrDelegatedAdministratorException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      AccountNotManagementOrDelegatedAdministratorException,
      __BaseException
    >
  );
}
export interface AddClientIDToOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string | undefined;
  ClientID: string | undefined;
}
export declare class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidInputException, __BaseException>
  );
}
export declare class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<LimitExceededException, __BaseException>
  );
}
export declare class NoSuchEntityException extends __BaseException {
  readonly name: "NoSuchEntityException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<NoSuchEntityException, __BaseException>
  );
}
export declare class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException";
  readonly $fault: "server";
  constructor(
    opts: __ExceptionOptionType<ServiceFailureException, __BaseException>
  );
}
export interface AddRoleToInstanceProfileRequest {
  InstanceProfileName: string | undefined;
  RoleName: string | undefined;
}
export declare class EntityAlreadyExistsException extends __BaseException {
  readonly name: "EntityAlreadyExistsException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<EntityAlreadyExistsException, __BaseException>
  );
}
export declare class UnmodifiableEntityException extends __BaseException {
  readonly name: "UnmodifiableEntityException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<UnmodifiableEntityException, __BaseException>
  );
}
export interface AddUserToGroupRequest {
  GroupName: string | undefined;
  UserName: string | undefined;
}
export declare const AssertionEncryptionModeType: {
  readonly Allowed: "Allowed";
  readonly Required: "Required";
};
export type AssertionEncryptionModeType =
  (typeof AssertionEncryptionModeType)[keyof typeof AssertionEncryptionModeType];
export declare const AssignmentStatusType: {
  readonly Any: "Any";
  readonly Assigned: "Assigned";
  readonly Unassigned: "Unassigned";
};
export type AssignmentStatusType =
  (typeof AssignmentStatusType)[keyof typeof AssignmentStatusType];
export declare const PermissionsBoundaryAttachmentType: {
  readonly Policy: "PermissionsBoundaryPolicy";
};
export type PermissionsBoundaryAttachmentType =
  (typeof PermissionsBoundaryAttachmentType)[keyof typeof PermissionsBoundaryAttachmentType];
export interface AttachedPermissionsBoundary {
  PermissionsBoundaryType?: PermissionsBoundaryAttachmentType | undefined;
  PermissionsBoundaryArn?: string | undefined;
}
export interface AttachedPolicy {
  PolicyName?: string | undefined;
  PolicyArn?: string | undefined;
}
export interface AttachGroupPolicyRequest {
  GroupName: string | undefined;
  PolicyArn: string | undefined;
}
export declare class PolicyNotAttachableException extends __BaseException {
  readonly name: "PolicyNotAttachableException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<PolicyNotAttachableException, __BaseException>
  );
}
export interface AttachRolePolicyRequest {
  RoleName: string | undefined;
  PolicyArn: string | undefined;
}
export interface AttachUserPolicyRequest {
  UserName: string | undefined;
  PolicyArn: string | undefined;
}
export interface ChangePasswordRequest {
  OldPassword: string | undefined;
  NewPassword: string | undefined;
}
export declare class EntityTemporarilyUnmodifiableException extends __BaseException {
  readonly name: "EntityTemporarilyUnmodifiableException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      EntityTemporarilyUnmodifiableException,
      __BaseException
    >
  );
}
export declare class InvalidUserTypeException extends __BaseException {
  readonly name: "InvalidUserTypeException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidUserTypeException, __BaseException>
  );
}
export declare class PasswordPolicyViolationException extends __BaseException {
  readonly name: "PasswordPolicyViolationException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      PasswordPolicyViolationException,
      __BaseException
    >
  );
}
export interface CreateAccessKeyRequest {
  UserName?: string | undefined;
}
export interface CreateAccessKeyResponse {
  AccessKey: AccessKey | undefined;
}
export declare class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      ConcurrentModificationException,
      __BaseException
    >
  );
}
export interface CreateAccountAliasRequest {
  AccountAlias: string | undefined;
}
export interface CreateGroupRequest {
  Path?: string | undefined;
  GroupName: string | undefined;
}
export interface Group {
  Path: string | undefined;
  GroupName: string | undefined;
  GroupId: string | undefined;
  Arn: string | undefined;
  CreateDate: Date | undefined;
}
export interface CreateGroupResponse {
  Group: Group | undefined;
}
export interface Tag {
  Key: string | undefined;
  Value: string | undefined;
}
export interface CreateInstanceProfileRequest {
  InstanceProfileName: string | undefined;
  Path?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface RoleLastUsed {
  LastUsedDate?: Date | undefined;
  Region?: string | undefined;
}
export interface Role {
  Path: string | undefined;
  RoleName: string | undefined;
  RoleId: string | undefined;
  Arn: string | undefined;
  CreateDate: Date | undefined;
  AssumeRolePolicyDocument?: string | undefined;
  Description?: string | undefined;
  MaxSessionDuration?: number | undefined;
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;
  Tags?: Tag[] | undefined;
  RoleLastUsed?: RoleLastUsed | undefined;
}
export interface InstanceProfile {
  Path: string | undefined;
  InstanceProfileName: string | undefined;
  InstanceProfileId: string | undefined;
  Arn: string | undefined;
  CreateDate: Date | undefined;
  Roles: Role[] | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateInstanceProfileResponse {
  InstanceProfile: InstanceProfile | undefined;
}
export interface CreateLoginProfileRequest {
  UserName?: string | undefined;
  Password?: string | undefined;
  PasswordResetRequired?: boolean | undefined;
}
export interface LoginProfile {
  UserName: string | undefined;
  CreateDate: Date | undefined;
  PasswordResetRequired?: boolean | undefined;
}
export interface CreateLoginProfileResponse {
  LoginProfile: LoginProfile | undefined;
}
export interface CreateOpenIDConnectProviderRequest {
  Url: string | undefined;
  ClientIDList?: string[] | undefined;
  ThumbprintList?: string[] | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateOpenIDConnectProviderResponse {
  OpenIDConnectProviderArn?: string | undefined;
  Tags?: Tag[] | undefined;
}
export declare class OpenIdIdpCommunicationErrorException extends __BaseException {
  readonly name: "OpenIdIdpCommunicationErrorException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      OpenIdIdpCommunicationErrorException,
      __BaseException
    >
  );
}
export interface CreatePolicyRequest {
  PolicyName: string | undefined;
  Path?: string | undefined;
  PolicyDocument: string | undefined;
  Description?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface Policy {
  PolicyName?: string | undefined;
  PolicyId?: string | undefined;
  Arn?: string | undefined;
  Path?: string | undefined;
  DefaultVersionId?: string | undefined;
  AttachmentCount?: number | undefined;
  PermissionsBoundaryUsageCount?: number | undefined;
  IsAttachable?: boolean | undefined;
  Description?: string | undefined;
  CreateDate?: Date | undefined;
  UpdateDate?: Date | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreatePolicyResponse {
  Policy?: Policy | undefined;
}
export declare class MalformedPolicyDocumentException extends __BaseException {
  readonly name: "MalformedPolicyDocumentException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      MalformedPolicyDocumentException,
      __BaseException
    >
  );
}
export interface CreatePolicyVersionRequest {
  PolicyArn: string | undefined;
  PolicyDocument: string | undefined;
  SetAsDefault?: boolean | undefined;
}
export interface PolicyVersion {
  Document?: string | undefined;
  VersionId?: string | undefined;
  IsDefaultVersion?: boolean | undefined;
  CreateDate?: Date | undefined;
}
export interface CreatePolicyVersionResponse {
  PolicyVersion?: PolicyVersion | undefined;
}
export interface CreateRoleRequest {
  Path?: string | undefined;
  RoleName: string | undefined;
  AssumeRolePolicyDocument: string | undefined;
  Description?: string | undefined;
  MaxSessionDuration?: number | undefined;
  PermissionsBoundary?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateRoleResponse {
  Role: Role | undefined;
}
export interface CreateSAMLProviderRequest {
  SAMLMetadataDocument: string | undefined;
  Name: string | undefined;
  Tags?: Tag[] | undefined;
  AssertionEncryptionMode?: AssertionEncryptionModeType | undefined;
  AddPrivateKey?: string | undefined;
}
export interface CreateSAMLProviderResponse {
  SAMLProviderArn?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateServiceLinkedRoleRequest {
  AWSServiceName: string | undefined;
  Description?: string | undefined;
  CustomSuffix?: string | undefined;
}
export interface CreateServiceLinkedRoleResponse {
  Role?: Role | undefined;
}
export interface CreateServiceSpecificCredentialRequest {
  UserName: string | undefined;
  ServiceName: string | undefined;
}
export interface ServiceSpecificCredential {
  CreateDate: Date | undefined;
  ServiceName: string | undefined;
  ServiceUserName: string | undefined;
  ServicePassword: string | undefined;
  ServiceSpecificCredentialId: string | undefined;
  UserName: string | undefined;
  Status: StatusType | undefined;
}
export interface CreateServiceSpecificCredentialResponse {
  ServiceSpecificCredential?: ServiceSpecificCredential | undefined;
}
export declare class ServiceNotSupportedException extends __BaseException {
  readonly name: "ServiceNotSupportedException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ServiceNotSupportedException, __BaseException>
  );
}
export interface CreateUserRequest {
  Path?: string | undefined;
  UserName: string | undefined;
  PermissionsBoundary?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface User {
  Path: string | undefined;
  UserName: string | undefined;
  UserId: string | undefined;
  Arn: string | undefined;
  CreateDate: Date | undefined;
  PasswordLastUsed?: Date | undefined;
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateUserResponse {
  User?: User | undefined;
}
export interface CreateVirtualMFADeviceRequest {
  Path?: string | undefined;
  VirtualMFADeviceName: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface VirtualMFADevice {
  SerialNumber: string | undefined;
  Base32StringSeed?: Uint8Array | undefined;
  QRCodePNG?: Uint8Array | undefined;
  User?: User | undefined;
  EnableDate?: Date | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateVirtualMFADeviceResponse {
  VirtualMFADevice: VirtualMFADevice | undefined;
}
export interface DeactivateMFADeviceRequest {
  UserName?: string | undefined;
  SerialNumber: string | undefined;
}
export interface DeleteAccessKeyRequest {
  UserName?: string | undefined;
  AccessKeyId: string | undefined;
}
export interface DeleteAccountAliasRequest {
  AccountAlias: string | undefined;
}
export declare class DeleteConflictException extends __BaseException {
  readonly name: "DeleteConflictException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<DeleteConflictException, __BaseException>
  );
}
export interface DeleteGroupRequest {
  GroupName: string | undefined;
}
export interface DeleteGroupPolicyRequest {
  GroupName: string | undefined;
  PolicyName: string | undefined;
}
export interface DeleteInstanceProfileRequest {
  InstanceProfileName: string | undefined;
}
export interface DeleteLoginProfileRequest {
  UserName?: string | undefined;
}
export interface DeleteOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string | undefined;
}
export interface DeletePolicyRequest {
  PolicyArn: string | undefined;
}
export interface DeletePolicyVersionRequest {
  PolicyArn: string | undefined;
  VersionId: string | undefined;
}
export interface DeleteRoleRequest {
  RoleName: string | undefined;
}
export interface DeleteRolePermissionsBoundaryRequest {
  RoleName: string | undefined;
}
export interface DeleteRolePolicyRequest {
  RoleName: string | undefined;
  PolicyName: string | undefined;
}
export interface DeleteSAMLProviderRequest {
  SAMLProviderArn: string | undefined;
}
export interface DeleteServerCertificateRequest {
  ServerCertificateName: string | undefined;
}
export interface DeleteServiceLinkedRoleRequest {
  RoleName: string | undefined;
}
export interface DeleteServiceLinkedRoleResponse {
  DeletionTaskId: string | undefined;
}
export interface DeleteServiceSpecificCredentialRequest {
  UserName?: string | undefined;
  ServiceSpecificCredentialId: string | undefined;
}
export interface DeleteSigningCertificateRequest {
  UserName?: string | undefined;
  CertificateId: string | undefined;
}
export interface DeleteSSHPublicKeyRequest {
  UserName: string | undefined;
  SSHPublicKeyId: string | undefined;
}
export interface DeleteUserRequest {
  UserName: string | undefined;
}
export interface DeleteUserPermissionsBoundaryRequest {
  UserName: string | undefined;
}
export interface DeleteUserPolicyRequest {
  UserName: string | undefined;
  PolicyName: string | undefined;
}
export interface DeleteVirtualMFADeviceRequest {
  SerialNumber: string | undefined;
}
export interface DetachGroupPolicyRequest {
  GroupName: string | undefined;
  PolicyArn: string | undefined;
}
export interface DetachRolePolicyRequest {
  RoleName: string | undefined;
  PolicyArn: string | undefined;
}
export interface DetachUserPolicyRequest {
  UserName: string | undefined;
  PolicyArn: string | undefined;
}
export interface DisableOrganizationsRootCredentialsManagementRequest {}
export declare const FeatureType: {
  readonly ROOT_CREDENTIALS_MANAGEMENT: "RootCredentialsManagement";
  readonly ROOT_SESSIONS: "RootSessions";
};
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];
export interface DisableOrganizationsRootCredentialsManagementResponse {
  OrganizationId?: string | undefined;
  EnabledFeatures?: FeatureType[] | undefined;
}
export declare class OrganizationNotFoundException extends __BaseException {
  readonly name: "OrganizationNotFoundException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<OrganizationNotFoundException, __BaseException>
  );
}
export declare class OrganizationNotInAllFeaturesModeException extends __BaseException {
  readonly name: "OrganizationNotInAllFeaturesModeException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      OrganizationNotInAllFeaturesModeException,
      __BaseException
    >
  );
}
export declare class ServiceAccessNotEnabledException extends __BaseException {
  readonly name: "ServiceAccessNotEnabledException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      ServiceAccessNotEnabledException,
      __BaseException
    >
  );
}
export interface DisableOrganizationsRootSessionsRequest {}
export interface DisableOrganizationsRootSessionsResponse {
  OrganizationId?: string | undefined;
  EnabledFeatures?: FeatureType[] | undefined;
}
export interface EnableMFADeviceRequest {
  UserName: string | undefined;
  SerialNumber: string | undefined;
  AuthenticationCode1: string | undefined;
  AuthenticationCode2: string | undefined;
}
export declare class InvalidAuthenticationCodeException extends __BaseException {
  readonly name: "InvalidAuthenticationCodeException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      InvalidAuthenticationCodeException,
      __BaseException
    >
  );
}
export declare class CallerIsNotManagementAccountException extends __BaseException {
  readonly name: "CallerIsNotManagementAccountException";
  readonly $fault: "client";
  Message?: string | undefined;
  constructor(
    opts: __ExceptionOptionType<
      CallerIsNotManagementAccountException,
      __BaseException
    >
  );
}
export interface EnableOrganizationsRootCredentialsManagementRequest {}
export interface EnableOrganizationsRootCredentialsManagementResponse {
  OrganizationId?: string | undefined;
  EnabledFeatures?: FeatureType[] | undefined;
}
export interface EnableOrganizationsRootSessionsRequest {}
export interface EnableOrganizationsRootSessionsResponse {
  OrganizationId?: string | undefined;
  EnabledFeatures?: FeatureType[] | undefined;
}
export declare const ReportStateType: {
  readonly COMPLETE: "COMPLETE";
  readonly INPROGRESS: "INPROGRESS";
  readonly STARTED: "STARTED";
};
export type ReportStateType =
  (typeof ReportStateType)[keyof typeof ReportStateType];
export interface GenerateCredentialReportResponse {
  State?: ReportStateType | undefined;
  Description?: string | undefined;
}
export interface GenerateOrganizationsAccessReportRequest {
  EntityPath: string | undefined;
  OrganizationsPolicyId?: string | undefined;
}
export interface GenerateOrganizationsAccessReportResponse {
  JobId?: string | undefined;
}
export declare class ReportGenerationLimitExceededException extends __BaseException {
  readonly name: "ReportGenerationLimitExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      ReportGenerationLimitExceededException,
      __BaseException
    >
  );
}
export interface GenerateServiceLastAccessedDetailsRequest {
  Arn: string | undefined;
  Granularity?: AccessAdvisorUsageGranularityType | undefined;
}
export interface GenerateServiceLastAccessedDetailsResponse {
  JobId?: string | undefined;
}
export interface GetAccessKeyLastUsedRequest {
  AccessKeyId: string | undefined;
}
export interface GetAccessKeyLastUsedResponse {
  UserName?: string | undefined;
  AccessKeyLastUsed?: AccessKeyLastUsed | undefined;
}
export declare const EntityType: {
  readonly AWSManagedPolicy: "AWSManagedPolicy";
  readonly Group: "Group";
  readonly LocalManagedPolicy: "LocalManagedPolicy";
  readonly Role: "Role";
  readonly User: "User";
};
export type EntityType = (typeof EntityType)[keyof typeof EntityType];
export interface GetAccountAuthorizationDetailsRequest {
  Filter?: EntityType[] | undefined;
  MaxItems?: number | undefined;
  Marker?: string | undefined;
}
export interface PolicyDetail {
  PolicyName?: string | undefined;
  PolicyDocument?: string | undefined;
}
export interface GroupDetail {
  Path?: string | undefined;
  GroupName?: string | undefined;
  GroupId?: string | undefined;
  Arn?: string | undefined;
  CreateDate?: Date | undefined;
  GroupPolicyList?: PolicyDetail[] | undefined;
  AttachedManagedPolicies?: AttachedPolicy[] | undefined;
}
export interface ManagedPolicyDetail {
  PolicyName?: string | undefined;
  PolicyId?: string | undefined;
  Arn?: string | undefined;
  Path?: string | undefined;
  DefaultVersionId?: string | undefined;
  AttachmentCount?: number | undefined;
  PermissionsBoundaryUsageCount?: number | undefined;
  IsAttachable?: boolean | undefined;
  Description?: string | undefined;
  CreateDate?: Date | undefined;
  UpdateDate?: Date | undefined;
  PolicyVersionList?: PolicyVersion[] | undefined;
}
export interface RoleDetail {
  Path?: string | undefined;
  RoleName?: string | undefined;
  RoleId?: string | undefined;
  Arn?: string | undefined;
  CreateDate?: Date | undefined;
  AssumeRolePolicyDocument?: string | undefined;
  InstanceProfileList?: InstanceProfile[] | undefined;
  RolePolicyList?: PolicyDetail[] | undefined;
  AttachedManagedPolicies?: AttachedPolicy[] | undefined;
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;
  Tags?: Tag[] | undefined;
  RoleLastUsed?: RoleLastUsed | undefined;
}
export interface UserDetail {
  Path?: string | undefined;
  UserName?: string | undefined;
  UserId?: string | undefined;
  Arn?: string | undefined;
  CreateDate?: Date | undefined;
  UserPolicyList?: PolicyDetail[] | undefined;
  GroupList?: string[] | undefined;
  AttachedManagedPolicies?: AttachedPolicy[] | undefined;
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;
  Tags?: Tag[] | undefined;
}
export interface GetAccountAuthorizationDetailsResponse {
  UserDetailList?: UserDetail[] | undefined;
  GroupDetailList?: GroupDetail[] | undefined;
  RoleDetailList?: RoleDetail[] | undefined;
  Policies?: ManagedPolicyDetail[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface PasswordPolicy {
  MinimumPasswordLength?: number | undefined;
  RequireSymbols?: boolean | undefined;
  RequireNumbers?: boolean | undefined;
  RequireUppercaseCharacters?: boolean | undefined;
  RequireLowercaseCharacters?: boolean | undefined;
  AllowUsersToChangePassword?: boolean | undefined;
  ExpirePasswords?: boolean | undefined;
  MaxPasswordAge?: number | undefined;
  PasswordReusePrevention?: number | undefined;
  HardExpiry?: boolean | undefined;
}
export interface GetAccountPasswordPolicyResponse {
  PasswordPolicy: PasswordPolicy | undefined;
}
export declare const SummaryKeyType: {
  readonly AccessKeysPerUserQuota: "AccessKeysPerUserQuota";
  readonly AccountAccessKeysPresent: "AccountAccessKeysPresent";
  readonly AccountMFAEnabled: "AccountMFAEnabled";
  readonly AccountPasswordPresent: "AccountPasswordPresent";
  readonly AccountSigningCertificatesPresent: "AccountSigningCertificatesPresent";
  readonly AttachedPoliciesPerGroupQuota: "AttachedPoliciesPerGroupQuota";
  readonly AttachedPoliciesPerRoleQuota: "AttachedPoliciesPerRoleQuota";
  readonly AttachedPoliciesPerUserQuota: "AttachedPoliciesPerUserQuota";
  readonly GlobalEndpointTokenVersion: "GlobalEndpointTokenVersion";
  readonly GroupPolicySizeQuota: "GroupPolicySizeQuota";
  readonly Groups: "Groups";
  readonly GroupsPerUserQuota: "GroupsPerUserQuota";
  readonly GroupsQuota: "GroupsQuota";
  readonly MFADevices: "MFADevices";
  readonly MFADevicesInUse: "MFADevicesInUse";
  readonly Policies: "Policies";
  readonly PoliciesQuota: "PoliciesQuota";
  readonly PolicySizeQuota: "PolicySizeQuota";
  readonly PolicyVersionsInUse: "PolicyVersionsInUse";
  readonly PolicyVersionsInUseQuota: "PolicyVersionsInUseQuota";
  readonly ServerCertificates: "ServerCertificates";
  readonly ServerCertificatesQuota: "ServerCertificatesQuota";
  readonly SigningCertificatesPerUserQuota: "SigningCertificatesPerUserQuota";
  readonly UserPolicySizeQuota: "UserPolicySizeQuota";
  readonly Users: "Users";
  readonly UsersQuota: "UsersQuota";
  readonly VersionsPerPolicyQuota: "VersionsPerPolicyQuota";
};
export type SummaryKeyType =
  (typeof SummaryKeyType)[keyof typeof SummaryKeyType];
export interface GetAccountSummaryResponse {
  SummaryMap?: Partial<Record<SummaryKeyType, number>> | undefined;
}
export interface GetContextKeysForCustomPolicyRequest {
  PolicyInputList: string[] | undefined;
}
export interface GetContextKeysForPolicyResponse {
  ContextKeyNames?: string[] | undefined;
}
export interface GetContextKeysForPrincipalPolicyRequest {
  PolicySourceArn: string | undefined;
  PolicyInputList?: string[] | undefined;
}
export declare class CredentialReportExpiredException extends __BaseException {
  readonly name: "CredentialReportExpiredException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      CredentialReportExpiredException,
      __BaseException
    >
  );
}
export declare class CredentialReportNotPresentException extends __BaseException {
  readonly name: "CredentialReportNotPresentException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      CredentialReportNotPresentException,
      __BaseException
    >
  );
}
export declare class CredentialReportNotReadyException extends __BaseException {
  readonly name: "CredentialReportNotReadyException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      CredentialReportNotReadyException,
      __BaseException
    >
  );
}
export declare const ReportFormatType: {
  readonly text_csv: "text/csv";
};
export type ReportFormatType =
  (typeof ReportFormatType)[keyof typeof ReportFormatType];
export interface GetCredentialReportResponse {
  Content?: Uint8Array | undefined;
  ReportFormat?: ReportFormatType | undefined;
  GeneratedTime?: Date | undefined;
}
export interface GetGroupRequest {
  GroupName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface GetGroupResponse {
  Group: Group | undefined;
  Users: User[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface GetGroupPolicyRequest {
  GroupName: string | undefined;
  PolicyName: string | undefined;
}
export interface GetGroupPolicyResponse {
  GroupName: string | undefined;
  PolicyName: string | undefined;
  PolicyDocument: string | undefined;
}
export interface GetInstanceProfileRequest {
  InstanceProfileName: string | undefined;
}
export interface GetInstanceProfileResponse {
  InstanceProfile: InstanceProfile | undefined;
}
export interface GetLoginProfileRequest {
  UserName?: string | undefined;
}
export interface GetLoginProfileResponse {
  LoginProfile: LoginProfile | undefined;
}
export interface GetMFADeviceRequest {
  SerialNumber: string | undefined;
  UserName?: string | undefined;
}
export interface GetMFADeviceResponse {
  UserName?: string | undefined;
  SerialNumber: string | undefined;
  EnableDate?: Date | undefined;
  Certifications?: Record<string, string> | undefined;
}
export interface GetOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string | undefined;
}
export interface GetOpenIDConnectProviderResponse {
  Url?: string | undefined;
  ClientIDList?: string[] | undefined;
  ThumbprintList?: string[] | undefined;
  CreateDate?: Date | undefined;
  Tags?: Tag[] | undefined;
}
export declare const SortKeyType: {
  readonly LAST_AUTHENTICATED_TIME_ASCENDING: "LAST_AUTHENTICATED_TIME_ASCENDING";
  readonly LAST_AUTHENTICATED_TIME_DESCENDING: "LAST_AUTHENTICATED_TIME_DESCENDING";
  readonly SERVICE_NAMESPACE_ASCENDING: "SERVICE_NAMESPACE_ASCENDING";
  readonly SERVICE_NAMESPACE_DESCENDING: "SERVICE_NAMESPACE_DESCENDING";
};
export type SortKeyType = (typeof SortKeyType)[keyof typeof SortKeyType];
export interface GetOrganizationsAccessReportRequest {
  JobId: string | undefined;
  MaxItems?: number | undefined;
  Marker?: string | undefined;
  SortKey?: SortKeyType | undefined;
}
export interface ErrorDetails {
  Message: string | undefined;
  Code: string | undefined;
}
export declare const JobStatusType: {
  readonly COMPLETED: "COMPLETED";
  readonly FAILED: "FAILED";
  readonly IN_PROGRESS: "IN_PROGRESS";
};
export type JobStatusType = (typeof JobStatusType)[keyof typeof JobStatusType];
export interface GetOrganizationsAccessReportResponse {
  JobStatus: JobStatusType | undefined;
  JobCreationDate: Date | undefined;
  JobCompletionDate?: Date | undefined;
  NumberOfServicesAccessible?: number | undefined;
  NumberOfServicesNotAccessed?: number | undefined;
  AccessDetails?: AccessDetail[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
  ErrorDetails?: ErrorDetails | undefined;
}
export interface GetPolicyRequest {
  PolicyArn: string | undefined;
}
export interface GetPolicyResponse {
  Policy?: Policy | undefined;
}
export interface GetPolicyVersionRequest {
  PolicyArn: string | undefined;
  VersionId: string | undefined;
}
export interface GetPolicyVersionResponse {
  PolicyVersion?: PolicyVersion | undefined;
}
export interface GetRoleRequest {
  RoleName: string | undefined;
}
export interface GetRoleResponse {
  Role: Role | undefined;
}
export interface GetRolePolicyRequest {
  RoleName: string | undefined;
  PolicyName: string | undefined;
}
export interface GetRolePolicyResponse {
  RoleName: string | undefined;
  PolicyName: string | undefined;
  PolicyDocument: string | undefined;
}
export interface GetSAMLProviderRequest {
  SAMLProviderArn: string | undefined;
}
export interface SAMLPrivateKey {
  KeyId?: string | undefined;
  Timestamp?: Date | undefined;
}
export interface GetSAMLProviderResponse {
  SAMLProviderUUID?: string | undefined;
  SAMLMetadataDocument?: string | undefined;
  CreateDate?: Date | undefined;
  ValidUntil?: Date | undefined;
  Tags?: Tag[] | undefined;
  AssertionEncryptionMode?: AssertionEncryptionModeType | undefined;
  PrivateKeyList?: SAMLPrivateKey[] | undefined;
}
export interface GetServerCertificateRequest {
  ServerCertificateName: string | undefined;
}
export interface ServerCertificateMetadata {
  Path: string | undefined;
  ServerCertificateName: string | undefined;
  ServerCertificateId: string | undefined;
  Arn: string | undefined;
  UploadDate?: Date | undefined;
  Expiration?: Date | undefined;
}
export interface ServerCertificate {
  ServerCertificateMetadata: ServerCertificateMetadata | undefined;
  CertificateBody: string | undefined;
  CertificateChain?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface GetServerCertificateResponse {
  ServerCertificate: ServerCertificate | undefined;
}
export interface GetServiceLastAccessedDetailsRequest {
  JobId: string | undefined;
  MaxItems?: number | undefined;
  Marker?: string | undefined;
}
export interface TrackedActionLastAccessed {
  ActionName?: string | undefined;
  LastAccessedEntity?: string | undefined;
  LastAccessedTime?: Date | undefined;
  LastAccessedRegion?: string | undefined;
}
export interface ServiceLastAccessed {
  ServiceName: string | undefined;
  LastAuthenticated?: Date | undefined;
  ServiceNamespace: string | undefined;
  LastAuthenticatedEntity?: string | undefined;
  LastAuthenticatedRegion?: string | undefined;
  TotalAuthenticatedEntities?: number | undefined;
  TrackedActionsLastAccessed?: TrackedActionLastAccessed[] | undefined;
}
export interface GetServiceLastAccessedDetailsResponse {
  JobStatus: JobStatusType | undefined;
  JobType?: AccessAdvisorUsageGranularityType | undefined;
  JobCreationDate: Date | undefined;
  ServicesLastAccessed: ServiceLastAccessed[] | undefined;
  JobCompletionDate: Date | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
  Error?: ErrorDetails | undefined;
}
export interface GetServiceLastAccessedDetailsWithEntitiesRequest {
  JobId: string | undefined;
  ServiceNamespace: string | undefined;
  MaxItems?: number | undefined;
  Marker?: string | undefined;
}
export declare const PolicyOwnerEntityType: {
  readonly GROUP: "GROUP";
  readonly ROLE: "ROLE";
  readonly USER: "USER";
};
export type PolicyOwnerEntityType =
  (typeof PolicyOwnerEntityType)[keyof typeof PolicyOwnerEntityType];
export interface EntityInfo {
  Arn: string | undefined;
  Name: string | undefined;
  Type: PolicyOwnerEntityType | undefined;
  Id: string | undefined;
  Path?: string | undefined;
}
export interface EntityDetails {
  EntityInfo: EntityInfo | undefined;
  LastAuthenticated?: Date | undefined;
}
export interface GetServiceLastAccessedDetailsWithEntitiesResponse {
  JobStatus: JobStatusType | undefined;
  JobCreationDate: Date | undefined;
  JobCompletionDate: Date | undefined;
  EntityDetailsList: EntityDetails[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
  Error?: ErrorDetails | undefined;
}
export interface GetServiceLinkedRoleDeletionStatusRequest {
  DeletionTaskId: string | undefined;
}
export interface RoleUsageType {
  Region?: string | undefined;
  Resources?: string[] | undefined;
}
export interface DeletionTaskFailureReasonType {
  Reason?: string | undefined;
  RoleUsageList?: RoleUsageType[] | undefined;
}
export declare const DeletionTaskStatusType: {
  readonly FAILED: "FAILED";
  readonly IN_PROGRESS: "IN_PROGRESS";
  readonly NOT_STARTED: "NOT_STARTED";
  readonly SUCCEEDED: "SUCCEEDED";
};
export type DeletionTaskStatusType =
  (typeof DeletionTaskStatusType)[keyof typeof DeletionTaskStatusType];
export interface GetServiceLinkedRoleDeletionStatusResponse {
  Status: DeletionTaskStatusType | undefined;
  Reason?: DeletionTaskFailureReasonType | undefined;
}
export declare const EncodingType: {
  readonly PEM: "PEM";
  readonly SSH: "SSH";
};
export type EncodingType = (typeof EncodingType)[keyof typeof EncodingType];
export interface GetSSHPublicKeyRequest {
  UserName: string | undefined;
  SSHPublicKeyId: string | undefined;
  Encoding: EncodingType | undefined;
}
export interface SSHPublicKey {
  UserName: string | undefined;
  SSHPublicKeyId: string | undefined;
  Fingerprint: string | undefined;
  SSHPublicKeyBody: string | undefined;
  Status: StatusType | undefined;
  UploadDate?: Date | undefined;
}
export interface GetSSHPublicKeyResponse {
  SSHPublicKey?: SSHPublicKey | undefined;
}
export declare class UnrecognizedPublicKeyEncodingException extends __BaseException {
  readonly name: "UnrecognizedPublicKeyEncodingException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      UnrecognizedPublicKeyEncodingException,
      __BaseException
    >
  );
}
export interface GetUserRequest {
  UserName?: string | undefined;
}
export interface GetUserResponse {
  User: User | undefined;
}
export interface GetUserPolicyRequest {
  UserName: string | undefined;
  PolicyName: string | undefined;
}
export interface GetUserPolicyResponse {
  UserName: string | undefined;
  PolicyName: string | undefined;
  PolicyDocument: string | undefined;
}
export interface ListAccessKeysRequest {
  UserName?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListAccessKeysResponse {
  AccessKeyMetadata: AccessKeyMetadata[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListAccountAliasesRequest {
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListAccountAliasesResponse {
  AccountAliases: string[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListAttachedGroupPoliciesRequest {
  GroupName: string | undefined;
  PathPrefix?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListAttachedGroupPoliciesResponse {
  AttachedPolicies?: AttachedPolicy[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListAttachedRolePoliciesRequest {
  RoleName: string | undefined;
  PathPrefix?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListAttachedRolePoliciesResponse {
  AttachedPolicies?: AttachedPolicy[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListAttachedUserPoliciesRequest {
  UserName: string | undefined;
  PathPrefix?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListAttachedUserPoliciesResponse {
  AttachedPolicies?: AttachedPolicy[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export declare const PolicyUsageType: {
  readonly PermissionsBoundary: "PermissionsBoundary";
  readonly PermissionsPolicy: "PermissionsPolicy";
};
export type PolicyUsageType =
  (typeof PolicyUsageType)[keyof typeof PolicyUsageType];
export interface ListEntitiesForPolicyRequest {
  PolicyArn: string | undefined;
  EntityFilter?: EntityType | undefined;
  PathPrefix?: string | undefined;
  PolicyUsageFilter?: PolicyUsageType | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface PolicyGroup {
  GroupName?: string | undefined;
  GroupId?: string | undefined;
}
export interface PolicyRole {
  RoleName?: string | undefined;
  RoleId?: string | undefined;
}
export interface PolicyUser {
  UserName?: string | undefined;
  UserId?: string | undefined;
}
export interface ListEntitiesForPolicyResponse {
  PolicyGroups?: PolicyGroup[] | undefined;
  PolicyUsers?: PolicyUser[] | undefined;
  PolicyRoles?: PolicyRole[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListGroupPoliciesRequest {
  GroupName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListGroupPoliciesResponse {
  PolicyNames: string[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListGroupsRequest {
  PathPrefix?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListGroupsResponse {
  Groups: Group[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListGroupsForUserRequest {
  UserName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListGroupsForUserResponse {
  Groups: Group[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListInstanceProfilesRequest {
  PathPrefix?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListInstanceProfilesResponse {
  InstanceProfiles: InstanceProfile[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListInstanceProfilesForRoleRequest {
  RoleName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListInstanceProfilesForRoleResponse {
  InstanceProfiles: InstanceProfile[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListInstanceProfileTagsRequest {
  InstanceProfileName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListInstanceProfileTagsResponse {
  Tags: Tag[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListMFADevicesRequest {
  UserName?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface MFADevice {
  UserName: string | undefined;
  SerialNumber: string | undefined;
  EnableDate: Date | undefined;
}
export interface ListMFADevicesResponse {
  MFADevices: MFADevice[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListMFADeviceTagsRequest {
  SerialNumber: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListMFADeviceTagsResponse {
  Tags: Tag[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListOpenIDConnectProvidersRequest {}
export interface OpenIDConnectProviderListEntry {
  Arn?: string | undefined;
}
export interface ListOpenIDConnectProvidersResponse {
  OpenIDConnectProviderList?: OpenIDConnectProviderListEntry[] | undefined;
}
export interface ListOpenIDConnectProviderTagsRequest {
  OpenIDConnectProviderArn: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListOpenIDConnectProviderTagsResponse {
  Tags: Tag[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListOrganizationsFeaturesRequest {}
export interface ListOrganizationsFeaturesResponse {
  OrganizationId?: string | undefined;
  EnabledFeatures?: FeatureType[] | undefined;
}
export declare const PolicyScopeType: {
  readonly AWS: "AWS";
  readonly All: "All";
  readonly Local: "Local";
};
export type PolicyScopeType =
  (typeof PolicyScopeType)[keyof typeof PolicyScopeType];
export interface ListPoliciesRequest {
  Scope?: PolicyScopeType | undefined;
  OnlyAttached?: boolean | undefined;
  PathPrefix?: string | undefined;
  PolicyUsageFilter?: PolicyUsageType | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListPoliciesResponse {
  Policies?: Policy[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListPoliciesGrantingServiceAccessRequest {
  Marker?: string | undefined;
  Arn: string | undefined;
  ServiceNamespaces: string[] | undefined;
}
export declare const PolicyType: {
  readonly INLINE: "INLINE";
  readonly MANAGED: "MANAGED";
};
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];
export interface PolicyGrantingServiceAccess {
  PolicyName: string | undefined;
  PolicyType: PolicyType | undefined;
  PolicyArn?: string | undefined;
  EntityType?: PolicyOwnerEntityType | undefined;
  EntityName?: string | undefined;
}
export interface ListPoliciesGrantingServiceAccessEntry {
  ServiceNamespace?: string | undefined;
  Policies?: PolicyGrantingServiceAccess[] | undefined;
}
export interface ListPoliciesGrantingServiceAccessResponse {
  PoliciesGrantingServiceAccess:
    | ListPoliciesGrantingServiceAccessEntry[]
    | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListPolicyTagsRequest {
  PolicyArn: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListPolicyTagsResponse {
  Tags: Tag[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListPolicyVersionsRequest {
  PolicyArn: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListPolicyVersionsResponse {
  Versions?: PolicyVersion[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListRolePoliciesRequest {
  RoleName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListRolePoliciesResponse {
  PolicyNames: string[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListRolesRequest {
  PathPrefix?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListRolesResponse {
  Roles: Role[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListRoleTagsRequest {
  RoleName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListRoleTagsResponse {
  Tags: Tag[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListSAMLProvidersRequest {}
export interface SAMLProviderListEntry {
  Arn?: string | undefined;
  ValidUntil?: Date | undefined;
  CreateDate?: Date | undefined;
}
export interface ListSAMLProvidersResponse {
  SAMLProviderList?: SAMLProviderListEntry[] | undefined;
}
export interface ListSAMLProviderTagsRequest {
  SAMLProviderArn: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListSAMLProviderTagsResponse {
  Tags: Tag[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListServerCertificatesRequest {
  PathPrefix?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListServerCertificatesResponse {
  ServerCertificateMetadataList: ServerCertificateMetadata[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListServerCertificateTagsRequest {
  ServerCertificateName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListServerCertificateTagsResponse {
  Tags: Tag[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListServiceSpecificCredentialsRequest {
  UserName?: string | undefined;
  ServiceName?: string | undefined;
}
export interface ServiceSpecificCredentialMetadata {
  UserName: string | undefined;
  Status: StatusType | undefined;
  ServiceUserName: string | undefined;
  CreateDate: Date | undefined;
  ServiceSpecificCredentialId: string | undefined;
  ServiceName: string | undefined;
}
export interface ListServiceSpecificCredentialsResponse {
  ServiceSpecificCredentials?: ServiceSpecificCredentialMetadata[] | undefined;
}
export interface ListSigningCertificatesRequest {
  UserName?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface SigningCertificate {
  UserName: string | undefined;
  CertificateId: string | undefined;
  CertificateBody: string | undefined;
  Status: StatusType | undefined;
  UploadDate?: Date | undefined;
}
export interface ListSigningCertificatesResponse {
  Certificates: SigningCertificate[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListSSHPublicKeysRequest {
  UserName?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface SSHPublicKeyMetadata {
  UserName: string | undefined;
  SSHPublicKeyId: string | undefined;
  Status: StatusType | undefined;
  UploadDate: Date | undefined;
}
export interface ListSSHPublicKeysResponse {
  SSHPublicKeys?: SSHPublicKeyMetadata[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListUserPoliciesRequest {
  UserName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListUserPoliciesResponse {
  PolicyNames: string[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListUsersRequest {
  PathPrefix?: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListUsersResponse {
  Users: User[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListUserTagsRequest {
  UserName: string | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListUserTagsResponse {
  Tags: Tag[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface ListVirtualMFADevicesRequest {
  AssignmentStatus?: AssignmentStatusType | undefined;
  Marker?: string | undefined;
  MaxItems?: number | undefined;
}
export interface ListVirtualMFADevicesResponse {
  VirtualMFADevices: VirtualMFADevice[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface PutGroupPolicyRequest {
  GroupName: string | undefined;
  PolicyName: string | undefined;
  PolicyDocument: string | undefined;
}
export interface PutRolePermissionsBoundaryRequest {
  RoleName: string | undefined;
  PermissionsBoundary: string | undefined;
}
export interface PutRolePolicyRequest {
  RoleName: string | undefined;
  PolicyName: string | undefined;
  PolicyDocument: string | undefined;
}
export interface PutUserPermissionsBoundaryRequest {
  UserName: string | undefined;
  PermissionsBoundary: string | undefined;
}
export interface PutUserPolicyRequest {
  UserName: string | undefined;
  PolicyName: string | undefined;
  PolicyDocument: string | undefined;
}
export interface RemoveClientIDFromOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string | undefined;
  ClientID: string | undefined;
}
export interface RemoveRoleFromInstanceProfileRequest {
  InstanceProfileName: string | undefined;
  RoleName: string | undefined;
}
export interface RemoveUserFromGroupRequest {
  GroupName: string | undefined;
  UserName: string | undefined;
}
export interface ResetServiceSpecificCredentialRequest {
  UserName?: string | undefined;
  ServiceSpecificCredentialId: string | undefined;
}
export interface ResetServiceSpecificCredentialResponse {
  ServiceSpecificCredential?: ServiceSpecificCredential | undefined;
}
export interface ResyncMFADeviceRequest {
  UserName: string | undefined;
  SerialNumber: string | undefined;
  AuthenticationCode1: string | undefined;
  AuthenticationCode2: string | undefined;
}
export interface SetDefaultPolicyVersionRequest {
  PolicyArn: string | undefined;
  VersionId: string | undefined;
}
export declare const GlobalEndpointTokenVersion: {
  readonly v1Token: "v1Token";
  readonly v2Token: "v2Token";
};
export type GlobalEndpointTokenVersion =
  (typeof GlobalEndpointTokenVersion)[keyof typeof GlobalEndpointTokenVersion];
export interface SetSecurityTokenServicePreferencesRequest {
  GlobalEndpointTokenVersion: GlobalEndpointTokenVersion | undefined;
}
export declare class PolicyEvaluationException extends __BaseException {
  readonly name: "PolicyEvaluationException";
  readonly $fault: "server";
  constructor(
    opts: __ExceptionOptionType<PolicyEvaluationException, __BaseException>
  );
}
export declare const ContextKeyTypeEnum: {
  readonly BINARY: "binary";
  readonly BINARY_LIST: "binaryList";
  readonly BOOLEAN: "boolean";
  readonly BOOLEAN_LIST: "booleanList";
  readonly DATE: "date";
  readonly DATE_LIST: "dateList";
  readonly IP: "ip";
  readonly IP_LIST: "ipList";
  readonly NUMERIC: "numeric";
  readonly NUMERIC_LIST: "numericList";
  readonly STRING: "string";
  readonly STRING_LIST: "stringList";
};
export type ContextKeyTypeEnum =
  (typeof ContextKeyTypeEnum)[keyof typeof ContextKeyTypeEnum];
export interface ContextEntry {
  ContextKeyName?: string | undefined;
  ContextKeyValues?: string[] | undefined;
  ContextKeyType?: ContextKeyTypeEnum | undefined;
}
export interface SimulateCustomPolicyRequest {
  PolicyInputList: string[] | undefined;
  PermissionsBoundaryPolicyInputList?: string[] | undefined;
  ActionNames: string[] | undefined;
  ResourceArns?: string[] | undefined;
  ResourcePolicy?: string | undefined;
  ResourceOwner?: string | undefined;
  CallerArn?: string | undefined;
  ContextEntries?: ContextEntry[] | undefined;
  ResourceHandlingOption?: string | undefined;
  MaxItems?: number | undefined;
  Marker?: string | undefined;
}
export declare const AccessKeyFilterSensitiveLog: (obj: AccessKey) => any;
export declare const ChangePasswordRequestFilterSensitiveLog: (
  obj: ChangePasswordRequest
) => any;
export declare const CreateAccessKeyResponseFilterSensitiveLog: (
  obj: CreateAccessKeyResponse
) => any;
export declare const CreateLoginProfileRequestFilterSensitiveLog: (
  obj: CreateLoginProfileRequest
) => any;
export declare const CreateSAMLProviderRequestFilterSensitiveLog: (
  obj: CreateSAMLProviderRequest
) => any;
export declare const ServiceSpecificCredentialFilterSensitiveLog: (
  obj: ServiceSpecificCredential
) => any;
export declare const CreateServiceSpecificCredentialResponseFilterSensitiveLog: (
  obj: CreateServiceSpecificCredentialResponse
) => any;
export declare const VirtualMFADeviceFilterSensitiveLog: (
  obj: VirtualMFADevice
) => any;
export declare const CreateVirtualMFADeviceResponseFilterSensitiveLog: (
  obj: CreateVirtualMFADeviceResponse
) => any;
export declare const ListVirtualMFADevicesResponseFilterSensitiveLog: (
  obj: ListVirtualMFADevicesResponse
) => any;
export declare const ResetServiceSpecificCredentialResponseFilterSensitiveLog: (
  obj: ResetServiceSpecificCredentialResponse
) => any;
