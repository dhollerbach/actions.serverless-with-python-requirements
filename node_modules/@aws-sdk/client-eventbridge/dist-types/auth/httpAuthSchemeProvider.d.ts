import { AwsSdkSigV4AAuthInputConfig, AwsSdkSigV4AAuthResolvedConfig, AwsSdkSigV4APreviouslyResolved, AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4PreviouslyResolved } from "@aws-sdk/core";
import { HandlerExecutionContext, HttpAuthScheme, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, HttpAuthSchemeProvider } from "@smithy/types";
import { EndpointParameters } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig } from "../EventBridgeClient";
/**
 * @internal
 */
interface _EventBridgeHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
    region?: string;
}
/**
 * @internal
 */
export interface EventBridgeHttpAuthSchemeParameters extends _EventBridgeHttpAuthSchemeParameters, EndpointParameters {
    region?: string;
}
/**
 * @internal
 */
export interface EventBridgeHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<EventBridgeClientResolvedConfig, HandlerExecutionContext, EventBridgeHttpAuthSchemeParameters, object> {
}
/**
 * @internal
 */
export declare const defaultEventBridgeHttpAuthSchemeParametersProvider: EventBridgeHttpAuthSchemeParametersProvider;
/**
 * @internal
 */
export interface EventBridgeHttpAuthSchemeProvider extends HttpAuthSchemeProvider<EventBridgeHttpAuthSchemeParameters> {
}
/**
 * @internal
 */
export declare const defaultEventBridgeHttpAuthSchemeProvider: EventBridgeHttpAuthSchemeProvider;
/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AAuthInputConfig {
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    httpAuthSchemes?: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    httpAuthSchemeProvider?: EventBridgeHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4AAuthResolvedConfig {
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    readonly httpAuthSchemes: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    readonly httpAuthSchemeProvider: EventBridgeHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export declare const resolveHttpAuthSchemeConfig: <T>(config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved & AwsSdkSigV4APreviouslyResolved) => T & HttpAuthSchemeResolvedConfig;
export {};
