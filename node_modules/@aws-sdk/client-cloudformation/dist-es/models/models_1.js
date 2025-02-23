import { CloudFormationServiceException as __BaseException } from "./CloudFormationServiceException";
export class InvalidStateTransitionException extends __BaseException {
    name = "InvalidStateTransitionException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "InvalidStateTransitionException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidStateTransitionException.prototype);
        this.Message = opts.Message;
    }
}
export class OperationStatusCheckFailedException extends __BaseException {
    name = "OperationStatusCheckFailedException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "OperationStatusCheckFailedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, OperationStatusCheckFailedException.prototype);
        this.Message = opts.Message;
    }
}
export const OperationStatus = {
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
    PENDING: "PENDING",
    SUCCESS: "SUCCESS",
};
export const HandlerErrorCode = {
    AccessDenied: "AccessDenied",
    AlreadyExists: "AlreadyExists",
    GeneralServiceException: "GeneralServiceException",
    HandlerInternalFailure: "HandlerInternalFailure",
    InternalFailure: "InternalFailure",
    InvalidCredentials: "InvalidCredentials",
    InvalidRequest: "InvalidRequest",
    InvalidTypeConfiguration: "InvalidTypeConfiguration",
    NetworkFailure: "NetworkFailure",
    NonCompliant: "NonCompliant",
    NotFound: "NotFound",
    NotUpdatable: "NotUpdatable",
    ResourceConflict: "ResourceConflict",
    ServiceInternalError: "ServiceInternalError",
    ServiceLimitExceeded: "ServiceLimitExceeded",
    ServiceTimeout: "NotStabilized",
    Throttling: "Throttling",
    Unknown: "Unknown",
    UnsupportedTarget: "UnsupportedTarget",
};
export const ResourceSignalStatus = {
    FAILURE: "FAILURE",
    SUCCESS: "SUCCESS",
};
export class ResourceScanLimitExceededException extends __BaseException {
    name = "ResourceScanLimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ResourceScanLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceScanLimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
