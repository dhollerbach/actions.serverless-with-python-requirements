import { BuildHandlerOptions, BuildMiddleware, Pluggable } from "@smithy/types";
export declare function acceptHeaderMiddleware(): BuildMiddleware<any, any>;
export declare const acceptHeaderMiddlewareOptions: BuildHandlerOptions;
export declare const getAcceptHeaderPlugin: (unused: any) => Pluggable<any, any>;
