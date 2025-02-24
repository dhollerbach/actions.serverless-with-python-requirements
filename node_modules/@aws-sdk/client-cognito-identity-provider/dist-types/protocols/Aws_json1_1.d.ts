import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import { AddCustomAttributesCommandInput, AddCustomAttributesCommandOutput } from "../commands/AddCustomAttributesCommand";
import { AdminAddUserToGroupCommandInput, AdminAddUserToGroupCommandOutput } from "../commands/AdminAddUserToGroupCommand";
import { AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput } from "../commands/AdminConfirmSignUpCommand";
import { AdminCreateUserCommandInput, AdminCreateUserCommandOutput } from "../commands/AdminCreateUserCommand";
import { AdminDeleteUserAttributesCommandInput, AdminDeleteUserAttributesCommandOutput } from "../commands/AdminDeleteUserAttributesCommand";
import { AdminDeleteUserCommandInput, AdminDeleteUserCommandOutput } from "../commands/AdminDeleteUserCommand";
import { AdminDisableProviderForUserCommandInput, AdminDisableProviderForUserCommandOutput } from "../commands/AdminDisableProviderForUserCommand";
import { AdminDisableUserCommandInput, AdminDisableUserCommandOutput } from "../commands/AdminDisableUserCommand";
import { AdminEnableUserCommandInput, AdminEnableUserCommandOutput } from "../commands/AdminEnableUserCommand";
import { AdminForgetDeviceCommandInput, AdminForgetDeviceCommandOutput } from "../commands/AdminForgetDeviceCommand";
import { AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput } from "../commands/AdminGetDeviceCommand";
import { AdminGetUserCommandInput, AdminGetUserCommandOutput } from "../commands/AdminGetUserCommand";
import { AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput } from "../commands/AdminInitiateAuthCommand";
import { AdminLinkProviderForUserCommandInput, AdminLinkProviderForUserCommandOutput } from "../commands/AdminLinkProviderForUserCommand";
import { AdminListDevicesCommandInput, AdminListDevicesCommandOutput } from "../commands/AdminListDevicesCommand";
import { AdminListGroupsForUserCommandInput, AdminListGroupsForUserCommandOutput } from "../commands/AdminListGroupsForUserCommand";
import { AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput } from "../commands/AdminListUserAuthEventsCommand";
import { AdminRemoveUserFromGroupCommandInput, AdminRemoveUserFromGroupCommandOutput } from "../commands/AdminRemoveUserFromGroupCommand";
import { AdminResetUserPasswordCommandInput, AdminResetUserPasswordCommandOutput } from "../commands/AdminResetUserPasswordCommand";
import { AdminRespondToAuthChallengeCommandInput, AdminRespondToAuthChallengeCommandOutput } from "../commands/AdminRespondToAuthChallengeCommand";
import { AdminSetUserMFAPreferenceCommandInput, AdminSetUserMFAPreferenceCommandOutput } from "../commands/AdminSetUserMFAPreferenceCommand";
import { AdminSetUserPasswordCommandInput, AdminSetUserPasswordCommandOutput } from "../commands/AdminSetUserPasswordCommand";
import { AdminSetUserSettingsCommandInput, AdminSetUserSettingsCommandOutput } from "../commands/AdminSetUserSettingsCommand";
import { AdminUpdateAuthEventFeedbackCommandInput, AdminUpdateAuthEventFeedbackCommandOutput } from "../commands/AdminUpdateAuthEventFeedbackCommand";
import { AdminUpdateDeviceStatusCommandInput, AdminUpdateDeviceStatusCommandOutput } from "../commands/AdminUpdateDeviceStatusCommand";
import { AdminUpdateUserAttributesCommandInput, AdminUpdateUserAttributesCommandOutput } from "../commands/AdminUpdateUserAttributesCommand";
import { AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput } from "../commands/AdminUserGlobalSignOutCommand";
import { AssociateSoftwareTokenCommandInput, AssociateSoftwareTokenCommandOutput } from "../commands/AssociateSoftwareTokenCommand";
import { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "../commands/ChangePasswordCommand";
import { CompleteWebAuthnRegistrationCommandInput, CompleteWebAuthnRegistrationCommandOutput } from "../commands/CompleteWebAuthnRegistrationCommand";
import { ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput } from "../commands/ConfirmDeviceCommand";
import { ConfirmForgotPasswordCommandInput, ConfirmForgotPasswordCommandOutput } from "../commands/ConfirmForgotPasswordCommand";
import { ConfirmSignUpCommandInput, ConfirmSignUpCommandOutput } from "../commands/ConfirmSignUpCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import { CreateIdentityProviderCommandInput, CreateIdentityProviderCommandOutput } from "../commands/CreateIdentityProviderCommand";
import { CreateManagedLoginBrandingCommandInput, CreateManagedLoginBrandingCommandOutput } from "../commands/CreateManagedLoginBrandingCommand";
import { CreateResourceServerCommandInput, CreateResourceServerCommandOutput } from "../commands/CreateResourceServerCommand";
import { CreateUserImportJobCommandInput, CreateUserImportJobCommandOutput } from "../commands/CreateUserImportJobCommand";
import { CreateUserPoolClientCommandInput, CreateUserPoolClientCommandOutput } from "../commands/CreateUserPoolClientCommand";
import { CreateUserPoolCommandInput, CreateUserPoolCommandOutput } from "../commands/CreateUserPoolCommand";
import { CreateUserPoolDomainCommandInput, CreateUserPoolDomainCommandOutput } from "../commands/CreateUserPoolDomainCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import { DeleteIdentityProviderCommandInput, DeleteIdentityProviderCommandOutput } from "../commands/DeleteIdentityProviderCommand";
import { DeleteManagedLoginBrandingCommandInput, DeleteManagedLoginBrandingCommandOutput } from "../commands/DeleteManagedLoginBrandingCommand";
import { DeleteResourceServerCommandInput, DeleteResourceServerCommandOutput } from "../commands/DeleteResourceServerCommand";
import { DeleteUserAttributesCommandInput, DeleteUserAttributesCommandOutput } from "../commands/DeleteUserAttributesCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DeleteUserPoolClientCommandInput, DeleteUserPoolClientCommandOutput } from "../commands/DeleteUserPoolClientCommand";
import { DeleteUserPoolCommandInput, DeleteUserPoolCommandOutput } from "../commands/DeleteUserPoolCommand";
import { DeleteUserPoolDomainCommandInput, DeleteUserPoolDomainCommandOutput } from "../commands/DeleteUserPoolDomainCommand";
import { DeleteWebAuthnCredentialCommandInput, DeleteWebAuthnCredentialCommandOutput } from "../commands/DeleteWebAuthnCredentialCommand";
import { DescribeIdentityProviderCommandInput, DescribeIdentityProviderCommandOutput } from "../commands/DescribeIdentityProviderCommand";
import { DescribeManagedLoginBrandingByClientCommandInput, DescribeManagedLoginBrandingByClientCommandOutput } from "../commands/DescribeManagedLoginBrandingByClientCommand";
import { DescribeManagedLoginBrandingCommandInput, DescribeManagedLoginBrandingCommandOutput } from "../commands/DescribeManagedLoginBrandingCommand";
import { DescribeResourceServerCommandInput, DescribeResourceServerCommandOutput } from "../commands/DescribeResourceServerCommand";
import { DescribeRiskConfigurationCommandInput, DescribeRiskConfigurationCommandOutput } from "../commands/DescribeRiskConfigurationCommand";
import { DescribeUserImportJobCommandInput, DescribeUserImportJobCommandOutput } from "../commands/DescribeUserImportJobCommand";
import { DescribeUserPoolClientCommandInput, DescribeUserPoolClientCommandOutput } from "../commands/DescribeUserPoolClientCommand";
import { DescribeUserPoolCommandInput, DescribeUserPoolCommandOutput } from "../commands/DescribeUserPoolCommand";
import { DescribeUserPoolDomainCommandInput, DescribeUserPoolDomainCommandOutput } from "../commands/DescribeUserPoolDomainCommand";
import { ForgetDeviceCommandInput, ForgetDeviceCommandOutput } from "../commands/ForgetDeviceCommand";
import { ForgotPasswordCommandInput, ForgotPasswordCommandOutput } from "../commands/ForgotPasswordCommand";
import { GetCSVHeaderCommandInput, GetCSVHeaderCommandOutput } from "../commands/GetCSVHeaderCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "../commands/GetDeviceCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { GetIdentityProviderByIdentifierCommandInput, GetIdentityProviderByIdentifierCommandOutput } from "../commands/GetIdentityProviderByIdentifierCommand";
import { GetLogDeliveryConfigurationCommandInput, GetLogDeliveryConfigurationCommandOutput } from "../commands/GetLogDeliveryConfigurationCommand";
import { GetSigningCertificateCommandInput, GetSigningCertificateCommandOutput } from "../commands/GetSigningCertificateCommand";
import { GetUICustomizationCommandInput, GetUICustomizationCommandOutput } from "../commands/GetUICustomizationCommand";
import { GetUserAttributeVerificationCodeCommandInput, GetUserAttributeVerificationCodeCommandOutput } from "../commands/GetUserAttributeVerificationCodeCommand";
import { GetUserAuthFactorsCommandInput, GetUserAuthFactorsCommandOutput } from "../commands/GetUserAuthFactorsCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "../commands/GetUserCommand";
import { GetUserPoolMfaConfigCommandInput, GetUserPoolMfaConfigCommandOutput } from "../commands/GetUserPoolMfaConfigCommand";
import { GlobalSignOutCommandInput, GlobalSignOutCommandOutput } from "../commands/GlobalSignOutCommand";
import { InitiateAuthCommandInput, InitiateAuthCommandOutput } from "../commands/InitiateAuthCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { ListIdentityProvidersCommandInput, ListIdentityProvidersCommandOutput } from "../commands/ListIdentityProvidersCommand";
import { ListResourceServersCommandInput, ListResourceServersCommandOutput } from "../commands/ListResourceServersCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { ListUserImportJobsCommandInput, ListUserImportJobsCommandOutput } from "../commands/ListUserImportJobsCommand";
import { ListUserPoolClientsCommandInput, ListUserPoolClientsCommandOutput } from "../commands/ListUserPoolClientsCommand";
import { ListUserPoolsCommandInput, ListUserPoolsCommandOutput } from "../commands/ListUserPoolsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput } from "../commands/ListUsersInGroupCommand";
import { ListWebAuthnCredentialsCommandInput, ListWebAuthnCredentialsCommandOutput } from "../commands/ListWebAuthnCredentialsCommand";
import { ResendConfirmationCodeCommandInput, ResendConfirmationCodeCommandOutput } from "../commands/ResendConfirmationCodeCommand";
import { RespondToAuthChallengeCommandInput, RespondToAuthChallengeCommandOutput } from "../commands/RespondToAuthChallengeCommand";
import { RevokeTokenCommandInput, RevokeTokenCommandOutput } from "../commands/RevokeTokenCommand";
import { SetLogDeliveryConfigurationCommandInput, SetLogDeliveryConfigurationCommandOutput } from "../commands/SetLogDeliveryConfigurationCommand";
import { SetRiskConfigurationCommandInput, SetRiskConfigurationCommandOutput } from "../commands/SetRiskConfigurationCommand";
import { SetUICustomizationCommandInput, SetUICustomizationCommandOutput } from "../commands/SetUICustomizationCommand";
import { SetUserMFAPreferenceCommandInput, SetUserMFAPreferenceCommandOutput } from "../commands/SetUserMFAPreferenceCommand";
import { SetUserPoolMfaConfigCommandInput, SetUserPoolMfaConfigCommandOutput } from "../commands/SetUserPoolMfaConfigCommand";
import { SetUserSettingsCommandInput, SetUserSettingsCommandOutput } from "../commands/SetUserSettingsCommand";
import { SignUpCommandInput, SignUpCommandOutput } from "../commands/SignUpCommand";
import { StartUserImportJobCommandInput, StartUserImportJobCommandOutput } from "../commands/StartUserImportJobCommand";
import { StartWebAuthnRegistrationCommandInput, StartWebAuthnRegistrationCommandOutput } from "../commands/StartWebAuthnRegistrationCommand";
import { StopUserImportJobCommandInput, StopUserImportJobCommandOutput } from "../commands/StopUserImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAuthEventFeedbackCommandInput, UpdateAuthEventFeedbackCommandOutput } from "../commands/UpdateAuthEventFeedbackCommand";
import { UpdateDeviceStatusCommandInput, UpdateDeviceStatusCommandOutput } from "../commands/UpdateDeviceStatusCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import { UpdateIdentityProviderCommandInput, UpdateIdentityProviderCommandOutput } from "../commands/UpdateIdentityProviderCommand";
import { UpdateManagedLoginBrandingCommandInput, UpdateManagedLoginBrandingCommandOutput } from "../commands/UpdateManagedLoginBrandingCommand";
import { UpdateResourceServerCommandInput, UpdateResourceServerCommandOutput } from "../commands/UpdateResourceServerCommand";
import { UpdateUserAttributesCommandInput, UpdateUserAttributesCommandOutput } from "../commands/UpdateUserAttributesCommand";
import { UpdateUserPoolClientCommandInput, UpdateUserPoolClientCommandOutput } from "../commands/UpdateUserPoolClientCommand";
import { UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput } from "../commands/UpdateUserPoolCommand";
import { UpdateUserPoolDomainCommandInput, UpdateUserPoolDomainCommandOutput } from "../commands/UpdateUserPoolDomainCommand";
import { VerifySoftwareTokenCommandInput, VerifySoftwareTokenCommandOutput } from "../commands/VerifySoftwareTokenCommand";
import { VerifyUserAttributeCommandInput, VerifyUserAttributeCommandOutput } from "../commands/VerifyUserAttributeCommand";
/**
 * serializeAws_json1_1AddCustomAttributesCommand
 */
export declare const se_AddCustomAttributesCommand: (input: AddCustomAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminAddUserToGroupCommand
 */
export declare const se_AdminAddUserToGroupCommand: (input: AdminAddUserToGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminConfirmSignUpCommand
 */
export declare const se_AdminConfirmSignUpCommand: (input: AdminConfirmSignUpCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminCreateUserCommand
 */
export declare const se_AdminCreateUserCommand: (input: AdminCreateUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminDeleteUserCommand
 */
export declare const se_AdminDeleteUserCommand: (input: AdminDeleteUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminDeleteUserAttributesCommand
 */
export declare const se_AdminDeleteUserAttributesCommand: (input: AdminDeleteUserAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminDisableProviderForUserCommand
 */
export declare const se_AdminDisableProviderForUserCommand: (input: AdminDisableProviderForUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminDisableUserCommand
 */
export declare const se_AdminDisableUserCommand: (input: AdminDisableUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminEnableUserCommand
 */
export declare const se_AdminEnableUserCommand: (input: AdminEnableUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminForgetDeviceCommand
 */
export declare const se_AdminForgetDeviceCommand: (input: AdminForgetDeviceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminGetDeviceCommand
 */
export declare const se_AdminGetDeviceCommand: (input: AdminGetDeviceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminGetUserCommand
 */
export declare const se_AdminGetUserCommand: (input: AdminGetUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminInitiateAuthCommand
 */
export declare const se_AdminInitiateAuthCommand: (input: AdminInitiateAuthCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminLinkProviderForUserCommand
 */
export declare const se_AdminLinkProviderForUserCommand: (input: AdminLinkProviderForUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminListDevicesCommand
 */
export declare const se_AdminListDevicesCommand: (input: AdminListDevicesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminListGroupsForUserCommand
 */
export declare const se_AdminListGroupsForUserCommand: (input: AdminListGroupsForUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminListUserAuthEventsCommand
 */
export declare const se_AdminListUserAuthEventsCommand: (input: AdminListUserAuthEventsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminRemoveUserFromGroupCommand
 */
export declare const se_AdminRemoveUserFromGroupCommand: (input: AdminRemoveUserFromGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminResetUserPasswordCommand
 */
export declare const se_AdminResetUserPasswordCommand: (input: AdminResetUserPasswordCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminRespondToAuthChallengeCommand
 */
export declare const se_AdminRespondToAuthChallengeCommand: (input: AdminRespondToAuthChallengeCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminSetUserMFAPreferenceCommand
 */
export declare const se_AdminSetUserMFAPreferenceCommand: (input: AdminSetUserMFAPreferenceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminSetUserPasswordCommand
 */
export declare const se_AdminSetUserPasswordCommand: (input: AdminSetUserPasswordCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminSetUserSettingsCommand
 */
export declare const se_AdminSetUserSettingsCommand: (input: AdminSetUserSettingsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand
 */
export declare const se_AdminUpdateAuthEventFeedbackCommand: (input: AdminUpdateAuthEventFeedbackCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminUpdateDeviceStatusCommand
 */
export declare const se_AdminUpdateDeviceStatusCommand: (input: AdminUpdateDeviceStatusCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminUpdateUserAttributesCommand
 */
export declare const se_AdminUpdateUserAttributesCommand: (input: AdminUpdateUserAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AdminUserGlobalSignOutCommand
 */
export declare const se_AdminUserGlobalSignOutCommand: (input: AdminUserGlobalSignOutCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1AssociateSoftwareTokenCommand
 */
export declare const se_AssociateSoftwareTokenCommand: (input: AssociateSoftwareTokenCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ChangePasswordCommand
 */
export declare const se_ChangePasswordCommand: (input: ChangePasswordCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CompleteWebAuthnRegistrationCommand
 */
export declare const se_CompleteWebAuthnRegistrationCommand: (input: CompleteWebAuthnRegistrationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ConfirmDeviceCommand
 */
export declare const se_ConfirmDeviceCommand: (input: ConfirmDeviceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ConfirmForgotPasswordCommand
 */
export declare const se_ConfirmForgotPasswordCommand: (input: ConfirmForgotPasswordCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ConfirmSignUpCommand
 */
export declare const se_ConfirmSignUpCommand: (input: ConfirmSignUpCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateGroupCommand
 */
export declare const se_CreateGroupCommand: (input: CreateGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateIdentityProviderCommand
 */
export declare const se_CreateIdentityProviderCommand: (input: CreateIdentityProviderCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateManagedLoginBrandingCommand
 */
export declare const se_CreateManagedLoginBrandingCommand: (input: CreateManagedLoginBrandingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateResourceServerCommand
 */
export declare const se_CreateResourceServerCommand: (input: CreateResourceServerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateUserImportJobCommand
 */
export declare const se_CreateUserImportJobCommand: (input: CreateUserImportJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateUserPoolCommand
 */
export declare const se_CreateUserPoolCommand: (input: CreateUserPoolCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateUserPoolClientCommand
 */
export declare const se_CreateUserPoolClientCommand: (input: CreateUserPoolClientCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateUserPoolDomainCommand
 */
export declare const se_CreateUserPoolDomainCommand: (input: CreateUserPoolDomainCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteGroupCommand
 */
export declare const se_DeleteGroupCommand: (input: DeleteGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteIdentityProviderCommand
 */
export declare const se_DeleteIdentityProviderCommand: (input: DeleteIdentityProviderCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteManagedLoginBrandingCommand
 */
export declare const se_DeleteManagedLoginBrandingCommand: (input: DeleteManagedLoginBrandingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteResourceServerCommand
 */
export declare const se_DeleteResourceServerCommand: (input: DeleteResourceServerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteUserCommand
 */
export declare const se_DeleteUserCommand: (input: DeleteUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteUserAttributesCommand
 */
export declare const se_DeleteUserAttributesCommand: (input: DeleteUserAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteUserPoolCommand
 */
export declare const se_DeleteUserPoolCommand: (input: DeleteUserPoolCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteUserPoolClientCommand
 */
export declare const se_DeleteUserPoolClientCommand: (input: DeleteUserPoolClientCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteUserPoolDomainCommand
 */
export declare const se_DeleteUserPoolDomainCommand: (input: DeleteUserPoolDomainCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteWebAuthnCredentialCommand
 */
export declare const se_DeleteWebAuthnCredentialCommand: (input: DeleteWebAuthnCredentialCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeIdentityProviderCommand
 */
export declare const se_DescribeIdentityProviderCommand: (input: DescribeIdentityProviderCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeManagedLoginBrandingCommand
 */
export declare const se_DescribeManagedLoginBrandingCommand: (input: DescribeManagedLoginBrandingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeManagedLoginBrandingByClientCommand
 */
export declare const se_DescribeManagedLoginBrandingByClientCommand: (input: DescribeManagedLoginBrandingByClientCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeResourceServerCommand
 */
export declare const se_DescribeResourceServerCommand: (input: DescribeResourceServerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeRiskConfigurationCommand
 */
export declare const se_DescribeRiskConfigurationCommand: (input: DescribeRiskConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeUserImportJobCommand
 */
export declare const se_DescribeUserImportJobCommand: (input: DescribeUserImportJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeUserPoolCommand
 */
export declare const se_DescribeUserPoolCommand: (input: DescribeUserPoolCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeUserPoolClientCommand
 */
export declare const se_DescribeUserPoolClientCommand: (input: DescribeUserPoolClientCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeUserPoolDomainCommand
 */
export declare const se_DescribeUserPoolDomainCommand: (input: DescribeUserPoolDomainCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ForgetDeviceCommand
 */
export declare const se_ForgetDeviceCommand: (input: ForgetDeviceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ForgotPasswordCommand
 */
export declare const se_ForgotPasswordCommand: (input: ForgotPasswordCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetCSVHeaderCommand
 */
export declare const se_GetCSVHeaderCommand: (input: GetCSVHeaderCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetDeviceCommand
 */
export declare const se_GetDeviceCommand: (input: GetDeviceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetGroupCommand
 */
export declare const se_GetGroupCommand: (input: GetGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetIdentityProviderByIdentifierCommand
 */
export declare const se_GetIdentityProviderByIdentifierCommand: (input: GetIdentityProviderByIdentifierCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetLogDeliveryConfigurationCommand
 */
export declare const se_GetLogDeliveryConfigurationCommand: (input: GetLogDeliveryConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetSigningCertificateCommand
 */
export declare const se_GetSigningCertificateCommand: (input: GetSigningCertificateCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetUICustomizationCommand
 */
export declare const se_GetUICustomizationCommand: (input: GetUICustomizationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetUserCommand
 */
export declare const se_GetUserCommand: (input: GetUserCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetUserAttributeVerificationCodeCommand
 */
export declare const se_GetUserAttributeVerificationCodeCommand: (input: GetUserAttributeVerificationCodeCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetUserAuthFactorsCommand
 */
export declare const se_GetUserAuthFactorsCommand: (input: GetUserAuthFactorsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetUserPoolMfaConfigCommand
 */
export declare const se_GetUserPoolMfaConfigCommand: (input: GetUserPoolMfaConfigCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GlobalSignOutCommand
 */
export declare const se_GlobalSignOutCommand: (input: GlobalSignOutCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1InitiateAuthCommand
 */
export declare const se_InitiateAuthCommand: (input: InitiateAuthCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListDevicesCommand
 */
export declare const se_ListDevicesCommand: (input: ListDevicesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListGroupsCommand
 */
export declare const se_ListGroupsCommand: (input: ListGroupsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListIdentityProvidersCommand
 */
export declare const se_ListIdentityProvidersCommand: (input: ListIdentityProvidersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListResourceServersCommand
 */
export declare const se_ListResourceServersCommand: (input: ListResourceServersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export declare const se_ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListUserImportJobsCommand
 */
export declare const se_ListUserImportJobsCommand: (input: ListUserImportJobsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListUserPoolClientsCommand
 */
export declare const se_ListUserPoolClientsCommand: (input: ListUserPoolClientsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListUserPoolsCommand
 */
export declare const se_ListUserPoolsCommand: (input: ListUserPoolsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListUsersCommand
 */
export declare const se_ListUsersCommand: (input: ListUsersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListUsersInGroupCommand
 */
export declare const se_ListUsersInGroupCommand: (input: ListUsersInGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListWebAuthnCredentialsCommand
 */
export declare const se_ListWebAuthnCredentialsCommand: (input: ListWebAuthnCredentialsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ResendConfirmationCodeCommand
 */
export declare const se_ResendConfirmationCodeCommand: (input: ResendConfirmationCodeCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1RespondToAuthChallengeCommand
 */
export declare const se_RespondToAuthChallengeCommand: (input: RespondToAuthChallengeCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1RevokeTokenCommand
 */
export declare const se_RevokeTokenCommand: (input: RevokeTokenCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1SetLogDeliveryConfigurationCommand
 */
export declare const se_SetLogDeliveryConfigurationCommand: (input: SetLogDeliveryConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1SetRiskConfigurationCommand
 */
export declare const se_SetRiskConfigurationCommand: (input: SetRiskConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1SetUICustomizationCommand
 */
export declare const se_SetUICustomizationCommand: (input: SetUICustomizationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1SetUserMFAPreferenceCommand
 */
export declare const se_SetUserMFAPreferenceCommand: (input: SetUserMFAPreferenceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1SetUserPoolMfaConfigCommand
 */
export declare const se_SetUserPoolMfaConfigCommand: (input: SetUserPoolMfaConfigCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1SetUserSettingsCommand
 */
export declare const se_SetUserSettingsCommand: (input: SetUserSettingsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1SignUpCommand
 */
export declare const se_SignUpCommand: (input: SignUpCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StartUserImportJobCommand
 */
export declare const se_StartUserImportJobCommand: (input: StartUserImportJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StartWebAuthnRegistrationCommand
 */
export declare const se_StartWebAuthnRegistrationCommand: (input: StartWebAuthnRegistrationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StopUserImportJobCommand
 */
export declare const se_StopUserImportJobCommand: (input: StopUserImportJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1TagResourceCommand
 */
export declare const se_TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UntagResourceCommand
 */
export declare const se_UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateAuthEventFeedbackCommand
 */
export declare const se_UpdateAuthEventFeedbackCommand: (input: UpdateAuthEventFeedbackCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateDeviceStatusCommand
 */
export declare const se_UpdateDeviceStatusCommand: (input: UpdateDeviceStatusCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateGroupCommand
 */
export declare const se_UpdateGroupCommand: (input: UpdateGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateIdentityProviderCommand
 */
export declare const se_UpdateIdentityProviderCommand: (input: UpdateIdentityProviderCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateManagedLoginBrandingCommand
 */
export declare const se_UpdateManagedLoginBrandingCommand: (input: UpdateManagedLoginBrandingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateResourceServerCommand
 */
export declare const se_UpdateResourceServerCommand: (input: UpdateResourceServerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateUserAttributesCommand
 */
export declare const se_UpdateUserAttributesCommand: (input: UpdateUserAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateUserPoolCommand
 */
export declare const se_UpdateUserPoolCommand: (input: UpdateUserPoolCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateUserPoolClientCommand
 */
export declare const se_UpdateUserPoolClientCommand: (input: UpdateUserPoolClientCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateUserPoolDomainCommand
 */
export declare const se_UpdateUserPoolDomainCommand: (input: UpdateUserPoolDomainCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1VerifySoftwareTokenCommand
 */
export declare const se_VerifySoftwareTokenCommand: (input: VerifySoftwareTokenCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1VerifyUserAttributeCommand
 */
export declare const se_VerifyUserAttributeCommand: (input: VerifyUserAttributeCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * deserializeAws_json1_1AddCustomAttributesCommand
 */
export declare const de_AddCustomAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AddCustomAttributesCommandOutput>;
/**
 * deserializeAws_json1_1AdminAddUserToGroupCommand
 */
export declare const de_AdminAddUserToGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminAddUserToGroupCommandOutput>;
/**
 * deserializeAws_json1_1AdminConfirmSignUpCommand
 */
export declare const de_AdminConfirmSignUpCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminConfirmSignUpCommandOutput>;
/**
 * deserializeAws_json1_1AdminCreateUserCommand
 */
export declare const de_AdminCreateUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminCreateUserCommandOutput>;
/**
 * deserializeAws_json1_1AdminDeleteUserCommand
 */
export declare const de_AdminDeleteUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminDeleteUserCommandOutput>;
/**
 * deserializeAws_json1_1AdminDeleteUserAttributesCommand
 */
export declare const de_AdminDeleteUserAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminDeleteUserAttributesCommandOutput>;
/**
 * deserializeAws_json1_1AdminDisableProviderForUserCommand
 */
export declare const de_AdminDisableProviderForUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminDisableProviderForUserCommandOutput>;
/**
 * deserializeAws_json1_1AdminDisableUserCommand
 */
export declare const de_AdminDisableUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminDisableUserCommandOutput>;
/**
 * deserializeAws_json1_1AdminEnableUserCommand
 */
export declare const de_AdminEnableUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminEnableUserCommandOutput>;
/**
 * deserializeAws_json1_1AdminForgetDeviceCommand
 */
export declare const de_AdminForgetDeviceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminForgetDeviceCommandOutput>;
/**
 * deserializeAws_json1_1AdminGetDeviceCommand
 */
export declare const de_AdminGetDeviceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminGetDeviceCommandOutput>;
/**
 * deserializeAws_json1_1AdminGetUserCommand
 */
export declare const de_AdminGetUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminGetUserCommandOutput>;
/**
 * deserializeAws_json1_1AdminInitiateAuthCommand
 */
export declare const de_AdminInitiateAuthCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminInitiateAuthCommandOutput>;
/**
 * deserializeAws_json1_1AdminLinkProviderForUserCommand
 */
export declare const de_AdminLinkProviderForUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminLinkProviderForUserCommandOutput>;
/**
 * deserializeAws_json1_1AdminListDevicesCommand
 */
export declare const de_AdminListDevicesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminListDevicesCommandOutput>;
/**
 * deserializeAws_json1_1AdminListGroupsForUserCommand
 */
export declare const de_AdminListGroupsForUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminListGroupsForUserCommandOutput>;
/**
 * deserializeAws_json1_1AdminListUserAuthEventsCommand
 */
export declare const de_AdminListUserAuthEventsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminListUserAuthEventsCommandOutput>;
/**
 * deserializeAws_json1_1AdminRemoveUserFromGroupCommand
 */
export declare const de_AdminRemoveUserFromGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminRemoveUserFromGroupCommandOutput>;
/**
 * deserializeAws_json1_1AdminResetUserPasswordCommand
 */
export declare const de_AdminResetUserPasswordCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminResetUserPasswordCommandOutput>;
/**
 * deserializeAws_json1_1AdminRespondToAuthChallengeCommand
 */
export declare const de_AdminRespondToAuthChallengeCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminRespondToAuthChallengeCommandOutput>;
/**
 * deserializeAws_json1_1AdminSetUserMFAPreferenceCommand
 */
export declare const de_AdminSetUserMFAPreferenceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminSetUserMFAPreferenceCommandOutput>;
/**
 * deserializeAws_json1_1AdminSetUserPasswordCommand
 */
export declare const de_AdminSetUserPasswordCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminSetUserPasswordCommandOutput>;
/**
 * deserializeAws_json1_1AdminSetUserSettingsCommand
 */
export declare const de_AdminSetUserSettingsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminSetUserSettingsCommandOutput>;
/**
 * deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand
 */
export declare const de_AdminUpdateAuthEventFeedbackCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminUpdateAuthEventFeedbackCommandOutput>;
/**
 * deserializeAws_json1_1AdminUpdateDeviceStatusCommand
 */
export declare const de_AdminUpdateDeviceStatusCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminUpdateDeviceStatusCommandOutput>;
/**
 * deserializeAws_json1_1AdminUpdateUserAttributesCommand
 */
export declare const de_AdminUpdateUserAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminUpdateUserAttributesCommandOutput>;
/**
 * deserializeAws_json1_1AdminUserGlobalSignOutCommand
 */
export declare const de_AdminUserGlobalSignOutCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AdminUserGlobalSignOutCommandOutput>;
/**
 * deserializeAws_json1_1AssociateSoftwareTokenCommand
 */
export declare const de_AssociateSoftwareTokenCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateSoftwareTokenCommandOutput>;
/**
 * deserializeAws_json1_1ChangePasswordCommand
 */
export declare const de_ChangePasswordCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ChangePasswordCommandOutput>;
/**
 * deserializeAws_json1_1CompleteWebAuthnRegistrationCommand
 */
export declare const de_CompleteWebAuthnRegistrationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CompleteWebAuthnRegistrationCommandOutput>;
/**
 * deserializeAws_json1_1ConfirmDeviceCommand
 */
export declare const de_ConfirmDeviceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ConfirmDeviceCommandOutput>;
/**
 * deserializeAws_json1_1ConfirmForgotPasswordCommand
 */
export declare const de_ConfirmForgotPasswordCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ConfirmForgotPasswordCommandOutput>;
/**
 * deserializeAws_json1_1ConfirmSignUpCommand
 */
export declare const de_ConfirmSignUpCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ConfirmSignUpCommandOutput>;
/**
 * deserializeAws_json1_1CreateGroupCommand
 */
export declare const de_CreateGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateGroupCommandOutput>;
/**
 * deserializeAws_json1_1CreateIdentityProviderCommand
 */
export declare const de_CreateIdentityProviderCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateIdentityProviderCommandOutput>;
/**
 * deserializeAws_json1_1CreateManagedLoginBrandingCommand
 */
export declare const de_CreateManagedLoginBrandingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateManagedLoginBrandingCommandOutput>;
/**
 * deserializeAws_json1_1CreateResourceServerCommand
 */
export declare const de_CreateResourceServerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateResourceServerCommandOutput>;
/**
 * deserializeAws_json1_1CreateUserImportJobCommand
 */
export declare const de_CreateUserImportJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateUserImportJobCommandOutput>;
/**
 * deserializeAws_json1_1CreateUserPoolCommand
 */
export declare const de_CreateUserPoolCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateUserPoolCommandOutput>;
/**
 * deserializeAws_json1_1CreateUserPoolClientCommand
 */
export declare const de_CreateUserPoolClientCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateUserPoolClientCommandOutput>;
/**
 * deserializeAws_json1_1CreateUserPoolDomainCommand
 */
export declare const de_CreateUserPoolDomainCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateUserPoolDomainCommandOutput>;
/**
 * deserializeAws_json1_1DeleteGroupCommand
 */
export declare const de_DeleteGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteGroupCommandOutput>;
/**
 * deserializeAws_json1_1DeleteIdentityProviderCommand
 */
export declare const de_DeleteIdentityProviderCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteIdentityProviderCommandOutput>;
/**
 * deserializeAws_json1_1DeleteManagedLoginBrandingCommand
 */
export declare const de_DeleteManagedLoginBrandingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteManagedLoginBrandingCommandOutput>;
/**
 * deserializeAws_json1_1DeleteResourceServerCommand
 */
export declare const de_DeleteResourceServerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteResourceServerCommandOutput>;
/**
 * deserializeAws_json1_1DeleteUserCommand
 */
export declare const de_DeleteUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteUserCommandOutput>;
/**
 * deserializeAws_json1_1DeleteUserAttributesCommand
 */
export declare const de_DeleteUserAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteUserAttributesCommandOutput>;
/**
 * deserializeAws_json1_1DeleteUserPoolCommand
 */
export declare const de_DeleteUserPoolCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteUserPoolCommandOutput>;
/**
 * deserializeAws_json1_1DeleteUserPoolClientCommand
 */
export declare const de_DeleteUserPoolClientCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteUserPoolClientCommandOutput>;
/**
 * deserializeAws_json1_1DeleteUserPoolDomainCommand
 */
export declare const de_DeleteUserPoolDomainCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteUserPoolDomainCommandOutput>;
/**
 * deserializeAws_json1_1DeleteWebAuthnCredentialCommand
 */
export declare const de_DeleteWebAuthnCredentialCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteWebAuthnCredentialCommandOutput>;
/**
 * deserializeAws_json1_1DescribeIdentityProviderCommand
 */
export declare const de_DescribeIdentityProviderCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeIdentityProviderCommandOutput>;
/**
 * deserializeAws_json1_1DescribeManagedLoginBrandingCommand
 */
export declare const de_DescribeManagedLoginBrandingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeManagedLoginBrandingCommandOutput>;
/**
 * deserializeAws_json1_1DescribeManagedLoginBrandingByClientCommand
 */
export declare const de_DescribeManagedLoginBrandingByClientCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeManagedLoginBrandingByClientCommandOutput>;
/**
 * deserializeAws_json1_1DescribeResourceServerCommand
 */
export declare const de_DescribeResourceServerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeResourceServerCommandOutput>;
/**
 * deserializeAws_json1_1DescribeRiskConfigurationCommand
 */
export declare const de_DescribeRiskConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeRiskConfigurationCommandOutput>;
/**
 * deserializeAws_json1_1DescribeUserImportJobCommand
 */
export declare const de_DescribeUserImportJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeUserImportJobCommandOutput>;
/**
 * deserializeAws_json1_1DescribeUserPoolCommand
 */
export declare const de_DescribeUserPoolCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeUserPoolCommandOutput>;
/**
 * deserializeAws_json1_1DescribeUserPoolClientCommand
 */
export declare const de_DescribeUserPoolClientCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeUserPoolClientCommandOutput>;
/**
 * deserializeAws_json1_1DescribeUserPoolDomainCommand
 */
export declare const de_DescribeUserPoolDomainCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeUserPoolDomainCommandOutput>;
/**
 * deserializeAws_json1_1ForgetDeviceCommand
 */
export declare const de_ForgetDeviceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ForgetDeviceCommandOutput>;
/**
 * deserializeAws_json1_1ForgotPasswordCommand
 */
export declare const de_ForgotPasswordCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ForgotPasswordCommandOutput>;
/**
 * deserializeAws_json1_1GetCSVHeaderCommand
 */
export declare const de_GetCSVHeaderCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetCSVHeaderCommandOutput>;
/**
 * deserializeAws_json1_1GetDeviceCommand
 */
export declare const de_GetDeviceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDeviceCommandOutput>;
/**
 * deserializeAws_json1_1GetGroupCommand
 */
export declare const de_GetGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetGroupCommandOutput>;
/**
 * deserializeAws_json1_1GetIdentityProviderByIdentifierCommand
 */
export declare const de_GetIdentityProviderByIdentifierCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetIdentityProviderByIdentifierCommandOutput>;
/**
 * deserializeAws_json1_1GetLogDeliveryConfigurationCommand
 */
export declare const de_GetLogDeliveryConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLogDeliveryConfigurationCommandOutput>;
/**
 * deserializeAws_json1_1GetSigningCertificateCommand
 */
export declare const de_GetSigningCertificateCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetSigningCertificateCommandOutput>;
/**
 * deserializeAws_json1_1GetUICustomizationCommand
 */
export declare const de_GetUICustomizationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetUICustomizationCommandOutput>;
/**
 * deserializeAws_json1_1GetUserCommand
 */
export declare const de_GetUserCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetUserCommandOutput>;
/**
 * deserializeAws_json1_1GetUserAttributeVerificationCodeCommand
 */
export declare const de_GetUserAttributeVerificationCodeCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetUserAttributeVerificationCodeCommandOutput>;
/**
 * deserializeAws_json1_1GetUserAuthFactorsCommand
 */
export declare const de_GetUserAuthFactorsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetUserAuthFactorsCommandOutput>;
/**
 * deserializeAws_json1_1GetUserPoolMfaConfigCommand
 */
export declare const de_GetUserPoolMfaConfigCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetUserPoolMfaConfigCommandOutput>;
/**
 * deserializeAws_json1_1GlobalSignOutCommand
 */
export declare const de_GlobalSignOutCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GlobalSignOutCommandOutput>;
/**
 * deserializeAws_json1_1InitiateAuthCommand
 */
export declare const de_InitiateAuthCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<InitiateAuthCommandOutput>;
/**
 * deserializeAws_json1_1ListDevicesCommand
 */
export declare const de_ListDevicesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDevicesCommandOutput>;
/**
 * deserializeAws_json1_1ListGroupsCommand
 */
export declare const de_ListGroupsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListGroupsCommandOutput>;
/**
 * deserializeAws_json1_1ListIdentityProvidersCommand
 */
export declare const de_ListIdentityProvidersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListIdentityProvidersCommandOutput>;
/**
 * deserializeAws_json1_1ListResourceServersCommand
 */
export declare const de_ListResourceServersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListResourceServersCommandOutput>;
/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export declare const de_ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
/**
 * deserializeAws_json1_1ListUserImportJobsCommand
 */
export declare const de_ListUserImportJobsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListUserImportJobsCommandOutput>;
/**
 * deserializeAws_json1_1ListUserPoolClientsCommand
 */
export declare const de_ListUserPoolClientsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListUserPoolClientsCommandOutput>;
/**
 * deserializeAws_json1_1ListUserPoolsCommand
 */
export declare const de_ListUserPoolsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListUserPoolsCommandOutput>;
/**
 * deserializeAws_json1_1ListUsersCommand
 */
export declare const de_ListUsersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListUsersCommandOutput>;
/**
 * deserializeAws_json1_1ListUsersInGroupCommand
 */
export declare const de_ListUsersInGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListUsersInGroupCommandOutput>;
/**
 * deserializeAws_json1_1ListWebAuthnCredentialsCommand
 */
export declare const de_ListWebAuthnCredentialsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListWebAuthnCredentialsCommandOutput>;
/**
 * deserializeAws_json1_1ResendConfirmationCodeCommand
 */
export declare const de_ResendConfirmationCodeCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ResendConfirmationCodeCommandOutput>;
/**
 * deserializeAws_json1_1RespondToAuthChallengeCommand
 */
export declare const de_RespondToAuthChallengeCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RespondToAuthChallengeCommandOutput>;
/**
 * deserializeAws_json1_1RevokeTokenCommand
 */
export declare const de_RevokeTokenCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RevokeTokenCommandOutput>;
/**
 * deserializeAws_json1_1SetLogDeliveryConfigurationCommand
 */
export declare const de_SetLogDeliveryConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetLogDeliveryConfigurationCommandOutput>;
/**
 * deserializeAws_json1_1SetRiskConfigurationCommand
 */
export declare const de_SetRiskConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetRiskConfigurationCommandOutput>;
/**
 * deserializeAws_json1_1SetUICustomizationCommand
 */
export declare const de_SetUICustomizationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetUICustomizationCommandOutput>;
/**
 * deserializeAws_json1_1SetUserMFAPreferenceCommand
 */
export declare const de_SetUserMFAPreferenceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetUserMFAPreferenceCommandOutput>;
/**
 * deserializeAws_json1_1SetUserPoolMfaConfigCommand
 */
export declare const de_SetUserPoolMfaConfigCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetUserPoolMfaConfigCommandOutput>;
/**
 * deserializeAws_json1_1SetUserSettingsCommand
 */
export declare const de_SetUserSettingsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetUserSettingsCommandOutput>;
/**
 * deserializeAws_json1_1SignUpCommand
 */
export declare const de_SignUpCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SignUpCommandOutput>;
/**
 * deserializeAws_json1_1StartUserImportJobCommand
 */
export declare const de_StartUserImportJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartUserImportJobCommandOutput>;
/**
 * deserializeAws_json1_1StartWebAuthnRegistrationCommand
 */
export declare const de_StartWebAuthnRegistrationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartWebAuthnRegistrationCommandOutput>;
/**
 * deserializeAws_json1_1StopUserImportJobCommand
 */
export declare const de_StopUserImportJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StopUserImportJobCommandOutput>;
/**
 * deserializeAws_json1_1TagResourceCommand
 */
export declare const de_TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export declare const de_UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
/**
 * deserializeAws_json1_1UpdateAuthEventFeedbackCommand
 */
export declare const de_UpdateAuthEventFeedbackCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateAuthEventFeedbackCommandOutput>;
/**
 * deserializeAws_json1_1UpdateDeviceStatusCommand
 */
export declare const de_UpdateDeviceStatusCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateDeviceStatusCommandOutput>;
/**
 * deserializeAws_json1_1UpdateGroupCommand
 */
export declare const de_UpdateGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateGroupCommandOutput>;
/**
 * deserializeAws_json1_1UpdateIdentityProviderCommand
 */
export declare const de_UpdateIdentityProviderCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateIdentityProviderCommandOutput>;
/**
 * deserializeAws_json1_1UpdateManagedLoginBrandingCommand
 */
export declare const de_UpdateManagedLoginBrandingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateManagedLoginBrandingCommandOutput>;
/**
 * deserializeAws_json1_1UpdateResourceServerCommand
 */
export declare const de_UpdateResourceServerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateResourceServerCommandOutput>;
/**
 * deserializeAws_json1_1UpdateUserAttributesCommand
 */
export declare const de_UpdateUserAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateUserAttributesCommandOutput>;
/**
 * deserializeAws_json1_1UpdateUserPoolCommand
 */
export declare const de_UpdateUserPoolCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateUserPoolCommandOutput>;
/**
 * deserializeAws_json1_1UpdateUserPoolClientCommand
 */
export declare const de_UpdateUserPoolClientCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateUserPoolClientCommandOutput>;
/**
 * deserializeAws_json1_1UpdateUserPoolDomainCommand
 */
export declare const de_UpdateUserPoolDomainCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateUserPoolDomainCommandOutput>;
/**
 * deserializeAws_json1_1VerifySoftwareTokenCommand
 */
export declare const de_VerifySoftwareTokenCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<VerifySoftwareTokenCommandOutput>;
/**
 * deserializeAws_json1_1VerifyUserAttributeCommand
 */
export declare const de_VerifyUserAttributeCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<VerifyUserAttributeCommandOutput>;
