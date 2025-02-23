import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { IAMServiceException as __BaseException } from "./IAMServiceException";
import {
  AssertionEncryptionModeType,
  ContextEntry,
  Role,
  ServerCertificateMetadata,
  SigningCertificate,
  SSHPublicKey,
  StatusType,
  Tag,
} from "./models_0";
export declare const PolicyEvaluationDecisionType: {
  readonly ALLOWED: "allowed";
  readonly EXPLICIT_DENY: "explicitDeny";
  readonly IMPLICIT_DENY: "implicitDeny";
};
export type PolicyEvaluationDecisionType =
  (typeof PolicyEvaluationDecisionType)[keyof typeof PolicyEvaluationDecisionType];
export interface Position {
  Line?: number | undefined;
  Column?: number | undefined;
}
export declare const PolicySourceType: {
  readonly AWS_MANAGED: "aws-managed";
  readonly GROUP: "group";
  readonly NONE: "none";
  readonly RESOURCE: "resource";
  readonly ROLE: "role";
  readonly USER: "user";
  readonly USER_MANAGED: "user-managed";
};
export type PolicySourceType =
  (typeof PolicySourceType)[keyof typeof PolicySourceType];
export interface Statement {
  SourcePolicyId?: string | undefined;
  SourcePolicyType?: PolicySourceType | undefined;
  StartPosition?: Position | undefined;
  EndPosition?: Position | undefined;
}
export interface OrganizationsDecisionDetail {
  AllowedByOrganizations?: boolean | undefined;
}
export interface PermissionsBoundaryDecisionDetail {
  AllowedByPermissionsBoundary?: boolean | undefined;
}
export interface ResourceSpecificResult {
  EvalResourceName: string | undefined;
  EvalResourceDecision: PolicyEvaluationDecisionType | undefined;
  MatchedStatements?: Statement[] | undefined;
  MissingContextValues?: string[] | undefined;
  EvalDecisionDetails?:
    | Record<string, PolicyEvaluationDecisionType>
    | undefined;
  PermissionsBoundaryDecisionDetail?:
    | PermissionsBoundaryDecisionDetail
    | undefined;
}
export interface EvaluationResult {
  EvalActionName: string | undefined;
  EvalResourceName?: string | undefined;
  EvalDecision: PolicyEvaluationDecisionType | undefined;
  MatchedStatements?: Statement[] | undefined;
  MissingContextValues?: string[] | undefined;
  OrganizationsDecisionDetail?: OrganizationsDecisionDetail | undefined;
  PermissionsBoundaryDecisionDetail?:
    | PermissionsBoundaryDecisionDetail
    | undefined;
  EvalDecisionDetails?:
    | Record<string, PolicyEvaluationDecisionType>
    | undefined;
  ResourceSpecificResults?: ResourceSpecificResult[] | undefined;
}
export interface SimulatePolicyResponse {
  EvaluationResults?: EvaluationResult[] | undefined;
  IsTruncated?: boolean | undefined;
  Marker?: string | undefined;
}
export interface SimulatePrincipalPolicyRequest {
  PolicySourceArn: string | undefined;
  PolicyInputList?: string[] | undefined;
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
export interface TagInstanceProfileRequest {
  InstanceProfileName: string | undefined;
  Tags: Tag[] | undefined;
}
export interface TagMFADeviceRequest {
  SerialNumber: string | undefined;
  Tags: Tag[] | undefined;
}
export interface TagOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string | undefined;
  Tags: Tag[] | undefined;
}
export interface TagPolicyRequest {
  PolicyArn: string | undefined;
  Tags: Tag[] | undefined;
}
export interface TagRoleRequest {
  RoleName: string | undefined;
  Tags: Tag[] | undefined;
}
export interface TagSAMLProviderRequest {
  SAMLProviderArn: string | undefined;
  Tags: Tag[] | undefined;
}
export interface TagServerCertificateRequest {
  ServerCertificateName: string | undefined;
  Tags: Tag[] | undefined;
}
export interface TagUserRequest {
  UserName: string | undefined;
  Tags: Tag[] | undefined;
}
export interface UntagInstanceProfileRequest {
  InstanceProfileName: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UntagMFADeviceRequest {
  SerialNumber: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UntagOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UntagPolicyRequest {
  PolicyArn: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UntagRoleRequest {
  RoleName: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UntagSAMLProviderRequest {
  SAMLProviderArn: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UntagServerCertificateRequest {
  ServerCertificateName: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UntagUserRequest {
  UserName: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UpdateAccessKeyRequest {
  UserName?: string | undefined;
  AccessKeyId: string | undefined;
  Status: StatusType | undefined;
}
export interface UpdateAccountPasswordPolicyRequest {
  MinimumPasswordLength?: number | undefined;
  RequireSymbols?: boolean | undefined;
  RequireNumbers?: boolean | undefined;
  RequireUppercaseCharacters?: boolean | undefined;
  RequireLowercaseCharacters?: boolean | undefined;
  AllowUsersToChangePassword?: boolean | undefined;
  MaxPasswordAge?: number | undefined;
  PasswordReusePrevention?: number | undefined;
  HardExpiry?: boolean | undefined;
}
export interface UpdateAssumeRolePolicyRequest {
  RoleName: string | undefined;
  PolicyDocument: string | undefined;
}
export interface UpdateGroupRequest {
  GroupName: string | undefined;
  NewPath?: string | undefined;
  NewGroupName?: string | undefined;
}
export interface UpdateLoginProfileRequest {
  UserName: string | undefined;
  Password?: string | undefined;
  PasswordResetRequired?: boolean | undefined;
}
export interface UpdateOpenIDConnectProviderThumbprintRequest {
  OpenIDConnectProviderArn: string | undefined;
  ThumbprintList: string[] | undefined;
}
export interface UpdateRoleRequest {
  RoleName: string | undefined;
  Description?: string | undefined;
  MaxSessionDuration?: number | undefined;
}
export interface UpdateRoleResponse {}
export interface UpdateRoleDescriptionRequest {
  RoleName: string | undefined;
  Description: string | undefined;
}
export interface UpdateRoleDescriptionResponse {
  Role?: Role | undefined;
}
export interface UpdateSAMLProviderRequest {
  SAMLMetadataDocument?: string | undefined;
  SAMLProviderArn: string | undefined;
  AssertionEncryptionMode?: AssertionEncryptionModeType | undefined;
  AddPrivateKey?: string | undefined;
  RemovePrivateKey?: string | undefined;
}
export interface UpdateSAMLProviderResponse {
  SAMLProviderArn?: string | undefined;
}
export interface UpdateServerCertificateRequest {
  ServerCertificateName: string | undefined;
  NewPath?: string | undefined;
  NewServerCertificateName?: string | undefined;
}
export interface UpdateServiceSpecificCredentialRequest {
  UserName?: string | undefined;
  ServiceSpecificCredentialId: string | undefined;
  Status: StatusType | undefined;
}
export interface UpdateSigningCertificateRequest {
  UserName?: string | undefined;
  CertificateId: string | undefined;
  Status: StatusType | undefined;
}
export interface UpdateSSHPublicKeyRequest {
  UserName: string | undefined;
  SSHPublicKeyId: string | undefined;
  Status: StatusType | undefined;
}
export interface UpdateUserRequest {
  UserName: string | undefined;
  NewPath?: string | undefined;
  NewUserName?: string | undefined;
}
export declare class KeyPairMismatchException extends __BaseException {
  readonly name: "KeyPairMismatchException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<KeyPairMismatchException, __BaseException>
  );
}
export declare class MalformedCertificateException extends __BaseException {
  readonly name: "MalformedCertificateException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<MalformedCertificateException, __BaseException>
  );
}
export interface UploadServerCertificateRequest {
  Path?: string | undefined;
  ServerCertificateName: string | undefined;
  CertificateBody: string | undefined;
  PrivateKey: string | undefined;
  CertificateChain?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface UploadServerCertificateResponse {
  ServerCertificateMetadata?: ServerCertificateMetadata | undefined;
  Tags?: Tag[] | undefined;
}
export declare class DuplicateCertificateException extends __BaseException {
  readonly name: "DuplicateCertificateException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<DuplicateCertificateException, __BaseException>
  );
}
export declare class InvalidCertificateException extends __BaseException {
  readonly name: "InvalidCertificateException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidCertificateException, __BaseException>
  );
}
export interface UploadSigningCertificateRequest {
  UserName?: string | undefined;
  CertificateBody: string | undefined;
}
export interface UploadSigningCertificateResponse {
  Certificate: SigningCertificate | undefined;
}
export declare class DuplicateSSHPublicKeyException extends __BaseException {
  readonly name: "DuplicateSSHPublicKeyException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<DuplicateSSHPublicKeyException, __BaseException>
  );
}
export declare class InvalidPublicKeyException extends __BaseException {
  readonly name: "InvalidPublicKeyException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidPublicKeyException, __BaseException>
  );
}
export interface UploadSSHPublicKeyRequest {
  UserName: string | undefined;
  SSHPublicKeyBody: string | undefined;
}
export interface UploadSSHPublicKeyResponse {
  SSHPublicKey?: SSHPublicKey | undefined;
}
export declare const UpdateLoginProfileRequestFilterSensitiveLog: (
  obj: UpdateLoginProfileRequest
) => any;
export declare const UpdateSAMLProviderRequestFilterSensitiveLog: (
  obj: UpdateSAMLProviderRequest
) => any;
export declare const UploadServerCertificateRequestFilterSensitiveLog: (
  obj: UploadServerCertificateRequest
) => any;
