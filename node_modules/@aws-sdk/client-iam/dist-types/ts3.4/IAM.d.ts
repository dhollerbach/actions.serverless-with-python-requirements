import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";
import {
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
} from "./commands/AddClientIDToOpenIDConnectProviderCommand";
import {
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
} from "./commands/AddRoleToInstanceProfileCommand";
import {
  AddUserToGroupCommandInput,
  AddUserToGroupCommandOutput,
} from "./commands/AddUserToGroupCommand";
import {
  AttachGroupPolicyCommandInput,
  AttachGroupPolicyCommandOutput,
} from "./commands/AttachGroupPolicyCommand";
import {
  AttachRolePolicyCommandInput,
  AttachRolePolicyCommandOutput,
} from "./commands/AttachRolePolicyCommand";
import {
  AttachUserPolicyCommandInput,
  AttachUserPolicyCommandOutput,
} from "./commands/AttachUserPolicyCommand";
import {
  ChangePasswordCommandInput,
  ChangePasswordCommandOutput,
} from "./commands/ChangePasswordCommand";
import {
  CreateAccessKeyCommandInput,
  CreateAccessKeyCommandOutput,
} from "./commands/CreateAccessKeyCommand";
import {
  CreateAccountAliasCommandInput,
  CreateAccountAliasCommandOutput,
} from "./commands/CreateAccountAliasCommand";
import {
  CreateGroupCommandInput,
  CreateGroupCommandOutput,
} from "./commands/CreateGroupCommand";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import {
  CreateLoginProfileCommandInput,
  CreateLoginProfileCommandOutput,
} from "./commands/CreateLoginProfileCommand";
import {
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
} from "./commands/CreateOpenIDConnectProviderCommand";
import {
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
} from "./commands/CreatePolicyCommand";
import {
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "./commands/CreatePolicyVersionCommand";
import {
  CreateRoleCommandInput,
  CreateRoleCommandOutput,
} from "./commands/CreateRoleCommand";
import {
  CreateSAMLProviderCommandInput,
  CreateSAMLProviderCommandOutput,
} from "./commands/CreateSAMLProviderCommand";
import {
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
} from "./commands/CreateServiceLinkedRoleCommand";
import {
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
} from "./commands/CreateServiceSpecificCredentialCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput,
} from "./commands/CreateUserCommand";
import {
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
} from "./commands/CreateVirtualMFADeviceCommand";
import {
  DeactivateMFADeviceCommandInput,
  DeactivateMFADeviceCommandOutput,
} from "./commands/DeactivateMFADeviceCommand";
import {
  DeleteAccessKeyCommandInput,
  DeleteAccessKeyCommandOutput,
} from "./commands/DeleteAccessKeyCommand";
import {
  DeleteAccountAliasCommandInput,
  DeleteAccountAliasCommandOutput,
} from "./commands/DeleteAccountAliasCommand";
import {
  DeleteAccountPasswordPolicyCommandInput,
  DeleteAccountPasswordPolicyCommandOutput,
} from "./commands/DeleteAccountPasswordPolicyCommand";
import {
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput,
} from "./commands/DeleteGroupCommand";
import {
  DeleteGroupPolicyCommandInput,
  DeleteGroupPolicyCommandOutput,
} from "./commands/DeleteGroupPolicyCommand";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import {
  DeleteLoginProfileCommandInput,
  DeleteLoginProfileCommandOutput,
} from "./commands/DeleteLoginProfileCommand";
import {
  DeleteOpenIDConnectProviderCommandInput,
  DeleteOpenIDConnectProviderCommandOutput,
} from "./commands/DeleteOpenIDConnectProviderCommand";
import {
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "./commands/DeletePolicyVersionCommand";
import {
  DeleteRoleCommandInput,
  DeleteRoleCommandOutput,
} from "./commands/DeleteRoleCommand";
import {
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
} from "./commands/DeleteRolePermissionsBoundaryCommand";
import {
  DeleteRolePolicyCommandInput,
  DeleteRolePolicyCommandOutput,
} from "./commands/DeleteRolePolicyCommand";
import {
  DeleteSAMLProviderCommandInput,
  DeleteSAMLProviderCommandOutput,
} from "./commands/DeleteSAMLProviderCommand";
import {
  DeleteServerCertificateCommandInput,
  DeleteServerCertificateCommandOutput,
} from "./commands/DeleteServerCertificateCommand";
import {
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
} from "./commands/DeleteServiceLinkedRoleCommand";
import {
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
} from "./commands/DeleteServiceSpecificCredentialCommand";
import {
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
} from "./commands/DeleteSigningCertificateCommand";
import {
  DeleteSSHPublicKeyCommandInput,
  DeleteSSHPublicKeyCommandOutput,
} from "./commands/DeleteSSHPublicKeyCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput,
} from "./commands/DeleteUserCommand";
import {
  DeleteUserPermissionsBoundaryCommandInput,
  DeleteUserPermissionsBoundaryCommandOutput,
} from "./commands/DeleteUserPermissionsBoundaryCommand";
import {
  DeleteUserPolicyCommandInput,
  DeleteUserPolicyCommandOutput,
} from "./commands/DeleteUserPolicyCommand";
import {
  DeleteVirtualMFADeviceCommandInput,
  DeleteVirtualMFADeviceCommandOutput,
} from "./commands/DeleteVirtualMFADeviceCommand";
import {
  DetachGroupPolicyCommandInput,
  DetachGroupPolicyCommandOutput,
} from "./commands/DetachGroupPolicyCommand";
import {
  DetachRolePolicyCommandInput,
  DetachRolePolicyCommandOutput,
} from "./commands/DetachRolePolicyCommand";
import {
  DetachUserPolicyCommandInput,
  DetachUserPolicyCommandOutput,
} from "./commands/DetachUserPolicyCommand";
import {
  DisableOrganizationsRootCredentialsManagementCommandInput,
  DisableOrganizationsRootCredentialsManagementCommandOutput,
} from "./commands/DisableOrganizationsRootCredentialsManagementCommand";
import {
  DisableOrganizationsRootSessionsCommandInput,
  DisableOrganizationsRootSessionsCommandOutput,
} from "./commands/DisableOrganizationsRootSessionsCommand";
import {
  EnableMFADeviceCommandInput,
  EnableMFADeviceCommandOutput,
} from "./commands/EnableMFADeviceCommand";
import {
  EnableOrganizationsRootCredentialsManagementCommandInput,
  EnableOrganizationsRootCredentialsManagementCommandOutput,
} from "./commands/EnableOrganizationsRootCredentialsManagementCommand";
import {
  EnableOrganizationsRootSessionsCommandInput,
  EnableOrganizationsRootSessionsCommandOutput,
} from "./commands/EnableOrganizationsRootSessionsCommand";
import {
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
} from "./commands/GenerateCredentialReportCommand";
import {
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
} from "./commands/GenerateOrganizationsAccessReportCommand";
import {
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
} from "./commands/GenerateServiceLastAccessedDetailsCommand";
import {
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
} from "./commands/GetAccessKeyLastUsedCommand";
import {
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "./commands/GetAccountAuthorizationDetailsCommand";
import {
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
} from "./commands/GetAccountPasswordPolicyCommand";
import {
  GetAccountSummaryCommandInput,
  GetAccountSummaryCommandOutput,
} from "./commands/GetAccountSummaryCommand";
import {
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
} from "./commands/GetContextKeysForCustomPolicyCommand";
import {
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
} from "./commands/GetContextKeysForPrincipalPolicyCommand";
import {
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
} from "./commands/GetCredentialReportCommand";
import {
  GetGroupCommandInput,
  GetGroupCommandOutput,
} from "./commands/GetGroupCommand";
import {
  GetGroupPolicyCommandInput,
  GetGroupPolicyCommandOutput,
} from "./commands/GetGroupPolicyCommand";
import {
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
} from "./commands/GetInstanceProfileCommand";
import {
  GetLoginProfileCommandInput,
  GetLoginProfileCommandOutput,
} from "./commands/GetLoginProfileCommand";
import {
  GetMFADeviceCommandInput,
  GetMFADeviceCommandOutput,
} from "./commands/GetMFADeviceCommand";
import {
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
} from "./commands/GetOpenIDConnectProviderCommand";
import {
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
} from "./commands/GetOrganizationsAccessReportCommand";
import {
  GetPolicyCommandInput,
  GetPolicyCommandOutput,
} from "./commands/GetPolicyCommand";
import {
  GetPolicyVersionCommandInput,
  GetPolicyVersionCommandOutput,
} from "./commands/GetPolicyVersionCommand";
import {
  GetRoleCommandInput,
  GetRoleCommandOutput,
} from "./commands/GetRoleCommand";
import {
  GetRolePolicyCommandInput,
  GetRolePolicyCommandOutput,
} from "./commands/GetRolePolicyCommand";
import {
  GetSAMLProviderCommandInput,
  GetSAMLProviderCommandOutput,
} from "./commands/GetSAMLProviderCommand";
import {
  GetServerCertificateCommandInput,
  GetServerCertificateCommandOutput,
} from "./commands/GetServerCertificateCommand";
import {
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsCommand";
import {
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsWithEntitiesCommand";
import {
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
} from "./commands/GetServiceLinkedRoleDeletionStatusCommand";
import {
  GetSSHPublicKeyCommandInput,
  GetSSHPublicKeyCommandOutput,
} from "./commands/GetSSHPublicKeyCommand";
import {
  GetUserCommandInput,
  GetUserCommandOutput,
} from "./commands/GetUserCommand";
import {
  GetUserPolicyCommandInput,
  GetUserPolicyCommandOutput,
} from "./commands/GetUserPolicyCommand";
import {
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
} from "./commands/ListAccessKeysCommand";
import {
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
} from "./commands/ListAccountAliasesCommand";
import {
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "./commands/ListAttachedGroupPoliciesCommand";
import {
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "./commands/ListAttachedRolePoliciesCommand";
import {
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "./commands/ListAttachedUserPoliciesCommand";
import {
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "./commands/ListEntitiesForPolicyCommand";
import {
  ListGroupPoliciesCommandInput,
  ListGroupPoliciesCommandOutput,
} from "./commands/ListGroupPoliciesCommand";
import {
  ListGroupsCommandInput,
  ListGroupsCommandOutput,
} from "./commands/ListGroupsCommand";
import {
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
} from "./commands/ListGroupsForUserCommand";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand";
import {
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "./commands/ListInstanceProfilesForRoleCommand";
import {
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "./commands/ListInstanceProfileTagsCommand";
import {
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "./commands/ListMFADevicesCommand";
import {
  ListMFADeviceTagsCommandInput,
  ListMFADeviceTagsCommandOutput,
} from "./commands/ListMFADeviceTagsCommand";
import {
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "./commands/ListOpenIDConnectProvidersCommand";
import {
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "./commands/ListOpenIDConnectProviderTagsCommand";
import {
  ListOrganizationsFeaturesCommandInput,
  ListOrganizationsFeaturesCommandOutput,
} from "./commands/ListOrganizationsFeaturesCommand";
import {
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "./commands/ListPoliciesGrantingServiceAccessCommand";
import {
  ListPolicyTagsCommandInput,
  ListPolicyTagsCommandOutput,
} from "./commands/ListPolicyTagsCommand";
import {
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "./commands/ListPolicyVersionsCommand";
import {
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput,
} from "./commands/ListRolePoliciesCommand";
import {
  ListRolesCommandInput,
  ListRolesCommandOutput,
} from "./commands/ListRolesCommand";
import {
  ListRoleTagsCommandInput,
  ListRoleTagsCommandOutput,
} from "./commands/ListRoleTagsCommand";
import {
  ListSAMLProvidersCommandInput,
  ListSAMLProvidersCommandOutput,
} from "./commands/ListSAMLProvidersCommand";
import {
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "./commands/ListSAMLProviderTagsCommand";
import {
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "./commands/ListServerCertificatesCommand";
import {
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
} from "./commands/ListServerCertificateTagsCommand";
import {
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "./commands/ListServiceSpecificCredentialsCommand";
import {
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "./commands/ListSigningCertificatesCommand";
import {
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
} from "./commands/ListSSHPublicKeysCommand";
import {
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput,
} from "./commands/ListUserPoliciesCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput,
} from "./commands/ListUsersCommand";
import {
  ListUserTagsCommandInput,
  ListUserTagsCommandOutput,
} from "./commands/ListUserTagsCommand";
import {
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "./commands/ListVirtualMFADevicesCommand";
import {
  PutGroupPolicyCommandInput,
  PutGroupPolicyCommandOutput,
} from "./commands/PutGroupPolicyCommand";
import {
  PutRolePermissionsBoundaryCommandInput,
  PutRolePermissionsBoundaryCommandOutput,
} from "./commands/PutRolePermissionsBoundaryCommand";
import {
  PutRolePolicyCommandInput,
  PutRolePolicyCommandOutput,
} from "./commands/PutRolePolicyCommand";
import {
  PutUserPermissionsBoundaryCommandInput,
  PutUserPermissionsBoundaryCommandOutput,
} from "./commands/PutUserPermissionsBoundaryCommand";
import {
  PutUserPolicyCommandInput,
  PutUserPolicyCommandOutput,
} from "./commands/PutUserPolicyCommand";
import {
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
} from "./commands/RemoveClientIDFromOpenIDConnectProviderCommand";
import {
  RemoveRoleFromInstanceProfileCommandInput,
  RemoveRoleFromInstanceProfileCommandOutput,
} from "./commands/RemoveRoleFromInstanceProfileCommand";
import {
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
} from "./commands/RemoveUserFromGroupCommand";
import {
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
} from "./commands/ResetServiceSpecificCredentialCommand";
import {
  ResyncMFADeviceCommandInput,
  ResyncMFADeviceCommandOutput,
} from "./commands/ResyncMFADeviceCommand";
import {
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "./commands/SetDefaultPolicyVersionCommand";
import {
  SetSecurityTokenServicePreferencesCommandInput,
  SetSecurityTokenServicePreferencesCommandOutput,
} from "./commands/SetSecurityTokenServicePreferencesCommand";
import {
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "./commands/SimulateCustomPolicyCommand";
import {
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "./commands/SimulatePrincipalPolicyCommand";
import {
  TagInstanceProfileCommandInput,
  TagInstanceProfileCommandOutput,
} from "./commands/TagInstanceProfileCommand";
import {
  TagMFADeviceCommandInput,
  TagMFADeviceCommandOutput,
} from "./commands/TagMFADeviceCommand";
import {
  TagOpenIDConnectProviderCommandInput,
  TagOpenIDConnectProviderCommandOutput,
} from "./commands/TagOpenIDConnectProviderCommand";
import {
  TagPolicyCommandInput,
  TagPolicyCommandOutput,
} from "./commands/TagPolicyCommand";
import {
  TagRoleCommandInput,
  TagRoleCommandOutput,
} from "./commands/TagRoleCommand";
import {
  TagSAMLProviderCommandInput,
  TagSAMLProviderCommandOutput,
} from "./commands/TagSAMLProviderCommand";
import {
  TagServerCertificateCommandInput,
  TagServerCertificateCommandOutput,
} from "./commands/TagServerCertificateCommand";
import {
  TagUserCommandInput,
  TagUserCommandOutput,
} from "./commands/TagUserCommand";
import {
  UntagInstanceProfileCommandInput,
  UntagInstanceProfileCommandOutput,
} from "./commands/UntagInstanceProfileCommand";
import {
  UntagMFADeviceCommandInput,
  UntagMFADeviceCommandOutput,
} from "./commands/UntagMFADeviceCommand";
import {
  UntagOpenIDConnectProviderCommandInput,
  UntagOpenIDConnectProviderCommandOutput,
} from "./commands/UntagOpenIDConnectProviderCommand";
import {
  UntagPolicyCommandInput,
  UntagPolicyCommandOutput,
} from "./commands/UntagPolicyCommand";
import {
  UntagRoleCommandInput,
  UntagRoleCommandOutput,
} from "./commands/UntagRoleCommand";
import {
  UntagSAMLProviderCommandInput,
  UntagSAMLProviderCommandOutput,
} from "./commands/UntagSAMLProviderCommand";
import {
  UntagServerCertificateCommandInput,
  UntagServerCertificateCommandOutput,
} from "./commands/UntagServerCertificateCommand";
import {
  UntagUserCommandInput,
  UntagUserCommandOutput,
} from "./commands/UntagUserCommand";
import {
  UpdateAccessKeyCommandInput,
  UpdateAccessKeyCommandOutput,
} from "./commands/UpdateAccessKeyCommand";
import {
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
} from "./commands/UpdateAccountPasswordPolicyCommand";
import {
  UpdateAssumeRolePolicyCommandInput,
  UpdateAssumeRolePolicyCommandOutput,
} from "./commands/UpdateAssumeRolePolicyCommand";
import {
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput,
} from "./commands/UpdateGroupCommand";
import {
  UpdateLoginProfileCommandInput,
  UpdateLoginProfileCommandOutput,
} from "./commands/UpdateLoginProfileCommand";
import {
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
} from "./commands/UpdateOpenIDConnectProviderThumbprintCommand";
import {
  UpdateRoleCommandInput,
  UpdateRoleCommandOutput,
} from "./commands/UpdateRoleCommand";
import {
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
} from "./commands/UpdateRoleDescriptionCommand";
import {
  UpdateSAMLProviderCommandInput,
  UpdateSAMLProviderCommandOutput,
} from "./commands/UpdateSAMLProviderCommand";
import {
  UpdateServerCertificateCommandInput,
  UpdateServerCertificateCommandOutput,
} from "./commands/UpdateServerCertificateCommand";
import {
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
} from "./commands/UpdateServiceSpecificCredentialCommand";
import {
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
} from "./commands/UpdateSigningCertificateCommand";
import {
  UpdateSSHPublicKeyCommandInput,
  UpdateSSHPublicKeyCommandOutput,
} from "./commands/UpdateSSHPublicKeyCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput,
} from "./commands/UpdateUserCommand";
import {
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "./commands/UploadServerCertificateCommand";
import {
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "./commands/UploadSigningCertificateCommand";
import {
  UploadSSHPublicKeyCommandInput,
  UploadSSHPublicKeyCommandOutput,
} from "./commands/UploadSSHPublicKeyCommand";
import { IAMClient } from "./IAMClient";
export interface IAM {
  addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddClientIDToOpenIDConnectProviderCommandOutput>;
  addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    cb: (
      err: any,
      data?: AddClientIDToOpenIDConnectProviderCommandOutput
    ) => void
  ): void;
  addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: AddClientIDToOpenIDConnectProviderCommandOutput
    ) => void
  ): void;
  addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddRoleToInstanceProfileCommandOutput>;
  addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    cb: (err: any, data?: AddRoleToInstanceProfileCommandOutput) => void
  ): void;
  addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRoleToInstanceProfileCommandOutput) => void
  ): void;
  addUserToGroup(
    args: AddUserToGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddUserToGroupCommandOutput>;
  addUserToGroup(
    args: AddUserToGroupCommandInput,
    cb: (err: any, data?: AddUserToGroupCommandOutput) => void
  ): void;
  addUserToGroup(
    args: AddUserToGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddUserToGroupCommandOutput) => void
  ): void;
  attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachGroupPolicyCommandOutput>;
  attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    cb: (err: any, data?: AttachGroupPolicyCommandOutput) => void
  ): void;
  attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachGroupPolicyCommandOutput) => void
  ): void;
  attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachRolePolicyCommandOutput>;
  attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    cb: (err: any, data?: AttachRolePolicyCommandOutput) => void
  ): void;
  attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachRolePolicyCommandOutput) => void
  ): void;
  attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachUserPolicyCommandOutput>;
  attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    cb: (err: any, data?: AttachUserPolicyCommandOutput) => void
  ): void;
  attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachUserPolicyCommandOutput) => void
  ): void;
  changePassword(
    args: ChangePasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangePasswordCommandOutput>;
  changePassword(
    args: ChangePasswordCommandInput,
    cb: (err: any, data?: ChangePasswordCommandOutput) => void
  ): void;
  changePassword(
    args: ChangePasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangePasswordCommandOutput) => void
  ): void;
  createAccessKey(): Promise<CreateAccessKeyCommandOutput>;
  createAccessKey(
    args: CreateAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessKeyCommandOutput>;
  createAccessKey(
    args: CreateAccessKeyCommandInput,
    cb: (err: any, data?: CreateAccessKeyCommandOutput) => void
  ): void;
  createAccessKey(
    args: CreateAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessKeyCommandOutput) => void
  ): void;
  createAccountAlias(
    args: CreateAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountAliasCommandOutput>;
  createAccountAlias(
    args: CreateAccountAliasCommandInput,
    cb: (err: any, data?: CreateAccountAliasCommandOutput) => void
  ): void;
  createAccountAlias(
    args: CreateAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountAliasCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupCommandOutput>;
  createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceProfileCommandOutput>;
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;
  createLoginProfile(): Promise<CreateLoginProfileCommandOutput>;
  createLoginProfile(
    args: CreateLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoginProfileCommandOutput>;
  createLoginProfile(
    args: CreateLoginProfileCommandInput,
    cb: (err: any, data?: CreateLoginProfileCommandOutput) => void
  ): void;
  createLoginProfile(
    args: CreateLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoginProfileCommandOutput) => void
  ): void;
  createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOpenIDConnectProviderCommandOutput>;
  createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void
  ): void;
  createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void
  ): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyCommandOutput>;
  createPolicy(
    args: CreatePolicyCommandInput,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyVersionCommandOutput>;
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;
  createRole(
    args: CreateRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoleCommandOutput>;
  createRole(
    args: CreateRoleCommandInput,
    cb: (err: any, data?: CreateRoleCommandOutput) => void
  ): void;
  createRole(
    args: CreateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoleCommandOutput) => void
  ): void;
  createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSAMLProviderCommandOutput>;
  createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    cb: (err: any, data?: CreateSAMLProviderCommandOutput) => void
  ): void;
  createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSAMLProviderCommandOutput) => void
  ): void;
  createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceLinkedRoleCommandOutput>;
  createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    cb: (err: any, data?: CreateServiceLinkedRoleCommandOutput) => void
  ): void;
  createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceLinkedRoleCommandOutput) => void
  ): void;
  createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceSpecificCredentialCommandOutput>;
  createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void
  ): void;
  createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualMFADeviceCommandOutput>;
  createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    cb: (err: any, data?: CreateVirtualMFADeviceCommandOutput) => void
  ): void;
  createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualMFADeviceCommandOutput) => void
  ): void;
  deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateMFADeviceCommandOutput>;
  deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    cb: (err: any, data?: DeactivateMFADeviceCommandOutput) => void
  ): void;
  deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateMFADeviceCommandOutput) => void
  ): void;
  deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessKeyCommandOutput>;
  deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    cb: (err: any, data?: DeleteAccessKeyCommandOutput) => void
  ): void;
  deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessKeyCommandOutput) => void
  ): void;
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAliasCommandOutput>;
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;
  deleteAccountPasswordPolicy(): Promise<DeleteAccountPasswordPolicyCommandOutput>;
  deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountPasswordPolicyCommandOutput>;
  deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    cb: (err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void
  ): void;
  deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupPolicyCommandOutput>;
  deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    cb: (err: any, data?: DeleteGroupPolicyCommandOutput) => void
  ): void;
  deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupPolicyCommandOutput) => void
  ): void;
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceProfileCommandOutput>;
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;
  deleteLoginProfile(): Promise<DeleteLoginProfileCommandOutput>;
  deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoginProfileCommandOutput>;
  deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    cb: (err: any, data?: DeleteLoginProfileCommandOutput) => void
  ): void;
  deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoginProfileCommandOutput) => void
  ): void;
  deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOpenIDConnectProviderCommandOutput>;
  deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void
  ): void;
  deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void
  ): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  deletePolicy(
    args: DeletePolicyCommandInput,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyVersionCommandOutput>;
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;
  deleteRole(
    args: DeleteRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoleCommandOutput>;
  deleteRole(
    args: DeleteRoleCommandInput,
    cb: (err: any, data?: DeleteRoleCommandOutput) => void
  ): void;
  deleteRole(
    args: DeleteRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoleCommandOutput) => void
  ): void;
  deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRolePermissionsBoundaryCommandOutput>;
  deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    cb: (err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void
  ): void;
  deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void
  ): void;
  deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRolePolicyCommandOutput>;
  deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    cb: (err: any, data?: DeleteRolePolicyCommandOutput) => void
  ): void;
  deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRolePolicyCommandOutput) => void
  ): void;
  deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSAMLProviderCommandOutput>;
  deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    cb: (err: any, data?: DeleteSAMLProviderCommandOutput) => void
  ): void;
  deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSAMLProviderCommandOutput) => void
  ): void;
  deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServerCertificateCommandOutput>;
  deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    cb: (err: any, data?: DeleteServerCertificateCommandOutput) => void
  ): void;
  deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCertificateCommandOutput) => void
  ): void;
  deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceLinkedRoleCommandOutput>;
  deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    cb: (err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void
  ): void;
  deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void
  ): void;
  deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceSpecificCredentialCommandOutput>;
  deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void
  ): void;
  deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void
  ): void;
  deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSigningCertificateCommandOutput>;
  deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    cb: (err: any, data?: DeleteSigningCertificateCommandOutput) => void
  ): void;
  deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSigningCertificateCommandOutput) => void
  ): void;
  deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSSHPublicKeyCommandOutput>;
  deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    cb: (err: any, data?: DeleteSSHPublicKeyCommandOutput) => void
  ): void;
  deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSSHPublicKeyCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPermissionsBoundaryCommandOutput>;
  deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    cb: (err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void
  ): void;
  deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void
  ): void;
  deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPolicyCommandOutput>;
  deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    cb: (err: any, data?: DeleteUserPolicyCommandOutput) => void
  ): void;
  deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPolicyCommandOutput) => void
  ): void;
  deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualMFADeviceCommandOutput>;
  deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    cb: (err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void
  ): void;
  deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void
  ): void;
  detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachGroupPolicyCommandOutput>;
  detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    cb: (err: any, data?: DetachGroupPolicyCommandOutput) => void
  ): void;
  detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachGroupPolicyCommandOutput) => void
  ): void;
  detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachRolePolicyCommandOutput>;
  detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    cb: (err: any, data?: DetachRolePolicyCommandOutput) => void
  ): void;
  detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachRolePolicyCommandOutput) => void
  ): void;
  detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachUserPolicyCommandOutput>;
  detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    cb: (err: any, data?: DetachUserPolicyCommandOutput) => void
  ): void;
  detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachUserPolicyCommandOutput) => void
  ): void;
  disableOrganizationsRootCredentialsManagement(): Promise<DisableOrganizationsRootCredentialsManagementCommandOutput>;
  disableOrganizationsRootCredentialsManagement(
    args: DisableOrganizationsRootCredentialsManagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableOrganizationsRootCredentialsManagementCommandOutput>;
  disableOrganizationsRootCredentialsManagement(
    args: DisableOrganizationsRootCredentialsManagementCommandInput,
    cb: (
      err: any,
      data?: DisableOrganizationsRootCredentialsManagementCommandOutput
    ) => void
  ): void;
  disableOrganizationsRootCredentialsManagement(
    args: DisableOrganizationsRootCredentialsManagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DisableOrganizationsRootCredentialsManagementCommandOutput
    ) => void
  ): void;
  disableOrganizationsRootSessions(): Promise<DisableOrganizationsRootSessionsCommandOutput>;
  disableOrganizationsRootSessions(
    args: DisableOrganizationsRootSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableOrganizationsRootSessionsCommandOutput>;
  disableOrganizationsRootSessions(
    args: DisableOrganizationsRootSessionsCommandInput,
    cb: (err: any, data?: DisableOrganizationsRootSessionsCommandOutput) => void
  ): void;
  disableOrganizationsRootSessions(
    args: DisableOrganizationsRootSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableOrganizationsRootSessionsCommandOutput) => void
  ): void;
  enableMFADevice(
    args: EnableMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableMFADeviceCommandOutput>;
  enableMFADevice(
    args: EnableMFADeviceCommandInput,
    cb: (err: any, data?: EnableMFADeviceCommandOutput) => void
  ): void;
  enableMFADevice(
    args: EnableMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableMFADeviceCommandOutput) => void
  ): void;
  enableOrganizationsRootCredentialsManagement(): Promise<EnableOrganizationsRootCredentialsManagementCommandOutput>;
  enableOrganizationsRootCredentialsManagement(
    args: EnableOrganizationsRootCredentialsManagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableOrganizationsRootCredentialsManagementCommandOutput>;
  enableOrganizationsRootCredentialsManagement(
    args: EnableOrganizationsRootCredentialsManagementCommandInput,
    cb: (
      err: any,
      data?: EnableOrganizationsRootCredentialsManagementCommandOutput
    ) => void
  ): void;
  enableOrganizationsRootCredentialsManagement(
    args: EnableOrganizationsRootCredentialsManagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: EnableOrganizationsRootCredentialsManagementCommandOutput
    ) => void
  ): void;
  enableOrganizationsRootSessions(): Promise<EnableOrganizationsRootSessionsCommandOutput>;
  enableOrganizationsRootSessions(
    args: EnableOrganizationsRootSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableOrganizationsRootSessionsCommandOutput>;
  enableOrganizationsRootSessions(
    args: EnableOrganizationsRootSessionsCommandInput,
    cb: (err: any, data?: EnableOrganizationsRootSessionsCommandOutput) => void
  ): void;
  enableOrganizationsRootSessions(
    args: EnableOrganizationsRootSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableOrganizationsRootSessionsCommandOutput) => void
  ): void;
  generateCredentialReport(): Promise<GenerateCredentialReportCommandOutput>;
  generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateCredentialReportCommandOutput>;
  generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    cb: (err: any, data?: GenerateCredentialReportCommandOutput) => void
  ): void;
  generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateCredentialReportCommandOutput) => void
  ): void;
  generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateOrganizationsAccessReportCommandOutput>;
  generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    cb: (
      err: any,
      data?: GenerateOrganizationsAccessReportCommandOutput
    ) => void
  ): void;
  generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GenerateOrganizationsAccessReportCommandOutput
    ) => void
  ): void;
  generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateServiceLastAccessedDetailsCommandOutput>;
  generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    cb: (
      err: any,
      data?: GenerateServiceLastAccessedDetailsCommandOutput
    ) => void
  ): void;
  generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GenerateServiceLastAccessedDetailsCommandOutput
    ) => void
  ): void;
  getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessKeyLastUsedCommandOutput>;
  getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    cb: (err: any, data?: GetAccessKeyLastUsedCommandOutput) => void
  ): void;
  getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessKeyLastUsedCommandOutput) => void
  ): void;
  getAccountAuthorizationDetails(): Promise<GetAccountAuthorizationDetailsCommandOutput>;
  getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountAuthorizationDetailsCommandOutput>;
  getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    cb: (err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void
  ): void;
  getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void
  ): void;
  getAccountPasswordPolicy(): Promise<GetAccountPasswordPolicyCommandOutput>;
  getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountPasswordPolicyCommandOutput>;
  getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    cb: (err: any, data?: GetAccountPasswordPolicyCommandOutput) => void
  ): void;
  getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountPasswordPolicyCommandOutput) => void
  ): void;
  getAccountSummary(): Promise<GetAccountSummaryCommandOutput>;
  getAccountSummary(
    args: GetAccountSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSummaryCommandOutput>;
  getAccountSummary(
    args: GetAccountSummaryCommandInput,
    cb: (err: any, data?: GetAccountSummaryCommandOutput) => void
  ): void;
  getAccountSummary(
    args: GetAccountSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSummaryCommandOutput) => void
  ): void;
  getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContextKeysForCustomPolicyCommandOutput>;
  getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    cb: (err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void
  ): void;
  getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void
  ): void;
  getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContextKeysForPrincipalPolicyCommandOutput>;
  getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    cb: (err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void
  ): void;
  getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void
  ): void;
  getCredentialReport(): Promise<GetCredentialReportCommandOutput>;
  getCredentialReport(
    args: GetCredentialReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCredentialReportCommandOutput>;
  getCredentialReport(
    args: GetCredentialReportCommandInput,
    cb: (err: any, data?: GetCredentialReportCommandOutput) => void
  ): void;
  getCredentialReport(
    args: GetCredentialReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCredentialReportCommandOutput) => void
  ): void;
  getGroup(
    args: GetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupCommandOutput>;
  getGroup(
    args: GetGroupCommandInput,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupPolicyCommandOutput>;
  getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    cb: (err: any, data?: GetGroupPolicyCommandOutput) => void
  ): void;
  getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupPolicyCommandOutput) => void
  ): void;
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceProfileCommandOutput>;
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;
  getLoginProfile(): Promise<GetLoginProfileCommandOutput>;
  getLoginProfile(
    args: GetLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoginProfileCommandOutput>;
  getLoginProfile(
    args: GetLoginProfileCommandInput,
    cb: (err: any, data?: GetLoginProfileCommandOutput) => void
  ): void;
  getLoginProfile(
    args: GetLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoginProfileCommandOutput) => void
  ): void;
  getMFADevice(
    args: GetMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMFADeviceCommandOutput>;
  getMFADevice(
    args: GetMFADeviceCommandInput,
    cb: (err: any, data?: GetMFADeviceCommandOutput) => void
  ): void;
  getMFADevice(
    args: GetMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMFADeviceCommandOutput) => void
  ): void;
  getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpenIDConnectProviderCommandOutput>;
  getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: GetOpenIDConnectProviderCommandOutput) => void
  ): void;
  getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpenIDConnectProviderCommandOutput) => void
  ): void;
  getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationsAccessReportCommandOutput>;
  getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    cb: (err: any, data?: GetOrganizationsAccessReportCommandOutput) => void
  ): void;
  getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationsAccessReportCommandOutput) => void
  ): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyCommandOutput>;
  getPolicy(
    args: GetPolicyCommandInput,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyVersionCommandOutput>;
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;
  getRole(
    args: GetRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoleCommandOutput>;
  getRole(
    args: GetRoleCommandInput,
    cb: (err: any, data?: GetRoleCommandOutput) => void
  ): void;
  getRole(
    args: GetRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoleCommandOutput) => void
  ): void;
  getRolePolicy(
    args: GetRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRolePolicyCommandOutput>;
  getRolePolicy(
    args: GetRolePolicyCommandInput,
    cb: (err: any, data?: GetRolePolicyCommandOutput) => void
  ): void;
  getRolePolicy(
    args: GetRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRolePolicyCommandOutput) => void
  ): void;
  getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSAMLProviderCommandOutput>;
  getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    cb: (err: any, data?: GetSAMLProviderCommandOutput) => void
  ): void;
  getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSAMLProviderCommandOutput) => void
  ): void;
  getServerCertificate(
    args: GetServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServerCertificateCommandOutput>;
  getServerCertificate(
    args: GetServerCertificateCommandInput,
    cb: (err: any, data?: GetServerCertificateCommandOutput) => void
  ): void;
  getServerCertificate(
    args: GetServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServerCertificateCommandOutput) => void
  ): void;
  getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLastAccessedDetailsCommandOutput>;
  getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    cb: (err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void
  ): void;
  getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void
  ): void;
  getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput>;
  getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    cb: (
      err: any,
      data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput
    ) => void
  ): void;
  getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput
    ) => void
  ): void;
  getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput>;
  getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    cb: (
      err: any,
      data?: GetServiceLinkedRoleDeletionStatusCommandOutput
    ) => void
  ): void;
  getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetServiceLinkedRoleDeletionStatusCommandOutput
    ) => void
  ): void;
  getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSSHPublicKeyCommandOutput>;
  getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    cb: (err: any, data?: GetSSHPublicKeyCommandOutput) => void
  ): void;
  getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSSHPublicKeyCommandOutput) => void
  ): void;
  getUser(): Promise<GetUserCommandOutput>;
  getUser(
    args: GetUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserCommandOutput>;
  getUser(
    args: GetUserCommandInput,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  getUserPolicy(
    args: GetUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserPolicyCommandOutput>;
  getUserPolicy(
    args: GetUserPolicyCommandInput,
    cb: (err: any, data?: GetUserPolicyCommandOutput) => void
  ): void;
  getUserPolicy(
    args: GetUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserPolicyCommandOutput) => void
  ): void;
  listAccessKeys(): Promise<ListAccessKeysCommandOutput>;
  listAccessKeys(
    args: ListAccessKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessKeysCommandOutput>;
  listAccessKeys(
    args: ListAccessKeysCommandInput,
    cb: (err: any, data?: ListAccessKeysCommandOutput) => void
  ): void;
  listAccessKeys(
    args: ListAccessKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessKeysCommandOutput) => void
  ): void;
  listAccountAliases(): Promise<ListAccountAliasesCommandOutput>;
  listAccountAliases(
    args: ListAccountAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAliasesCommandOutput>;
  listAccountAliases(
    args: ListAccountAliasesCommandInput,
    cb: (err: any, data?: ListAccountAliasesCommandOutput) => void
  ): void;
  listAccountAliases(
    args: ListAccountAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAliasesCommandOutput) => void
  ): void;
  listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedGroupPoliciesCommandOutput>;
  listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    cb: (err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void
  ): void;
  listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void
  ): void;
  listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedRolePoliciesCommandOutput>;
  listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    cb: (err: any, data?: ListAttachedRolePoliciesCommandOutput) => void
  ): void;
  listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedRolePoliciesCommandOutput) => void
  ): void;
  listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedUserPoliciesCommandOutput>;
  listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    cb: (err: any, data?: ListAttachedUserPoliciesCommandOutput) => void
  ): void;
  listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedUserPoliciesCommandOutput) => void
  ): void;
  listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesForPolicyCommandOutput>;
  listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    cb: (err: any, data?: ListEntitiesForPolicyCommandOutput) => void
  ): void;
  listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesForPolicyCommandOutput) => void
  ): void;
  listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupPoliciesCommandOutput>;
  listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    cb: (err: any, data?: ListGroupPoliciesCommandOutput) => void
  ): void;
  listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupPoliciesCommandOutput) => void
  ): void;
  listGroups(): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsForUserCommandOutput>;
  listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    cb: (err: any, data?: ListGroupsForUserCommandOutput) => void
  ): void;
  listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsForUserCommandOutput) => void
  ): void;
  listInstanceProfiles(): Promise<ListInstanceProfilesCommandOutput>;
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfilesCommandOutput>;
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;
  listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfilesForRoleCommandOutput>;
  listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    cb: (err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void
  ): void;
  listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void
  ): void;
  listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfileTagsCommandOutput>;
  listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    cb: (err: any, data?: ListInstanceProfileTagsCommandOutput) => void
  ): void;
  listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfileTagsCommandOutput) => void
  ): void;
  listMFADevices(): Promise<ListMFADevicesCommandOutput>;
  listMFADevices(
    args: ListMFADevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMFADevicesCommandOutput>;
  listMFADevices(
    args: ListMFADevicesCommandInput,
    cb: (err: any, data?: ListMFADevicesCommandOutput) => void
  ): void;
  listMFADevices(
    args: ListMFADevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMFADevicesCommandOutput) => void
  ): void;
  listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMFADeviceTagsCommandOutput>;
  listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    cb: (err: any, data?: ListMFADeviceTagsCommandOutput) => void
  ): void;
  listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMFADeviceTagsCommandOutput) => void
  ): void;
  listOpenIDConnectProviders(): Promise<ListOpenIDConnectProvidersCommandOutput>;
  listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpenIDConnectProvidersCommandOutput>;
  listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    cb: (err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void
  ): void;
  listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void
  ): void;
  listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpenIDConnectProviderTagsCommandOutput>;
  listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    cb: (err: any, data?: ListOpenIDConnectProviderTagsCommandOutput) => void
  ): void;
  listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpenIDConnectProviderTagsCommandOutput) => void
  ): void;
  listOrganizationsFeatures(): Promise<ListOrganizationsFeaturesCommandOutput>;
  listOrganizationsFeatures(
    args: ListOrganizationsFeaturesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationsFeaturesCommandOutput>;
  listOrganizationsFeatures(
    args: ListOrganizationsFeaturesCommandInput,
    cb: (err: any, data?: ListOrganizationsFeaturesCommandOutput) => void
  ): void;
  listOrganizationsFeatures(
    args: ListOrganizationsFeaturesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationsFeaturesCommandOutput) => void
  ): void;
  listPolicies(): Promise<ListPoliciesCommandOutput>;
  listPolicies(
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesCommandOutput>;
  listPolicies(
    args: ListPoliciesCommandInput,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesGrantingServiceAccessCommandOutput>;
  listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    cb: (
      err: any,
      data?: ListPoliciesGrantingServiceAccessCommandOutput
    ) => void
  ): void;
  listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListPoliciesGrantingServiceAccessCommandOutput
    ) => void
  ): void;
  listPolicyTags(
    args: ListPolicyTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyTagsCommandOutput>;
  listPolicyTags(
    args: ListPolicyTagsCommandInput,
    cb: (err: any, data?: ListPolicyTagsCommandOutput) => void
  ): void;
  listPolicyTags(
    args: ListPolicyTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyTagsCommandOutput) => void
  ): void;
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyVersionsCommandOutput>;
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;
  listRolePolicies(
    args: ListRolePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRolePoliciesCommandOutput>;
  listRolePolicies(
    args: ListRolePoliciesCommandInput,
    cb: (err: any, data?: ListRolePoliciesCommandOutput) => void
  ): void;
  listRolePolicies(
    args: ListRolePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRolePoliciesCommandOutput) => void
  ): void;
  listRoles(): Promise<ListRolesCommandOutput>;
  listRoles(
    args: ListRolesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRolesCommandOutput>;
  listRoles(
    args: ListRolesCommandInput,
    cb: (err: any, data?: ListRolesCommandOutput) => void
  ): void;
  listRoles(
    args: ListRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRolesCommandOutput) => void
  ): void;
  listRoleTags(
    args: ListRoleTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoleTagsCommandOutput>;
  listRoleTags(
    args: ListRoleTagsCommandInput,
    cb: (err: any, data?: ListRoleTagsCommandOutput) => void
  ): void;
  listRoleTags(
    args: ListRoleTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoleTagsCommandOutput) => void
  ): void;
  listSAMLProviders(): Promise<ListSAMLProvidersCommandOutput>;
  listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSAMLProvidersCommandOutput>;
  listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    cb: (err: any, data?: ListSAMLProvidersCommandOutput) => void
  ): void;
  listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSAMLProvidersCommandOutput) => void
  ): void;
  listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSAMLProviderTagsCommandOutput>;
  listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    cb: (err: any, data?: ListSAMLProviderTagsCommandOutput) => void
  ): void;
  listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSAMLProviderTagsCommandOutput) => void
  ): void;
  listServerCertificates(): Promise<ListServerCertificatesCommandOutput>;
  listServerCertificates(
    args: ListServerCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServerCertificatesCommandOutput>;
  listServerCertificates(
    args: ListServerCertificatesCommandInput,
    cb: (err: any, data?: ListServerCertificatesCommandOutput) => void
  ): void;
  listServerCertificates(
    args: ListServerCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServerCertificatesCommandOutput) => void
  ): void;
  listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServerCertificateTagsCommandOutput>;
  listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    cb: (err: any, data?: ListServerCertificateTagsCommandOutput) => void
  ): void;
  listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServerCertificateTagsCommandOutput) => void
  ): void;
  listServiceSpecificCredentials(): Promise<ListServiceSpecificCredentialsCommandOutput>;
  listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceSpecificCredentialsCommandOutput>;
  listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    cb: (err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void
  ): void;
  listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void
  ): void;
  listSigningCertificates(): Promise<ListSigningCertificatesCommandOutput>;
  listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningCertificatesCommandOutput>;
  listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    cb: (err: any, data?: ListSigningCertificatesCommandOutput) => void
  ): void;
  listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningCertificatesCommandOutput) => void
  ): void;
  listSSHPublicKeys(): Promise<ListSSHPublicKeysCommandOutput>;
  listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSSHPublicKeysCommandOutput>;
  listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    cb: (err: any, data?: ListSSHPublicKeysCommandOutput) => void
  ): void;
  listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSSHPublicKeysCommandOutput) => void
  ): void;
  listUserPolicies(
    args: ListUserPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserPoliciesCommandOutput>;
  listUserPolicies(
    args: ListUserPoliciesCommandInput,
    cb: (err: any, data?: ListUserPoliciesCommandOutput) => void
  ): void;
  listUserPolicies(
    args: ListUserPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserPoliciesCommandOutput) => void
  ): void;
  listUsers(): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUserTags(
    args: ListUserTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserTagsCommandOutput>;
  listUserTags(
    args: ListUserTagsCommandInput,
    cb: (err: any, data?: ListUserTagsCommandOutput) => void
  ): void;
  listUserTags(
    args: ListUserTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserTagsCommandOutput) => void
  ): void;
  listVirtualMFADevices(): Promise<ListVirtualMFADevicesCommandOutput>;
  listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualMFADevicesCommandOutput>;
  listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    cb: (err: any, data?: ListVirtualMFADevicesCommandOutput) => void
  ): void;
  listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualMFADevicesCommandOutput) => void
  ): void;
  putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGroupPolicyCommandOutput>;
  putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    cb: (err: any, data?: PutGroupPolicyCommandOutput) => void
  ): void;
  putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGroupPolicyCommandOutput) => void
  ): void;
  putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRolePermissionsBoundaryCommandOutput>;
  putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    cb: (err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void
  ): void;
  putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void
  ): void;
  putRolePolicy(
    args: PutRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRolePolicyCommandOutput>;
  putRolePolicy(
    args: PutRolePolicyCommandInput,
    cb: (err: any, data?: PutRolePolicyCommandOutput) => void
  ): void;
  putRolePolicy(
    args: PutRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRolePolicyCommandOutput) => void
  ): void;
  putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutUserPermissionsBoundaryCommandOutput>;
  putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    cb: (err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void
  ): void;
  putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void
  ): void;
  putUserPolicy(
    args: PutUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutUserPolicyCommandOutput>;
  putUserPolicy(
    args: PutUserPolicyCommandInput,
    cb: (err: any, data?: PutUserPolicyCommandOutput) => void
  ): void;
  putUserPolicy(
    args: PutUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUserPolicyCommandOutput) => void
  ): void;
  removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput>;
  removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    cb: (
      err: any,
      data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput
    ) => void
  ): void;
  removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput
    ) => void
  ): void;
  removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRoleFromInstanceProfileCommandOutput>;
  removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    cb: (err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void
  ): void;
  removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void
  ): void;
  removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveUserFromGroupCommandOutput>;
  removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    cb: (err: any, data?: RemoveUserFromGroupCommandOutput) => void
  ): void;
  removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveUserFromGroupCommandOutput) => void
  ): void;
  resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetServiceSpecificCredentialCommandOutput>;
  resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void
  ): void;
  resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void
  ): void;
  resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResyncMFADeviceCommandOutput>;
  resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    cb: (err: any, data?: ResyncMFADeviceCommandOutput) => void
  ): void;
  resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResyncMFADeviceCommandOutput) => void
  ): void;
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultPolicyVersionCommandOutput>;
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;
  setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSecurityTokenServicePreferencesCommandOutput>;
  setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    cb: (
      err: any,
      data?: SetSecurityTokenServicePreferencesCommandOutput
    ) => void
  ): void;
  setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: SetSecurityTokenServicePreferencesCommandOutput
    ) => void
  ): void;
  simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimulateCustomPolicyCommandOutput>;
  simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    cb: (err: any, data?: SimulateCustomPolicyCommandOutput) => void
  ): void;
  simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimulateCustomPolicyCommandOutput) => void
  ): void;
  simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimulatePrincipalPolicyCommandOutput>;
  simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    cb: (err: any, data?: SimulatePrincipalPolicyCommandOutput) => void
  ): void;
  simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimulatePrincipalPolicyCommandOutput) => void
  ): void;
  tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagInstanceProfileCommandOutput>;
  tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    cb: (err: any, data?: TagInstanceProfileCommandOutput) => void
  ): void;
  tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagInstanceProfileCommandOutput) => void
  ): void;
  tagMFADevice(
    args: TagMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagMFADeviceCommandOutput>;
  tagMFADevice(
    args: TagMFADeviceCommandInput,
    cb: (err: any, data?: TagMFADeviceCommandOutput) => void
  ): void;
  tagMFADevice(
    args: TagMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagMFADeviceCommandOutput) => void
  ): void;
  tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagOpenIDConnectProviderCommandOutput>;
  tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: TagOpenIDConnectProviderCommandOutput) => void
  ): void;
  tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagOpenIDConnectProviderCommandOutput) => void
  ): void;
  tagPolicy(
    args: TagPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagPolicyCommandOutput>;
  tagPolicy(
    args: TagPolicyCommandInput,
    cb: (err: any, data?: TagPolicyCommandOutput) => void
  ): void;
  tagPolicy(
    args: TagPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagPolicyCommandOutput) => void
  ): void;
  tagRole(
    args: TagRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagRoleCommandOutput>;
  tagRole(
    args: TagRoleCommandInput,
    cb: (err: any, data?: TagRoleCommandOutput) => void
  ): void;
  tagRole(
    args: TagRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagRoleCommandOutput) => void
  ): void;
  tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagSAMLProviderCommandOutput>;
  tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    cb: (err: any, data?: TagSAMLProviderCommandOutput) => void
  ): void;
  tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagSAMLProviderCommandOutput) => void
  ): void;
  tagServerCertificate(
    args: TagServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagServerCertificateCommandOutput>;
  tagServerCertificate(
    args: TagServerCertificateCommandInput,
    cb: (err: any, data?: TagServerCertificateCommandOutput) => void
  ): void;
  tagServerCertificate(
    args: TagServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagServerCertificateCommandOutput) => void
  ): void;
  tagUser(
    args: TagUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagUserCommandOutput>;
  tagUser(
    args: TagUserCommandInput,
    cb: (err: any, data?: TagUserCommandOutput) => void
  ): void;
  tagUser(
    args: TagUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagUserCommandOutput) => void
  ): void;
  untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagInstanceProfileCommandOutput>;
  untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    cb: (err: any, data?: UntagInstanceProfileCommandOutput) => void
  ): void;
  untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagInstanceProfileCommandOutput) => void
  ): void;
  untagMFADevice(
    args: UntagMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagMFADeviceCommandOutput>;
  untagMFADevice(
    args: UntagMFADeviceCommandInput,
    cb: (err: any, data?: UntagMFADeviceCommandOutput) => void
  ): void;
  untagMFADevice(
    args: UntagMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagMFADeviceCommandOutput) => void
  ): void;
  untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagOpenIDConnectProviderCommandOutput>;
  untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: UntagOpenIDConnectProviderCommandOutput) => void
  ): void;
  untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagOpenIDConnectProviderCommandOutput) => void
  ): void;
  untagPolicy(
    args: UntagPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagPolicyCommandOutput>;
  untagPolicy(
    args: UntagPolicyCommandInput,
    cb: (err: any, data?: UntagPolicyCommandOutput) => void
  ): void;
  untagPolicy(
    args: UntagPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagPolicyCommandOutput) => void
  ): void;
  untagRole(
    args: UntagRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagRoleCommandOutput>;
  untagRole(
    args: UntagRoleCommandInput,
    cb: (err: any, data?: UntagRoleCommandOutput) => void
  ): void;
  untagRole(
    args: UntagRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagRoleCommandOutput) => void
  ): void;
  untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagSAMLProviderCommandOutput>;
  untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    cb: (err: any, data?: UntagSAMLProviderCommandOutput) => void
  ): void;
  untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagSAMLProviderCommandOutput) => void
  ): void;
  untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagServerCertificateCommandOutput>;
  untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    cb: (err: any, data?: UntagServerCertificateCommandOutput) => void
  ): void;
  untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagServerCertificateCommandOutput) => void
  ): void;
  untagUser(
    args: UntagUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagUserCommandOutput>;
  untagUser(
    args: UntagUserCommandInput,
    cb: (err: any, data?: UntagUserCommandOutput) => void
  ): void;
  untagUser(
    args: UntagUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagUserCommandOutput) => void
  ): void;
  updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessKeyCommandOutput>;
  updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    cb: (err: any, data?: UpdateAccessKeyCommandOutput) => void
  ): void;
  updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessKeyCommandOutput) => void
  ): void;
  updateAccountPasswordPolicy(): Promise<UpdateAccountPasswordPolicyCommandOutput>;
  updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountPasswordPolicyCommandOutput>;
  updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    cb: (err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void
  ): void;
  updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void
  ): void;
  updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssumeRolePolicyCommandOutput>;
  updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    cb: (err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void
  ): void;
  updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoginProfileCommandOutput>;
  updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    cb: (err: any, data?: UpdateLoginProfileCommandOutput) => void
  ): void;
  updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoginProfileCommandOutput) => void
  ): void;
  updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput>;
  updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    cb: (
      err: any,
      data?: UpdateOpenIDConnectProviderThumbprintCommandOutput
    ) => void
  ): void;
  updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: UpdateOpenIDConnectProviderThumbprintCommandOutput
    ) => void
  ): void;
  updateRole(
    args: UpdateRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoleCommandOutput>;
  updateRole(
    args: UpdateRoleCommandInput,
    cb: (err: any, data?: UpdateRoleCommandOutput) => void
  ): void;
  updateRole(
    args: UpdateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleCommandOutput) => void
  ): void;
  updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoleDescriptionCommandOutput>;
  updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    cb: (err: any, data?: UpdateRoleDescriptionCommandOutput) => void
  ): void;
  updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleDescriptionCommandOutput) => void
  ): void;
  updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSAMLProviderCommandOutput>;
  updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    cb: (err: any, data?: UpdateSAMLProviderCommandOutput) => void
  ): void;
  updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSAMLProviderCommandOutput) => void
  ): void;
  updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerCertificateCommandOutput>;
  updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    cb: (err: any, data?: UpdateServerCertificateCommandOutput) => void
  ): void;
  updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerCertificateCommandOutput) => void
  ): void;
  updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSpecificCredentialCommandOutput>;
  updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void
  ): void;
  updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void
  ): void;
  updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSigningCertificateCommandOutput>;
  updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    cb: (err: any, data?: UpdateSigningCertificateCommandOutput) => void
  ): void;
  updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSigningCertificateCommandOutput) => void
  ): void;
  updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSSHPublicKeyCommandOutput>;
  updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    cb: (err: any, data?: UpdateSSHPublicKeyCommandOutput) => void
  ): void;
  updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSSHPublicKeyCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadServerCertificateCommandOutput>;
  uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    cb: (err: any, data?: UploadServerCertificateCommandOutput) => void
  ): void;
  uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadServerCertificateCommandOutput) => void
  ): void;
  uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadSigningCertificateCommandOutput>;
  uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    cb: (err: any, data?: UploadSigningCertificateCommandOutput) => void
  ): void;
  uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadSigningCertificateCommandOutput) => void
  ): void;
  uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadSSHPublicKeyCommandOutput>;
  uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    cb: (err: any, data?: UploadSSHPublicKeyCommandOutput) => void
  ): void;
  uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadSSHPublicKeyCommandOutput) => void
  ): void;
}
export declare class IAM extends IAMClient implements IAM {}
