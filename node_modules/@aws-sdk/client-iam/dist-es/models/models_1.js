import { SENSITIVE_STRING } from "@smithy/smithy-client";
import { IAMServiceException as __BaseException } from "./IAMServiceException";
export const PolicyEvaluationDecisionType = {
    ALLOWED: "allowed",
    EXPLICIT_DENY: "explicitDeny",
    IMPLICIT_DENY: "implicitDeny",
};
export const PolicySourceType = {
    AWS_MANAGED: "aws-managed",
    GROUP: "group",
    NONE: "none",
    RESOURCE: "resource",
    ROLE: "role",
    USER: "user",
    USER_MANAGED: "user-managed",
};
export class KeyPairMismatchException extends __BaseException {
    name = "KeyPairMismatchException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "KeyPairMismatchException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, KeyPairMismatchException.prototype);
    }
}
export class MalformedCertificateException extends __BaseException {
    name = "MalformedCertificateException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "MalformedCertificateException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MalformedCertificateException.prototype);
    }
}
export class DuplicateCertificateException extends __BaseException {
    name = "DuplicateCertificateException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DuplicateCertificateException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateCertificateException.prototype);
    }
}
export class InvalidCertificateException extends __BaseException {
    name = "InvalidCertificateException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidCertificateException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidCertificateException.prototype);
    }
}
export class DuplicateSSHPublicKeyException extends __BaseException {
    name = "DuplicateSSHPublicKeyException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DuplicateSSHPublicKeyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DuplicateSSHPublicKeyException.prototype);
    }
}
export class InvalidPublicKeyException extends __BaseException {
    name = "InvalidPublicKeyException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidPublicKeyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidPublicKeyException.prototype);
    }
}
export const UpdateLoginProfileRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
});
export const UpdateSAMLProviderRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AddPrivateKey && { AddPrivateKey: SENSITIVE_STRING }),
});
export const UploadServerCertificateRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
});
