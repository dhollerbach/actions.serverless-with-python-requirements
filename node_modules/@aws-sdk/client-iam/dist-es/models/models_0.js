import { SENSITIVE_STRING } from "@smithy/smithy-client";
import { IAMServiceException as __BaseException } from "./IAMServiceException";
export const AccessAdvisorUsageGranularityType = {
    ACTION_LEVEL: "ACTION_LEVEL",
    SERVICE_LEVEL: "SERVICE_LEVEL",
};
export const StatusType = {
    Active: "Active",
    Inactive: "Inactive",
};
export class AccountNotManagementOrDelegatedAdministratorException extends __BaseException {
    name = "AccountNotManagementOrDelegatedAdministratorException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "AccountNotManagementOrDelegatedAdministratorException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AccountNotManagementOrDelegatedAdministratorException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidInputException extends __BaseException {
    name = "InvalidInputException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidInputException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidInputException.prototype);
    }
}
export class LimitExceededException extends __BaseException {
    name = "LimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
export class NoSuchEntityException extends __BaseException {
    name = "NoSuchEntityException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NoSuchEntityException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NoSuchEntityException.prototype);
    }
}
export class ServiceFailureException extends __BaseException {
    name = "ServiceFailureException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "ServiceFailureException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceFailureException.prototype);
    }
}
export class EntityAlreadyExistsException extends __BaseException {
    name = "EntityAlreadyExistsException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "EntityAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EntityAlreadyExistsException.prototype);
    }
}
export class UnmodifiableEntityException extends __BaseException {
    name = "UnmodifiableEntityException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UnmodifiableEntityException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnmodifiableEntityException.prototype);
    }
}
export const AssertionEncryptionModeType = {
    Allowed: "Allowed",
    Required: "Required",
};
export const AssignmentStatusType = {
    Any: "Any",
    Assigned: "Assigned",
    Unassigned: "Unassigned",
};
export const PermissionsBoundaryAttachmentType = {
    Policy: "PermissionsBoundaryPolicy",
};
export class PolicyNotAttachableException extends __BaseException {
    name = "PolicyNotAttachableException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PolicyNotAttachableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PolicyNotAttachableException.prototype);
    }
}
export class EntityTemporarilyUnmodifiableException extends __BaseException {
    name = "EntityTemporarilyUnmodifiableException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "EntityTemporarilyUnmodifiableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, EntityTemporarilyUnmodifiableException.prototype);
    }
}
export class InvalidUserTypeException extends __BaseException {
    name = "InvalidUserTypeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidUserTypeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidUserTypeException.prototype);
    }
}
export class PasswordPolicyViolationException extends __BaseException {
    name = "PasswordPolicyViolationException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PasswordPolicyViolationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PasswordPolicyViolationException.prototype);
    }
}
export class ConcurrentModificationException extends __BaseException {
    name = "ConcurrentModificationException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    }
}
export class OpenIdIdpCommunicationErrorException extends __BaseException {
    name = "OpenIdIdpCommunicationErrorException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "OpenIdIdpCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OpenIdIdpCommunicationErrorException.prototype);
    }
}
export class MalformedPolicyDocumentException extends __BaseException {
    name = "MalformedPolicyDocumentException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
export class ServiceNotSupportedException extends __BaseException {
    name = "ServiceNotSupportedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceNotSupportedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceNotSupportedException.prototype);
    }
}
export class DeleteConflictException extends __BaseException {
    name = "DeleteConflictException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DeleteConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DeleteConflictException.prototype);
    }
}
export const FeatureType = {
    ROOT_CREDENTIALS_MANAGEMENT: "RootCredentialsManagement",
    ROOT_SESSIONS: "RootSessions",
};
export class OrganizationNotFoundException extends __BaseException {
    name = "OrganizationNotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OrganizationNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OrganizationNotFoundException.prototype);
        this.Message = opts.Message;
    }
}
export class OrganizationNotInAllFeaturesModeException extends __BaseException {
    name = "OrganizationNotInAllFeaturesModeException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OrganizationNotInAllFeaturesModeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OrganizationNotInAllFeaturesModeException.prototype);
        this.Message = opts.Message;
    }
}
export class ServiceAccessNotEnabledException extends __BaseException {
    name = "ServiceAccessNotEnabledException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ServiceAccessNotEnabledException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceAccessNotEnabledException.prototype);
        this.Message = opts.Message;
    }
}
export class InvalidAuthenticationCodeException extends __BaseException {
    name = "InvalidAuthenticationCodeException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidAuthenticationCodeException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidAuthenticationCodeException.prototype);
    }
}
export class CallerIsNotManagementAccountException extends __BaseException {
    name = "CallerIsNotManagementAccountException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "CallerIsNotManagementAccountException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CallerIsNotManagementAccountException.prototype);
        this.Message = opts.Message;
    }
}
export const ReportStateType = {
    COMPLETE: "COMPLETE",
    INPROGRESS: "INPROGRESS",
    STARTED: "STARTED",
};
export class ReportGenerationLimitExceededException extends __BaseException {
    name = "ReportGenerationLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ReportGenerationLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ReportGenerationLimitExceededException.prototype);
    }
}
export const EntityType = {
    AWSManagedPolicy: "AWSManagedPolicy",
    Group: "Group",
    LocalManagedPolicy: "LocalManagedPolicy",
    Role: "Role",
    User: "User",
};
export const SummaryKeyType = {
    AccessKeysPerUserQuota: "AccessKeysPerUserQuota",
    AccountAccessKeysPresent: "AccountAccessKeysPresent",
    AccountMFAEnabled: "AccountMFAEnabled",
    AccountPasswordPresent: "AccountPasswordPresent",
    AccountSigningCertificatesPresent: "AccountSigningCertificatesPresent",
    AttachedPoliciesPerGroupQuota: "AttachedPoliciesPerGroupQuota",
    AttachedPoliciesPerRoleQuota: "AttachedPoliciesPerRoleQuota",
    AttachedPoliciesPerUserQuota: "AttachedPoliciesPerUserQuota",
    GlobalEndpointTokenVersion: "GlobalEndpointTokenVersion",
    GroupPolicySizeQuota: "GroupPolicySizeQuota",
    Groups: "Groups",
    GroupsPerUserQuota: "GroupsPerUserQuota",
    GroupsQuota: "GroupsQuota",
    MFADevices: "MFADevices",
    MFADevicesInUse: "MFADevicesInUse",
    Policies: "Policies",
    PoliciesQuota: "PoliciesQuota",
    PolicySizeQuota: "PolicySizeQuota",
    PolicyVersionsInUse: "PolicyVersionsInUse",
    PolicyVersionsInUseQuota: "PolicyVersionsInUseQuota",
    ServerCertificates: "ServerCertificates",
    ServerCertificatesQuota: "ServerCertificatesQuota",
    SigningCertificatesPerUserQuota: "SigningCertificatesPerUserQuota",
    UserPolicySizeQuota: "UserPolicySizeQuota",
    Users: "Users",
    UsersQuota: "UsersQuota",
    VersionsPerPolicyQuota: "VersionsPerPolicyQuota",
};
export class CredentialReportExpiredException extends __BaseException {
    name = "CredentialReportExpiredException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "CredentialReportExpiredException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CredentialReportExpiredException.prototype);
    }
}
export class CredentialReportNotPresentException extends __BaseException {
    name = "CredentialReportNotPresentException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "CredentialReportNotPresentException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CredentialReportNotPresentException.prototype);
    }
}
export class CredentialReportNotReadyException extends __BaseException {
    name = "CredentialReportNotReadyException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "CredentialReportNotReadyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, CredentialReportNotReadyException.prototype);
    }
}
export const ReportFormatType = {
    text_csv: "text/csv",
};
export const SortKeyType = {
    LAST_AUTHENTICATED_TIME_ASCENDING: "LAST_AUTHENTICATED_TIME_ASCENDING",
    LAST_AUTHENTICATED_TIME_DESCENDING: "LAST_AUTHENTICATED_TIME_DESCENDING",
    SERVICE_NAMESPACE_ASCENDING: "SERVICE_NAMESPACE_ASCENDING",
    SERVICE_NAMESPACE_DESCENDING: "SERVICE_NAMESPACE_DESCENDING",
};
export const JobStatusType = {
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
export const PolicyOwnerEntityType = {
    GROUP: "GROUP",
    ROLE: "ROLE",
    USER: "USER",
};
export const DeletionTaskStatusType = {
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
    NOT_STARTED: "NOT_STARTED",
    SUCCEEDED: "SUCCEEDED",
};
export const EncodingType = {
    PEM: "PEM",
    SSH: "SSH",
};
export class UnrecognizedPublicKeyEncodingException extends __BaseException {
    name = "UnrecognizedPublicKeyEncodingException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UnrecognizedPublicKeyEncodingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnrecognizedPublicKeyEncodingException.prototype);
    }
}
export const PolicyUsageType = {
    PermissionsBoundary: "PermissionsBoundary",
    PermissionsPolicy: "PermissionsPolicy",
};
export const PolicyScopeType = {
    AWS: "AWS",
    All: "All",
    Local: "Local",
};
export const PolicyType = {
    INLINE: "INLINE",
    MANAGED: "MANAGED",
};
export const GlobalEndpointTokenVersion = {
    v1Token: "v1Token",
    v2Token: "v2Token",
};
export class PolicyEvaluationException extends __BaseException {
    name = "PolicyEvaluationException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "PolicyEvaluationException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, PolicyEvaluationException.prototype);
    }
}
export const ContextKeyTypeEnum = {
    BINARY: "binary",
    BINARY_LIST: "binaryList",
    BOOLEAN: "boolean",
    BOOLEAN_LIST: "booleanList",
    DATE: "date",
    DATE_LIST: "dateList",
    IP: "ip",
    IP_LIST: "ipList",
    NUMERIC: "numeric",
    NUMERIC_LIST: "numericList",
    STRING: "string",
    STRING_LIST: "stringList",
};
export const AccessKeyFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }),
});
export const ChangePasswordRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OldPassword && { OldPassword: SENSITIVE_STRING }),
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
});
export const CreateAccessKeyResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AccessKey && { AccessKey: AccessKeyFilterSensitiveLog(obj.AccessKey) }),
});
export const CreateLoginProfileRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
});
export const CreateSAMLProviderRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AddPrivateKey && { AddPrivateKey: SENSITIVE_STRING }),
});
export const ServiceSpecificCredentialFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServicePassword && { ServicePassword: SENSITIVE_STRING }),
});
export const CreateServiceSpecificCredentialResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServiceSpecificCredential && {
        ServiceSpecificCredential: ServiceSpecificCredentialFilterSensitiveLog(obj.ServiceSpecificCredential),
    }),
});
export const VirtualMFADeviceFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Base32StringSeed && { Base32StringSeed: SENSITIVE_STRING }),
    ...(obj.QRCodePNG && { QRCodePNG: SENSITIVE_STRING }),
});
export const CreateVirtualMFADeviceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.VirtualMFADevice && { VirtualMFADevice: VirtualMFADeviceFilterSensitiveLog(obj.VirtualMFADevice) }),
});
export const ListVirtualMFADevicesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.VirtualMFADevices && {
        VirtualMFADevices: obj.VirtualMFADevices.map((item) => VirtualMFADeviceFilterSensitiveLog(item)),
    }),
});
export const ResetServiceSpecificCredentialResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServiceSpecificCredential && {
        ServiceSpecificCredential: ServiceSpecificCredentialFilterSensitiveLog(obj.ServiceSpecificCredential),
    }),
});
