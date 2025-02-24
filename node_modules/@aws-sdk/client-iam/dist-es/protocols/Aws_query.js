import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest } from "@smithy/protocol-http";
import { collectBody, decorateServiceException as __decorateServiceException, expectNonNull as __expectNonNull, expectString as __expectString, extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, parseBoolean as __parseBoolean, parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset, strictParseInt32 as __strictParseInt32, withBaseException, } from "@smithy/smithy-client";
import { IAMServiceException as __BaseException } from "../models/IAMServiceException";
import { AccountNotManagementOrDelegatedAdministratorException, CallerIsNotManagementAccountException, ConcurrentModificationException, CredentialReportExpiredException, CredentialReportNotPresentException, CredentialReportNotReadyException, DeleteConflictException, EntityAlreadyExistsException, EntityTemporarilyUnmodifiableException, InvalidAuthenticationCodeException, InvalidInputException, InvalidUserTypeException, LimitExceededException, MalformedPolicyDocumentException, NoSuchEntityException, OpenIdIdpCommunicationErrorException, OrganizationNotFoundException, OrganizationNotInAllFeaturesModeException, PasswordPolicyViolationException, PolicyEvaluationException, PolicyNotAttachableException, ReportGenerationLimitExceededException, ServiceAccessNotEnabledException, ServiceFailureException, ServiceNotSupportedException, UnmodifiableEntityException, UnrecognizedPublicKeyEncodingException, } from "../models/models_0";
import { DuplicateCertificateException, DuplicateSSHPublicKeyException, InvalidCertificateException, InvalidPublicKeyException, KeyPairMismatchException, MalformedCertificateException, } from "../models/models_1";
export const se_AddClientIDToOpenIDConnectProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AddClientIDToOpenIDConnectProviderRequest(input, context),
        [_A]: _ACIDTOIDCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_AddRoleToInstanceProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AddRoleToInstanceProfileRequest(input, context),
        [_A]: _ARTIP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_AddUserToGroupCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AddUserToGroupRequest(input, context),
        [_A]: _AUTG,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_AttachGroupPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AttachGroupPolicyRequest(input, context),
        [_A]: _AGP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_AttachRolePolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AttachRolePolicyRequest(input, context),
        [_A]: _ARP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_AttachUserPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AttachUserPolicyRequest(input, context),
        [_A]: _AUP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ChangePasswordCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ChangePasswordRequest(input, context),
        [_A]: _CP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateAccessKeyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateAccessKeyRequest(input, context),
        [_A]: _CAK,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateAccountAliasCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateAccountAliasRequest(input, context),
        [_A]: _CAA,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateGroupCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateGroupRequest(input, context),
        [_A]: _CG,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateInstanceProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateInstanceProfileRequest(input, context),
        [_A]: _CIP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateLoginProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateLoginProfileRequest(input, context),
        [_A]: _CLP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateOpenIDConnectProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateOpenIDConnectProviderRequest(input, context),
        [_A]: _COIDCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreatePolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreatePolicyRequest(input, context),
        [_A]: _CPr,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreatePolicyVersionCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreatePolicyVersionRequest(input, context),
        [_A]: _CPV,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateRoleRequest(input, context),
        [_A]: _CR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateSAMLProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateSAMLProviderRequest(input, context),
        [_A]: _CSAMLP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateServiceLinkedRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateServiceLinkedRoleRequest(input, context),
        [_A]: _CSLR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateServiceSpecificCredentialCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateServiceSpecificCredentialRequest(input, context),
        [_A]: _CSSC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateUserCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateUserRequest(input, context),
        [_A]: _CU,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateVirtualMFADeviceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateVirtualMFADeviceRequest(input, context),
        [_A]: _CVMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeactivateMFADeviceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeactivateMFADeviceRequest(input, context),
        [_A]: _DMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteAccessKeyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteAccessKeyRequest(input, context),
        [_A]: _DAK,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteAccountAliasCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteAccountAliasRequest(input, context),
        [_A]: _DAA,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteAccountPasswordPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    const body = buildFormUrlencodedString({
        [_A]: _DAPP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteGroupCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteGroupRequest(input, context),
        [_A]: _DG,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteGroupPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteGroupPolicyRequest(input, context),
        [_A]: _DGP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteInstanceProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteInstanceProfileRequest(input, context),
        [_A]: _DIP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteLoginProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteLoginProfileRequest(input, context),
        [_A]: _DLP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteOpenIDConnectProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteOpenIDConnectProviderRequest(input, context),
        [_A]: _DOIDCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeletePolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeletePolicyRequest(input, context),
        [_A]: _DP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeletePolicyVersionCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeletePolicyVersionRequest(input, context),
        [_A]: _DPV,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteRoleRequest(input, context),
        [_A]: _DR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteRolePermissionsBoundaryCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteRolePermissionsBoundaryRequest(input, context),
        [_A]: _DRPB,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteRolePolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteRolePolicyRequest(input, context),
        [_A]: _DRP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteSAMLProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteSAMLProviderRequest(input, context),
        [_A]: _DSAMLP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteServerCertificateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteServerCertificateRequest(input, context),
        [_A]: _DSC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteServiceLinkedRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteServiceLinkedRoleRequest(input, context),
        [_A]: _DSLR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteServiceSpecificCredentialCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteServiceSpecificCredentialRequest(input, context),
        [_A]: _DSSC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteSigningCertificateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteSigningCertificateRequest(input, context),
        [_A]: _DSCe,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteSSHPublicKeyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteSSHPublicKeyRequest(input, context),
        [_A]: _DSSHPK,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteUserCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteUserRequest(input, context),
        [_A]: _DU,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteUserPermissionsBoundaryCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteUserPermissionsBoundaryRequest(input, context),
        [_A]: _DUPB,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteUserPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteUserPolicyRequest(input, context),
        [_A]: _DUP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteVirtualMFADeviceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteVirtualMFADeviceRequest(input, context),
        [_A]: _DVMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DetachGroupPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DetachGroupPolicyRequest(input, context),
        [_A]: _DGPe,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DetachRolePolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DetachRolePolicyRequest(input, context),
        [_A]: _DRPe,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DetachUserPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DetachUserPolicyRequest(input, context),
        [_A]: _DUPe,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DisableOrganizationsRootCredentialsManagementCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DisableOrganizationsRootCredentialsManagementRequest(input, context),
        [_A]: _DORCM,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DisableOrganizationsRootSessionsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DisableOrganizationsRootSessionsRequest(input, context),
        [_A]: _DORS,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_EnableMFADeviceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_EnableMFADeviceRequest(input, context),
        [_A]: _EMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_EnableOrganizationsRootCredentialsManagementCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_EnableOrganizationsRootCredentialsManagementRequest(input, context),
        [_A]: _EORCM,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_EnableOrganizationsRootSessionsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_EnableOrganizationsRootSessionsRequest(input, context),
        [_A]: _EORS,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GenerateCredentialReportCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    const body = buildFormUrlencodedString({
        [_A]: _GCR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GenerateOrganizationsAccessReportCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GenerateOrganizationsAccessReportRequest(input, context),
        [_A]: _GOAR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GenerateServiceLastAccessedDetailsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GenerateServiceLastAccessedDetailsRequest(input, context),
        [_A]: _GSLAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetAccessKeyLastUsedCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetAccessKeyLastUsedRequest(input, context),
        [_A]: _GAKLU,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetAccountAuthorizationDetailsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetAccountAuthorizationDetailsRequest(input, context),
        [_A]: _GAAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetAccountPasswordPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    const body = buildFormUrlencodedString({
        [_A]: _GAPP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetAccountSummaryCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    const body = buildFormUrlencodedString({
        [_A]: _GAS,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetContextKeysForCustomPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetContextKeysForCustomPolicyRequest(input, context),
        [_A]: _GCKFCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetContextKeysForPrincipalPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetContextKeysForPrincipalPolicyRequest(input, context),
        [_A]: _GCKFPP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetCredentialReportCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    const body = buildFormUrlencodedString({
        [_A]: _GCRe,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetGroupCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetGroupRequest(input, context),
        [_A]: _GG,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetGroupPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetGroupPolicyRequest(input, context),
        [_A]: _GGP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetInstanceProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetInstanceProfileRequest(input, context),
        [_A]: _GIP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetLoginProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetLoginProfileRequest(input, context),
        [_A]: _GLP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetMFADeviceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetMFADeviceRequest(input, context),
        [_A]: _GMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetOpenIDConnectProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetOpenIDConnectProviderRequest(input, context),
        [_A]: _GOIDCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetOrganizationsAccessReportCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetOrganizationsAccessReportRequest(input, context),
        [_A]: _GOARe,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetPolicyRequest(input, context),
        [_A]: _GP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetPolicyVersionCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetPolicyVersionRequest(input, context),
        [_A]: _GPV,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetRoleRequest(input, context),
        [_A]: _GR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetRolePolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetRolePolicyRequest(input, context),
        [_A]: _GRP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetSAMLProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetSAMLProviderRequest(input, context),
        [_A]: _GSAMLP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetServerCertificateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetServerCertificateRequest(input, context),
        [_A]: _GSC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetServiceLastAccessedDetailsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetServiceLastAccessedDetailsRequest(input, context),
        [_A]: _GSLADe,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetServiceLastAccessedDetailsWithEntitiesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetServiceLastAccessedDetailsWithEntitiesRequest(input, context),
        [_A]: _GSLADWE,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetServiceLinkedRoleDeletionStatusCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetServiceLinkedRoleDeletionStatusRequest(input, context),
        [_A]: _GSLRDS,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetSSHPublicKeyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetSSHPublicKeyRequest(input, context),
        [_A]: _GSSHPK,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetUserCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetUserRequest(input, context),
        [_A]: _GU,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetUserPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetUserPolicyRequest(input, context),
        [_A]: _GUP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListAccessKeysCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListAccessKeysRequest(input, context),
        [_A]: _LAK,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListAccountAliasesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListAccountAliasesRequest(input, context),
        [_A]: _LAA,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListAttachedGroupPoliciesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListAttachedGroupPoliciesRequest(input, context),
        [_A]: _LAGP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListAttachedRolePoliciesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListAttachedRolePoliciesRequest(input, context),
        [_A]: _LARP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListAttachedUserPoliciesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListAttachedUserPoliciesRequest(input, context),
        [_A]: _LAUP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListEntitiesForPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListEntitiesForPolicyRequest(input, context),
        [_A]: _LEFP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListGroupPoliciesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListGroupPoliciesRequest(input, context),
        [_A]: _LGP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListGroupsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListGroupsRequest(input, context),
        [_A]: _LG,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListGroupsForUserCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListGroupsForUserRequest(input, context),
        [_A]: _LGFU,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListInstanceProfilesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListInstanceProfilesRequest(input, context),
        [_A]: _LIP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListInstanceProfilesForRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListInstanceProfilesForRoleRequest(input, context),
        [_A]: _LIPFR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListInstanceProfileTagsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListInstanceProfileTagsRequest(input, context),
        [_A]: _LIPT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListMFADevicesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListMFADevicesRequest(input, context),
        [_A]: _LMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListMFADeviceTagsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListMFADeviceTagsRequest(input, context),
        [_A]: _LMFADT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListOpenIDConnectProvidersCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListOpenIDConnectProvidersRequest(input, context),
        [_A]: _LOIDCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListOpenIDConnectProviderTagsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListOpenIDConnectProviderTagsRequest(input, context),
        [_A]: _LOIDCPT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListOrganizationsFeaturesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListOrganizationsFeaturesRequest(input, context),
        [_A]: _LOF,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListPoliciesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListPoliciesRequest(input, context),
        [_A]: _LP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListPoliciesGrantingServiceAccessCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListPoliciesGrantingServiceAccessRequest(input, context),
        [_A]: _LPGSA,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListPolicyTagsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListPolicyTagsRequest(input, context),
        [_A]: _LPT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListPolicyVersionsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListPolicyVersionsRequest(input, context),
        [_A]: _LPV,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListRolePoliciesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListRolePoliciesRequest(input, context),
        [_A]: _LRP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListRolesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListRolesRequest(input, context),
        [_A]: _LR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListRoleTagsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListRoleTagsRequest(input, context),
        [_A]: _LRT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListSAMLProvidersCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListSAMLProvidersRequest(input, context),
        [_A]: _LSAMLP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListSAMLProviderTagsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListSAMLProviderTagsRequest(input, context),
        [_A]: _LSAMLPT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListServerCertificatesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListServerCertificatesRequest(input, context),
        [_A]: _LSC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListServerCertificateTagsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListServerCertificateTagsRequest(input, context),
        [_A]: _LSCT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListServiceSpecificCredentialsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListServiceSpecificCredentialsRequest(input, context),
        [_A]: _LSSC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListSigningCertificatesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListSigningCertificatesRequest(input, context),
        [_A]: _LSCi,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListSSHPublicKeysCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListSSHPublicKeysRequest(input, context),
        [_A]: _LSSHPK,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListUserPoliciesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListUserPoliciesRequest(input, context),
        [_A]: _LUP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListUsersCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListUsersRequest(input, context),
        [_A]: _LU,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListUserTagsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListUserTagsRequest(input, context),
        [_A]: _LUT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListVirtualMFADevicesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListVirtualMFADevicesRequest(input, context),
        [_A]: _LVMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutGroupPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PutGroupPolicyRequest(input, context),
        [_A]: _PGP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutRolePermissionsBoundaryCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PutRolePermissionsBoundaryRequest(input, context),
        [_A]: _PRPB,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutRolePolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PutRolePolicyRequest(input, context),
        [_A]: _PRP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutUserPermissionsBoundaryCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PutUserPermissionsBoundaryRequest(input, context),
        [_A]: _PUPB,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutUserPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PutUserPolicyRequest(input, context),
        [_A]: _PUP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_RemoveClientIDFromOpenIDConnectProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_RemoveClientIDFromOpenIDConnectProviderRequest(input, context),
        [_A]: _RCIDFOIDCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_RemoveRoleFromInstanceProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_RemoveRoleFromInstanceProfileRequest(input, context),
        [_A]: _RRFIP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_RemoveUserFromGroupCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_RemoveUserFromGroupRequest(input, context),
        [_A]: _RUFG,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ResetServiceSpecificCredentialCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ResetServiceSpecificCredentialRequest(input, context),
        [_A]: _RSSC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ResyncMFADeviceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ResyncMFADeviceRequest(input, context),
        [_A]: _RMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SetDefaultPolicyVersionCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetDefaultPolicyVersionRequest(input, context),
        [_A]: _SDPV,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SetSecurityTokenServicePreferencesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetSecurityTokenServicePreferencesRequest(input, context),
        [_A]: _SSTSP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SimulateCustomPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SimulateCustomPolicyRequest(input, context),
        [_A]: _SCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SimulatePrincipalPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SimulatePrincipalPolicyRequest(input, context),
        [_A]: _SPP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagInstanceProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TagInstanceProfileRequest(input, context),
        [_A]: _TIP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagMFADeviceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TagMFADeviceRequest(input, context),
        [_A]: _TMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagOpenIDConnectProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TagOpenIDConnectProviderRequest(input, context),
        [_A]: _TOIDCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TagPolicyRequest(input, context),
        [_A]: _TP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TagRoleRequest(input, context),
        [_A]: _TR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagSAMLProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TagSAMLProviderRequest(input, context),
        [_A]: _TSAMLP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagServerCertificateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TagServerCertificateRequest(input, context),
        [_A]: _TSC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagUserCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TagUserRequest(input, context),
        [_A]: _TU,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagInstanceProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UntagInstanceProfileRequest(input, context),
        [_A]: _UIP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagMFADeviceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UntagMFADeviceRequest(input, context),
        [_A]: _UMFAD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagOpenIDConnectProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UntagOpenIDConnectProviderRequest(input, context),
        [_A]: _UOIDCP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UntagPolicyRequest(input, context),
        [_A]: _UP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UntagRoleRequest(input, context),
        [_A]: _UR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagSAMLProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UntagSAMLProviderRequest(input, context),
        [_A]: _USAMLP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagServerCertificateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UntagServerCertificateRequest(input, context),
        [_A]: _USC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagUserCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UntagUserRequest(input, context),
        [_A]: _UU,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateAccessKeyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateAccessKeyRequest(input, context),
        [_A]: _UAK,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateAccountPasswordPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateAccountPasswordPolicyRequest(input, context),
        [_A]: _UAPP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateAssumeRolePolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateAssumeRolePolicyRequest(input, context),
        [_A]: _UARP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateGroupCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateGroupRequest(input, context),
        [_A]: _UG,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateLoginProfileCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateLoginProfileRequest(input, context),
        [_A]: _ULP,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateOpenIDConnectProviderThumbprintCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateOpenIDConnectProviderThumbprintRequest(input, context),
        [_A]: _UOIDCPT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateRoleRequest(input, context),
        [_A]: _URp,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateRoleDescriptionCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateRoleDescriptionRequest(input, context),
        [_A]: _URD,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateSAMLProviderCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateSAMLProviderRequest(input, context),
        [_A]: _USAMLPp,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateServerCertificateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateServerCertificateRequest(input, context),
        [_A]: _USCp,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateServiceSpecificCredentialCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateServiceSpecificCredentialRequest(input, context),
        [_A]: _USSC,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateSigningCertificateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateSigningCertificateRequest(input, context),
        [_A]: _USCpd,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateSSHPublicKeyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateSSHPublicKeyRequest(input, context),
        [_A]: _USSHPK,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateUserCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateUserRequest(input, context),
        [_A]: _UUp,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UploadServerCertificateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UploadServerCertificateRequest(input, context),
        [_A]: _USCpl,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UploadSigningCertificateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UploadSigningCertificateRequest(input, context),
        [_A]: _USCplo,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UploadSSHPublicKeyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UploadSSHPublicKeyRequest(input, context),
        [_A]: _USSHPKp,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const de_AddClientIDToOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_AddRoleToInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_AddUserToGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_AttachGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_AttachRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_AttachUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_ChangePasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_CreateAccessKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateAccessKeyResponse(data.CreateAccessKeyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateAccountAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_CreateGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateGroupResponse(data.CreateGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateInstanceProfileResponse(data.CreateInstanceProfileResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateLoginProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateLoginProfileResponse(data.CreateLoginProfileResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateOpenIDConnectProviderResponse(data.CreateOpenIDConnectProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreatePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreatePolicyResponse(data.CreatePolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreatePolicyVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreatePolicyVersionResponse(data.CreatePolicyVersionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateRoleResponse(data.CreateRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateSAMLProviderResponse(data.CreateSAMLProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateServiceLinkedRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateServiceLinkedRoleResponse(data.CreateServiceLinkedRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateServiceSpecificCredentialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateServiceSpecificCredentialResponse(data.CreateServiceSpecificCredentialResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateUserResponse(data.CreateUserResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_CreateVirtualMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateVirtualMFADeviceResponse(data.CreateVirtualMFADeviceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_DeactivateMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteAccessKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteAccountAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteAccountPasswordPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteLoginProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeletePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeletePolicyVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteRolePermissionsBoundaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteServiceLinkedRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteServiceLinkedRoleResponse(data.DeleteServiceLinkedRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_DeleteServiceSpecificCredentialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteSigningCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteUserPermissionsBoundaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DeleteVirtualMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DetachGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DetachRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DetachUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DisableOrganizationsRootCredentialsManagementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DisableOrganizationsRootCredentialsManagementResponse(data.DisableOrganizationsRootCredentialsManagementResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_DisableOrganizationsRootSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DisableOrganizationsRootSessionsResponse(data.DisableOrganizationsRootSessionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_EnableMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_EnableOrganizationsRootCredentialsManagementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_EnableOrganizationsRootCredentialsManagementResponse(data.EnableOrganizationsRootCredentialsManagementResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_EnableOrganizationsRootSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_EnableOrganizationsRootSessionsResponse(data.EnableOrganizationsRootSessionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GenerateCredentialReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GenerateCredentialReportResponse(data.GenerateCredentialReportResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GenerateOrganizationsAccessReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GenerateOrganizationsAccessReportResponse(data.GenerateOrganizationsAccessReportResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GenerateServiceLastAccessedDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GenerateServiceLastAccessedDetailsResponse(data.GenerateServiceLastAccessedDetailsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetAccessKeyLastUsedCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetAccessKeyLastUsedResponse(data.GetAccessKeyLastUsedResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetAccountAuthorizationDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetAccountAuthorizationDetailsResponse(data.GetAccountAuthorizationDetailsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetAccountPasswordPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetAccountPasswordPolicyResponse(data.GetAccountPasswordPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetAccountSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetAccountSummaryResponse(data.GetAccountSummaryResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetContextKeysForCustomPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetContextKeysForPolicyResponse(data.GetContextKeysForCustomPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetContextKeysForPrincipalPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetContextKeysForPolicyResponse(data.GetContextKeysForPrincipalPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetCredentialReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetCredentialReportResponse(data.GetCredentialReportResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetGroupResponse(data.GetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetGroupPolicyResponse(data.GetGroupPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetInstanceProfileResponse(data.GetInstanceProfileResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetLoginProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetLoginProfileResponse(data.GetLoginProfileResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetMFADeviceResponse(data.GetMFADeviceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetOpenIDConnectProviderResponse(data.GetOpenIDConnectProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetOrganizationsAccessReportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetOrganizationsAccessReportResponse(data.GetOrganizationsAccessReportResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetPolicyResponse(data.GetPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetPolicyVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetPolicyVersionResponse(data.GetPolicyVersionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetRoleResponse(data.GetRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetRolePolicyResponse(data.GetRolePolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetSAMLProviderResponse(data.GetSAMLProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetServerCertificateResponse(data.GetServerCertificateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetServiceLastAccessedDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetServiceLastAccessedDetailsResponse(data.GetServiceLastAccessedDetailsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetServiceLastAccessedDetailsWithEntitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetServiceLastAccessedDetailsWithEntitiesResponse(data.GetServiceLastAccessedDetailsWithEntitiesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetServiceLinkedRoleDeletionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetServiceLinkedRoleDeletionStatusResponse(data.GetServiceLinkedRoleDeletionStatusResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetSSHPublicKeyResponse(data.GetSSHPublicKeyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetUserResponse(data.GetUserResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetUserPolicyResponse(data.GetUserPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListAccessKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListAccessKeysResponse(data.ListAccessKeysResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListAccountAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListAccountAliasesResponse(data.ListAccountAliasesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListAttachedGroupPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListAttachedGroupPoliciesResponse(data.ListAttachedGroupPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListAttachedRolePoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListAttachedRolePoliciesResponse(data.ListAttachedRolePoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListAttachedUserPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListAttachedUserPoliciesResponse(data.ListAttachedUserPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListEntitiesForPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListEntitiesForPolicyResponse(data.ListEntitiesForPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListGroupPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListGroupPoliciesResponse(data.ListGroupPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListGroupsResponse(data.ListGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListGroupsForUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListGroupsForUserResponse(data.ListGroupsForUserResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListInstanceProfilesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListInstanceProfilesResponse(data.ListInstanceProfilesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListInstanceProfilesForRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListInstanceProfilesForRoleResponse(data.ListInstanceProfilesForRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListInstanceProfileTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListInstanceProfileTagsResponse(data.ListInstanceProfileTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListMFADevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListMFADevicesResponse(data.ListMFADevicesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListMFADeviceTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListMFADeviceTagsResponse(data.ListMFADeviceTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListOpenIDConnectProvidersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListOpenIDConnectProvidersResponse(data.ListOpenIDConnectProvidersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListOpenIDConnectProviderTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListOpenIDConnectProviderTagsResponse(data.ListOpenIDConnectProviderTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListOrganizationsFeaturesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListOrganizationsFeaturesResponse(data.ListOrganizationsFeaturesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListPoliciesResponse(data.ListPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListPoliciesGrantingServiceAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListPoliciesGrantingServiceAccessResponse(data.ListPoliciesGrantingServiceAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListPolicyTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListPolicyTagsResponse(data.ListPolicyTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListPolicyVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListPolicyVersionsResponse(data.ListPolicyVersionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListRolePoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListRolePoliciesResponse(data.ListRolePoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListRolesResponse(data.ListRolesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListRoleTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListRoleTagsResponse(data.ListRoleTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListSAMLProvidersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListSAMLProvidersResponse(data.ListSAMLProvidersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListSAMLProviderTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListSAMLProviderTagsResponse(data.ListSAMLProviderTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListServerCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListServerCertificatesResponse(data.ListServerCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListServerCertificateTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListServerCertificateTagsResponse(data.ListServerCertificateTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListServiceSpecificCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListServiceSpecificCredentialsResponse(data.ListServiceSpecificCredentialsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListSigningCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListSigningCertificatesResponse(data.ListSigningCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListSSHPublicKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListSSHPublicKeysResponse(data.ListSSHPublicKeysResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListUserPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListUserPoliciesResponse(data.ListUserPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListUsersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListUsersResponse(data.ListUsersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListUserTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListUserTagsResponse(data.ListUserTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListVirtualMFADevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListVirtualMFADevicesResponse(data.ListVirtualMFADevicesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_PutGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_PutRolePermissionsBoundaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_PutRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_PutUserPermissionsBoundaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_PutUserPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_RemoveClientIDFromOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_RemoveRoleFromInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_RemoveUserFromGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_ResetServiceSpecificCredentialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ResetServiceSpecificCredentialResponse(data.ResetServiceSpecificCredentialResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ResyncMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_SetDefaultPolicyVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_SetSecurityTokenServicePreferencesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_SimulateCustomPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SimulatePolicyResponse(data.SimulateCustomPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_SimulatePrincipalPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SimulatePolicyResponse(data.SimulatePrincipalPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_TagInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_TagMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_TagOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_TagPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_TagRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_TagSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_TagServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_TagUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UntagInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UntagMFADeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UntagOpenIDConnectProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UntagPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UntagRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UntagSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UntagServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UntagUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateAccessKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateAccountPasswordPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateAssumeRolePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateLoginProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateOpenIDConnectProviderThumbprintCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateRoleResponse(data.UpdateRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_UpdateRoleDescriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateRoleDescriptionResponse(data.UpdateRoleDescriptionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_UpdateSAMLProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateSAMLProviderResponse(data.UpdateSAMLProviderResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_UpdateServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateServiceSpecificCredentialCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateSigningCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UpdateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UploadServerCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UploadServerCertificateResponse(data.UploadServerCertificateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_UploadSigningCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UploadSigningCertificateResponse(data.UploadSigningCertificateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_UploadSSHPublicKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UploadSSHPublicKeyResponse(data.UploadSSHPublicKeyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.iam#InvalidInputException":
            throw await de_InvalidInputExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.iam#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "NoSuchEntity":
        case "com.amazonaws.iam#NoSuchEntityException":
            throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
        case "ServiceFailure":
        case "com.amazonaws.iam#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        case "EntityAlreadyExists":
        case "com.amazonaws.iam#EntityAlreadyExistsException":
            throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
        case "UnmodifiableEntity":
        case "com.amazonaws.iam#UnmodifiableEntityException":
            throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
        case "PolicyNotAttachable":
        case "com.amazonaws.iam#PolicyNotAttachableException":
            throw await de_PolicyNotAttachableExceptionRes(parsedOutput, context);
        case "EntityTemporarilyUnmodifiable":
        case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
            throw await de_EntityTemporarilyUnmodifiableExceptionRes(parsedOutput, context);
        case "InvalidUserType":
        case "com.amazonaws.iam#InvalidUserTypeException":
            throw await de_InvalidUserTypeExceptionRes(parsedOutput, context);
        case "PasswordPolicyViolation":
        case "com.amazonaws.iam#PasswordPolicyViolationException":
            throw await de_PasswordPolicyViolationExceptionRes(parsedOutput, context);
        case "ConcurrentModification":
        case "com.amazonaws.iam#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "OpenIdIdpCommunicationError":
        case "com.amazonaws.iam#OpenIdIdpCommunicationErrorException":
            throw await de_OpenIdIdpCommunicationErrorExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.iam#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "NotSupportedService":
        case "com.amazonaws.iam#ServiceNotSupportedException":
            throw await de_ServiceNotSupportedExceptionRes(parsedOutput, context);
        case "DeleteConflict":
        case "com.amazonaws.iam#DeleteConflictException":
            throw await de_DeleteConflictExceptionRes(parsedOutput, context);
        case "AccountNotManagementOrDelegatedAdministratorException":
        case "com.amazonaws.iam#AccountNotManagementOrDelegatedAdministratorException":
            throw await de_AccountNotManagementOrDelegatedAdministratorExceptionRes(parsedOutput, context);
        case "OrganizationNotFoundException":
        case "com.amazonaws.iam#OrganizationNotFoundException":
            throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
        case "OrganizationNotInAllFeaturesModeException":
        case "com.amazonaws.iam#OrganizationNotInAllFeaturesModeException":
            throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
        case "ServiceAccessNotEnabledException":
        case "com.amazonaws.iam#ServiceAccessNotEnabledException":
            throw await de_ServiceAccessNotEnabledExceptionRes(parsedOutput, context);
        case "InvalidAuthenticationCode":
        case "com.amazonaws.iam#InvalidAuthenticationCodeException":
            throw await de_InvalidAuthenticationCodeExceptionRes(parsedOutput, context);
        case "CallerIsNotManagementAccountException":
        case "com.amazonaws.iam#CallerIsNotManagementAccountException":
            throw await de_CallerIsNotManagementAccountExceptionRes(parsedOutput, context);
        case "ReportGenerationLimitExceeded":
        case "com.amazonaws.iam#ReportGenerationLimitExceededException":
            throw await de_ReportGenerationLimitExceededExceptionRes(parsedOutput, context);
        case "ReportExpired":
        case "com.amazonaws.iam#CredentialReportExpiredException":
            throw await de_CredentialReportExpiredExceptionRes(parsedOutput, context);
        case "ReportInProgress":
        case "com.amazonaws.iam#CredentialReportNotReadyException":
            throw await de_CredentialReportNotReadyExceptionRes(parsedOutput, context);
        case "ReportNotPresent":
        case "com.amazonaws.iam#CredentialReportNotPresentException":
            throw await de_CredentialReportNotPresentExceptionRes(parsedOutput, context);
        case "UnrecognizedPublicKeyEncoding":
        case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException":
            throw await de_UnrecognizedPublicKeyEncodingExceptionRes(parsedOutput, context);
        case "PolicyEvaluation":
        case "com.amazonaws.iam#PolicyEvaluationException":
            throw await de_PolicyEvaluationExceptionRes(parsedOutput, context);
        case "KeyPairMismatch":
        case "com.amazonaws.iam#KeyPairMismatchException":
            throw await de_KeyPairMismatchExceptionRes(parsedOutput, context);
        case "MalformedCertificate":
        case "com.amazonaws.iam#MalformedCertificateException":
            throw await de_MalformedCertificateExceptionRes(parsedOutput, context);
        case "DuplicateCertificate":
        case "com.amazonaws.iam#DuplicateCertificateException":
            throw await de_DuplicateCertificateExceptionRes(parsedOutput, context);
        case "InvalidCertificate":
        case "com.amazonaws.iam#InvalidCertificateException":
            throw await de_InvalidCertificateExceptionRes(parsedOutput, context);
        case "DuplicateSSHPublicKey":
        case "com.amazonaws.iam#DuplicateSSHPublicKeyException":
            throw await de_DuplicateSSHPublicKeyExceptionRes(parsedOutput, context);
        case "InvalidPublicKey":
        case "com.amazonaws.iam#InvalidPublicKeyException":
            throw await de_InvalidPublicKeyExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_AccountNotManagementOrDelegatedAdministratorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_AccountNotManagementOrDelegatedAdministratorException(body.Error, context);
    const exception = new AccountNotManagementOrDelegatedAdministratorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_CallerIsNotManagementAccountExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_CallerIsNotManagementAccountException(body.Error, context);
    const exception = new CallerIsNotManagementAccountException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ConcurrentModificationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ConcurrentModificationException(body.Error, context);
    const exception = new ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_CredentialReportExpiredExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_CredentialReportExpiredException(body.Error, context);
    const exception = new CredentialReportExpiredException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_CredentialReportNotPresentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_CredentialReportNotPresentException(body.Error, context);
    const exception = new CredentialReportNotPresentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_CredentialReportNotReadyExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_CredentialReportNotReadyException(body.Error, context);
    const exception = new CredentialReportNotReadyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_DeleteConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_DeleteConflictException(body.Error, context);
    const exception = new DeleteConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_DuplicateCertificateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_DuplicateCertificateException(body.Error, context);
    const exception = new DuplicateCertificateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_DuplicateSSHPublicKeyExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_DuplicateSSHPublicKeyException(body.Error, context);
    const exception = new DuplicateSSHPublicKeyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_EntityAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_EntityAlreadyExistsException(body.Error, context);
    const exception = new EntityAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_EntityTemporarilyUnmodifiableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_EntityTemporarilyUnmodifiableException(body.Error, context);
    const exception = new EntityTemporarilyUnmodifiableException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidAuthenticationCodeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidAuthenticationCodeException(body.Error, context);
    const exception = new InvalidAuthenticationCodeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidCertificateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidCertificateException(body.Error, context);
    const exception = new InvalidCertificateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidInputExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidInputException(body.Error, context);
    const exception = new InvalidInputException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidPublicKeyExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidPublicKeyException(body.Error, context);
    const exception = new InvalidPublicKeyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidUserTypeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidUserTypeException(body.Error, context);
    const exception = new InvalidUserTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KeyPairMismatchExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_KeyPairMismatchException(body.Error, context);
    const exception = new KeyPairMismatchException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_LimitExceededException(body.Error, context);
    const exception = new LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_MalformedCertificateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_MalformedCertificateException(body.Error, context);
    const exception = new MalformedCertificateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_MalformedPolicyDocumentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
    const exception = new MalformedPolicyDocumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_NoSuchEntityExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_NoSuchEntityException(body.Error, context);
    const exception = new NoSuchEntityException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_OpenIdIdpCommunicationErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_OpenIdIdpCommunicationErrorException(body.Error, context);
    const exception = new OpenIdIdpCommunicationErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_OrganizationNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_OrganizationNotFoundException(body.Error, context);
    const exception = new OrganizationNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_OrganizationNotInAllFeaturesModeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_OrganizationNotInAllFeaturesModeException(body.Error, context);
    const exception = new OrganizationNotInAllFeaturesModeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_PasswordPolicyViolationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_PasswordPolicyViolationException(body.Error, context);
    const exception = new PasswordPolicyViolationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_PolicyEvaluationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_PolicyEvaluationException(body.Error, context);
    const exception = new PolicyEvaluationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_PolicyNotAttachableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_PolicyNotAttachableException(body.Error, context);
    const exception = new PolicyNotAttachableException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ReportGenerationLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ReportGenerationLimitExceededException(body.Error, context);
    const exception = new ReportGenerationLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ServiceAccessNotEnabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ServiceAccessNotEnabledException(body.Error, context);
    const exception = new ServiceAccessNotEnabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ServiceFailureExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ServiceFailureException(body.Error, context);
    const exception = new ServiceFailureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ServiceNotSupportedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ServiceNotSupportedException(body.Error, context);
    const exception = new ServiceNotSupportedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_UnmodifiableEntityExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_UnmodifiableEntityException(body.Error, context);
    const exception = new UnmodifiableEntityException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_UnrecognizedPublicKeyEncodingExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_UnrecognizedPublicKeyEncodingException(body.Error, context);
    const exception = new UnrecognizedPublicKeyEncodingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const se_ActionNameListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_AddClientIDToOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input[_OIDCPA] != null) {
        entries[_OIDCPA] = input[_OIDCPA];
    }
    if (input[_CID] != null) {
        entries[_CID] = input[_CID];
    }
    return entries;
};
const se_AddRoleToInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input[_IPN] != null) {
        entries[_IPN] = input[_IPN];
    }
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    return entries;
};
const se_AddUserToGroupRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    return entries;
};
const se_AttachGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    return entries;
};
const se_AttachRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    return entries;
};
const se_AttachUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    return entries;
};
const se_ChangePasswordRequest = (input, context) => {
    const entries = {};
    if (input[_OP] != null) {
        entries[_OP] = input[_OP];
    }
    if (input[_NP] != null) {
        entries[_NP] = input[_NP];
    }
    return entries;
};
const se_clientIDListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_ContextEntry = (input, context) => {
    const entries = {};
    if (input[_CKN] != null) {
        entries[_CKN] = input[_CKN];
    }
    if (input[_CKV] != null) {
        const memberEntries = se_ContextKeyValueListType(input[_CKV], context);
        if (input[_CKV]?.length === 0) {
            entries.ContextKeyValues = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ContextKeyValues.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_CKT] != null) {
        entries[_CKT] = input[_CKT];
    }
    return entries;
};
const se_ContextEntryListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_ContextEntry(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_ContextKeyValueListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_CreateAccessKeyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    return entries;
};
const se_CreateAccountAliasRequest = (input, context) => {
    const entries = {};
    if (input[_AA] != null) {
        entries[_AA] = input[_AA];
    }
    return entries;
};
const se_CreateGroupRequest = (input, context) => {
    const entries = {};
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    return entries;
};
const se_CreateInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input[_IPN] != null) {
        entries[_IPN] = input[_IPN];
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreateLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_Pa] != null) {
        entries[_Pa] = input[_Pa];
    }
    if (input[_PRR] != null) {
        entries[_PRR] = input[_PRR];
    }
    return entries;
};
const se_CreateOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input[_U] != null) {
        entries[_U] = input[_U];
    }
    if (input[_CIDL] != null) {
        const memberEntries = se_clientIDListType(input[_CIDL], context);
        if (input[_CIDL]?.length === 0) {
            entries.ClientIDList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ClientIDList.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_TL] != null) {
        const memberEntries = se_thumbprintListType(input[_TL], context);
        if (input[_TL]?.length === 0) {
            entries.ThumbprintList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ThumbprintList.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreatePolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_PD] != null) {
        entries[_PD] = input[_PD];
    }
    if (input[_D] != null) {
        entries[_D] = input[_D];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreatePolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    if (input[_PD] != null) {
        entries[_PD] = input[_PD];
    }
    if (input[_SAD] != null) {
        entries[_SAD] = input[_SAD];
    }
    return entries;
};
const se_CreateRoleRequest = (input, context) => {
    const entries = {};
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_ARPD] != null) {
        entries[_ARPD] = input[_ARPD];
    }
    if (input[_D] != null) {
        entries[_D] = input[_D];
    }
    if (input[_MSD] != null) {
        entries[_MSD] = input[_MSD];
    }
    if (input[_PB] != null) {
        entries[_PB] = input[_PB];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreateSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input[_SAMLMD] != null) {
        entries[_SAMLMD] = input[_SAMLMD];
    }
    if (input[_N] != null) {
        entries[_N] = input[_N];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_AEM] != null) {
        entries[_AEM] = input[_AEM];
    }
    if (input[_APK] != null) {
        entries[_APK] = input[_APK];
    }
    return entries;
};
const se_CreateServiceLinkedRoleRequest = (input, context) => {
    const entries = {};
    if (input[_AWSSN] != null) {
        entries[_AWSSN] = input[_AWSSN];
    }
    if (input[_D] != null) {
        entries[_D] = input[_D];
    }
    if (input[_CS] != null) {
        entries[_CS] = input[_CS];
    }
    return entries;
};
const se_CreateServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SN] != null) {
        entries[_SN] = input[_SN];
    }
    return entries;
};
const se_CreateUserRequest = (input, context) => {
    const entries = {};
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_PB] != null) {
        entries[_PB] = input[_PB];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreateVirtualMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_VMFADN] != null) {
        entries[_VMFADN] = input[_VMFADN];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_DeactivateMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SNe] != null) {
        entries[_SNe] = input[_SNe];
    }
    return entries;
};
const se_DeleteAccessKeyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_AKI] != null) {
        entries[_AKI] = input[_AKI];
    }
    return entries;
};
const se_DeleteAccountAliasRequest = (input, context) => {
    const entries = {};
    if (input[_AA] != null) {
        entries[_AA] = input[_AA];
    }
    return entries;
};
const se_DeleteGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    return entries;
};
const se_DeleteGroupRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    return entries;
};
const se_DeleteInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input[_IPN] != null) {
        entries[_IPN] = input[_IPN];
    }
    return entries;
};
const se_DeleteLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    return entries;
};
const se_DeleteOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input[_OIDCPA] != null) {
        entries[_OIDCPA] = input[_OIDCPA];
    }
    return entries;
};
const se_DeletePolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    return entries;
};
const se_DeletePolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    if (input[_VI] != null) {
        entries[_VI] = input[_VI];
    }
    return entries;
};
const se_DeleteRolePermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    return entries;
};
const se_DeleteRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    return entries;
};
const se_DeleteRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    return entries;
};
const se_DeleteSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input[_SAMLPA] != null) {
        entries[_SAMLPA] = input[_SAMLPA];
    }
    return entries;
};
const se_DeleteServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input[_SCN] != null) {
        entries[_SCN] = input[_SCN];
    }
    return entries;
};
const se_DeleteServiceLinkedRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    return entries;
};
const se_DeleteServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SSCI] != null) {
        entries[_SSCI] = input[_SSCI];
    }
    return entries;
};
const se_DeleteSigningCertificateRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_CI] != null) {
        entries[_CI] = input[_CI];
    }
    return entries;
};
const se_DeleteSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SSHPKI] != null) {
        entries[_SSHPKI] = input[_SSHPKI];
    }
    return entries;
};
const se_DeleteUserPermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    return entries;
};
const se_DeleteUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    return entries;
};
const se_DeleteUserRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    return entries;
};
const se_DeleteVirtualMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input[_SNe] != null) {
        entries[_SNe] = input[_SNe];
    }
    return entries;
};
const se_DetachGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    return entries;
};
const se_DetachRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    return entries;
};
const se_DetachUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    return entries;
};
const se_DisableOrganizationsRootCredentialsManagementRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_DisableOrganizationsRootSessionsRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_EnableMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SNe] != null) {
        entries[_SNe] = input[_SNe];
    }
    if (input[_AC] != null) {
        entries[_AC] = input[_AC];
    }
    if (input[_ACu] != null) {
        entries[_ACu] = input[_ACu];
    }
    return entries;
};
const se_EnableOrganizationsRootCredentialsManagementRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_EnableOrganizationsRootSessionsRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_entityListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_GenerateOrganizationsAccessReportRequest = (input, context) => {
    const entries = {};
    if (input[_EP] != null) {
        entries[_EP] = input[_EP];
    }
    if (input[_OPI] != null) {
        entries[_OPI] = input[_OPI];
    }
    return entries;
};
const se_GenerateServiceLastAccessedDetailsRequest = (input, context) => {
    const entries = {};
    if (input[_Ar] != null) {
        entries[_Ar] = input[_Ar];
    }
    if (input[_G] != null) {
        entries[_G] = input[_G];
    }
    return entries;
};
const se_GetAccessKeyLastUsedRequest = (input, context) => {
    const entries = {};
    if (input[_AKI] != null) {
        entries[_AKI] = input[_AKI];
    }
    return entries;
};
const se_GetAccountAuthorizationDetailsRequest = (input, context) => {
    const entries = {};
    if (input[_F] != null) {
        const memberEntries = se_entityListType(input[_F], context);
        if (input[_F]?.length === 0) {
            entries.Filter = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filter.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    return entries;
};
const se_GetContextKeysForCustomPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PIL] != null) {
        const memberEntries = se_SimulationPolicyListType(input[_PIL], context);
        if (input[_PIL]?.length === 0) {
            entries.PolicyInputList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetContextKeysForPrincipalPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PSA] != null) {
        entries[_PSA] = input[_PSA];
    }
    if (input[_PIL] != null) {
        const memberEntries = se_SimulationPolicyListType(input[_PIL], context);
        if (input[_PIL]?.length === 0) {
            entries.PolicyInputList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    return entries;
};
const se_GetGroupRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_GetInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input[_IPN] != null) {
        entries[_IPN] = input[_IPN];
    }
    return entries;
};
const se_GetLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    return entries;
};
const se_GetMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input[_SNe] != null) {
        entries[_SNe] = input[_SNe];
    }
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    return entries;
};
const se_GetOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input[_OIDCPA] != null) {
        entries[_OIDCPA] = input[_OIDCPA];
    }
    return entries;
};
const se_GetOrganizationsAccessReportRequest = (input, context) => {
    const entries = {};
    if (input[_JI] != null) {
        entries[_JI] = input[_JI];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_SK] != null) {
        entries[_SK] = input[_SK];
    }
    return entries;
};
const se_GetPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    return entries;
};
const se_GetPolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    if (input[_VI] != null) {
        entries[_VI] = input[_VI];
    }
    return entries;
};
const se_GetRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    return entries;
};
const se_GetRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    return entries;
};
const se_GetSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input[_SAMLPA] != null) {
        entries[_SAMLPA] = input[_SAMLPA];
    }
    return entries;
};
const se_GetServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input[_SCN] != null) {
        entries[_SCN] = input[_SCN];
    }
    return entries;
};
const se_GetServiceLastAccessedDetailsRequest = (input, context) => {
    const entries = {};
    if (input[_JI] != null) {
        entries[_JI] = input[_JI];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    return entries;
};
const se_GetServiceLastAccessedDetailsWithEntitiesRequest = (input, context) => {
    const entries = {};
    if (input[_JI] != null) {
        entries[_JI] = input[_JI];
    }
    if (input[_SNer] != null) {
        entries[_SNer] = input[_SNer];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    return entries;
};
const se_GetServiceLinkedRoleDeletionStatusRequest = (input, context) => {
    const entries = {};
    if (input[_DTI] != null) {
        entries[_DTI] = input[_DTI];
    }
    return entries;
};
const se_GetSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SSHPKI] != null) {
        entries[_SSHPKI] = input[_SSHPKI];
    }
    if (input[_E] != null) {
        entries[_E] = input[_E];
    }
    return entries;
};
const se_GetUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    return entries;
};
const se_GetUserRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    return entries;
};
const se_ListAccessKeysRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListAccountAliasesRequest = (input, context) => {
    const entries = {};
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListAttachedGroupPoliciesRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListAttachedRolePoliciesRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListAttachedUserPoliciesRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListEntitiesForPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    if (input[_EF] != null) {
        entries[_EF] = input[_EF];
    }
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_PUF] != null) {
        entries[_PUF] = input[_PUF];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListGroupPoliciesRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListGroupsForUserRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListGroupsRequest = (input, context) => {
    const entries = {};
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListInstanceProfilesForRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListInstanceProfilesRequest = (input, context) => {
    const entries = {};
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListInstanceProfileTagsRequest = (input, context) => {
    const entries = {};
    if (input[_IPN] != null) {
        entries[_IPN] = input[_IPN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListMFADevicesRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListMFADeviceTagsRequest = (input, context) => {
    const entries = {};
    if (input[_SNe] != null) {
        entries[_SNe] = input[_SNe];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListOpenIDConnectProvidersRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_ListOpenIDConnectProviderTagsRequest = (input, context) => {
    const entries = {};
    if (input[_OIDCPA] != null) {
        entries[_OIDCPA] = input[_OIDCPA];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListOrganizationsFeaturesRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_ListPoliciesGrantingServiceAccessRequest = (input, context) => {
    const entries = {};
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_Ar] != null) {
        entries[_Ar] = input[_Ar];
    }
    if (input[_SNerv] != null) {
        const memberEntries = se_serviceNamespaceListType(input[_SNerv], context);
        if (input[_SNerv]?.length === 0) {
            entries.ServiceNamespaces = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ServiceNamespaces.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_ListPoliciesRequest = (input, context) => {
    const entries = {};
    if (input[_S] != null) {
        entries[_S] = input[_S];
    }
    if (input[_OA] != null) {
        entries[_OA] = input[_OA];
    }
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_PUF] != null) {
        entries[_PUF] = input[_PUF];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListPolicyTagsRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListPolicyVersionsRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListRolePoliciesRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListRolesRequest = (input, context) => {
    const entries = {};
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListRoleTagsRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListSAMLProvidersRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_ListSAMLProviderTagsRequest = (input, context) => {
    const entries = {};
    if (input[_SAMLPA] != null) {
        entries[_SAMLPA] = input[_SAMLPA];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListServerCertificatesRequest = (input, context) => {
    const entries = {};
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListServerCertificateTagsRequest = (input, context) => {
    const entries = {};
    if (input[_SCN] != null) {
        entries[_SCN] = input[_SCN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListServiceSpecificCredentialsRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SN] != null) {
        entries[_SN] = input[_SN];
    }
    return entries;
};
const se_ListSigningCertificatesRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListSSHPublicKeysRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListUserPoliciesRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListUsersRequest = (input, context) => {
    const entries = {};
    if (input[_PP] != null) {
        entries[_PP] = input[_PP];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListUserTagsRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_ListVirtualMFADevicesRequest = (input, context) => {
    const entries = {};
    if (input[_AS] != null) {
        entries[_AS] = input[_AS];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    return entries;
};
const se_PutGroupPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    if (input[_PD] != null) {
        entries[_PD] = input[_PD];
    }
    return entries;
};
const se_PutRolePermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_PB] != null) {
        entries[_PB] = input[_PB];
    }
    return entries;
};
const se_PutRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    if (input[_PD] != null) {
        entries[_PD] = input[_PD];
    }
    return entries;
};
const se_PutUserPermissionsBoundaryRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_PB] != null) {
        entries[_PB] = input[_PB];
    }
    return entries;
};
const se_PutUserPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_PN] != null) {
        entries[_PN] = input[_PN];
    }
    if (input[_PD] != null) {
        entries[_PD] = input[_PD];
    }
    return entries;
};
const se_RemoveClientIDFromOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input[_OIDCPA] != null) {
        entries[_OIDCPA] = input[_OIDCPA];
    }
    if (input[_CID] != null) {
        entries[_CID] = input[_CID];
    }
    return entries;
};
const se_RemoveRoleFromInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input[_IPN] != null) {
        entries[_IPN] = input[_IPN];
    }
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    return entries;
};
const se_RemoveUserFromGroupRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    return entries;
};
const se_ResetServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SSCI] != null) {
        entries[_SSCI] = input[_SSCI];
    }
    return entries;
};
const se_ResourceNameListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_ResyncMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SNe] != null) {
        entries[_SNe] = input[_SNe];
    }
    if (input[_AC] != null) {
        entries[_AC] = input[_AC];
    }
    if (input[_ACu] != null) {
        entries[_ACu] = input[_ACu];
    }
    return entries;
};
const se_serviceNamespaceListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_SetDefaultPolicyVersionRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    if (input[_VI] != null) {
        entries[_VI] = input[_VI];
    }
    return entries;
};
const se_SetSecurityTokenServicePreferencesRequest = (input, context) => {
    const entries = {};
    if (input[_GETV] != null) {
        entries[_GETV] = input[_GETV];
    }
    return entries;
};
const se_SimulateCustomPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PIL] != null) {
        const memberEntries = se_SimulationPolicyListType(input[_PIL], context);
        if (input[_PIL]?.length === 0) {
            entries.PolicyInputList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_PBPIL] != null) {
        const memberEntries = se_SimulationPolicyListType(input[_PBPIL], context);
        if (input[_PBPIL]?.length === 0) {
            entries.PermissionsBoundaryPolicyInputList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PermissionsBoundaryPolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_AN] != null) {
        const memberEntries = se_ActionNameListType(input[_AN], context);
        if (input[_AN]?.length === 0) {
            entries.ActionNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ActionNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_RA] != null) {
        const memberEntries = se_ResourceNameListType(input[_RA], context);
        if (input[_RA]?.length === 0) {
            entries.ResourceArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_RP] != null) {
        entries[_RP] = input[_RP];
    }
    if (input[_RO] != null) {
        entries[_RO] = input[_RO];
    }
    if (input[_CA] != null) {
        entries[_CA] = input[_CA];
    }
    if (input[_CE] != null) {
        const memberEntries = se_ContextEntryListType(input[_CE], context);
        if (input[_CE]?.length === 0) {
            entries.ContextEntries = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ContextEntries.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_RHO] != null) {
        entries[_RHO] = input[_RHO];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    return entries;
};
const se_SimulatePrincipalPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PSA] != null) {
        entries[_PSA] = input[_PSA];
    }
    if (input[_PIL] != null) {
        const memberEntries = se_SimulationPolicyListType(input[_PIL], context);
        if (input[_PIL]?.length === 0) {
            entries.PolicyInputList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_PBPIL] != null) {
        const memberEntries = se_SimulationPolicyListType(input[_PBPIL], context);
        if (input[_PBPIL]?.length === 0) {
            entries.PermissionsBoundaryPolicyInputList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PermissionsBoundaryPolicyInputList.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_AN] != null) {
        const memberEntries = se_ActionNameListType(input[_AN], context);
        if (input[_AN]?.length === 0) {
            entries.ActionNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ActionNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_RA] != null) {
        const memberEntries = se_ResourceNameListType(input[_RA], context);
        if (input[_RA]?.length === 0) {
            entries.ResourceArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_RP] != null) {
        entries[_RP] = input[_RP];
    }
    if (input[_RO] != null) {
        entries[_RO] = input[_RO];
    }
    if (input[_CA] != null) {
        entries[_CA] = input[_CA];
    }
    if (input[_CE] != null) {
        const memberEntries = se_ContextEntryListType(input[_CE], context);
        if (input[_CE]?.length === 0) {
            entries.ContextEntries = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ContextEntries.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_RHO] != null) {
        entries[_RHO] = input[_RHO];
    }
    if (input[_MI] != null) {
        entries[_MI] = input[_MI];
    }
    if (input[_M] != null) {
        entries[_M] = input[_M];
    }
    return entries;
};
const se_SimulationPolicyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_Tag = (input, context) => {
    const entries = {};
    if (input[_K] != null) {
        entries[_K] = input[_K];
    }
    if (input[_Va] != null) {
        entries[_Va] = input[_Va];
    }
    return entries;
};
const se_TagInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input[_IPN] != null) {
        entries[_IPN] = input[_IPN];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_tagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_tagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_TagMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input[_SNe] != null) {
        entries[_SNe] = input[_SNe];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_TagOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input[_OIDCPA] != null) {
        entries[_OIDCPA] = input[_OIDCPA];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_TagPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_TagRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_TagSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input[_SAMLPA] != null) {
        entries[_SAMLPA] = input[_SAMLPA];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_TagServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input[_SCN] != null) {
        entries[_SCN] = input[_SCN];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_TagUserRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_thumbprintListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_UntagInstanceProfileRequest = (input, context) => {
    const entries = {};
    if (input[_IPN] != null) {
        entries[_IPN] = input[_IPN];
    }
    if (input[_TK] != null) {
        const memberEntries = se_tagKeyListType(input[_TK], context);
        if (input[_TK]?.length === 0) {
            entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UntagMFADeviceRequest = (input, context) => {
    const entries = {};
    if (input[_SNe] != null) {
        entries[_SNe] = input[_SNe];
    }
    if (input[_TK] != null) {
        const memberEntries = se_tagKeyListType(input[_TK], context);
        if (input[_TK]?.length === 0) {
            entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UntagOpenIDConnectProviderRequest = (input, context) => {
    const entries = {};
    if (input[_OIDCPA] != null) {
        entries[_OIDCPA] = input[_OIDCPA];
    }
    if (input[_TK] != null) {
        const memberEntries = se_tagKeyListType(input[_TK], context);
        if (input[_TK]?.length === 0) {
            entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UntagPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_PA] != null) {
        entries[_PA] = input[_PA];
    }
    if (input[_TK] != null) {
        const memberEntries = se_tagKeyListType(input[_TK], context);
        if (input[_TK]?.length === 0) {
            entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UntagRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_TK] != null) {
        const memberEntries = se_tagKeyListType(input[_TK], context);
        if (input[_TK]?.length === 0) {
            entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UntagSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input[_SAMLPA] != null) {
        entries[_SAMLPA] = input[_SAMLPA];
    }
    if (input[_TK] != null) {
        const memberEntries = se_tagKeyListType(input[_TK], context);
        if (input[_TK]?.length === 0) {
            entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UntagServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input[_SCN] != null) {
        entries[_SCN] = input[_SCN];
    }
    if (input[_TK] != null) {
        const memberEntries = se_tagKeyListType(input[_TK], context);
        if (input[_TK]?.length === 0) {
            entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UntagUserRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_TK] != null) {
        const memberEntries = se_tagKeyListType(input[_TK], context);
        if (input[_TK]?.length === 0) {
            entries.TagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UpdateAccessKeyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_AKI] != null) {
        entries[_AKI] = input[_AKI];
    }
    if (input[_St] != null) {
        entries[_St] = input[_St];
    }
    return entries;
};
const se_UpdateAccountPasswordPolicyRequest = (input, context) => {
    const entries = {};
    if (input[_MPL] != null) {
        entries[_MPL] = input[_MPL];
    }
    if (input[_RS] != null) {
        entries[_RS] = input[_RS];
    }
    if (input[_RNe] != null) {
        entries[_RNe] = input[_RNe];
    }
    if (input[_RUC] != null) {
        entries[_RUC] = input[_RUC];
    }
    if (input[_RLC] != null) {
        entries[_RLC] = input[_RLC];
    }
    if (input[_AUTCP] != null) {
        entries[_AUTCP] = input[_AUTCP];
    }
    if (input[_MPA] != null) {
        entries[_MPA] = input[_MPA];
    }
    if (input[_PRPa] != null) {
        entries[_PRPa] = input[_PRPa];
    }
    if (input[_HE] != null) {
        entries[_HE] = input[_HE];
    }
    return entries;
};
const se_UpdateAssumeRolePolicyRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_PD] != null) {
        entries[_PD] = input[_PD];
    }
    return entries;
};
const se_UpdateGroupRequest = (input, context) => {
    const entries = {};
    if (input[_GN] != null) {
        entries[_GN] = input[_GN];
    }
    if (input[_NPe] != null) {
        entries[_NPe] = input[_NPe];
    }
    if (input[_NGN] != null) {
        entries[_NGN] = input[_NGN];
    }
    return entries;
};
const se_UpdateLoginProfileRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_Pa] != null) {
        entries[_Pa] = input[_Pa];
    }
    if (input[_PRR] != null) {
        entries[_PRR] = input[_PRR];
    }
    return entries;
};
const se_UpdateOpenIDConnectProviderThumbprintRequest = (input, context) => {
    const entries = {};
    if (input[_OIDCPA] != null) {
        entries[_OIDCPA] = input[_OIDCPA];
    }
    if (input[_TL] != null) {
        const memberEntries = se_thumbprintListType(input[_TL], context);
        if (input[_TL]?.length === 0) {
            entries.ThumbprintList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ThumbprintList.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UpdateRoleDescriptionRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_D] != null) {
        entries[_D] = input[_D];
    }
    return entries;
};
const se_UpdateRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RN] != null) {
        entries[_RN] = input[_RN];
    }
    if (input[_D] != null) {
        entries[_D] = input[_D];
    }
    if (input[_MSD] != null) {
        entries[_MSD] = input[_MSD];
    }
    return entries;
};
const se_UpdateSAMLProviderRequest = (input, context) => {
    const entries = {};
    if (input[_SAMLMD] != null) {
        entries[_SAMLMD] = input[_SAMLMD];
    }
    if (input[_SAMLPA] != null) {
        entries[_SAMLPA] = input[_SAMLPA];
    }
    if (input[_AEM] != null) {
        entries[_AEM] = input[_AEM];
    }
    if (input[_APK] != null) {
        entries[_APK] = input[_APK];
    }
    if (input[_RPK] != null) {
        entries[_RPK] = input[_RPK];
    }
    return entries;
};
const se_UpdateServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input[_SCN] != null) {
        entries[_SCN] = input[_SCN];
    }
    if (input[_NPe] != null) {
        entries[_NPe] = input[_NPe];
    }
    if (input[_NSCN] != null) {
        entries[_NSCN] = input[_NSCN];
    }
    return entries;
};
const se_UpdateServiceSpecificCredentialRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SSCI] != null) {
        entries[_SSCI] = input[_SSCI];
    }
    if (input[_St] != null) {
        entries[_St] = input[_St];
    }
    return entries;
};
const se_UpdateSigningCertificateRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_CI] != null) {
        entries[_CI] = input[_CI];
    }
    if (input[_St] != null) {
        entries[_St] = input[_St];
    }
    return entries;
};
const se_UpdateSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SSHPKI] != null) {
        entries[_SSHPKI] = input[_SSHPKI];
    }
    if (input[_St] != null) {
        entries[_St] = input[_St];
    }
    return entries;
};
const se_UpdateUserRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_NPe] != null) {
        entries[_NPe] = input[_NPe];
    }
    if (input[_NUN] != null) {
        entries[_NUN] = input[_NUN];
    }
    return entries;
};
const se_UploadServerCertificateRequest = (input, context) => {
    const entries = {};
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_SCN] != null) {
        entries[_SCN] = input[_SCN];
    }
    if (input[_CB] != null) {
        entries[_CB] = input[_CB];
    }
    if (input[_PK] != null) {
        entries[_PK] = input[_PK];
    }
    if (input[_CC] != null) {
        entries[_CC] = input[_CC];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UploadSigningCertificateRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_CB] != null) {
        entries[_CB] = input[_CB];
    }
    return entries;
};
const se_UploadSSHPublicKeyRequest = (input, context) => {
    const entries = {};
    if (input[_UN] != null) {
        entries[_UN] = input[_UN];
    }
    if (input[_SSHPKB] != null) {
        entries[_SSHPKB] = input[_SSHPKB];
    }
    return entries;
};
const de_AccessDetail = (output, context) => {
    const contents = {};
    if (output[_SN] != null) {
        contents[_SN] = __expectString(output[_SN]);
    }
    if (output[_SNer] != null) {
        contents[_SNer] = __expectString(output[_SNer]);
    }
    if (output[_R] != null) {
        contents[_R] = __expectString(output[_R]);
    }
    if (output[_EP] != null) {
        contents[_EP] = __expectString(output[_EP]);
    }
    if (output[_LAT] != null) {
        contents[_LAT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LAT]));
    }
    if (output[_TAE] != null) {
        contents[_TAE] = __strictParseInt32(output[_TAE]);
    }
    return contents;
};
const de_AccessDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AccessDetail(entry, context);
    });
};
const de_AccessKey = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_AKI] != null) {
        contents[_AKI] = __expectString(output[_AKI]);
    }
    if (output[_St] != null) {
        contents[_St] = __expectString(output[_St]);
    }
    if (output[_SAK] != null) {
        contents[_SAK] = __expectString(output[_SAK]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    return contents;
};
const de_AccessKeyLastUsed = (output, context) => {
    const contents = {};
    if (output[_LUD] != null) {
        contents[_LUD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUD]));
    }
    if (output[_SN] != null) {
        contents[_SN] = __expectString(output[_SN]);
    }
    if (output[_R] != null) {
        contents[_R] = __expectString(output[_R]);
    }
    return contents;
};
const de_AccessKeyMetadata = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_AKI] != null) {
        contents[_AKI] = __expectString(output[_AKI]);
    }
    if (output[_St] != null) {
        contents[_St] = __expectString(output[_St]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    return contents;
};
const de_accessKeyMetadataListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AccessKeyMetadata(entry, context);
    });
};
const de_accountAliasListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_AccountNotManagementOrDelegatedAdministratorException = (output, context) => {
    const contents = {};
    if (output[_Me] != null) {
        contents[_Me] = __expectString(output[_Me]);
    }
    return contents;
};
const de_ArnListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_AttachedPermissionsBoundary = (output, context) => {
    const contents = {};
    if (output[_PBT] != null) {
        contents[_PBT] = __expectString(output[_PBT]);
    }
    if (output[_PBA] != null) {
        contents[_PBA] = __expectString(output[_PBA]);
    }
    return contents;
};
const de_attachedPoliciesListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AttachedPolicy(entry, context);
    });
};
const de_AttachedPolicy = (output, context) => {
    const contents = {};
    if (output[_PN] != null) {
        contents[_PN] = __expectString(output[_PN]);
    }
    if (output[_PA] != null) {
        contents[_PA] = __expectString(output[_PA]);
    }
    return contents;
};
const de_CallerIsNotManagementAccountException = (output, context) => {
    const contents = {};
    if (output[_Me] != null) {
        contents[_Me] = __expectString(output[_Me]);
    }
    return contents;
};
const de_certificateListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_SigningCertificate(entry, context);
    });
};
const de_CertificationMapType = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = __expectString(pair["value"]);
        return acc;
    }, {});
};
const de_clientIDListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_ConcurrentModificationException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_ContextKeyNamesResultListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_CreateAccessKeyResponse = (output, context) => {
    const contents = {};
    if (output[_AK] != null) {
        contents[_AK] = de_AccessKey(output[_AK], context);
    }
    return contents;
};
const de_CreateGroupResponse = (output, context) => {
    const contents = {};
    if (output[_Gr] != null) {
        contents[_Gr] = de_Group(output[_Gr], context);
    }
    return contents;
};
const de_CreateInstanceProfileResponse = (output, context) => {
    const contents = {};
    if (output[_IP] != null) {
        contents[_IP] = de_InstanceProfile(output[_IP], context);
    }
    return contents;
};
const de_CreateLoginProfileResponse = (output, context) => {
    const contents = {};
    if (output[_LPo] != null) {
        contents[_LPo] = de_LoginProfile(output[_LPo], context);
    }
    return contents;
};
const de_CreateOpenIDConnectProviderResponse = (output, context) => {
    const contents = {};
    if (output[_OIDCPA] != null) {
        contents[_OIDCPA] = __expectString(output[_OIDCPA]);
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_CreatePolicyResponse = (output, context) => {
    const contents = {};
    if (output[_Po] != null) {
        contents[_Po] = de_Policy(output[_Po], context);
    }
    return contents;
};
const de_CreatePolicyVersionResponse = (output, context) => {
    const contents = {};
    if (output[_PV] != null) {
        contents[_PV] = de_PolicyVersion(output[_PV], context);
    }
    return contents;
};
const de_CreateRoleResponse = (output, context) => {
    const contents = {};
    if (output[_Ro] != null) {
        contents[_Ro] = de_Role(output[_Ro], context);
    }
    return contents;
};
const de_CreateSAMLProviderResponse = (output, context) => {
    const contents = {};
    if (output[_SAMLPA] != null) {
        contents[_SAMLPA] = __expectString(output[_SAMLPA]);
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_CreateServiceLinkedRoleResponse = (output, context) => {
    const contents = {};
    if (output[_Ro] != null) {
        contents[_Ro] = de_Role(output[_Ro], context);
    }
    return contents;
};
const de_CreateServiceSpecificCredentialResponse = (output, context) => {
    const contents = {};
    if (output[_SSC] != null) {
        contents[_SSC] = de_ServiceSpecificCredential(output[_SSC], context);
    }
    return contents;
};
const de_CreateUserResponse = (output, context) => {
    const contents = {};
    if (output[_Us] != null) {
        contents[_Us] = de_User(output[_Us], context);
    }
    return contents;
};
const de_CreateVirtualMFADeviceResponse = (output, context) => {
    const contents = {};
    if (output[_VMFAD] != null) {
        contents[_VMFAD] = de_VirtualMFADevice(output[_VMFAD], context);
    }
    return contents;
};
const de_CredentialReportExpiredException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_CredentialReportNotPresentException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_CredentialReportNotReadyException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_DeleteConflictException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_DeleteServiceLinkedRoleResponse = (output, context) => {
    const contents = {};
    if (output[_DTI] != null) {
        contents[_DTI] = __expectString(output[_DTI]);
    }
    return contents;
};
const de_DeletionTaskFailureReasonType = (output, context) => {
    const contents = {};
    if (output[_Re] != null) {
        contents[_Re] = __expectString(output[_Re]);
    }
    if (output.RoleUsageList === "") {
        contents[_RUL] = [];
    }
    else if (output[_RUL] != null && output[_RUL][_me] != null) {
        contents[_RUL] = de_RoleUsageListType(__getArrayIfSingleItem(output[_RUL][_me]), context);
    }
    return contents;
};
const de_DisableOrganizationsRootCredentialsManagementResponse = (output, context) => {
    const contents = {};
    if (output[_OI] != null) {
        contents[_OI] = __expectString(output[_OI]);
    }
    if (output.EnabledFeatures === "") {
        contents[_EFn] = [];
    }
    else if (output[_EFn] != null && output[_EFn][_me] != null) {
        contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
    }
    return contents;
};
const de_DisableOrganizationsRootSessionsResponse = (output, context) => {
    const contents = {};
    if (output[_OI] != null) {
        contents[_OI] = __expectString(output[_OI]);
    }
    if (output.EnabledFeatures === "") {
        contents[_EFn] = [];
    }
    else if (output[_EFn] != null && output[_EFn][_me] != null) {
        contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
    }
    return contents;
};
const de_DuplicateCertificateException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_DuplicateSSHPublicKeyException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_EnableOrganizationsRootCredentialsManagementResponse = (output, context) => {
    const contents = {};
    if (output[_OI] != null) {
        contents[_OI] = __expectString(output[_OI]);
    }
    if (output.EnabledFeatures === "") {
        contents[_EFn] = [];
    }
    else if (output[_EFn] != null && output[_EFn][_me] != null) {
        contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
    }
    return contents;
};
const de_EnableOrganizationsRootSessionsResponse = (output, context) => {
    const contents = {};
    if (output[_OI] != null) {
        contents[_OI] = __expectString(output[_OI]);
    }
    if (output.EnabledFeatures === "") {
        contents[_EFn] = [];
    }
    else if (output[_EFn] != null && output[_EFn][_me] != null) {
        contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
    }
    return contents;
};
const de_EntityAlreadyExistsException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_EntityDetails = (output, context) => {
    const contents = {};
    if (output[_EI] != null) {
        contents[_EI] = de_EntityInfo(output[_EI], context);
    }
    if (output[_LA] != null) {
        contents[_LA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LA]));
    }
    return contents;
};
const de_entityDetailsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_EntityDetails(entry, context);
    });
};
const de_EntityInfo = (output, context) => {
    const contents = {};
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_N] != null) {
        contents[_N] = __expectString(output[_N]);
    }
    if (output[_Ty] != null) {
        contents[_Ty] = __expectString(output[_Ty]);
    }
    if (output[_I] != null) {
        contents[_I] = __expectString(output[_I]);
    }
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    return contents;
};
const de_EntityTemporarilyUnmodifiableException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_ErrorDetails = (output, context) => {
    const contents = {};
    if (output[_Me] != null) {
        contents[_Me] = __expectString(output[_Me]);
    }
    if (output[_C] != null) {
        contents[_C] = __expectString(output[_C]);
    }
    return contents;
};
const de_EvalDecisionDetailsType = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = __expectString(pair["value"]);
        return acc;
    }, {});
};
const de_EvaluationResult = (output, context) => {
    const contents = {};
    if (output[_EAN] != null) {
        contents[_EAN] = __expectString(output[_EAN]);
    }
    if (output[_ERN] != null) {
        contents[_ERN] = __expectString(output[_ERN]);
    }
    if (output[_ED] != null) {
        contents[_ED] = __expectString(output[_ED]);
    }
    if (output.MatchedStatements === "") {
        contents[_MS] = [];
    }
    else if (output[_MS] != null && output[_MS][_me] != null) {
        contents[_MS] = de_StatementListType(__getArrayIfSingleItem(output[_MS][_me]), context);
    }
    if (output.MissingContextValues === "") {
        contents[_MCV] = [];
    }
    else if (output[_MCV] != null && output[_MCV][_me] != null) {
        contents[_MCV] = de_ContextKeyNamesResultListType(__getArrayIfSingleItem(output[_MCV][_me]), context);
    }
    if (output[_ODD] != null) {
        contents[_ODD] = de_OrganizationsDecisionDetail(output[_ODD], context);
    }
    if (output[_PBDD] != null) {
        contents[_PBDD] = de_PermissionsBoundaryDecisionDetail(output[_PBDD], context);
    }
    if (output.EvalDecisionDetails === "") {
        contents[_EDD] = {};
    }
    else if (output[_EDD] != null && output[_EDD][_e] != null) {
        contents[_EDD] = de_EvalDecisionDetailsType(__getArrayIfSingleItem(output[_EDD][_e]), context);
    }
    if (output.ResourceSpecificResults === "") {
        contents[_RSR] = [];
    }
    else if (output[_RSR] != null && output[_RSR][_me] != null) {
        contents[_RSR] = de_ResourceSpecificResultListType(__getArrayIfSingleItem(output[_RSR][_me]), context);
    }
    return contents;
};
const de_EvaluationResultsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_EvaluationResult(entry, context);
    });
};
const de_FeaturesListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_GenerateCredentialReportResponse = (output, context) => {
    const contents = {};
    if (output[_Sta] != null) {
        contents[_Sta] = __expectString(output[_Sta]);
    }
    if (output[_D] != null) {
        contents[_D] = __expectString(output[_D]);
    }
    return contents;
};
const de_GenerateOrganizationsAccessReportResponse = (output, context) => {
    const contents = {};
    if (output[_JI] != null) {
        contents[_JI] = __expectString(output[_JI]);
    }
    return contents;
};
const de_GenerateServiceLastAccessedDetailsResponse = (output, context) => {
    const contents = {};
    if (output[_JI] != null) {
        contents[_JI] = __expectString(output[_JI]);
    }
    return contents;
};
const de_GetAccessKeyLastUsedResponse = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_AKLU] != null) {
        contents[_AKLU] = de_AccessKeyLastUsed(output[_AKLU], context);
    }
    return contents;
};
const de_GetAccountAuthorizationDetailsResponse = (output, context) => {
    const contents = {};
    if (output.UserDetailList === "") {
        contents[_UDL] = [];
    }
    else if (output[_UDL] != null && output[_UDL][_me] != null) {
        contents[_UDL] = de_userDetailListType(__getArrayIfSingleItem(output[_UDL][_me]), context);
    }
    if (output.GroupDetailList === "") {
        contents[_GDL] = [];
    }
    else if (output[_GDL] != null && output[_GDL][_me] != null) {
        contents[_GDL] = de_groupDetailListType(__getArrayIfSingleItem(output[_GDL][_me]), context);
    }
    if (output.RoleDetailList === "") {
        contents[_RDL] = [];
    }
    else if (output[_RDL] != null && output[_RDL][_me] != null) {
        contents[_RDL] = de_roleDetailListType(__getArrayIfSingleItem(output[_RDL][_me]), context);
    }
    if (output.Policies === "") {
        contents[_Pol] = [];
    }
    else if (output[_Pol] != null && output[_Pol][_me] != null) {
        contents[_Pol] = de_ManagedPolicyDetailListType(__getArrayIfSingleItem(output[_Pol][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_GetAccountPasswordPolicyResponse = (output, context) => {
    const contents = {};
    if (output[_PPa] != null) {
        contents[_PPa] = de_PasswordPolicy(output[_PPa], context);
    }
    return contents;
};
const de_GetAccountSummaryResponse = (output, context) => {
    const contents = {};
    if (output.SummaryMap === "") {
        contents[_SM] = {};
    }
    else if (output[_SM] != null && output[_SM][_e] != null) {
        contents[_SM] = de_summaryMapType(__getArrayIfSingleItem(output[_SM][_e]), context);
    }
    return contents;
};
const de_GetContextKeysForPolicyResponse = (output, context) => {
    const contents = {};
    if (output.ContextKeyNames === "") {
        contents[_CKNo] = [];
    }
    else if (output[_CKNo] != null && output[_CKNo][_me] != null) {
        contents[_CKNo] = de_ContextKeyNamesResultListType(__getArrayIfSingleItem(output[_CKNo][_me]), context);
    }
    return contents;
};
const de_GetCredentialReportResponse = (output, context) => {
    const contents = {};
    if (output[_Co] != null) {
        contents[_Co] = context.base64Decoder(output[_Co]);
    }
    if (output[_RF] != null) {
        contents[_RF] = __expectString(output[_RF]);
    }
    if (output[_GT] != null) {
        contents[_GT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_GT]));
    }
    return contents;
};
const de_GetGroupPolicyResponse = (output, context) => {
    const contents = {};
    if (output[_GN] != null) {
        contents[_GN] = __expectString(output[_GN]);
    }
    if (output[_PN] != null) {
        contents[_PN] = __expectString(output[_PN]);
    }
    if (output[_PD] != null) {
        contents[_PD] = __expectString(output[_PD]);
    }
    return contents;
};
const de_GetGroupResponse = (output, context) => {
    const contents = {};
    if (output[_Gr] != null) {
        contents[_Gr] = de_Group(output[_Gr], context);
    }
    if (output.Users === "") {
        contents[_Use] = [];
    }
    else if (output[_Use] != null && output[_Use][_me] != null) {
        contents[_Use] = de_userListType(__getArrayIfSingleItem(output[_Use][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_GetInstanceProfileResponse = (output, context) => {
    const contents = {};
    if (output[_IP] != null) {
        contents[_IP] = de_InstanceProfile(output[_IP], context);
    }
    return contents;
};
const de_GetLoginProfileResponse = (output, context) => {
    const contents = {};
    if (output[_LPo] != null) {
        contents[_LPo] = de_LoginProfile(output[_LPo], context);
    }
    return contents;
};
const de_GetMFADeviceResponse = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_SNe] != null) {
        contents[_SNe] = __expectString(output[_SNe]);
    }
    if (output[_EDn] != null) {
        contents[_EDn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_EDn]));
    }
    if (output.Certifications === "") {
        contents[_Ce] = {};
    }
    else if (output[_Ce] != null && output[_Ce][_e] != null) {
        contents[_Ce] = de_CertificationMapType(__getArrayIfSingleItem(output[_Ce][_e]), context);
    }
    return contents;
};
const de_GetOpenIDConnectProviderResponse = (output, context) => {
    const contents = {};
    if (output[_U] != null) {
        contents[_U] = __expectString(output[_U]);
    }
    if (output.ClientIDList === "") {
        contents[_CIDL] = [];
    }
    else if (output[_CIDL] != null && output[_CIDL][_me] != null) {
        contents[_CIDL] = de_clientIDListType(__getArrayIfSingleItem(output[_CIDL][_me]), context);
    }
    if (output.ThumbprintList === "") {
        contents[_TL] = [];
    }
    else if (output[_TL] != null && output[_TL][_me] != null) {
        contents[_TL] = de_thumbprintListType(__getArrayIfSingleItem(output[_TL][_me]), context);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_GetOrganizationsAccessReportResponse = (output, context) => {
    const contents = {};
    if (output[_JS] != null) {
        contents[_JS] = __expectString(output[_JS]);
    }
    if (output[_JCD] != null) {
        contents[_JCD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCD]));
    }
    if (output[_JCDo] != null) {
        contents[_JCDo] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCDo]));
    }
    if (output[_NOSA] != null) {
        contents[_NOSA] = __strictParseInt32(output[_NOSA]);
    }
    if (output[_NOSNA] != null) {
        contents[_NOSNA] = __strictParseInt32(output[_NOSNA]);
    }
    if (output.AccessDetails === "") {
        contents[_AD] = [];
    }
    else if (output[_AD] != null && output[_AD][_me] != null) {
        contents[_AD] = de_AccessDetails(__getArrayIfSingleItem(output[_AD][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    if (output[_EDr] != null) {
        contents[_EDr] = de_ErrorDetails(output[_EDr], context);
    }
    return contents;
};
const de_GetPolicyResponse = (output, context) => {
    const contents = {};
    if (output[_Po] != null) {
        contents[_Po] = de_Policy(output[_Po], context);
    }
    return contents;
};
const de_GetPolicyVersionResponse = (output, context) => {
    const contents = {};
    if (output[_PV] != null) {
        contents[_PV] = de_PolicyVersion(output[_PV], context);
    }
    return contents;
};
const de_GetRolePolicyResponse = (output, context) => {
    const contents = {};
    if (output[_RN] != null) {
        contents[_RN] = __expectString(output[_RN]);
    }
    if (output[_PN] != null) {
        contents[_PN] = __expectString(output[_PN]);
    }
    if (output[_PD] != null) {
        contents[_PD] = __expectString(output[_PD]);
    }
    return contents;
};
const de_GetRoleResponse = (output, context) => {
    const contents = {};
    if (output[_Ro] != null) {
        contents[_Ro] = de_Role(output[_Ro], context);
    }
    return contents;
};
const de_GetSAMLProviderResponse = (output, context) => {
    const contents = {};
    if (output[_SAMLPUUID] != null) {
        contents[_SAMLPUUID] = __expectString(output[_SAMLPUUID]);
    }
    if (output[_SAMLMD] != null) {
        contents[_SAMLMD] = __expectString(output[_SAMLMD]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_VU] != null) {
        contents[_VU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_VU]));
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_AEM] != null) {
        contents[_AEM] = __expectString(output[_AEM]);
    }
    if (output.PrivateKeyList === "") {
        contents[_PKL] = [];
    }
    else if (output[_PKL] != null && output[_PKL][_me] != null) {
        contents[_PKL] = de_privateKeyList(__getArrayIfSingleItem(output[_PKL][_me]), context);
    }
    return contents;
};
const de_GetServerCertificateResponse = (output, context) => {
    const contents = {};
    if (output[_SC] != null) {
        contents[_SC] = de_ServerCertificate(output[_SC], context);
    }
    return contents;
};
const de_GetServiceLastAccessedDetailsResponse = (output, context) => {
    const contents = {};
    if (output[_JS] != null) {
        contents[_JS] = __expectString(output[_JS]);
    }
    if (output[_JT] != null) {
        contents[_JT] = __expectString(output[_JT]);
    }
    if (output[_JCD] != null) {
        contents[_JCD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCD]));
    }
    if (output.ServicesLastAccessed === "") {
        contents[_SLA] = [];
    }
    else if (output[_SLA] != null && output[_SLA][_me] != null) {
        contents[_SLA] = de_ServicesLastAccessed(__getArrayIfSingleItem(output[_SLA][_me]), context);
    }
    if (output[_JCDo] != null) {
        contents[_JCDo] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCDo]));
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    if (output[_Er] != null) {
        contents[_Er] = de_ErrorDetails(output[_Er], context);
    }
    return contents;
};
const de_GetServiceLastAccessedDetailsWithEntitiesResponse = (output, context) => {
    const contents = {};
    if (output[_JS] != null) {
        contents[_JS] = __expectString(output[_JS]);
    }
    if (output[_JCD] != null) {
        contents[_JCD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCD]));
    }
    if (output[_JCDo] != null) {
        contents[_JCDo] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCDo]));
    }
    if (output.EntityDetailsList === "") {
        contents[_EDL] = [];
    }
    else if (output[_EDL] != null && output[_EDL][_me] != null) {
        contents[_EDL] = de_entityDetailsListType(__getArrayIfSingleItem(output[_EDL][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    if (output[_Er] != null) {
        contents[_Er] = de_ErrorDetails(output[_Er], context);
    }
    return contents;
};
const de_GetServiceLinkedRoleDeletionStatusResponse = (output, context) => {
    const contents = {};
    if (output[_St] != null) {
        contents[_St] = __expectString(output[_St]);
    }
    if (output[_Re] != null) {
        contents[_Re] = de_DeletionTaskFailureReasonType(output[_Re], context);
    }
    return contents;
};
const de_GetSSHPublicKeyResponse = (output, context) => {
    const contents = {};
    if (output[_SSHPK] != null) {
        contents[_SSHPK] = de_SSHPublicKey(output[_SSHPK], context);
    }
    return contents;
};
const de_GetUserPolicyResponse = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_PN] != null) {
        contents[_PN] = __expectString(output[_PN]);
    }
    if (output[_PD] != null) {
        contents[_PD] = __expectString(output[_PD]);
    }
    return contents;
};
const de_GetUserResponse = (output, context) => {
    const contents = {};
    if (output[_Us] != null) {
        contents[_Us] = de_User(output[_Us], context);
    }
    return contents;
};
const de_Group = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_GN] != null) {
        contents[_GN] = __expectString(output[_GN]);
    }
    if (output[_GI] != null) {
        contents[_GI] = __expectString(output[_GI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    return contents;
};
const de_GroupDetail = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_GN] != null) {
        contents[_GN] = __expectString(output[_GN]);
    }
    if (output[_GI] != null) {
        contents[_GI] = __expectString(output[_GI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output.GroupPolicyList === "") {
        contents[_GPL] = [];
    }
    else if (output[_GPL] != null && output[_GPL][_me] != null) {
        contents[_GPL] = de_policyDetailListType(__getArrayIfSingleItem(output[_GPL][_me]), context);
    }
    if (output.AttachedManagedPolicies === "") {
        contents[_AMP] = [];
    }
    else if (output[_AMP] != null && output[_AMP][_me] != null) {
        contents[_AMP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AMP][_me]), context);
    }
    return contents;
};
const de_groupDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_GroupDetail(entry, context);
    });
};
const de_groupListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Group(entry, context);
    });
};
const de_groupNameListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_InstanceProfile = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_IPN] != null) {
        contents[_IPN] = __expectString(output[_IPN]);
    }
    if (output[_IPI] != null) {
        contents[_IPI] = __expectString(output[_IPI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output.Roles === "") {
        contents[_Rol] = [];
    }
    else if (output[_Rol] != null && output[_Rol][_me] != null) {
        contents[_Rol] = de_roleListType(__getArrayIfSingleItem(output[_Rol][_me]), context);
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_instanceProfileListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_InstanceProfile(entry, context);
    });
};
const de_InvalidAuthenticationCodeException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_InvalidCertificateException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_InvalidInputException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_InvalidPublicKeyException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_InvalidUserTypeException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_KeyPairMismatchException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_LimitExceededException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_ListAccessKeysResponse = (output, context) => {
    const contents = {};
    if (output.AccessKeyMetadata === "") {
        contents[_AKM] = [];
    }
    else if (output[_AKM] != null && output[_AKM][_me] != null) {
        contents[_AKM] = de_accessKeyMetadataListType(__getArrayIfSingleItem(output[_AKM][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListAccountAliasesResponse = (output, context) => {
    const contents = {};
    if (output.AccountAliases === "") {
        contents[_AAc] = [];
    }
    else if (output[_AAc] != null && output[_AAc][_me] != null) {
        contents[_AAc] = de_accountAliasListType(__getArrayIfSingleItem(output[_AAc][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListAttachedGroupPoliciesResponse = (output, context) => {
    const contents = {};
    if (output.AttachedPolicies === "") {
        contents[_AP] = [];
    }
    else if (output[_AP] != null && output[_AP][_me] != null) {
        contents[_AP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AP][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListAttachedRolePoliciesResponse = (output, context) => {
    const contents = {};
    if (output.AttachedPolicies === "") {
        contents[_AP] = [];
    }
    else if (output[_AP] != null && output[_AP][_me] != null) {
        contents[_AP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AP][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListAttachedUserPoliciesResponse = (output, context) => {
    const contents = {};
    if (output.AttachedPolicies === "") {
        contents[_AP] = [];
    }
    else if (output[_AP] != null && output[_AP][_me] != null) {
        contents[_AP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AP][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListEntitiesForPolicyResponse = (output, context) => {
    const contents = {};
    if (output.PolicyGroups === "") {
        contents[_PG] = [];
    }
    else if (output[_PG] != null && output[_PG][_me] != null) {
        contents[_PG] = de_PolicyGroupListType(__getArrayIfSingleItem(output[_PG][_me]), context);
    }
    if (output.PolicyUsers === "") {
        contents[_PU] = [];
    }
    else if (output[_PU] != null && output[_PU][_me] != null) {
        contents[_PU] = de_PolicyUserListType(__getArrayIfSingleItem(output[_PU][_me]), context);
    }
    if (output.PolicyRoles === "") {
        contents[_PR] = [];
    }
    else if (output[_PR] != null && output[_PR][_me] != null) {
        contents[_PR] = de_PolicyRoleListType(__getArrayIfSingleItem(output[_PR][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListGroupPoliciesResponse = (output, context) => {
    const contents = {};
    if (output.PolicyNames === "") {
        contents[_PNo] = [];
    }
    else if (output[_PNo] != null && output[_PNo][_me] != null) {
        contents[_PNo] = de_policyNameListType(__getArrayIfSingleItem(output[_PNo][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListGroupsForUserResponse = (output, context) => {
    const contents = {};
    if (output.Groups === "") {
        contents[_Gro] = [];
    }
    else if (output[_Gro] != null && output[_Gro][_me] != null) {
        contents[_Gro] = de_groupListType(__getArrayIfSingleItem(output[_Gro][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListGroupsResponse = (output, context) => {
    const contents = {};
    if (output.Groups === "") {
        contents[_Gro] = [];
    }
    else if (output[_Gro] != null && output[_Gro][_me] != null) {
        contents[_Gro] = de_groupListType(__getArrayIfSingleItem(output[_Gro][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListInstanceProfilesForRoleResponse = (output, context) => {
    const contents = {};
    if (output.InstanceProfiles === "") {
        contents[_IPn] = [];
    }
    else if (output[_IPn] != null && output[_IPn][_me] != null) {
        contents[_IPn] = de_instanceProfileListType(__getArrayIfSingleItem(output[_IPn][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListInstanceProfilesResponse = (output, context) => {
    const contents = {};
    if (output.InstanceProfiles === "") {
        contents[_IPn] = [];
    }
    else if (output[_IPn] != null && output[_IPn][_me] != null) {
        contents[_IPn] = de_instanceProfileListType(__getArrayIfSingleItem(output[_IPn][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListInstanceProfileTagsResponse = (output, context) => {
    const contents = {};
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListMFADevicesResponse = (output, context) => {
    const contents = {};
    if (output.MFADevices === "") {
        contents[_MFAD] = [];
    }
    else if (output[_MFAD] != null && output[_MFAD][_me] != null) {
        contents[_MFAD] = de_mfaDeviceListType(__getArrayIfSingleItem(output[_MFAD][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListMFADeviceTagsResponse = (output, context) => {
    const contents = {};
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListOpenIDConnectProvidersResponse = (output, context) => {
    const contents = {};
    if (output.OpenIDConnectProviderList === "") {
        contents[_OIDCPL] = [];
    }
    else if (output[_OIDCPL] != null && output[_OIDCPL][_me] != null) {
        contents[_OIDCPL] = de_OpenIDConnectProviderListType(__getArrayIfSingleItem(output[_OIDCPL][_me]), context);
    }
    return contents;
};
const de_ListOpenIDConnectProviderTagsResponse = (output, context) => {
    const contents = {};
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListOrganizationsFeaturesResponse = (output, context) => {
    const contents = {};
    if (output[_OI] != null) {
        contents[_OI] = __expectString(output[_OI]);
    }
    if (output.EnabledFeatures === "") {
        contents[_EFn] = [];
    }
    else if (output[_EFn] != null && output[_EFn][_me] != null) {
        contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
    }
    return contents;
};
const de_ListPoliciesGrantingServiceAccessEntry = (output, context) => {
    const contents = {};
    if (output[_SNer] != null) {
        contents[_SNer] = __expectString(output[_SNer]);
    }
    if (output.Policies === "") {
        contents[_Pol] = [];
    }
    else if (output[_Pol] != null && output[_Pol][_me] != null) {
        contents[_Pol] = de_policyGrantingServiceAccessListType(__getArrayIfSingleItem(output[_Pol][_me]), context);
    }
    return contents;
};
const de_ListPoliciesGrantingServiceAccessResponse = (output, context) => {
    const contents = {};
    if (output.PoliciesGrantingServiceAccess === "") {
        contents[_PGSA] = [];
    }
    else if (output[_PGSA] != null && output[_PGSA][_me] != null) {
        contents[_PGSA] = de_listPolicyGrantingServiceAccessResponseListType(__getArrayIfSingleItem(output[_PGSA][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListPoliciesResponse = (output, context) => {
    const contents = {};
    if (output.Policies === "") {
        contents[_Pol] = [];
    }
    else if (output[_Pol] != null && output[_Pol][_me] != null) {
        contents[_Pol] = de_policyListType(__getArrayIfSingleItem(output[_Pol][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_listPolicyGrantingServiceAccessResponseListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ListPoliciesGrantingServiceAccessEntry(entry, context);
    });
};
const de_ListPolicyTagsResponse = (output, context) => {
    const contents = {};
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListPolicyVersionsResponse = (output, context) => {
    const contents = {};
    if (output.Versions === "") {
        contents[_Ve] = [];
    }
    else if (output[_Ve] != null && output[_Ve][_me] != null) {
        contents[_Ve] = de_policyDocumentVersionListType(__getArrayIfSingleItem(output[_Ve][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListRolePoliciesResponse = (output, context) => {
    const contents = {};
    if (output.PolicyNames === "") {
        contents[_PNo] = [];
    }
    else if (output[_PNo] != null && output[_PNo][_me] != null) {
        contents[_PNo] = de_policyNameListType(__getArrayIfSingleItem(output[_PNo][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListRolesResponse = (output, context) => {
    const contents = {};
    if (output.Roles === "") {
        contents[_Rol] = [];
    }
    else if (output[_Rol] != null && output[_Rol][_me] != null) {
        contents[_Rol] = de_roleListType(__getArrayIfSingleItem(output[_Rol][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListRoleTagsResponse = (output, context) => {
    const contents = {};
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListSAMLProvidersResponse = (output, context) => {
    const contents = {};
    if (output.SAMLProviderList === "") {
        contents[_SAMLPL] = [];
    }
    else if (output[_SAMLPL] != null && output[_SAMLPL][_me] != null) {
        contents[_SAMLPL] = de_SAMLProviderListType(__getArrayIfSingleItem(output[_SAMLPL][_me]), context);
    }
    return contents;
};
const de_ListSAMLProviderTagsResponse = (output, context) => {
    const contents = {};
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListServerCertificatesResponse = (output, context) => {
    const contents = {};
    if (output.ServerCertificateMetadataList === "") {
        contents[_SCML] = [];
    }
    else if (output[_SCML] != null && output[_SCML][_me] != null) {
        contents[_SCML] = de_serverCertificateMetadataListType(__getArrayIfSingleItem(output[_SCML][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListServerCertificateTagsResponse = (output, context) => {
    const contents = {};
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListServiceSpecificCredentialsResponse = (output, context) => {
    const contents = {};
    if (output.ServiceSpecificCredentials === "") {
        contents[_SSCe] = [];
    }
    else if (output[_SSCe] != null && output[_SSCe][_me] != null) {
        contents[_SSCe] = de_ServiceSpecificCredentialsListType(__getArrayIfSingleItem(output[_SSCe][_me]), context);
    }
    return contents;
};
const de_ListSigningCertificatesResponse = (output, context) => {
    const contents = {};
    if (output.Certificates === "") {
        contents[_Cer] = [];
    }
    else if (output[_Cer] != null && output[_Cer][_me] != null) {
        contents[_Cer] = de_certificateListType(__getArrayIfSingleItem(output[_Cer][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListSSHPublicKeysResponse = (output, context) => {
    const contents = {};
    if (output.SSHPublicKeys === "") {
        contents[_SSHPKu] = [];
    }
    else if (output[_SSHPKu] != null && output[_SSHPKu][_me] != null) {
        contents[_SSHPKu] = de_SSHPublicKeyListType(__getArrayIfSingleItem(output[_SSHPKu][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListUserPoliciesResponse = (output, context) => {
    const contents = {};
    if (output.PolicyNames === "") {
        contents[_PNo] = [];
    }
    else if (output[_PNo] != null && output[_PNo][_me] != null) {
        contents[_PNo] = de_policyNameListType(__getArrayIfSingleItem(output[_PNo][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListUsersResponse = (output, context) => {
    const contents = {};
    if (output.Users === "") {
        contents[_Use] = [];
    }
    else if (output[_Use] != null && output[_Use][_me] != null) {
        contents[_Use] = de_userListType(__getArrayIfSingleItem(output[_Use][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListUserTagsResponse = (output, context) => {
    const contents = {};
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_ListVirtualMFADevicesResponse = (output, context) => {
    const contents = {};
    if (output.VirtualMFADevices === "") {
        contents[_VMFADi] = [];
    }
    else if (output[_VMFADi] != null && output[_VMFADi][_me] != null) {
        contents[_VMFADi] = de_virtualMFADeviceListType(__getArrayIfSingleItem(output[_VMFADi][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_LoginProfile = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_PRR] != null) {
        contents[_PRR] = __parseBoolean(output[_PRR]);
    }
    return contents;
};
const de_MalformedCertificateException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_MalformedPolicyDocumentException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_ManagedPolicyDetail = (output, context) => {
    const contents = {};
    if (output[_PN] != null) {
        contents[_PN] = __expectString(output[_PN]);
    }
    if (output[_PI] != null) {
        contents[_PI] = __expectString(output[_PI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_DVI] != null) {
        contents[_DVI] = __expectString(output[_DVI]);
    }
    if (output[_ACt] != null) {
        contents[_ACt] = __strictParseInt32(output[_ACt]);
    }
    if (output[_PBUC] != null) {
        contents[_PBUC] = __strictParseInt32(output[_PBUC]);
    }
    if (output[_IA] != null) {
        contents[_IA] = __parseBoolean(output[_IA]);
    }
    if (output[_D] != null) {
        contents[_D] = __expectString(output[_D]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_UD] != null) {
        contents[_UD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UD]));
    }
    if (output.PolicyVersionList === "") {
        contents[_PVL] = [];
    }
    else if (output[_PVL] != null && output[_PVL][_me] != null) {
        contents[_PVL] = de_policyDocumentVersionListType(__getArrayIfSingleItem(output[_PVL][_me]), context);
    }
    return contents;
};
const de_ManagedPolicyDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ManagedPolicyDetail(entry, context);
    });
};
const de_MFADevice = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_SNe] != null) {
        contents[_SNe] = __expectString(output[_SNe]);
    }
    if (output[_EDn] != null) {
        contents[_EDn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_EDn]));
    }
    return contents;
};
const de_mfaDeviceListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_MFADevice(entry, context);
    });
};
const de_NoSuchEntityException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_OpenIDConnectProviderListEntry = (output, context) => {
    const contents = {};
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    return contents;
};
const de_OpenIDConnectProviderListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OpenIDConnectProviderListEntry(entry, context);
    });
};
const de_OpenIdIdpCommunicationErrorException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_OrganizationNotFoundException = (output, context) => {
    const contents = {};
    if (output[_Me] != null) {
        contents[_Me] = __expectString(output[_Me]);
    }
    return contents;
};
const de_OrganizationNotInAllFeaturesModeException = (output, context) => {
    const contents = {};
    if (output[_Me] != null) {
        contents[_Me] = __expectString(output[_Me]);
    }
    return contents;
};
const de_OrganizationsDecisionDetail = (output, context) => {
    const contents = {};
    if (output[_ABO] != null) {
        contents[_ABO] = __parseBoolean(output[_ABO]);
    }
    return contents;
};
const de_PasswordPolicy = (output, context) => {
    const contents = {};
    if (output[_MPL] != null) {
        contents[_MPL] = __strictParseInt32(output[_MPL]);
    }
    if (output[_RS] != null) {
        contents[_RS] = __parseBoolean(output[_RS]);
    }
    if (output[_RNe] != null) {
        contents[_RNe] = __parseBoolean(output[_RNe]);
    }
    if (output[_RUC] != null) {
        contents[_RUC] = __parseBoolean(output[_RUC]);
    }
    if (output[_RLC] != null) {
        contents[_RLC] = __parseBoolean(output[_RLC]);
    }
    if (output[_AUTCP] != null) {
        contents[_AUTCP] = __parseBoolean(output[_AUTCP]);
    }
    if (output[_EPx] != null) {
        contents[_EPx] = __parseBoolean(output[_EPx]);
    }
    if (output[_MPA] != null) {
        contents[_MPA] = __strictParseInt32(output[_MPA]);
    }
    if (output[_PRPa] != null) {
        contents[_PRPa] = __strictParseInt32(output[_PRPa]);
    }
    if (output[_HE] != null) {
        contents[_HE] = __parseBoolean(output[_HE]);
    }
    return contents;
};
const de_PasswordPolicyViolationException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_PermissionsBoundaryDecisionDetail = (output, context) => {
    const contents = {};
    if (output[_ABPB] != null) {
        contents[_ABPB] = __parseBoolean(output[_ABPB]);
    }
    return contents;
};
const de_Policy = (output, context) => {
    const contents = {};
    if (output[_PN] != null) {
        contents[_PN] = __expectString(output[_PN]);
    }
    if (output[_PI] != null) {
        contents[_PI] = __expectString(output[_PI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_DVI] != null) {
        contents[_DVI] = __expectString(output[_DVI]);
    }
    if (output[_ACt] != null) {
        contents[_ACt] = __strictParseInt32(output[_ACt]);
    }
    if (output[_PBUC] != null) {
        contents[_PBUC] = __strictParseInt32(output[_PBUC]);
    }
    if (output[_IA] != null) {
        contents[_IA] = __parseBoolean(output[_IA]);
    }
    if (output[_D] != null) {
        contents[_D] = __expectString(output[_D]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_UD] != null) {
        contents[_UD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UD]));
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_PolicyDetail = (output, context) => {
    const contents = {};
    if (output[_PN] != null) {
        contents[_PN] = __expectString(output[_PN]);
    }
    if (output[_PD] != null) {
        contents[_PD] = __expectString(output[_PD]);
    }
    return contents;
};
const de_policyDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PolicyDetail(entry, context);
    });
};
const de_policyDocumentVersionListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PolicyVersion(entry, context);
    });
};
const de_PolicyEvaluationException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_PolicyGrantingServiceAccess = (output, context) => {
    const contents = {};
    if (output[_PN] != null) {
        contents[_PN] = __expectString(output[_PN]);
    }
    if (output[_PT] != null) {
        contents[_PT] = __expectString(output[_PT]);
    }
    if (output[_PA] != null) {
        contents[_PA] = __expectString(output[_PA]);
    }
    if (output[_ET] != null) {
        contents[_ET] = __expectString(output[_ET]);
    }
    if (output[_EN] != null) {
        contents[_EN] = __expectString(output[_EN]);
    }
    return contents;
};
const de_policyGrantingServiceAccessListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PolicyGrantingServiceAccess(entry, context);
    });
};
const de_PolicyGroup = (output, context) => {
    const contents = {};
    if (output[_GN] != null) {
        contents[_GN] = __expectString(output[_GN]);
    }
    if (output[_GI] != null) {
        contents[_GI] = __expectString(output[_GI]);
    }
    return contents;
};
const de_PolicyGroupListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PolicyGroup(entry, context);
    });
};
const de_policyListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Policy(entry, context);
    });
};
const de_policyNameListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_PolicyNotAttachableException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_PolicyRole = (output, context) => {
    const contents = {};
    if (output[_RN] != null) {
        contents[_RN] = __expectString(output[_RN]);
    }
    if (output[_RI] != null) {
        contents[_RI] = __expectString(output[_RI]);
    }
    return contents;
};
const de_PolicyRoleListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PolicyRole(entry, context);
    });
};
const de_PolicyUser = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_UI] != null) {
        contents[_UI] = __expectString(output[_UI]);
    }
    return contents;
};
const de_PolicyUserListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PolicyUser(entry, context);
    });
};
const de_PolicyVersion = (output, context) => {
    const contents = {};
    if (output[_Do] != null) {
        contents[_Do] = __expectString(output[_Do]);
    }
    if (output[_VI] != null) {
        contents[_VI] = __expectString(output[_VI]);
    }
    if (output[_IDV] != null) {
        contents[_IDV] = __parseBoolean(output[_IDV]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    return contents;
};
const de_Position = (output, context) => {
    const contents = {};
    if (output[_L] != null) {
        contents[_L] = __strictParseInt32(output[_L]);
    }
    if (output[_Col] != null) {
        contents[_Col] = __strictParseInt32(output[_Col]);
    }
    return contents;
};
const de_privateKeyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_SAMLPrivateKey(entry, context);
    });
};
const de_ReportGenerationLimitExceededException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_ResetServiceSpecificCredentialResponse = (output, context) => {
    const contents = {};
    if (output[_SSC] != null) {
        contents[_SSC] = de_ServiceSpecificCredential(output[_SSC], context);
    }
    return contents;
};
const de_ResourceSpecificResult = (output, context) => {
    const contents = {};
    if (output[_ERN] != null) {
        contents[_ERN] = __expectString(output[_ERN]);
    }
    if (output[_ERD] != null) {
        contents[_ERD] = __expectString(output[_ERD]);
    }
    if (output.MatchedStatements === "") {
        contents[_MS] = [];
    }
    else if (output[_MS] != null && output[_MS][_me] != null) {
        contents[_MS] = de_StatementListType(__getArrayIfSingleItem(output[_MS][_me]), context);
    }
    if (output.MissingContextValues === "") {
        contents[_MCV] = [];
    }
    else if (output[_MCV] != null && output[_MCV][_me] != null) {
        contents[_MCV] = de_ContextKeyNamesResultListType(__getArrayIfSingleItem(output[_MCV][_me]), context);
    }
    if (output.EvalDecisionDetails === "") {
        contents[_EDD] = {};
    }
    else if (output[_EDD] != null && output[_EDD][_e] != null) {
        contents[_EDD] = de_EvalDecisionDetailsType(__getArrayIfSingleItem(output[_EDD][_e]), context);
    }
    if (output[_PBDD] != null) {
        contents[_PBDD] = de_PermissionsBoundaryDecisionDetail(output[_PBDD], context);
    }
    return contents;
};
const de_ResourceSpecificResultListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ResourceSpecificResult(entry, context);
    });
};
const de_Role = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_RN] != null) {
        contents[_RN] = __expectString(output[_RN]);
    }
    if (output[_RI] != null) {
        contents[_RI] = __expectString(output[_RI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_ARPD] != null) {
        contents[_ARPD] = __expectString(output[_ARPD]);
    }
    if (output[_D] != null) {
        contents[_D] = __expectString(output[_D]);
    }
    if (output[_MSD] != null) {
        contents[_MSD] = __strictParseInt32(output[_MSD]);
    }
    if (output[_PB] != null) {
        contents[_PB] = de_AttachedPermissionsBoundary(output[_PB], context);
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_RLU] != null) {
        contents[_RLU] = de_RoleLastUsed(output[_RLU], context);
    }
    return contents;
};
const de_RoleDetail = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_RN] != null) {
        contents[_RN] = __expectString(output[_RN]);
    }
    if (output[_RI] != null) {
        contents[_RI] = __expectString(output[_RI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_ARPD] != null) {
        contents[_ARPD] = __expectString(output[_ARPD]);
    }
    if (output.InstanceProfileList === "") {
        contents[_IPL] = [];
    }
    else if (output[_IPL] != null && output[_IPL][_me] != null) {
        contents[_IPL] = de_instanceProfileListType(__getArrayIfSingleItem(output[_IPL][_me]), context);
    }
    if (output.RolePolicyList === "") {
        contents[_RPL] = [];
    }
    else if (output[_RPL] != null && output[_RPL][_me] != null) {
        contents[_RPL] = de_policyDetailListType(__getArrayIfSingleItem(output[_RPL][_me]), context);
    }
    if (output.AttachedManagedPolicies === "") {
        contents[_AMP] = [];
    }
    else if (output[_AMP] != null && output[_AMP][_me] != null) {
        contents[_AMP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AMP][_me]), context);
    }
    if (output[_PB] != null) {
        contents[_PB] = de_AttachedPermissionsBoundary(output[_PB], context);
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    if (output[_RLU] != null) {
        contents[_RLU] = de_RoleLastUsed(output[_RLU], context);
    }
    return contents;
};
const de_roleDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_RoleDetail(entry, context);
    });
};
const de_RoleLastUsed = (output, context) => {
    const contents = {};
    if (output[_LUD] != null) {
        contents[_LUD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUD]));
    }
    if (output[_R] != null) {
        contents[_R] = __expectString(output[_R]);
    }
    return contents;
};
const de_roleListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Role(entry, context);
    });
};
const de_RoleUsageListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_RoleUsageType(entry, context);
    });
};
const de_RoleUsageType = (output, context) => {
    const contents = {};
    if (output[_R] != null) {
        contents[_R] = __expectString(output[_R]);
    }
    if (output.Resources === "") {
        contents[_Res] = [];
    }
    else if (output[_Res] != null && output[_Res][_me] != null) {
        contents[_Res] = de_ArnListType(__getArrayIfSingleItem(output[_Res][_me]), context);
    }
    return contents;
};
const de_SAMLPrivateKey = (output, context) => {
    const contents = {};
    if (output[_KI] != null) {
        contents[_KI] = __expectString(output[_KI]);
    }
    if (output[_Ti] != null) {
        contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
    }
    return contents;
};
const de_SAMLProviderListEntry = (output, context) => {
    const contents = {};
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_VU] != null) {
        contents[_VU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_VU]));
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    return contents;
};
const de_SAMLProviderListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_SAMLProviderListEntry(entry, context);
    });
};
const de_ServerCertificate = (output, context) => {
    const contents = {};
    if (output[_SCM] != null) {
        contents[_SCM] = de_ServerCertificateMetadata(output[_SCM], context);
    }
    if (output[_CB] != null) {
        contents[_CB] = __expectString(output[_CB]);
    }
    if (output[_CC] != null) {
        contents[_CC] = __expectString(output[_CC]);
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_ServerCertificateMetadata = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_SCN] != null) {
        contents[_SCN] = __expectString(output[_SCN]);
    }
    if (output[_SCI] != null) {
        contents[_SCI] = __expectString(output[_SCI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_UDp] != null) {
        contents[_UDp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UDp]));
    }
    if (output[_Ex] != null) {
        contents[_Ex] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ex]));
    }
    return contents;
};
const de_serverCertificateMetadataListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ServerCertificateMetadata(entry, context);
    });
};
const de_ServiceAccessNotEnabledException = (output, context) => {
    const contents = {};
    if (output[_Me] != null) {
        contents[_Me] = __expectString(output[_Me]);
    }
    return contents;
};
const de_ServiceFailureException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_ServiceLastAccessed = (output, context) => {
    const contents = {};
    if (output[_SN] != null) {
        contents[_SN] = __expectString(output[_SN]);
    }
    if (output[_LA] != null) {
        contents[_LA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LA]));
    }
    if (output[_SNer] != null) {
        contents[_SNer] = __expectString(output[_SNer]);
    }
    if (output[_LAE] != null) {
        contents[_LAE] = __expectString(output[_LAE]);
    }
    if (output[_LAR] != null) {
        contents[_LAR] = __expectString(output[_LAR]);
    }
    if (output[_TAE] != null) {
        contents[_TAE] = __strictParseInt32(output[_TAE]);
    }
    if (output.TrackedActionsLastAccessed === "") {
        contents[_TALA] = [];
    }
    else if (output[_TALA] != null && output[_TALA][_me] != null) {
        contents[_TALA] = de_TrackedActionsLastAccessed(__getArrayIfSingleItem(output[_TALA][_me]), context);
    }
    return contents;
};
const de_ServiceNotSupportedException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_ServicesLastAccessed = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ServiceLastAccessed(entry, context);
    });
};
const de_ServiceSpecificCredential = (output, context) => {
    const contents = {};
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_SN] != null) {
        contents[_SN] = __expectString(output[_SN]);
    }
    if (output[_SUN] != null) {
        contents[_SUN] = __expectString(output[_SUN]);
    }
    if (output[_SP] != null) {
        contents[_SP] = __expectString(output[_SP]);
    }
    if (output[_SSCI] != null) {
        contents[_SSCI] = __expectString(output[_SSCI]);
    }
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_St] != null) {
        contents[_St] = __expectString(output[_St]);
    }
    return contents;
};
const de_ServiceSpecificCredentialMetadata = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_St] != null) {
        contents[_St] = __expectString(output[_St]);
    }
    if (output[_SUN] != null) {
        contents[_SUN] = __expectString(output[_SUN]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_SSCI] != null) {
        contents[_SSCI] = __expectString(output[_SSCI]);
    }
    if (output[_SN] != null) {
        contents[_SN] = __expectString(output[_SN]);
    }
    return contents;
};
const de_ServiceSpecificCredentialsListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ServiceSpecificCredentialMetadata(entry, context);
    });
};
const de_SigningCertificate = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_CI] != null) {
        contents[_CI] = __expectString(output[_CI]);
    }
    if (output[_CB] != null) {
        contents[_CB] = __expectString(output[_CB]);
    }
    if (output[_St] != null) {
        contents[_St] = __expectString(output[_St]);
    }
    if (output[_UDp] != null) {
        contents[_UDp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UDp]));
    }
    return contents;
};
const de_SimulatePolicyResponse = (output, context) => {
    const contents = {};
    if (output.EvaluationResults === "") {
        contents[_ER] = [];
    }
    else if (output[_ER] != null && output[_ER][_me] != null) {
        contents[_ER] = de_EvaluationResultsListType(__getArrayIfSingleItem(output[_ER][_me]), context);
    }
    if (output[_IT] != null) {
        contents[_IT] = __parseBoolean(output[_IT]);
    }
    if (output[_M] != null) {
        contents[_M] = __expectString(output[_M]);
    }
    return contents;
};
const de_SSHPublicKey = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_SSHPKI] != null) {
        contents[_SSHPKI] = __expectString(output[_SSHPKI]);
    }
    if (output[_Fi] != null) {
        contents[_Fi] = __expectString(output[_Fi]);
    }
    if (output[_SSHPKB] != null) {
        contents[_SSHPKB] = __expectString(output[_SSHPKB]);
    }
    if (output[_St] != null) {
        contents[_St] = __expectString(output[_St]);
    }
    if (output[_UDp] != null) {
        contents[_UDp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UDp]));
    }
    return contents;
};
const de_SSHPublicKeyListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_SSHPublicKeyMetadata(entry, context);
    });
};
const de_SSHPublicKeyMetadata = (output, context) => {
    const contents = {};
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_SSHPKI] != null) {
        contents[_SSHPKI] = __expectString(output[_SSHPKI]);
    }
    if (output[_St] != null) {
        contents[_St] = __expectString(output[_St]);
    }
    if (output[_UDp] != null) {
        contents[_UDp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UDp]));
    }
    return contents;
};
const de_Statement = (output, context) => {
    const contents = {};
    if (output[_SPI] != null) {
        contents[_SPI] = __expectString(output[_SPI]);
    }
    if (output[_SPT] != null) {
        contents[_SPT] = __expectString(output[_SPT]);
    }
    if (output[_SPt] != null) {
        contents[_SPt] = de_Position(output[_SPt], context);
    }
    if (output[_EPn] != null) {
        contents[_EPn] = de_Position(output[_EPn], context);
    }
    return contents;
};
const de_StatementListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Statement(entry, context);
    });
};
const de_summaryMapType = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = __strictParseInt32(pair["value"]);
        return acc;
    }, {});
};
const de_Tag = (output, context) => {
    const contents = {};
    if (output[_K] != null) {
        contents[_K] = __expectString(output[_K]);
    }
    if (output[_Va] != null) {
        contents[_Va] = __expectString(output[_Va]);
    }
    return contents;
};
const de_tagListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Tag(entry, context);
    });
};
const de_thumbprintListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return __expectString(entry);
    });
};
const de_TrackedActionLastAccessed = (output, context) => {
    const contents = {};
    if (output[_ANc] != null) {
        contents[_ANc] = __expectString(output[_ANc]);
    }
    if (output[_LAEa] != null) {
        contents[_LAEa] = __expectString(output[_LAEa]);
    }
    if (output[_LATa] != null) {
        contents[_LATa] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LATa]));
    }
    if (output[_LARa] != null) {
        contents[_LARa] = __expectString(output[_LARa]);
    }
    return contents;
};
const de_TrackedActionsLastAccessed = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_TrackedActionLastAccessed(entry, context);
    });
};
const de_UnmodifiableEntityException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_UnrecognizedPublicKeyEncodingException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = __expectString(output[_m]);
    }
    return contents;
};
const de_UpdateRoleDescriptionResponse = (output, context) => {
    const contents = {};
    if (output[_Ro] != null) {
        contents[_Ro] = de_Role(output[_Ro], context);
    }
    return contents;
};
const de_UpdateRoleResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_UpdateSAMLProviderResponse = (output, context) => {
    const contents = {};
    if (output[_SAMLPA] != null) {
        contents[_SAMLPA] = __expectString(output[_SAMLPA]);
    }
    return contents;
};
const de_UploadServerCertificateResponse = (output, context) => {
    const contents = {};
    if (output[_SCM] != null) {
        contents[_SCM] = de_ServerCertificateMetadata(output[_SCM], context);
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_UploadSigningCertificateResponse = (output, context) => {
    const contents = {};
    if (output[_Cert] != null) {
        contents[_Cert] = de_SigningCertificate(output[_Cert], context);
    }
    return contents;
};
const de_UploadSSHPublicKeyResponse = (output, context) => {
    const contents = {};
    if (output[_SSHPK] != null) {
        contents[_SSHPK] = de_SSHPublicKey(output[_SSHPK], context);
    }
    return contents;
};
const de_User = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_UI] != null) {
        contents[_UI] = __expectString(output[_UI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output[_PLU] != null) {
        contents[_PLU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_PLU]));
    }
    if (output[_PB] != null) {
        contents[_PB] = de_AttachedPermissionsBoundary(output[_PB], context);
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_UserDetail = (output, context) => {
    const contents = {};
    if (output[_P] != null) {
        contents[_P] = __expectString(output[_P]);
    }
    if (output[_UN] != null) {
        contents[_UN] = __expectString(output[_UN]);
    }
    if (output[_UI] != null) {
        contents[_UI] = __expectString(output[_UI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    if (output[_CD] != null) {
        contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
    }
    if (output.UserPolicyList === "") {
        contents[_UPL] = [];
    }
    else if (output[_UPL] != null && output[_UPL][_me] != null) {
        contents[_UPL] = de_policyDetailListType(__getArrayIfSingleItem(output[_UPL][_me]), context);
    }
    if (output.GroupList === "") {
        contents[_GL] = [];
    }
    else if (output[_GL] != null && output[_GL][_me] != null) {
        contents[_GL] = de_groupNameListType(__getArrayIfSingleItem(output[_GL][_me]), context);
    }
    if (output.AttachedManagedPolicies === "") {
        contents[_AMP] = [];
    }
    else if (output[_AMP] != null && output[_AMP][_me] != null) {
        contents[_AMP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AMP][_me]), context);
    }
    if (output[_PB] != null) {
        contents[_PB] = de_AttachedPermissionsBoundary(output[_PB], context);
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_userDetailListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_UserDetail(entry, context);
    });
};
const de_userListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_User(entry, context);
    });
};
const de_VirtualMFADevice = (output, context) => {
    const contents = {};
    if (output[_SNe] != null) {
        contents[_SNe] = __expectString(output[_SNe]);
    }
    if (output[_BSS] != null) {
        contents[_BSS] = context.base64Decoder(output[_BSS]);
    }
    if (output[_QRCPNG] != null) {
        contents[_QRCPNG] = context.base64Decoder(output[_QRCPNG]);
    }
    if (output[_Us] != null) {
        contents[_Us] = de_User(output[_Us], context);
    }
    if (output[_EDn] != null) {
        contents[_EDn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_EDn]));
    }
    if (output.Tags === "") {
        contents[_T] = [];
    }
    else if (output[_T] != null && output[_T][_me] != null) {
        contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
    }
    return contents;
};
const de_virtualMFADeviceListType = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_VirtualMFADevice(entry, context);
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new __HttpRequest(contents);
};
const SHARED_HEADERS = {
    "content-type": "application/x-www-form-urlencoded",
};
const _ = "2010-05-08";
const _A = "Action";
const _AA = "AccountAlias";
const _AAc = "AccountAliases";
const _ABO = "AllowedByOrganizations";
const _ABPB = "AllowedByPermissionsBoundary";
const _AC = "AuthenticationCode1";
const _ACIDTOIDCP = "AddClientIDToOpenIDConnectProvider";
const _ACt = "AttachmentCount";
const _ACu = "AuthenticationCode2";
const _AD = "AccessDetails";
const _AEM = "AssertionEncryptionMode";
const _AGP = "AttachGroupPolicy";
const _AK = "AccessKey";
const _AKI = "AccessKeyId";
const _AKLU = "AccessKeyLastUsed";
const _AKM = "AccessKeyMetadata";
const _AMP = "AttachedManagedPolicies";
const _AN = "ActionNames";
const _ANc = "ActionName";
const _AP = "AttachedPolicies";
const _APK = "AddPrivateKey";
const _ARP = "AttachRolePolicy";
const _ARPD = "AssumeRolePolicyDocument";
const _ARTIP = "AddRoleToInstanceProfile";
const _AS = "AssignmentStatus";
const _AUP = "AttachUserPolicy";
const _AUTCP = "AllowUsersToChangePassword";
const _AUTG = "AddUserToGroup";
const _AWSSN = "AWSServiceName";
const _Ar = "Arn";
const _BSS = "Base32StringSeed";
const _C = "Code";
const _CA = "CallerArn";
const _CAA = "CreateAccountAlias";
const _CAK = "CreateAccessKey";
const _CB = "CertificateBody";
const _CC = "CertificateChain";
const _CD = "CreateDate";
const _CE = "ContextEntries";
const _CG = "CreateGroup";
const _CI = "CertificateId";
const _CID = "ClientID";
const _CIDL = "ClientIDList";
const _CIP = "CreateInstanceProfile";
const _CKN = "ContextKeyName";
const _CKNo = "ContextKeyNames";
const _CKT = "ContextKeyType";
const _CKV = "ContextKeyValues";
const _CLP = "CreateLoginProfile";
const _COIDCP = "CreateOpenIDConnectProvider";
const _CP = "ChangePassword";
const _CPV = "CreatePolicyVersion";
const _CPr = "CreatePolicy";
const _CR = "CreateRole";
const _CS = "CustomSuffix";
const _CSAMLP = "CreateSAMLProvider";
const _CSLR = "CreateServiceLinkedRole";
const _CSSC = "CreateServiceSpecificCredential";
const _CU = "CreateUser";
const _CVMFAD = "CreateVirtualMFADevice";
const _Ce = "Certifications";
const _Cer = "Certificates";
const _Cert = "Certificate";
const _Co = "Content";
const _Col = "Column";
const _D = "Description";
const _DAA = "DeleteAccountAlias";
const _DAK = "DeleteAccessKey";
const _DAPP = "DeleteAccountPasswordPolicy";
const _DG = "DeleteGroup";
const _DGP = "DeleteGroupPolicy";
const _DGPe = "DetachGroupPolicy";
const _DIP = "DeleteInstanceProfile";
const _DLP = "DeleteLoginProfile";
const _DMFAD = "DeactivateMFADevice";
const _DOIDCP = "DeleteOpenIDConnectProvider";
const _DORCM = "DisableOrganizationsRootCredentialsManagement";
const _DORS = "DisableOrganizationsRootSessions";
const _DP = "DeletePolicy";
const _DPV = "DeletePolicyVersion";
const _DR = "DeleteRole";
const _DRP = "DeleteRolePolicy";
const _DRPB = "DeleteRolePermissionsBoundary";
const _DRPe = "DetachRolePolicy";
const _DSAMLP = "DeleteSAMLProvider";
const _DSC = "DeleteServerCertificate";
const _DSCe = "DeleteSigningCertificate";
const _DSLR = "DeleteServiceLinkedRole";
const _DSSC = "DeleteServiceSpecificCredential";
const _DSSHPK = "DeleteSSHPublicKey";
const _DTI = "DeletionTaskId";
const _DU = "DeleteUser";
const _DUP = "DeleteUserPolicy";
const _DUPB = "DeleteUserPermissionsBoundary";
const _DUPe = "DetachUserPolicy";
const _DVI = "DefaultVersionId";
const _DVMFAD = "DeleteVirtualMFADevice";
const _Do = "Document";
const _E = "Encoding";
const _EAN = "EvalActionName";
const _ED = "EvalDecision";
const _EDD = "EvalDecisionDetails";
const _EDL = "EntityDetailsList";
const _EDn = "EnableDate";
const _EDr = "ErrorDetails";
const _EF = "EntityFilter";
const _EFn = "EnabledFeatures";
const _EI = "EntityInfo";
const _EMFAD = "EnableMFADevice";
const _EN = "EntityName";
const _EORCM = "EnableOrganizationsRootCredentialsManagement";
const _EORS = "EnableOrganizationsRootSessions";
const _EP = "EntityPath";
const _EPn = "EndPosition";
const _EPx = "ExpirePasswords";
const _ER = "EvaluationResults";
const _ERD = "EvalResourceDecision";
const _ERN = "EvalResourceName";
const _ET = "EntityType";
const _Er = "Error";
const _Ex = "Expiration";
const _F = "Filter";
const _Fi = "Fingerprint";
const _G = "Granularity";
const _GAAD = "GetAccountAuthorizationDetails";
const _GAKLU = "GetAccessKeyLastUsed";
const _GAPP = "GetAccountPasswordPolicy";
const _GAS = "GetAccountSummary";
const _GCKFCP = "GetContextKeysForCustomPolicy";
const _GCKFPP = "GetContextKeysForPrincipalPolicy";
const _GCR = "GenerateCredentialReport";
const _GCRe = "GetCredentialReport";
const _GDL = "GroupDetailList";
const _GETV = "GlobalEndpointTokenVersion";
const _GG = "GetGroup";
const _GGP = "GetGroupPolicy";
const _GI = "GroupId";
const _GIP = "GetInstanceProfile";
const _GL = "GroupList";
const _GLP = "GetLoginProfile";
const _GMFAD = "GetMFADevice";
const _GN = "GroupName";
const _GOAR = "GenerateOrganizationsAccessReport";
const _GOARe = "GetOrganizationsAccessReport";
const _GOIDCP = "GetOpenIDConnectProvider";
const _GP = "GetPolicy";
const _GPL = "GroupPolicyList";
const _GPV = "GetPolicyVersion";
const _GR = "GetRole";
const _GRP = "GetRolePolicy";
const _GSAMLP = "GetSAMLProvider";
const _GSC = "GetServerCertificate";
const _GSLAD = "GenerateServiceLastAccessedDetails";
const _GSLADWE = "GetServiceLastAccessedDetailsWithEntities";
const _GSLADe = "GetServiceLastAccessedDetails";
const _GSLRDS = "GetServiceLinkedRoleDeletionStatus";
const _GSSHPK = "GetSSHPublicKey";
const _GT = "GeneratedTime";
const _GU = "GetUser";
const _GUP = "GetUserPolicy";
const _Gr = "Group";
const _Gro = "Groups";
const _HE = "HardExpiry";
const _I = "Id";
const _IA = "IsAttachable";
const _IDV = "IsDefaultVersion";
const _IP = "InstanceProfile";
const _IPI = "InstanceProfileId";
const _IPL = "InstanceProfileList";
const _IPN = "InstanceProfileName";
const _IPn = "InstanceProfiles";
const _IT = "IsTruncated";
const _JCD = "JobCreationDate";
const _JCDo = "JobCompletionDate";
const _JI = "JobId";
const _JS = "JobStatus";
const _JT = "JobType";
const _K = "Key";
const _KI = "KeyId";
const _L = "Line";
const _LA = "LastAuthenticated";
const _LAA = "ListAccountAliases";
const _LAE = "LastAuthenticatedEntity";
const _LAEa = "LastAccessedEntity";
const _LAGP = "ListAttachedGroupPolicies";
const _LAK = "ListAccessKeys";
const _LAR = "LastAuthenticatedRegion";
const _LARP = "ListAttachedRolePolicies";
const _LARa = "LastAccessedRegion";
const _LAT = "LastAuthenticatedTime";
const _LATa = "LastAccessedTime";
const _LAUP = "ListAttachedUserPolicies";
const _LEFP = "ListEntitiesForPolicy";
const _LG = "ListGroups";
const _LGFU = "ListGroupsForUser";
const _LGP = "ListGroupPolicies";
const _LIP = "ListInstanceProfiles";
const _LIPFR = "ListInstanceProfilesForRole";
const _LIPT = "ListInstanceProfileTags";
const _LMFAD = "ListMFADevices";
const _LMFADT = "ListMFADeviceTags";
const _LOF = "ListOrganizationsFeatures";
const _LOIDCP = "ListOpenIDConnectProviders";
const _LOIDCPT = "ListOpenIDConnectProviderTags";
const _LP = "ListPolicies";
const _LPGSA = "ListPoliciesGrantingServiceAccess";
const _LPT = "ListPolicyTags";
const _LPV = "ListPolicyVersions";
const _LPo = "LoginProfile";
const _LR = "ListRoles";
const _LRP = "ListRolePolicies";
const _LRT = "ListRoleTags";
const _LSAMLP = "ListSAMLProviders";
const _LSAMLPT = "ListSAMLProviderTags";
const _LSC = "ListServerCertificates";
const _LSCT = "ListServerCertificateTags";
const _LSCi = "ListSigningCertificates";
const _LSSC = "ListServiceSpecificCredentials";
const _LSSHPK = "ListSSHPublicKeys";
const _LU = "ListUsers";
const _LUD = "LastUsedDate";
const _LUP = "ListUserPolicies";
const _LUT = "ListUserTags";
const _LVMFAD = "ListVirtualMFADevices";
const _M = "Marker";
const _MCV = "MissingContextValues";
const _MFAD = "MFADevices";
const _MI = "MaxItems";
const _MPA = "MaxPasswordAge";
const _MPL = "MinimumPasswordLength";
const _MS = "MatchedStatements";
const _MSD = "MaxSessionDuration";
const _Me = "Message";
const _N = "Name";
const _NGN = "NewGroupName";
const _NOSA = "NumberOfServicesAccessible";
const _NOSNA = "NumberOfServicesNotAccessed";
const _NP = "NewPassword";
const _NPe = "NewPath";
const _NSCN = "NewServerCertificateName";
const _NUN = "NewUserName";
const _OA = "OnlyAttached";
const _ODD = "OrganizationsDecisionDetail";
const _OI = "OrganizationId";
const _OIDCPA = "OpenIDConnectProviderArn";
const _OIDCPL = "OpenIDConnectProviderList";
const _OP = "OldPassword";
const _OPI = "OrganizationsPolicyId";
const _P = "Path";
const _PA = "PolicyArn";
const _PB = "PermissionsBoundary";
const _PBA = "PermissionsBoundaryArn";
const _PBDD = "PermissionsBoundaryDecisionDetail";
const _PBPIL = "PermissionsBoundaryPolicyInputList";
const _PBT = "PermissionsBoundaryType";
const _PBUC = "PermissionsBoundaryUsageCount";
const _PD = "PolicyDocument";
const _PG = "PolicyGroups";
const _PGP = "PutGroupPolicy";
const _PGSA = "PoliciesGrantingServiceAccess";
const _PI = "PolicyId";
const _PIL = "PolicyInputList";
const _PK = "PrivateKey";
const _PKL = "PrivateKeyList";
const _PLU = "PasswordLastUsed";
const _PN = "PolicyName";
const _PNo = "PolicyNames";
const _PP = "PathPrefix";
const _PPa = "PasswordPolicy";
const _PR = "PolicyRoles";
const _PRP = "PutRolePolicy";
const _PRPB = "PutRolePermissionsBoundary";
const _PRPa = "PasswordReusePrevention";
const _PRR = "PasswordResetRequired";
const _PSA = "PolicySourceArn";
const _PT = "PolicyType";
const _PU = "PolicyUsers";
const _PUF = "PolicyUsageFilter";
const _PUP = "PutUserPolicy";
const _PUPB = "PutUserPermissionsBoundary";
const _PV = "PolicyVersion";
const _PVL = "PolicyVersionList";
const _Pa = "Password";
const _Po = "Policy";
const _Pol = "Policies";
const _QRCPNG = "QRCodePNG";
const _R = "Region";
const _RA = "ResourceArns";
const _RCIDFOIDCP = "RemoveClientIDFromOpenIDConnectProvider";
const _RDL = "RoleDetailList";
const _RF = "ReportFormat";
const _RHO = "ResourceHandlingOption";
const _RI = "RoleId";
const _RLC = "RequireLowercaseCharacters";
const _RLU = "RoleLastUsed";
const _RMFAD = "ResyncMFADevice";
const _RN = "RoleName";
const _RNe = "RequireNumbers";
const _RO = "ResourceOwner";
const _RP = "ResourcePolicy";
const _RPK = "RemovePrivateKey";
const _RPL = "RolePolicyList";
const _RRFIP = "RemoveRoleFromInstanceProfile";
const _RS = "RequireSymbols";
const _RSR = "ResourceSpecificResults";
const _RSSC = "ResetServiceSpecificCredential";
const _RUC = "RequireUppercaseCharacters";
const _RUFG = "RemoveUserFromGroup";
const _RUL = "RoleUsageList";
const _Re = "Reason";
const _Res = "Resources";
const _Ro = "Role";
const _Rol = "Roles";
const _S = "Scope";
const _SAD = "SetAsDefault";
const _SAK = "SecretAccessKey";
const _SAMLMD = "SAMLMetadataDocument";
const _SAMLPA = "SAMLProviderArn";
const _SAMLPL = "SAMLProviderList";
const _SAMLPUUID = "SAMLProviderUUID";
const _SC = "ServerCertificate";
const _SCI = "ServerCertificateId";
const _SCM = "ServerCertificateMetadata";
const _SCML = "ServerCertificateMetadataList";
const _SCN = "ServerCertificateName";
const _SCP = "SimulateCustomPolicy";
const _SDPV = "SetDefaultPolicyVersion";
const _SK = "SortKey";
const _SLA = "ServicesLastAccessed";
const _SM = "SummaryMap";
const _SN = "ServiceName";
const _SNe = "SerialNumber";
const _SNer = "ServiceNamespace";
const _SNerv = "ServiceNamespaces";
const _SP = "ServicePassword";
const _SPI = "SourcePolicyId";
const _SPP = "SimulatePrincipalPolicy";
const _SPT = "SourcePolicyType";
const _SPt = "StartPosition";
const _SSC = "ServiceSpecificCredential";
const _SSCI = "ServiceSpecificCredentialId";
const _SSCe = "ServiceSpecificCredentials";
const _SSHPK = "SSHPublicKey";
const _SSHPKB = "SSHPublicKeyBody";
const _SSHPKI = "SSHPublicKeyId";
const _SSHPKu = "SSHPublicKeys";
const _SSTSP = "SetSecurityTokenServicePreferences";
const _SUN = "ServiceUserName";
const _St = "Status";
const _Sta = "State";
const _T = "Tags";
const _TAE = "TotalAuthenticatedEntities";
const _TALA = "TrackedActionsLastAccessed";
const _TIP = "TagInstanceProfile";
const _TK = "TagKeys";
const _TL = "ThumbprintList";
const _TMFAD = "TagMFADevice";
const _TOIDCP = "TagOpenIDConnectProvider";
const _TP = "TagPolicy";
const _TR = "TagRole";
const _TSAMLP = "TagSAMLProvider";
const _TSC = "TagServerCertificate";
const _TU = "TagUser";
const _Ti = "Timestamp";
const _Ty = "Type";
const _U = "Url";
const _UAK = "UpdateAccessKey";
const _UAPP = "UpdateAccountPasswordPolicy";
const _UARP = "UpdateAssumeRolePolicy";
const _UD = "UpdateDate";
const _UDL = "UserDetailList";
const _UDp = "UploadDate";
const _UG = "UpdateGroup";
const _UI = "UserId";
const _UIP = "UntagInstanceProfile";
const _ULP = "UpdateLoginProfile";
const _UMFAD = "UntagMFADevice";
const _UN = "UserName";
const _UOIDCP = "UntagOpenIDConnectProvider";
const _UOIDCPT = "UpdateOpenIDConnectProviderThumbprint";
const _UP = "UntagPolicy";
const _UPL = "UserPolicyList";
const _UR = "UntagRole";
const _URD = "UpdateRoleDescription";
const _URp = "UpdateRole";
const _USAMLP = "UntagSAMLProvider";
const _USAMLPp = "UpdateSAMLProvider";
const _USC = "UntagServerCertificate";
const _USCp = "UpdateServerCertificate";
const _USCpd = "UpdateSigningCertificate";
const _USCpl = "UploadServerCertificate";
const _USCplo = "UploadSigningCertificate";
const _USSC = "UpdateServiceSpecificCredential";
const _USSHPK = "UpdateSSHPublicKey";
const _USSHPKp = "UploadSSHPublicKey";
const _UU = "UntagUser";
const _UUp = "UpdateUser";
const _Us = "User";
const _Use = "Users";
const _V = "Version";
const _VI = "VersionId";
const _VMFAD = "VirtualMFADevice";
const _VMFADN = "VirtualMFADeviceName";
const _VMFADi = "VirtualMFADevices";
const _VU = "ValidUntil";
const _Va = "Value";
const _Ve = "Versions";
const _e = "entry";
const _m = "message";
const _me = "member";
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};
