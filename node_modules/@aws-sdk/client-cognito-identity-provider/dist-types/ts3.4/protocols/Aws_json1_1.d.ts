import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import {
  AddCustomAttributesCommandInput,
  AddCustomAttributesCommandOutput,
} from "../commands/AddCustomAttributesCommand";
import {
  AdminAddUserToGroupCommandInput,
  AdminAddUserToGroupCommandOutput,
} from "../commands/AdminAddUserToGroupCommand";
import {
  AdminConfirmSignUpCommandInput,
  AdminConfirmSignUpCommandOutput,
} from "../commands/AdminConfirmSignUpCommand";
import {
  AdminCreateUserCommandInput,
  AdminCreateUserCommandOutput,
} from "../commands/AdminCreateUserCommand";
import {
  AdminDeleteUserAttributesCommandInput,
  AdminDeleteUserAttributesCommandOutput,
} from "../commands/AdminDeleteUserAttributesCommand";
import {
  AdminDeleteUserCommandInput,
  AdminDeleteUserCommandOutput,
} from "../commands/AdminDeleteUserCommand";
import {
  AdminDisableProviderForUserCommandInput,
  AdminDisableProviderForUserCommandOutput,
} from "../commands/AdminDisableProviderForUserCommand";
import {
  AdminDisableUserCommandInput,
  AdminDisableUserCommandOutput,
} from "../commands/AdminDisableUserCommand";
import {
  AdminEnableUserCommandInput,
  AdminEnableUserCommandOutput,
} from "../commands/AdminEnableUserCommand";
import {
  AdminForgetDeviceCommandInput,
  AdminForgetDeviceCommandOutput,
} from "../commands/AdminForgetDeviceCommand";
import {
  AdminGetDeviceCommandInput,
  AdminGetDeviceCommandOutput,
} from "../commands/AdminGetDeviceCommand";
import {
  AdminGetUserCommandInput,
  AdminGetUserCommandOutput,
} from "../commands/AdminGetUserCommand";
import {
  AdminInitiateAuthCommandInput,
  AdminInitiateAuthCommandOutput,
} from "../commands/AdminInitiateAuthCommand";
import {
  AdminLinkProviderForUserCommandInput,
  AdminLinkProviderForUserCommandOutput,
} from "../commands/AdminLinkProviderForUserCommand";
import {
  AdminListDevicesCommandInput,
  AdminListDevicesCommandOutput,
} from "../commands/AdminListDevicesCommand";
import {
  AdminListGroupsForUserCommandInput,
  AdminListGroupsForUserCommandOutput,
} from "../commands/AdminListGroupsForUserCommand";
import {
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
} from "../commands/AdminListUserAuthEventsCommand";
import {
  AdminRemoveUserFromGroupCommandInput,
  AdminRemoveUserFromGroupCommandOutput,
} from "../commands/AdminRemoveUserFromGroupCommand";
import {
  AdminResetUserPasswordCommandInput,
  AdminResetUserPasswordCommandOutput,
} from "../commands/AdminResetUserPasswordCommand";
import {
  AdminRespondToAuthChallengeCommandInput,
  AdminRespondToAuthChallengeCommandOutput,
} from "../commands/AdminRespondToAuthChallengeCommand";
import {
  AdminSetUserMFAPreferenceCommandInput,
  AdminSetUserMFAPreferenceCommandOutput,
} from "../commands/AdminSetUserMFAPreferenceCommand";
import {
  AdminSetUserPasswordCommandInput,
  AdminSetUserPasswordCommandOutput,
} from "../commands/AdminSetUserPasswordCommand";
import {
  AdminSetUserSettingsCommandInput,
  AdminSetUserSettingsCommandOutput,
} from "../commands/AdminSetUserSettingsCommand";
import {
  AdminUpdateAuthEventFeedbackCommandInput,
  AdminUpdateAuthEventFeedbackCommandOutput,
} from "../commands/AdminUpdateAuthEventFeedbackCommand";
import {
  AdminUpdateDeviceStatusCommandInput,
  AdminUpdateDeviceStatusCommandOutput,
} from "../commands/AdminUpdateDeviceStatusCommand";
import {
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
} from "../commands/AdminUpdateUserAttributesCommand";
import {
  AdminUserGlobalSignOutCommandInput,
  AdminUserGlobalSignOutCommandOutput,
} from "../commands/AdminUserGlobalSignOutCommand";
import {
  AssociateSoftwareTokenCommandInput,
  AssociateSoftwareTokenCommandOutput,
} from "../commands/AssociateSoftwareTokenCommand";
import {
  ChangePasswordCommandInput,
  ChangePasswordCommandOutput,
} from "../commands/ChangePasswordCommand";
import {
  CompleteWebAuthnRegistrationCommandInput,
  CompleteWebAuthnRegistrationCommandOutput,
} from "../commands/CompleteWebAuthnRegistrationCommand";
import {
  ConfirmDeviceCommandInput,
  ConfirmDeviceCommandOutput,
} from "../commands/ConfirmDeviceCommand";
import {
  ConfirmForgotPasswordCommandInput,
  ConfirmForgotPasswordCommandOutput,
} from "../commands/ConfirmForgotPasswordCommand";
import {
  ConfirmSignUpCommandInput,
  ConfirmSignUpCommandOutput,
} from "../commands/ConfirmSignUpCommand";
import {
  CreateGroupCommandInput,
  CreateGroupCommandOutput,
} from "../commands/CreateGroupCommand";
import {
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "../commands/CreateIdentityProviderCommand";
import {
  CreateManagedLoginBrandingCommandInput,
  CreateManagedLoginBrandingCommandOutput,
} from "../commands/CreateManagedLoginBrandingCommand";
import {
  CreateResourceServerCommandInput,
  CreateResourceServerCommandOutput,
} from "../commands/CreateResourceServerCommand";
import {
  CreateUserImportJobCommandInput,
  CreateUserImportJobCommandOutput,
} from "../commands/CreateUserImportJobCommand";
import {
  CreateUserPoolClientCommandInput,
  CreateUserPoolClientCommandOutput,
} from "../commands/CreateUserPoolClientCommand";
import {
  CreateUserPoolCommandInput,
  CreateUserPoolCommandOutput,
} from "../commands/CreateUserPoolCommand";
import {
  CreateUserPoolDomainCommandInput,
  CreateUserPoolDomainCommandOutput,
} from "../commands/CreateUserPoolDomainCommand";
import {
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput,
} from "../commands/DeleteGroupCommand";
import {
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "../commands/DeleteIdentityProviderCommand";
import {
  DeleteManagedLoginBrandingCommandInput,
  DeleteManagedLoginBrandingCommandOutput,
} from "../commands/DeleteManagedLoginBrandingCommand";
import {
  DeleteResourceServerCommandInput,
  DeleteResourceServerCommandOutput,
} from "../commands/DeleteResourceServerCommand";
import {
  DeleteUserAttributesCommandInput,
  DeleteUserAttributesCommandOutput,
} from "../commands/DeleteUserAttributesCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput,
} from "../commands/DeleteUserCommand";
import {
  DeleteUserPoolClientCommandInput,
  DeleteUserPoolClientCommandOutput,
} from "../commands/DeleteUserPoolClientCommand";
import {
  DeleteUserPoolCommandInput,
  DeleteUserPoolCommandOutput,
} from "../commands/DeleteUserPoolCommand";
import {
  DeleteUserPoolDomainCommandInput,
  DeleteUserPoolDomainCommandOutput,
} from "../commands/DeleteUserPoolDomainCommand";
import {
  DeleteWebAuthnCredentialCommandInput,
  DeleteWebAuthnCredentialCommandOutput,
} from "../commands/DeleteWebAuthnCredentialCommand";
import {
  DescribeIdentityProviderCommandInput,
  DescribeIdentityProviderCommandOutput,
} from "../commands/DescribeIdentityProviderCommand";
import {
  DescribeManagedLoginBrandingByClientCommandInput,
  DescribeManagedLoginBrandingByClientCommandOutput,
} from "../commands/DescribeManagedLoginBrandingByClientCommand";
import {
  DescribeManagedLoginBrandingCommandInput,
  DescribeManagedLoginBrandingCommandOutput,
} from "../commands/DescribeManagedLoginBrandingCommand";
import {
  DescribeResourceServerCommandInput,
  DescribeResourceServerCommandOutput,
} from "../commands/DescribeResourceServerCommand";
import {
  DescribeRiskConfigurationCommandInput,
  DescribeRiskConfigurationCommandOutput,
} from "../commands/DescribeRiskConfigurationCommand";
import {
  DescribeUserImportJobCommandInput,
  DescribeUserImportJobCommandOutput,
} from "../commands/DescribeUserImportJobCommand";
import {
  DescribeUserPoolClientCommandInput,
  DescribeUserPoolClientCommandOutput,
} from "../commands/DescribeUserPoolClientCommand";
import {
  DescribeUserPoolCommandInput,
  DescribeUserPoolCommandOutput,
} from "../commands/DescribeUserPoolCommand";
import {
  DescribeUserPoolDomainCommandInput,
  DescribeUserPoolDomainCommandOutput,
} from "../commands/DescribeUserPoolDomainCommand";
import {
  ForgetDeviceCommandInput,
  ForgetDeviceCommandOutput,
} from "../commands/ForgetDeviceCommand";
import {
  ForgotPasswordCommandInput,
  ForgotPasswordCommandOutput,
} from "../commands/ForgotPasswordCommand";
import {
  GetCSVHeaderCommandInput,
  GetCSVHeaderCommandOutput,
} from "../commands/GetCSVHeaderCommand";
import {
  GetDeviceCommandInput,
  GetDeviceCommandOutput,
} from "../commands/GetDeviceCommand";
import {
  GetGroupCommandInput,
  GetGroupCommandOutput,
} from "../commands/GetGroupCommand";
import {
  GetIdentityProviderByIdentifierCommandInput,
  GetIdentityProviderByIdentifierCommandOutput,
} from "../commands/GetIdentityProviderByIdentifierCommand";
import {
  GetLogDeliveryConfigurationCommandInput,
  GetLogDeliveryConfigurationCommandOutput,
} from "../commands/GetLogDeliveryConfigurationCommand";
import {
  GetSigningCertificateCommandInput,
  GetSigningCertificateCommandOutput,
} from "../commands/GetSigningCertificateCommand";
import {
  GetUICustomizationCommandInput,
  GetUICustomizationCommandOutput,
} from "../commands/GetUICustomizationCommand";
import {
  GetUserAttributeVerificationCodeCommandInput,
  GetUserAttributeVerificationCodeCommandOutput,
} from "../commands/GetUserAttributeVerificationCodeCommand";
import {
  GetUserAuthFactorsCommandInput,
  GetUserAuthFactorsCommandOutput,
} from "../commands/GetUserAuthFactorsCommand";
import {
  GetUserCommandInput,
  GetUserCommandOutput,
} from "../commands/GetUserCommand";
import {
  GetUserPoolMfaConfigCommandInput,
  GetUserPoolMfaConfigCommandOutput,
} from "../commands/GetUserPoolMfaConfigCommand";
import {
  GlobalSignOutCommandInput,
  GlobalSignOutCommandOutput,
} from "../commands/GlobalSignOutCommand";
import {
  InitiateAuthCommandInput,
  InitiateAuthCommandOutput,
} from "../commands/InitiateAuthCommand";
import {
  ListDevicesCommandInput,
  ListDevicesCommandOutput,
} from "../commands/ListDevicesCommand";
import {
  ListGroupsCommandInput,
  ListGroupsCommandOutput,
} from "../commands/ListGroupsCommand";
import {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import {
  ListResourceServersCommandInput,
  ListResourceServersCommandOutput,
} from "../commands/ListResourceServersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListUserImportJobsCommandInput,
  ListUserImportJobsCommandOutput,
} from "../commands/ListUserImportJobsCommand";
import {
  ListUserPoolClientsCommandInput,
  ListUserPoolClientsCommandOutput,
} from "../commands/ListUserPoolClientsCommand";
import {
  ListUserPoolsCommandInput,
  ListUserPoolsCommandOutput,
} from "../commands/ListUserPoolsCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput,
} from "../commands/ListUsersCommand";
import {
  ListUsersInGroupCommandInput,
  ListUsersInGroupCommandOutput,
} from "../commands/ListUsersInGroupCommand";
import {
  ListWebAuthnCredentialsCommandInput,
  ListWebAuthnCredentialsCommandOutput,
} from "../commands/ListWebAuthnCredentialsCommand";
import {
  ResendConfirmationCodeCommandInput,
  ResendConfirmationCodeCommandOutput,
} from "../commands/ResendConfirmationCodeCommand";
import {
  RespondToAuthChallengeCommandInput,
  RespondToAuthChallengeCommandOutput,
} from "../commands/RespondToAuthChallengeCommand";
import {
  RevokeTokenCommandInput,
  RevokeTokenCommandOutput,
} from "../commands/RevokeTokenCommand";
import {
  SetLogDeliveryConfigurationCommandInput,
  SetLogDeliveryConfigurationCommandOutput,
} from "../commands/SetLogDeliveryConfigurationCommand";
import {
  SetRiskConfigurationCommandInput,
  SetRiskConfigurationCommandOutput,
} from "../commands/SetRiskConfigurationCommand";
import {
  SetUICustomizationCommandInput,
  SetUICustomizationCommandOutput,
} from "../commands/SetUICustomizationCommand";
import {
  SetUserMFAPreferenceCommandInput,
  SetUserMFAPreferenceCommandOutput,
} from "../commands/SetUserMFAPreferenceCommand";
import {
  SetUserPoolMfaConfigCommandInput,
  SetUserPoolMfaConfigCommandOutput,
} from "../commands/SetUserPoolMfaConfigCommand";
import {
  SetUserSettingsCommandInput,
  SetUserSettingsCommandOutput,
} from "../commands/SetUserSettingsCommand";
import {
  SignUpCommandInput,
  SignUpCommandOutput,
} from "../commands/SignUpCommand";
import {
  StartUserImportJobCommandInput,
  StartUserImportJobCommandOutput,
} from "../commands/StartUserImportJobCommand";
import {
  StartWebAuthnRegistrationCommandInput,
  StartWebAuthnRegistrationCommandOutput,
} from "../commands/StartWebAuthnRegistrationCommand";
import {
  StopUserImportJobCommandInput,
  StopUserImportJobCommandOutput,
} from "../commands/StopUserImportJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "../commands/UntagResourceCommand";
import {
  UpdateAuthEventFeedbackCommandInput,
  UpdateAuthEventFeedbackCommandOutput,
} from "../commands/UpdateAuthEventFeedbackCommand";
import {
  UpdateDeviceStatusCommandInput,
  UpdateDeviceStatusCommandOutput,
} from "../commands/UpdateDeviceStatusCommand";
import {
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput,
} from "../commands/UpdateGroupCommand";
import {
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "../commands/UpdateIdentityProviderCommand";
import {
  UpdateManagedLoginBrandingCommandInput,
  UpdateManagedLoginBrandingCommandOutput,
} from "../commands/UpdateManagedLoginBrandingCommand";
import {
  UpdateResourceServerCommandInput,
  UpdateResourceServerCommandOutput,
} from "../commands/UpdateResourceServerCommand";
import {
  UpdateUserAttributesCommandInput,
  UpdateUserAttributesCommandOutput,
} from "../commands/UpdateUserAttributesCommand";
import {
  UpdateUserPoolClientCommandInput,
  UpdateUserPoolClientCommandOutput,
} from "../commands/UpdateUserPoolClientCommand";
import {
  UpdateUserPoolCommandInput,
  UpdateUserPoolCommandOutput,
} from "../commands/UpdateUserPoolCommand";
import {
  UpdateUserPoolDomainCommandInput,
  UpdateUserPoolDomainCommandOutput,
} from "../commands/UpdateUserPoolDomainCommand";
import {
  VerifySoftwareTokenCommandInput,
  VerifySoftwareTokenCommandOutput,
} from "../commands/VerifySoftwareTokenCommand";
import {
  VerifyUserAttributeCommandInput,
  VerifyUserAttributeCommandOutput,
} from "../commands/VerifyUserAttributeCommand";
export declare const se_AddCustomAttributesCommand: (
  input: AddCustomAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminAddUserToGroupCommand: (
  input: AdminAddUserToGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminConfirmSignUpCommand: (
  input: AdminConfirmSignUpCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminCreateUserCommand: (
  input: AdminCreateUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminDeleteUserCommand: (
  input: AdminDeleteUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminDeleteUserAttributesCommand: (
  input: AdminDeleteUserAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminDisableProviderForUserCommand: (
  input: AdminDisableProviderForUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminDisableUserCommand: (
  input: AdminDisableUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminEnableUserCommand: (
  input: AdminEnableUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminForgetDeviceCommand: (
  input: AdminForgetDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminGetDeviceCommand: (
  input: AdminGetDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminGetUserCommand: (
  input: AdminGetUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminInitiateAuthCommand: (
  input: AdminInitiateAuthCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminLinkProviderForUserCommand: (
  input: AdminLinkProviderForUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminListDevicesCommand: (
  input: AdminListDevicesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminListGroupsForUserCommand: (
  input: AdminListGroupsForUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminListUserAuthEventsCommand: (
  input: AdminListUserAuthEventsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminRemoveUserFromGroupCommand: (
  input: AdminRemoveUserFromGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminResetUserPasswordCommand: (
  input: AdminResetUserPasswordCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminRespondToAuthChallengeCommand: (
  input: AdminRespondToAuthChallengeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminSetUserMFAPreferenceCommand: (
  input: AdminSetUserMFAPreferenceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminSetUserPasswordCommand: (
  input: AdminSetUserPasswordCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminSetUserSettingsCommand: (
  input: AdminSetUserSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminUpdateAuthEventFeedbackCommand: (
  input: AdminUpdateAuthEventFeedbackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminUpdateDeviceStatusCommand: (
  input: AdminUpdateDeviceStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminUpdateUserAttributesCommand: (
  input: AdminUpdateUserAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AdminUserGlobalSignOutCommand: (
  input: AdminUserGlobalSignOutCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_AssociateSoftwareTokenCommand: (
  input: AssociateSoftwareTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ChangePasswordCommand: (
  input: ChangePasswordCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CompleteWebAuthnRegistrationCommand: (
  input: CompleteWebAuthnRegistrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ConfirmDeviceCommand: (
  input: ConfirmDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ConfirmForgotPasswordCommand: (
  input: ConfirmForgotPasswordCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ConfirmSignUpCommand: (
  input: ConfirmSignUpCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateGroupCommand: (
  input: CreateGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateIdentityProviderCommand: (
  input: CreateIdentityProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateManagedLoginBrandingCommand: (
  input: CreateManagedLoginBrandingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateResourceServerCommand: (
  input: CreateResourceServerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateUserImportJobCommand: (
  input: CreateUserImportJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateUserPoolCommand: (
  input: CreateUserPoolCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateUserPoolClientCommand: (
  input: CreateUserPoolClientCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateUserPoolDomainCommand: (
  input: CreateUserPoolDomainCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteGroupCommand: (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteIdentityProviderCommand: (
  input: DeleteIdentityProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteManagedLoginBrandingCommand: (
  input: DeleteManagedLoginBrandingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteResourceServerCommand: (
  input: DeleteResourceServerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteUserCommand: (
  input: DeleteUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteUserAttributesCommand: (
  input: DeleteUserAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteUserPoolCommand: (
  input: DeleteUserPoolCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteUserPoolClientCommand: (
  input: DeleteUserPoolClientCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteUserPoolDomainCommand: (
  input: DeleteUserPoolDomainCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteWebAuthnCredentialCommand: (
  input: DeleteWebAuthnCredentialCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeIdentityProviderCommand: (
  input: DescribeIdentityProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeManagedLoginBrandingCommand: (
  input: DescribeManagedLoginBrandingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeManagedLoginBrandingByClientCommand: (
  input: DescribeManagedLoginBrandingByClientCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeResourceServerCommand: (
  input: DescribeResourceServerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeRiskConfigurationCommand: (
  input: DescribeRiskConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeUserImportJobCommand: (
  input: DescribeUserImportJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeUserPoolCommand: (
  input: DescribeUserPoolCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeUserPoolClientCommand: (
  input: DescribeUserPoolClientCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeUserPoolDomainCommand: (
  input: DescribeUserPoolDomainCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ForgetDeviceCommand: (
  input: ForgetDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ForgotPasswordCommand: (
  input: ForgotPasswordCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetCSVHeaderCommand: (
  input: GetCSVHeaderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetDeviceCommand: (
  input: GetDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetGroupCommand: (
  input: GetGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetIdentityProviderByIdentifierCommand: (
  input: GetIdentityProviderByIdentifierCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetLogDeliveryConfigurationCommand: (
  input: GetLogDeliveryConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetSigningCertificateCommand: (
  input: GetSigningCertificateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetUICustomizationCommand: (
  input: GetUICustomizationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetUserCommand: (
  input: GetUserCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetUserAttributeVerificationCodeCommand: (
  input: GetUserAttributeVerificationCodeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetUserAuthFactorsCommand: (
  input: GetUserAuthFactorsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetUserPoolMfaConfigCommand: (
  input: GetUserPoolMfaConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GlobalSignOutCommand: (
  input: GlobalSignOutCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_InitiateAuthCommand: (
  input: InitiateAuthCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListDevicesCommand: (
  input: ListDevicesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListGroupsCommand: (
  input: ListGroupsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListIdentityProvidersCommand: (
  input: ListIdentityProvidersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListResourceServersCommand: (
  input: ListResourceServersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListUserImportJobsCommand: (
  input: ListUserImportJobsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListUserPoolClientsCommand: (
  input: ListUserPoolClientsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListUserPoolsCommand: (
  input: ListUserPoolsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListUsersCommand: (
  input: ListUsersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListUsersInGroupCommand: (
  input: ListUsersInGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListWebAuthnCredentialsCommand: (
  input: ListWebAuthnCredentialsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ResendConfirmationCodeCommand: (
  input: ResendConfirmationCodeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_RespondToAuthChallengeCommand: (
  input: RespondToAuthChallengeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_RevokeTokenCommand: (
  input: RevokeTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SetLogDeliveryConfigurationCommand: (
  input: SetLogDeliveryConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SetRiskConfigurationCommand: (
  input: SetRiskConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SetUICustomizationCommand: (
  input: SetUICustomizationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SetUserMFAPreferenceCommand: (
  input: SetUserMFAPreferenceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SetUserPoolMfaConfigCommand: (
  input: SetUserPoolMfaConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SetUserSettingsCommand: (
  input: SetUserSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SignUpCommand: (
  input: SignUpCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StartUserImportJobCommand: (
  input: StartUserImportJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StartWebAuthnRegistrationCommand: (
  input: StartWebAuthnRegistrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StopUserImportJobCommand: (
  input: StopUserImportJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateAuthEventFeedbackCommand: (
  input: UpdateAuthEventFeedbackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateDeviceStatusCommand: (
  input: UpdateDeviceStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateGroupCommand: (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateIdentityProviderCommand: (
  input: UpdateIdentityProviderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateManagedLoginBrandingCommand: (
  input: UpdateManagedLoginBrandingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateResourceServerCommand: (
  input: UpdateResourceServerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateUserAttributesCommand: (
  input: UpdateUserAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateUserPoolCommand: (
  input: UpdateUserPoolCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateUserPoolClientCommand: (
  input: UpdateUserPoolClientCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateUserPoolDomainCommand: (
  input: UpdateUserPoolDomainCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_VerifySoftwareTokenCommand: (
  input: VerifySoftwareTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_VerifyUserAttributeCommand: (
  input: VerifyUserAttributeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const de_AddCustomAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AddCustomAttributesCommandOutput>;
export declare const de_AdminAddUserToGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminAddUserToGroupCommandOutput>;
export declare const de_AdminConfirmSignUpCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminConfirmSignUpCommandOutput>;
export declare const de_AdminCreateUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminCreateUserCommandOutput>;
export declare const de_AdminDeleteUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminDeleteUserCommandOutput>;
export declare const de_AdminDeleteUserAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminDeleteUserAttributesCommandOutput>;
export declare const de_AdminDisableProviderForUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminDisableProviderForUserCommandOutput>;
export declare const de_AdminDisableUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminDisableUserCommandOutput>;
export declare const de_AdminEnableUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminEnableUserCommandOutput>;
export declare const de_AdminForgetDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminForgetDeviceCommandOutput>;
export declare const de_AdminGetDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminGetDeviceCommandOutput>;
export declare const de_AdminGetUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminGetUserCommandOutput>;
export declare const de_AdminInitiateAuthCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminInitiateAuthCommandOutput>;
export declare const de_AdminLinkProviderForUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminLinkProviderForUserCommandOutput>;
export declare const de_AdminListDevicesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminListDevicesCommandOutput>;
export declare const de_AdminListGroupsForUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminListGroupsForUserCommandOutput>;
export declare const de_AdminListUserAuthEventsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminListUserAuthEventsCommandOutput>;
export declare const de_AdminRemoveUserFromGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminRemoveUserFromGroupCommandOutput>;
export declare const de_AdminResetUserPasswordCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminResetUserPasswordCommandOutput>;
export declare const de_AdminRespondToAuthChallengeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminRespondToAuthChallengeCommandOutput>;
export declare const de_AdminSetUserMFAPreferenceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminSetUserMFAPreferenceCommandOutput>;
export declare const de_AdminSetUserPasswordCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminSetUserPasswordCommandOutput>;
export declare const de_AdminSetUserSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminSetUserSettingsCommandOutput>;
export declare const de_AdminUpdateAuthEventFeedbackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminUpdateAuthEventFeedbackCommandOutput>;
export declare const de_AdminUpdateDeviceStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminUpdateDeviceStatusCommandOutput>;
export declare const de_AdminUpdateUserAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminUpdateUserAttributesCommandOutput>;
export declare const de_AdminUserGlobalSignOutCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AdminUserGlobalSignOutCommandOutput>;
export declare const de_AssociateSoftwareTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateSoftwareTokenCommandOutput>;
export declare const de_ChangePasswordCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ChangePasswordCommandOutput>;
export declare const de_CompleteWebAuthnRegistrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CompleteWebAuthnRegistrationCommandOutput>;
export declare const de_ConfirmDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ConfirmDeviceCommandOutput>;
export declare const de_ConfirmForgotPasswordCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ConfirmForgotPasswordCommandOutput>;
export declare const de_ConfirmSignUpCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ConfirmSignUpCommandOutput>;
export declare const de_CreateGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateGroupCommandOutput>;
export declare const de_CreateIdentityProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateIdentityProviderCommandOutput>;
export declare const de_CreateManagedLoginBrandingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateManagedLoginBrandingCommandOutput>;
export declare const de_CreateResourceServerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateResourceServerCommandOutput>;
export declare const de_CreateUserImportJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateUserImportJobCommandOutput>;
export declare const de_CreateUserPoolCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateUserPoolCommandOutput>;
export declare const de_CreateUserPoolClientCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateUserPoolClientCommandOutput>;
export declare const de_CreateUserPoolDomainCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateUserPoolDomainCommandOutput>;
export declare const de_DeleteGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteGroupCommandOutput>;
export declare const de_DeleteIdentityProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteIdentityProviderCommandOutput>;
export declare const de_DeleteManagedLoginBrandingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteManagedLoginBrandingCommandOutput>;
export declare const de_DeleteResourceServerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteResourceServerCommandOutput>;
export declare const de_DeleteUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserCommandOutput>;
export declare const de_DeleteUserAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserAttributesCommandOutput>;
export declare const de_DeleteUserPoolCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserPoolCommandOutput>;
export declare const de_DeleteUserPoolClientCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserPoolClientCommandOutput>;
export declare const de_DeleteUserPoolDomainCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteUserPoolDomainCommandOutput>;
export declare const de_DeleteWebAuthnCredentialCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteWebAuthnCredentialCommandOutput>;
export declare const de_DescribeIdentityProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeIdentityProviderCommandOutput>;
export declare const de_DescribeManagedLoginBrandingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeManagedLoginBrandingCommandOutput>;
export declare const de_DescribeManagedLoginBrandingByClientCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeManagedLoginBrandingByClientCommandOutput>;
export declare const de_DescribeResourceServerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeResourceServerCommandOutput>;
export declare const de_DescribeRiskConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeRiskConfigurationCommandOutput>;
export declare const de_DescribeUserImportJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeUserImportJobCommandOutput>;
export declare const de_DescribeUserPoolCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeUserPoolCommandOutput>;
export declare const de_DescribeUserPoolClientCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeUserPoolClientCommandOutput>;
export declare const de_DescribeUserPoolDomainCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeUserPoolDomainCommandOutput>;
export declare const de_ForgetDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ForgetDeviceCommandOutput>;
export declare const de_ForgotPasswordCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ForgotPasswordCommandOutput>;
export declare const de_GetCSVHeaderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetCSVHeaderCommandOutput>;
export declare const de_GetDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDeviceCommandOutput>;
export declare const de_GetGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetGroupCommandOutput>;
export declare const de_GetIdentityProviderByIdentifierCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetIdentityProviderByIdentifierCommandOutput>;
export declare const de_GetLogDeliveryConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetLogDeliveryConfigurationCommandOutput>;
export declare const de_GetSigningCertificateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetSigningCertificateCommandOutput>;
export declare const de_GetUICustomizationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetUICustomizationCommandOutput>;
export declare const de_GetUserCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetUserCommandOutput>;
export declare const de_GetUserAttributeVerificationCodeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetUserAttributeVerificationCodeCommandOutput>;
export declare const de_GetUserAuthFactorsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetUserAuthFactorsCommandOutput>;
export declare const de_GetUserPoolMfaConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetUserPoolMfaConfigCommandOutput>;
export declare const de_GlobalSignOutCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GlobalSignOutCommandOutput>;
export declare const de_InitiateAuthCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<InitiateAuthCommandOutput>;
export declare const de_ListDevicesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDevicesCommandOutput>;
export declare const de_ListGroupsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListGroupsCommandOutput>;
export declare const de_ListIdentityProvidersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListIdentityProvidersCommandOutput>;
export declare const de_ListResourceServersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListResourceServersCommandOutput>;
export declare const de_ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const de_ListUserImportJobsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListUserImportJobsCommandOutput>;
export declare const de_ListUserPoolClientsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListUserPoolClientsCommandOutput>;
export declare const de_ListUserPoolsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListUserPoolsCommandOutput>;
export declare const de_ListUsersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListUsersCommandOutput>;
export declare const de_ListUsersInGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListUsersInGroupCommandOutput>;
export declare const de_ListWebAuthnCredentialsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListWebAuthnCredentialsCommandOutput>;
export declare const de_ResendConfirmationCodeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ResendConfirmationCodeCommandOutput>;
export declare const de_RespondToAuthChallengeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RespondToAuthChallengeCommandOutput>;
export declare const de_RevokeTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RevokeTokenCommandOutput>;
export declare const de_SetLogDeliveryConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetLogDeliveryConfigurationCommandOutput>;
export declare const de_SetRiskConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetRiskConfigurationCommandOutput>;
export declare const de_SetUICustomizationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetUICustomizationCommandOutput>;
export declare const de_SetUserMFAPreferenceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetUserMFAPreferenceCommandOutput>;
export declare const de_SetUserPoolMfaConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetUserPoolMfaConfigCommandOutput>;
export declare const de_SetUserSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetUserSettingsCommandOutput>;
export declare const de_SignUpCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SignUpCommandOutput>;
export declare const de_StartUserImportJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartUserImportJobCommandOutput>;
export declare const de_StartWebAuthnRegistrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartWebAuthnRegistrationCommandOutput>;
export declare const de_StopUserImportJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopUserImportJobCommandOutput>;
export declare const de_TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const de_UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const de_UpdateAuthEventFeedbackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAuthEventFeedbackCommandOutput>;
export declare const de_UpdateDeviceStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDeviceStatusCommandOutput>;
export declare const de_UpdateGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateGroupCommandOutput>;
export declare const de_UpdateIdentityProviderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateIdentityProviderCommandOutput>;
export declare const de_UpdateManagedLoginBrandingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateManagedLoginBrandingCommandOutput>;
export declare const de_UpdateResourceServerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateResourceServerCommandOutput>;
export declare const de_UpdateUserAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateUserAttributesCommandOutput>;
export declare const de_UpdateUserPoolCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateUserPoolCommandOutput>;
export declare const de_UpdateUserPoolClientCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateUserPoolClientCommandOutput>;
export declare const de_UpdateUserPoolDomainCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateUserPoolDomainCommandOutput>;
export declare const de_VerifySoftwareTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<VerifySoftwareTokenCommandOutput>;
export declare const de_VerifyUserAttributeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<VerifyUserAttributeCommandOutput>;
