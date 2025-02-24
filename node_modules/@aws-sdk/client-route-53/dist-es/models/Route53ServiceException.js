import { ServiceException as __ServiceException, } from "@smithy/smithy-client";
export { __ServiceException };
export class Route53ServiceException extends __ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, Route53ServiceException.prototype);
    }
}
