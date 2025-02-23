import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import {
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
} from "../commands/AddClientIDToOpenIDConnectProviderCommand";
import {
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
} from "../commands/AddRoleToInstanceProfileCommand";
import {
  AddUserToGroupCommandInput,
  AddUserToGroupCommandOutput,
} from "../commands/AddUserToGroupCommand";
import {
  AttachGroupPolicyCommandInput,
  AttachGroupPolicyCommandOutput,
} from "../commands/AttachGroupPolicyCommand";
import {
  AttachRolePolicyCommandInput,
  AttachRolePolicyCommandOutput,
} from "../commands/AttachRolePolicyCommand";
import {
  AttachUserPolicyCommandInput,
  AttachUserPolicyCommandOutput,
} from "../commands/AttachUserPolicyCommand";
import {
  ChangePasswordCommandInput,
  ChangePasswordCommandOutput,
} from "../commands/ChangePasswordCommand";
import {
  CreateAccessKeyCommandInput,
  CreateAccessKeyCommandOutput,
} from "../commands/CreateAccessKeyCommand";
import {
  CreateAccountAliasCommandInput,
  CreateAccountAliasCommandOutput,
} from "../commands/CreateAccountAliasCommand";
import {
  CreateGroupCommandInput,
  CreateGroupCommandOutput,
} from "../commands/CreateGroupCommand";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "../commands/CreateInstanceProfileCommand";
import {
  CreateLoginProfileCommandInput,
  CreateLoginProfileCommandOutput,
} from "../commands/CreateLoginProfileCommand";
import {
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
} from "../commands/CreateOpenIDConnectProviderCommand";
import {
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
} from "../commands/CreatePolicyCommand";
import {
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "../commands/CreatePolicyVersionCommand";
import {
  CreateRoleCommandInput,
  CreateRoleCommandOutput,
} from "../commands/CreateRoleCommand";
import {
  CreateSAMLProviderCommandInput,
  CreateSAMLProviderCommandOutput,
} from "../commands/CreateSAMLProviderCommand";
import {
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
} from "../commands/CreateServiceLinkedRoleCommand";
import {
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
} from "../commands/CreateServiceSpecificCredentialCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput,
} from "../commands/CreateUserCommand";
import {
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
} from "../commands/CreateVirtualMFADeviceCommand";
import {
  DeactivateMFADeviceCommandInput,
  DeactivateMFADeviceCommandOutput,
} from "../commands/DeactivateMFADeviceCommand";
import {
  DeleteAccessKeyCommandInput,
  DeleteAccessKeyCommandOutput,
} from "../commands/DeleteAccessKeyCommand";
import {
  DeleteAccountAliasCommandInput,
  DeleteAccountAliasCommandOutput,
} from "../commands/DeleteAccountAliasCommand";
import {
  DeleteAccountPasswordPolicyCommandInput,
  DeleteAccountPasswordPolicyCommandOutput,
} from "../commands/DeleteAccountPasswordPolicyCommand";
import {
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput,
} from "../commands/DeleteGroupCommand";
import {
  DeleteGroupPolicyCommandInput,
  DeleteGroupPolicyCommandOutput,
} from "../commands/DeleteGroupPolicyCommand";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "../commands/DeleteInstanceProfileCommand";
import {
  DeleteLoginProfileCommandInput,
  DeleteLoginProfileCommandOutput,
} from "../commands/DeleteLoginProfileCommand";
import {
  DeleteOpenIDConnectProviderCommandInput,
  DeleteOpenIDConnectProviderCommandOutput,
} from "../commands/DeleteOpenIDConnectProviderCommand";
import {
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "../commands/DeletePolicyCommand";
import {
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "../commands/DeletePolicyVersionCommand";
import {
  DeleteRoleCommandInput,
  DeleteRoleCommandOutput,
} from "../commands/DeleteRoleCommand";
import {
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
} from "../commands/DeleteRolePermissionsBoundaryCommand";
import {
  DeleteRolePolicyCommandInput,
  DeleteRolePolicyCommandOutput,
} from "../commands/DeleteRolePolicyCommand";
import {
  DeleteSAMLProviderCommandInput,
  DeleteSAMLProviderCommandOutput,
} from "../commands/DeleteSAMLProviderCommand";
import {
  DeleteServerCertificateCommandInput,
  DeleteServerCertificateCommandOutput,
} from "../commands/DeleteServerCertificateCommand";
import {
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
} from "../commands/DeleteServiceLinkedRoleCommand";
import {
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
} from "../commands/DeleteServiceSpecificCredentialCommand";
import {
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
} from "../commands/DeleteSigningCertificateCommand";
import {
  DeleteSSHPublicKeyCommandInput,
  DeleteSSHPublicKeyCommandOutput,
} from "../commands/DeleteSSHPublicKeyCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput,
} from "../commands/DeleteUserCommand";
import {
  DeleteUserPermissionsBoundaryCommandInput,
  DeleteUserPermissionsBoundaryCommandOutput,
} from "../commands/DeleteUserPermissionsBoundaryCommand";
import {
  DeleteUserPolicyCommandInput,
  DeleteUserPolicyCommandOutput,
} from "../commands/DeleteUserPolicyCommand";
import {
  DeleteVirtualMFADeviceCommandInput,
  DeleteVirtualMFADeviceCommandOutput,
} from "../commands/DeleteVirtualMFADeviceCommand";
import {
  DetachGroupPolicyCommandInput,
  DetachGroupPolicyCommandOutput,
} from "../commands/DetachGroupPolicyCommand";
import {
  DetachRolePolicyCommandInput,
  DetachRolePolicyCommandOutput,
} from "../commands/DetachRolePolicyCommand";
import {
  DetachUserPolicyCommandInput,
  DetachUserPolicyCommandOutput,
} from "../commands/DetachUserPolicyCommand";
import {
  DisableOrganizationsRootCredentialsManagementCommandInput,
  DisableOrganizationsRootCredentialsManagementCommandOutput,
} from "../commands/DisableOrganizationsRootCredentialsManagementCommand";
import {
  DisableOrganizationsRootSessionsCommandInput,
  DisableOrganizationsRootSessionsCommandOutput,
} from "../commands/DisableOrganizationsRootSessionsCommand";
import {
  EnableMFADeviceCommandInput,
  EnableMFADeviceCommandOutput,
} from "../commands/EnableMFADeviceCommand";
import {
  EnableOrganizationsRootCredentialsManagementCommandInput,
  EnableOrganizationsRootCredentialsManagementCommandOutput,
} from "../commands/EnableOrganizationsRootCredentialsManagementCommand";
import {
  EnableOrganizationsRootSessionsCommandInput,
  EnableOrganizationsRootSessionsCommandOutput,
} from "../commands/EnableOrganizationsRootSessionsCommand";
import {
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
} from "../commands/GenerateCredentialReportCommand";
import {
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
} from "../commands/GenerateOrganizationsAccessReportCommand";
import {
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
} from "../commands/GenerateServiceLastAccessedDetailsCommand";
import {
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
} from "../commands/GetAccessKeyLastUsedCommand";
import {
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "../commands/GetAccountAuthorizationDetailsCommand";
import {
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
} from "../commands/GetAccountPasswordPolicyCommand";
import {
  GetAccountSummaryCommandInput,
  GetAccountSummaryCommandOutput,
} from "../commands/GetAccountSummaryCommand";
import {
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
} from "../commands/GetContextKeysForCustomPolicyCommand";
import {
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
} from "../commands/GetContextKeysForPrincipalPolicyCommand";
import {
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
} from "../commands/GetCredentialReportCommand";
import {
  GetGroupCommandInput,
  GetGroupCommandOutput,
} from "../commands/GetGroupCommand";
import {
  GetGroupPolicyCommandInput,
  GetGroupPolicyCommandOutput,
} from "../commands/GetGroupPolicyCommand";
import {
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
} from "../commands/GetInstanceProfileCommand";
import {
  GetLoginProfileCommandInput,
  GetLoginProfileCommandOutput,
} from "../commands/GetLoginProfileCommand";
import {
  GetMFADeviceCommandInput,
  GetMFADeviceCommandOutput,
} from "../commands/GetMFADeviceCommand";
import {
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
} from "../commands/GetOpenIDConnectProviderCommand";
import {
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
} from "../commands/GetOrganizationsAccessReportCommand";
import {
  GetPolicyCommandInput,
  GetPolicyCommandOutput,
} from "../commands/GetPolicyCommand";
import {
  GetPolicyVersionCommandInput,
  GetPolicyVersionCommandOutput,
} from "../commands/GetPolicyVersionCommand";
import {
  GetRoleCommandInput,
  GetRoleCommandOutput,
} from "../commands/GetRoleCommand";
import {
  GetRolePolicyCommandInput,
  GetRolePolicyCommandOutput,
} from "../commands/GetRolePolicyCommand";
import {
  GetSAMLProviderCommandInput,
  GetSAMLProviderCommandOutput,
} from "../commands/GetSAMLProviderCommand";
import {
  GetServerCertificateCommandInput,
  GetServerCertificateCommandOutput,
} from "../commands/GetServerCertificateCommand";
import {
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
} from "../commands/GetServiceLastAccessedDetailsCommand";
import {
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
} from "../commands/GetServiceLastAccessedDetailsWithEntitiesCommand";
import {
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
} from "../commands/GetServiceLinkedRoleDeletionStatusCommand";
import {
  GetSSHPublicKeyCommandInput,
  GetSSHPublicKeyCommandOutput,
} from "../commands/GetSSHPublicKeyCommand";
import {
  GetUserCommandInput,
  GetUserCommandOutput,
} from "../commands/GetUserCommand";
import {
  GetUserPolicyCommandInput,
  GetUserPolicyCommandOutput,
} from "../commands/GetUserPolicyCommand";
import {
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
} from "../commands/ListAccessKeysCommand";
import {
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
} from "../commands/ListAccountAliasesCommand";
import {
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "../commands/ListAttachedGroupPoliciesCommand";
import {
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "../commands/ListAttachedRolePoliciesCommand";
import {
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "../commands/ListAttachedUserPoliciesCommand";
import {
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "../commands/ListEntitiesForPolicyCommand";
import {
  ListGroupPoliciesCommandInput,
  ListGroupPoliciesCommandOutput,
} from "../commands/ListGroupPoliciesCommand";
import {
  ListGroupsCommandInput,
  ListGroupsCommandOutput,
} from "../commands/ListGroupsCommand";
import {
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
} from "../commands/ListGroupsForUserCommand";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "../commands/ListInstanceProfilesCommand";
import {
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "../commands/ListInstanceProfilesForRoleCommand";
import {
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "../commands/ListInstanceProfileTagsCommand";
import {
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "../commands/ListMFADevicesCommand";
import {
  ListMFADeviceTagsCommandInput,
  ListMFADeviceTagsCommandOutput,
} from "../commands/ListMFADeviceTagsCommand";
import {
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "../commands/ListOpenIDConnectProvidersCommand";
import {
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "../commands/ListOpenIDConnectProviderTagsCommand";
import {
  ListOrganizationsFeaturesCommandInput,
  ListOrganizationsFeaturesCommandOutput,
} from "../commands/ListOrganizationsFeaturesCommand";
import {
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import {
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "../commands/ListPoliciesGrantingServiceAccessCommand";
import {
  ListPolicyTagsCommandInput,
  ListPolicyTagsCommandOutput,
} from "../commands/ListPolicyTagsCommand";
import {
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "../commands/ListPolicyVersionsCommand";
import {
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput,
} from "../commands/ListRolePoliciesCommand";
import {
  ListRolesCommandInput,
  ListRolesCommandOutput,
} from "../commands/ListRolesCommand";
import {
  ListRoleTagsCommandInput,
  ListRoleTagsCommandOutput,
} from "../commands/ListRoleTagsCommand";
import {
  ListSAMLProvidersCommandInput,
  ListSAMLProvidersCommandOutput,
} from "../commands/ListSAMLProvidersCommand";
import {
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "../commands/ListSAMLProviderTagsCommand";
import {
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "../commands/ListServerCertificatesCommand";
import {
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
} from "../commands/ListServerCertificateTagsCommand";
import {
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "../commands/ListServiceSpecificCredentialsCommand";
import {
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "../commands/ListSigningCertificatesCommand";
import {
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
} from "../commands/ListSSHPublicKeysCommand";
import {
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput,
} from "../commands/ListUserPoliciesCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput,
} from "../commands/ListUsersCommand";
import {
  ListUserTagsCommandInput,
  ListUserTagsCommandOutput,
} from "../commands/ListUserTagsCommand";
import {
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "../commands/ListVirtualMFADevicesCommand";
import {
  PutGroupPolicyCommandInput,
  PutGroupPolicyCommandOutput,
} from "../commands/PutGroupPolicyCommand";
import {
  PutRolePermissionsBoundaryCommandInput,
  PutRolePermissionsBoundaryCommandOutput,
} from "../commands/PutRolePermissionsBoundaryCommand";
import {
  PutRolePolicyCommandInput,
  PutRolePolicyCommandOutput,
} from "../commands/PutRolePolicyCommand";
import {
  PutUserPermissionsBoundaryCommandInput,
  PutUserPermissionsBoundaryCommandOutput,
} from "../commands/PutUserPermissionsBoundaryCommand";
import {
  PutUserPolicyCommandInput,
  PutUserPolicyCommandOutput,
} from "../commands/PutUserPolicyCommand";
import {
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
} from "../commands/RemoveClientIDFromOpenIDConnectProviderCommand";
import {
  RemoveRoleFromInstanceProfileCommandInput,
  RemoveRoleFromInstanceProfileCommandOutput,
} from "../commands/RemoveRoleFromInstanceProfileCommand";
import {
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
} from "../commands/RemoveUserFromGroupCommand";
import {
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
} from "../commands/ResetServiceSpecificCredentialCommand";
import {
  ResyncMFADeviceCommandInput,
  ResyncMFADeviceCommandOutput,
} from "../commands/ResyncMFADeviceCommand";
import {
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "../commands/SetDefaultPolicyVersionCommand";
import {
  SetSecurityTokenServicePreferencesCommandInput,
  SetSecurityTokenServicePreferencesCommandOutput,
} from "../commands/SetSecurityTokenServicePreferencesCommand";
import {
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "../commands/SimulateCustomPolicyCommand";
import {
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "../commands/SimulatePrincipalPolicyCommand";
import {
  TagInstanceProfileCommandInput,
  TagInstanceProfileCommandOutput,
} from "../commands/TagInstanceProfileCommand";
import {
  TagMFADeviceCommandInput,
  TagMFADeviceCommandOutput,
} from "../commands/TagMFADeviceCommand";
import {
  TagOpenIDConnectProviderCommandInput,
  TagOpenIDConnectProviderCommandOutput,
} from "../commands/TagOpenIDConnectProviderCommand";
import {
  TagPolicyCommandInput,
  TagPolicyCommandOutput,
} from "../commands/TagPolicyCommand";
import {
  TagRoleCommandInput,
  TagRoleCommandOutput,
} from "../commands/TagRoleCommand";
import {
  TagSAMLProviderCommandInput,
  TagSAMLProviderCommandOutput,
} from "../commands/TagSAMLProviderCommand";
import {
  TagServerCertificateCommandInput,
  TagServerCertificateCommandOutput,
} from "../commands/TagServerCertificateCommand";
import {
  TagUserCommandInput,
  TagUserCommandOutput,
} from "../commands/TagUserCommand";
import {
  UntagInstanceProfileCommandInput,
  UntagInstanceProfileCommandOutput,
} from "../commands/UntagInstanceProfileCommand";
import {
  UntagMFADeviceCommandInput,
  UntagMFADeviceCommandOutput,
} from "../commands/UntagMFADeviceCommand";
import {
  UntagOpenIDConnectProviderCommandInput,
  UntagOpenIDConnectProviderCommandOutput,
} from "../commands/UntagOpenIDConnectProviderCommand";
import {
  UntagPolicyCommandInput,
  UntagPolicyCommandOutput,
} from "../commands/UntagPolicyCommand";
import {
  UntagRoleCommandInput,
  UntagRoleCommandOutput,
} from "../commands/UntagRoleCommand";
import {
  UntagSAMLProviderCommandInput,
  UntagSAMLProviderCommandOutput,
} from "../commands/UntagSAMLProviderCommand";
import {
  UntagServerCertificateCommandInput,
  UntagServerCertificateCommandOutput,
} from "../commands/UntagServerCertificateCommand";
import {
  UntagUserCommandInput,
  UntagUserCommandOutput,
} from "../commands/UntagUserCommand";
import {
  UpdateAccessKeyCommandInput,
  UpdateAccessKeyCommandOutput,
} from "../commands/UpdateAccessKeyCommand";
import {
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
} from "../commands/UpdateAccountPasswordPolicyCommand";
import {
  UpdateAssumeRolePolicyCommandInput,
  UpdateAssumeRolePolicyCommandOutput,
} from "../commands/UpdateAssumeRolePolicyCommand";
import {
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput,
} from "../commands/UpdateGroupCommand";
import {
  UpdateLoginProfileCommandInput,
  UpdateLoginProfileCommandOutput,
} from "../commands/UpdateLoginProfileCommand";
import {
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
} from "../commands/UpdateOpenIDConnectProviderThumbprintCommand";
import {
  UpdateRoleCommandInput,
  UpdateRoleCommandOutput,
} from "../commands/UpdateRoleCommand";
import {
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
} from "../commands/UpdateRoleDescriptionCommand";
import {
  UpdateSAMLProviderCommandInput,
  UpdateSAMLProviderCommandOutput,
} from "../commands/UpdateSAMLProviderCommand";
import {
  UpdateServerCertificateCommandInput,
  UpdateServerCertificateCommandOutput,
} from "../commands/UpdateServerCertificateCommand";
import {
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
} from "../commands/UpdateServiceSpecificCredentialCommand";
import {
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
} from "../commands/UpdateSigningCertificateCommand";
import {
  UpdateSSHPublicKeyCommandInput,
  UpdateSSHPublicKeyCommandOutput,
} from "../commands/UpdateSSHPublicKeyCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput,
} from "../commands/UpdateUserCommand";
import {
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "../commands/UploadServerCertificateCommand";
import {
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "../commands/UploadSigningCertificateCommand";
import {
  UploadSSHPublicKeyCommandInput,
  UploadSSHPublicKeyCommandOutput,
} from "../commands/UploadSSHPublicKeyCommand";
export declare const se_AddClientIDToOpenIDConnectProviderCommand: (
  input: AddClientIDToOpenIDConnectProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AddRoleToInstanceProfileCommand: (
  input: AddRoleToInstanceProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AddUserToGroupCommand: (
  input: AddUserToGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AttachGroupPolicyCommand: (
  input: AttachGroupPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AttachRolePolicyCommand: (
  input: AttachRolePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AttachUserPolicyCommand: (
  input: AttachUserPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ChangePasswordCommand: (
  input: ChangePasswordCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateAccessKeyCommand: (
  input: CreateAccessKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateAccountAliasCommand: (
  input: CreateAccountAliasCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateGroupCommand: (
  input: CreateGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateInstanceProfileCommand: (
  input: CreateInstanceProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateLoginProfileCommand: (
  input: CreateLoginProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateOpenIDConnectProviderCommand: (
  input: CreateOpenIDConnectProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreatePolicyCommand: (
  input: CreatePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreatePolicyVersionCommand: (
  input: CreatePolicyVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateRoleCommand: (
  input: CreateRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateSAMLProviderCommand: (
  input: CreateSAMLProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateServiceLinkedRoleCommand: (
  input: CreateServiceLinkedRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateServiceSpecificCredentialCommand: (
  input: CreateServiceSpecificCredentialCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateUserCommand: (
  input: CreateUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateVirtualMFADeviceCommand: (
  input: CreateVirtualMFADeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeactivateMFADeviceCommand: (
  input: DeactivateMFADeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteAccessKeyCommand: (
  input: DeleteAccessKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteAccountAliasCommand: (
  input: DeleteAccountAliasCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteAccountPasswordPolicyCommand: (
  input: DeleteAccountPasswordPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteGroupCommand: (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteGroupPolicyCommand: (
  input: DeleteGroupPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteInstanceProfileCommand: (
  input: DeleteInstanceProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteLoginProfileCommand: (
  input: DeleteLoginProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteOpenIDConnectProviderCommand: (
  input: DeleteOpenIDConnectProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeletePolicyCommand: (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeletePolicyVersionCommand: (
  input: DeletePolicyVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteRoleCommand: (
  input: DeleteRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteRolePermissionsBoundaryCommand: (
  input: DeleteRolePermissionsBoundaryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteRolePolicyCommand: (
  input: DeleteRolePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteSAMLProviderCommand: (
  input: DeleteSAMLProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteServerCertificateCommand: (
  input: DeleteServerCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteServiceLinkedRoleCommand: (
  input: DeleteServiceLinkedRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteServiceSpecificCredentialCommand: (
  input: DeleteServiceSpecificCredentialCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteSigningCertificateCommand: (
  input: DeleteSigningCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteSSHPublicKeyCommand: (
  input: DeleteSSHPublicKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteUserCommand: (
  input: DeleteUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteUserPermissionsBoundaryCommand: (
  input: DeleteUserPermissionsBoundaryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteUserPolicyCommand: (
  input: DeleteUserPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteVirtualMFADeviceCommand: (
  input: DeleteVirtualMFADeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DetachGroupPolicyCommand: (
  input: DetachGroupPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DetachRolePolicyCommand: (
  input: DetachRolePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DetachUserPolicyCommand: (
  input: DetachUserPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DisableOrganizationsRootCredentialsManagementCommand: (
  input: DisableOrganizationsRootCredentialsManagementCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DisableOrganizationsRootSessionsCommand: (
  input: DisableOrganizationsRootSessionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_EnableMFADeviceCommand: (
  input: EnableMFADeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_EnableOrganizationsRootCredentialsManagementCommand: (
  input: EnableOrganizationsRootCredentialsManagementCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_EnableOrganizationsRootSessionsCommand: (
  input: EnableOrganizationsRootSessionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GenerateCredentialReportCommand: (
  input: GenerateCredentialReportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GenerateOrganizationsAccessReportCommand: (
  input: GenerateOrganizationsAccessReportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GenerateServiceLastAccessedDetailsCommand: (
  input: GenerateServiceLastAccessedDetailsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetAccessKeyLastUsedCommand: (
  input: GetAccessKeyLastUsedCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetAccountAuthorizationDetailsCommand: (
  input: GetAccountAuthorizationDetailsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetAccountPasswordPolicyCommand: (
  input: GetAccountPasswordPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetAccountSummaryCommand: (
  input: GetAccountSummaryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetContextKeysForCustomPolicyCommand: (
  input: GetContextKeysForCustomPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetContextKeysForPrincipalPolicyCommand: (
  input: GetContextKeysForPrincipalPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetCredentialReportCommand: (
  input: GetCredentialReportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetGroupCommand: (
  input: GetGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetGroupPolicyCommand: (
  input: GetGroupPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetInstanceProfileCommand: (
  input: GetInstanceProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetLoginProfileCommand: (
  input: GetLoginProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetMFADeviceCommand: (
  input: GetMFADeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetOpenIDConnectProviderCommand: (
  input: GetOpenIDConnectProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetOrganizationsAccessReportCommand: (
  input: GetOrganizationsAccessReportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetPolicyCommand: (
  input: GetPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetPolicyVersionCommand: (
  input: GetPolicyVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetRoleCommand: (
  input: GetRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetRolePolicyCommand: (
  input: GetRolePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetSAMLProviderCommand: (
  input: GetSAMLProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetServerCertificateCommand: (
  input: GetServerCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetServiceLastAccessedDetailsCommand: (
  input: GetServiceLastAccessedDetailsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetServiceLastAccessedDetailsWithEntitiesCommand: (
  input: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetServiceLinkedRoleDeletionStatusCommand: (
  input: GetServiceLinkedRoleDeletionStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetSSHPublicKeyCommand: (
  input: GetSSHPublicKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetUserCommand: (
  input: GetUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetUserPolicyCommand: (
  input: GetUserPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListAccessKeysCommand: (
  input: ListAccessKeysCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListAccountAliasesCommand: (
  input: ListAccountAliasesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListAttachedGroupPoliciesCommand: (
  input: ListAttachedGroupPoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListAttachedRolePoliciesCommand: (
  input: ListAttachedRolePoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListAttachedUserPoliciesCommand: (
  input: ListAttachedUserPoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListEntitiesForPolicyCommand: (
  input: ListEntitiesForPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListGroupPoliciesCommand: (
  input: ListGroupPoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListGroupsCommand: (
  input: ListGroupsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListGroupsForUserCommand: (
  input: ListGroupsForUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListInstanceProfilesCommand: (
  input: ListInstanceProfilesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListInstanceProfilesForRoleCommand: (
  input: ListInstanceProfilesForRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListInstanceProfileTagsCommand: (
  input: ListInstanceProfileTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListMFADevicesCommand: (
  input: ListMFADevicesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListMFADeviceTagsCommand: (
  input: ListMFADeviceTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListOpenIDConnectProvidersCommand: (
  input: ListOpenIDConnectProvidersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListOpenIDConnectProviderTagsCommand: (
  input: ListOpenIDConnectProviderTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListOrganizationsFeaturesCommand: (
  input: ListOrganizationsFeaturesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListPoliciesCommand: (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListPoliciesGrantingServiceAccessCommand: (
  input: ListPoliciesGrantingServiceAccessCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListPolicyTagsCommand: (
  input: ListPolicyTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListPolicyVersionsCommand: (
  input: ListPolicyVersionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListRolePoliciesCommand: (
  input: ListRolePoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListRolesCommand: (
  input: ListRolesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListRoleTagsCommand: (
  input: ListRoleTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListSAMLProvidersCommand: (
  input: ListSAMLProvidersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListSAMLProviderTagsCommand: (
  input: ListSAMLProviderTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListServerCertificatesCommand: (
  input: ListServerCertificatesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListServerCertificateTagsCommand: (
  input: ListServerCertificateTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListServiceSpecificCredentialsCommand: (
  input: ListServiceSpecificCredentialsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListSigningCertificatesCommand: (
  input: ListSigningCertificatesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListSSHPublicKeysCommand: (
  input: ListSSHPublicKeysCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListUserPoliciesCommand: (
  input: ListUserPoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListUsersCommand: (
  input: ListUsersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListUserTagsCommand: (
  input: ListUserTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListVirtualMFADevicesCommand: (
  input: ListVirtualMFADevicesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutGroupPolicyCommand: (
  input: PutGroupPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutRolePermissionsBoundaryCommand: (
  input: PutRolePermissionsBoundaryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutRolePolicyCommand: (
  input: PutRolePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutUserPermissionsBoundaryCommand: (
  input: PutUserPermissionsBoundaryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutUserPolicyCommand: (
  input: PutUserPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_RemoveClientIDFromOpenIDConnectProviderCommand: (
  input: RemoveClientIDFromOpenIDConnectProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_RemoveRoleFromInstanceProfileCommand: (
  input: RemoveRoleFromInstanceProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_RemoveUserFromGroupCommand: (
  input: RemoveUserFromGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ResetServiceSpecificCredentialCommand: (
  input: ResetServiceSpecificCredentialCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ResyncMFADeviceCommand: (
  input: ResyncMFADeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SetDefaultPolicyVersionCommand: (
  input: SetDefaultPolicyVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SetSecurityTokenServicePreferencesCommand: (
  input: SetSecurityTokenServicePreferencesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SimulateCustomPolicyCommand: (
  input: SimulateCustomPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SimulatePrincipalPolicyCommand: (
  input: SimulatePrincipalPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagInstanceProfileCommand: (
  input: TagInstanceProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagMFADeviceCommand: (
  input: TagMFADeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagOpenIDConnectProviderCommand: (
  input: TagOpenIDConnectProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagPolicyCommand: (
  input: TagPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagRoleCommand: (
  input: TagRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagSAMLProviderCommand: (
  input: TagSAMLProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagServerCertificateCommand: (
  input: TagServerCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagUserCommand: (
  input: TagUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagInstanceProfileCommand: (
  input: UntagInstanceProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagMFADeviceCommand: (
  input: UntagMFADeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagOpenIDConnectProviderCommand: (
  input: UntagOpenIDConnectProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagPolicyCommand: (
  input: UntagPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagRoleCommand: (
  input: UntagRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagSAMLProviderCommand: (
  input: UntagSAMLProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagServerCertificateCommand: (
  input: UntagServerCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagUserCommand: (
  input: UntagUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateAccessKeyCommand: (
  input: UpdateAccessKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateAccountPasswordPolicyCommand: (
  input: UpdateAccountPasswordPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateAssumeRolePolicyCommand: (
  input: UpdateAssumeRolePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateGroupCommand: (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateLoginProfileCommand: (
  input: UpdateLoginProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateOpenIDConnectProviderThumbprintCommand: (
  input: UpdateOpenIDConnectProviderThumbprintCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateRoleCommand: (
  input: UpdateRoleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateRoleDescriptionCommand: (
  input: UpdateRoleDescriptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateSAMLProviderCommand: (
  input: UpdateSAMLProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateServerCertificateCommand: (
  input: UpdateServerCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateServiceSpecificCredentialCommand: (
  input: UpdateServiceSpecificCredentialCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateSigningCertificateCommand: (
  input: UpdateSigningCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateSSHPublicKeyCommand: (
  input: UpdateSSHPublicKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateUserCommand: (
  input: UpdateUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UploadServerCertificateCommand: (
  input: UploadServerCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UploadSigningCertificateCommand: (
  input: UploadSigningCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UploadSSHPublicKeyCommand: (
  input: UploadSSHPublicKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const de_AddClientIDToOpenIDConnectProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AddClientIDToOpenIDConnectProviderCommandOutput>;
export declare const de_AddRoleToInstanceProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AddRoleToInstanceProfileCommandOutput>;
export declare const de_AddUserToGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AddUserToGroupCommandOutput>;
export declare const de_AttachGroupPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AttachGroupPolicyCommandOutput>;
export declare const de_AttachRolePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AttachRolePolicyCommandOutput>;
export declare const de_AttachUserPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AttachUserPolicyCommandOutput>;
export declare const de_ChangePasswordCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ChangePasswordCommandOutput>;
export declare const de_CreateAccessKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAccessKeyCommandOutput>;
export declare const de_CreateAccountAliasCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAccountAliasCommandOutput>;
export declare const de_CreateGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateGroupCommandOutput>;
export declare const de_CreateInstanceProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateInstanceProfileCommandOutput>;
export declare const de_CreateLoginProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateLoginProfileCommandOutput>;
export declare const de_CreateOpenIDConnectProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateOpenIDConnectProviderCommandOutput>;
export declare const de_CreatePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreatePolicyCommandOutput>;
export declare const de_CreatePolicyVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreatePolicyVersionCommandOutput>;
export declare const de_CreateRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateRoleCommandOutput>;
export declare const de_CreateSAMLProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateSAMLProviderCommandOutput>;
export declare const de_CreateServiceLinkedRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateServiceLinkedRoleCommandOutput>;
export declare const de_CreateServiceSpecificCredentialCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateServiceSpecificCredentialCommandOutput>;
export declare const de_CreateUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateUserCommandOutput>;
export declare const de_CreateVirtualMFADeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateVirtualMFADeviceCommandOutput>;
export declare const de_DeactivateMFADeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeactivateMFADeviceCommandOutput>;
export declare const de_DeleteAccessKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAccessKeyCommandOutput>;
export declare const de_DeleteAccountAliasCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAccountAliasCommandOutput>;
export declare const de_DeleteAccountPasswordPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAccountPasswordPolicyCommandOutput>;
export declare const de_DeleteGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteGroupCommandOutput>;
export declare const de_DeleteGroupPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteGroupPolicyCommandOutput>;
export declare const de_DeleteInstanceProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteInstanceProfileCommandOutput>;
export declare const de_DeleteLoginProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteLoginProfileCommandOutput>;
export declare const de_DeleteOpenIDConnectProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteOpenIDConnectProviderCommandOutput>;
export declare const de_DeletePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeletePolicyCommandOutput>;
export declare const de_DeletePolicyVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeletePolicyVersionCommandOutput>;
export declare const de_DeleteRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRoleCommandOutput>;
export declare const de_DeleteRolePermissionsBoundaryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRolePermissionsBoundaryCommandOutput>;
export declare const de_DeleteRolePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRolePolicyCommandOutput>;
export declare const de_DeleteSAMLProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteSAMLProviderCommandOutput>;
export declare const de_DeleteServerCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteServerCertificateCommandOutput>;
export declare const de_DeleteServiceLinkedRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteServiceLinkedRoleCommandOutput>;
export declare const de_DeleteServiceSpecificCredentialCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteServiceSpecificCredentialCommandOutput>;
export declare const de_DeleteSigningCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteSigningCertificateCommandOutput>;
export declare const de_DeleteSSHPublicKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteSSHPublicKeyCommandOutput>;
export declare const de_DeleteUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserCommandOutput>;
export declare const de_DeleteUserPermissionsBoundaryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserPermissionsBoundaryCommandOutput>;
export declare const de_DeleteUserPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserPolicyCommandOutput>;
export declare const de_DeleteVirtualMFADeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteVirtualMFADeviceCommandOutput>;
export declare const de_DetachGroupPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetachGroupPolicyCommandOutput>;
export declare const de_DetachRolePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetachRolePolicyCommandOutput>;
export declare const de_DetachUserPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetachUserPolicyCommandOutput>;
export declare const de_DisableOrganizationsRootCredentialsManagementCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisableOrganizationsRootCredentialsManagementCommandOutput>;
export declare const de_DisableOrganizationsRootSessionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisableOrganizationsRootSessionsCommandOutput>;
export declare const de_EnableMFADeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<EnableMFADeviceCommandOutput>;
export declare const de_EnableOrganizationsRootCredentialsManagementCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<EnableOrganizationsRootCredentialsManagementCommandOutput>;
export declare const de_EnableOrganizationsRootSessionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<EnableOrganizationsRootSessionsCommandOutput>;
export declare const de_GenerateCredentialReportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GenerateCredentialReportCommandOutput>;
export declare const de_GenerateOrganizationsAccessReportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GenerateOrganizationsAccessReportCommandOutput>;
export declare const de_GenerateServiceLastAccessedDetailsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GenerateServiceLastAccessedDetailsCommandOutput>;
export declare const de_GetAccessKeyLastUsedCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAccessKeyLastUsedCommandOutput>;
export declare const de_GetAccountAuthorizationDetailsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAccountAuthorizationDetailsCommandOutput>;
export declare const de_GetAccountPasswordPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAccountPasswordPolicyCommandOutput>;
export declare const de_GetAccountSummaryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAccountSummaryCommandOutput>;
export declare const de_GetContextKeysForCustomPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetContextKeysForCustomPolicyCommandOutput>;
export declare const de_GetContextKeysForPrincipalPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetContextKeysForPrincipalPolicyCommandOutput>;
export declare const de_GetCredentialReportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetCredentialReportCommandOutput>;
export declare const de_GetGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetGroupCommandOutput>;
export declare const de_GetGroupPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetGroupPolicyCommandOutput>;
export declare const de_GetInstanceProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetInstanceProfileCommandOutput>;
export declare const de_GetLoginProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetLoginProfileCommandOutput>;
export declare const de_GetMFADeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetMFADeviceCommandOutput>;
export declare const de_GetOpenIDConnectProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetOpenIDConnectProviderCommandOutput>;
export declare const de_GetOrganizationsAccessReportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetOrganizationsAccessReportCommandOutput>;
export declare const de_GetPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetPolicyCommandOutput>;
export declare const de_GetPolicyVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetPolicyVersionCommandOutput>;
export declare const de_GetRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRoleCommandOutput>;
export declare const de_GetRolePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRolePolicyCommandOutput>;
export declare const de_GetSAMLProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetSAMLProviderCommandOutput>;
export declare const de_GetServerCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetServerCertificateCommandOutput>;
export declare const de_GetServiceLastAccessedDetailsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetServiceLastAccessedDetailsCommandOutput>;
export declare const de_GetServiceLastAccessedDetailsWithEntitiesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput>;
export declare const de_GetServiceLinkedRoleDeletionStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetServiceLinkedRoleDeletionStatusCommandOutput>;
export declare const de_GetSSHPublicKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetSSHPublicKeyCommandOutput>;
export declare const de_GetUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetUserCommandOutput>;
export declare const de_GetUserPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetUserPolicyCommandOutput>;
export declare const de_ListAccessKeysCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAccessKeysCommandOutput>;
export declare const de_ListAccountAliasesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAccountAliasesCommandOutput>;
export declare const de_ListAttachedGroupPoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAttachedGroupPoliciesCommandOutput>;
export declare const de_ListAttachedRolePoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAttachedRolePoliciesCommandOutput>;
export declare const de_ListAttachedUserPoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAttachedUserPoliciesCommandOutput>;
export declare const de_ListEntitiesForPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListEntitiesForPolicyCommandOutput>;
export declare const de_ListGroupPoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListGroupPoliciesCommandOutput>;
export declare const de_ListGroupsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListGroupsCommandOutput>;
export declare const de_ListGroupsForUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListGroupsForUserCommandOutput>;
export declare const de_ListInstanceProfilesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListInstanceProfilesCommandOutput>;
export declare const de_ListInstanceProfilesForRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListInstanceProfilesForRoleCommandOutput>;
export declare const de_ListInstanceProfileTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListInstanceProfileTagsCommandOutput>;
export declare const de_ListMFADevicesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListMFADevicesCommandOutput>;
export declare const de_ListMFADeviceTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListMFADeviceTagsCommandOutput>;
export declare const de_ListOpenIDConnectProvidersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListOpenIDConnectProvidersCommandOutput>;
export declare const de_ListOpenIDConnectProviderTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListOpenIDConnectProviderTagsCommandOutput>;
export declare const de_ListOrganizationsFeaturesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListOrganizationsFeaturesCommandOutput>;
export declare const de_ListPoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPoliciesCommandOutput>;
export declare const de_ListPoliciesGrantingServiceAccessCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPoliciesGrantingServiceAccessCommandOutput>;
export declare const de_ListPolicyTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPolicyTagsCommandOutput>;
export declare const de_ListPolicyVersionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPolicyVersionsCommandOutput>;
export declare const de_ListRolePoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListRolePoliciesCommandOutput>;
export declare const de_ListRolesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListRolesCommandOutput>;
export declare const de_ListRoleTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListRoleTagsCommandOutput>;
export declare const de_ListSAMLProvidersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListSAMLProvidersCommandOutput>;
export declare const de_ListSAMLProviderTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListSAMLProviderTagsCommandOutput>;
export declare const de_ListServerCertificatesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListServerCertificatesCommandOutput>;
export declare const de_ListServerCertificateTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListServerCertificateTagsCommandOutput>;
export declare const de_ListServiceSpecificCredentialsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListServiceSpecificCredentialsCommandOutput>;
export declare const de_ListSigningCertificatesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListSigningCertificatesCommandOutput>;
export declare const de_ListSSHPublicKeysCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListSSHPublicKeysCommandOutput>;
export declare const de_ListUserPoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListUserPoliciesCommandOutput>;
export declare const de_ListUsersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListUsersCommandOutput>;
export declare const de_ListUserTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListUserTagsCommandOutput>;
export declare const de_ListVirtualMFADevicesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListVirtualMFADevicesCommandOutput>;
export declare const de_PutGroupPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutGroupPolicyCommandOutput>;
export declare const de_PutRolePermissionsBoundaryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutRolePermissionsBoundaryCommandOutput>;
export declare const de_PutRolePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutRolePolicyCommandOutput>;
export declare const de_PutUserPermissionsBoundaryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutUserPermissionsBoundaryCommandOutput>;
export declare const de_PutUserPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutUserPolicyCommandOutput>;
export declare const de_RemoveClientIDFromOpenIDConnectProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput>;
export declare const de_RemoveRoleFromInstanceProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RemoveRoleFromInstanceProfileCommandOutput>;
export declare const de_RemoveUserFromGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RemoveUserFromGroupCommandOutput>;
export declare const de_ResetServiceSpecificCredentialCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ResetServiceSpecificCredentialCommandOutput>;
export declare const de_ResyncMFADeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ResyncMFADeviceCommandOutput>;
export declare const de_SetDefaultPolicyVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetDefaultPolicyVersionCommandOutput>;
export declare const de_SetSecurityTokenServicePreferencesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetSecurityTokenServicePreferencesCommandOutput>;
export declare const de_SimulateCustomPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SimulateCustomPolicyCommandOutput>;
export declare const de_SimulatePrincipalPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SimulatePrincipalPolicyCommandOutput>;
export declare const de_TagInstanceProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagInstanceProfileCommandOutput>;
export declare const de_TagMFADeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagMFADeviceCommandOutput>;
export declare const de_TagOpenIDConnectProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagOpenIDConnectProviderCommandOutput>;
export declare const de_TagPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagPolicyCommandOutput>;
export declare const de_TagRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagRoleCommandOutput>;
export declare const de_TagSAMLProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagSAMLProviderCommandOutput>;
export declare const de_TagServerCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagServerCertificateCommandOutput>;
export declare const de_TagUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagUserCommandOutput>;
export declare const de_UntagInstanceProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagInstanceProfileCommandOutput>;
export declare const de_UntagMFADeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagMFADeviceCommandOutput>;
export declare const de_UntagOpenIDConnectProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagOpenIDConnectProviderCommandOutput>;
export declare const de_UntagPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagPolicyCommandOutput>;
export declare const de_UntagRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagRoleCommandOutput>;
export declare const de_UntagSAMLProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagSAMLProviderCommandOutput>;
export declare const de_UntagServerCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagServerCertificateCommandOutput>;
export declare const de_UntagUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagUserCommandOutput>;
export declare const de_UpdateAccessKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAccessKeyCommandOutput>;
export declare const de_UpdateAccountPasswordPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAccountPasswordPolicyCommandOutput>;
export declare const de_UpdateAssumeRolePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAssumeRolePolicyCommandOutput>;
export declare const de_UpdateGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateGroupCommandOutput>;
export declare const de_UpdateLoginProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateLoginProfileCommandOutput>;
export declare const de_UpdateOpenIDConnectProviderThumbprintCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput>;
export declare const de_UpdateRoleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateRoleCommandOutput>;
export declare const de_UpdateRoleDescriptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateRoleDescriptionCommandOutput>;
export declare const de_UpdateSAMLProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateSAMLProviderCommandOutput>;
export declare const de_UpdateServerCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateServerCertificateCommandOutput>;
export declare const de_UpdateServiceSpecificCredentialCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateServiceSpecificCredentialCommandOutput>;
export declare const de_UpdateSigningCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateSigningCertificateCommandOutput>;
export declare const de_UpdateSSHPublicKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateSSHPublicKeyCommandOutput>;
export declare const de_UpdateUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateUserCommandOutput>;
export declare const de_UploadServerCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UploadServerCertificateCommandOutput>;
export declare const de_UploadSigningCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UploadSigningCertificateCommandOutput>;
export declare const de_UploadSSHPublicKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UploadSSHPublicKeyCommandOutput>;
