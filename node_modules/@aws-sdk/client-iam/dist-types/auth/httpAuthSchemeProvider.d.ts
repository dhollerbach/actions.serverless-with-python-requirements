import { AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4PreviouslyResolved } from "@aws-sdk/core";
import { HandlerExecutionContext, HttpAuthScheme, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, HttpAuthSchemeProvider } from "@smithy/types";
import { IAMClientResolvedConfig } from "../IAMClient";
/**
 * @internal
 */
export interface IAMHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
    region?: string;
}
/**
 * @internal
 */
export interface IAMHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<IAMClientResolvedConfig, HandlerExecutionContext, IAMHttpAuthSchemeParameters, object> {
}
/**
 * @internal
 */
export declare const defaultIAMHttpAuthSchemeParametersProvider: (config: IAMClientResolvedConfig, context: HandlerExecutionContext, input: object) => Promise<IAMHttpAuthSchemeParameters>;
/**
 * @internal
 */
export interface IAMHttpAuthSchemeProvider extends HttpAuthSchemeProvider<IAMHttpAuthSchemeParameters> {
}
/**
 * @internal
 */
export declare const defaultIAMHttpAuthSchemeProvider: IAMHttpAuthSchemeProvider;
/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    httpAuthSchemes?: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    httpAuthSchemeProvider?: IAMHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig {
    /**
     * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
     * @internal
     */
    readonly httpAuthSchemes: HttpAuthScheme[];
    /**
     * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
     * @internal
     */
    readonly httpAuthSchemeProvider: IAMHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export declare const resolveHttpAuthSchemeConfig: <T>(config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved) => T & HttpAuthSchemeResolvedConfig;
