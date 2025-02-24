import { AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4PreviouslyResolved } from "@aws-sdk/core";
import { HandlerExecutionContext, HttpAuthScheme, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, HttpAuthSchemeProvider } from "@smithy/types";
import { CognitoIdentityProviderClientResolvedConfig } from "../CognitoIdentityProviderClient";
/**
 * @internal
 */
export interface CognitoIdentityProviderHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
    region?: string;
}
/**
 * @internal
 */
export interface CognitoIdentityProviderHttpAuthSchemeParametersProvider extends HttpAuthSchemeParametersProvider<CognitoIdentityProviderClientResolvedConfig, HandlerExecutionContext, CognitoIdentityProviderHttpAuthSchemeParameters, object> {
}
/**
 * @internal
 */
export declare const defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider: (config: CognitoIdentityProviderClientResolvedConfig, context: HandlerExecutionContext, input: object) => Promise<CognitoIdentityProviderHttpAuthSchemeParameters>;
/**
 * @internal
 */
export interface CognitoIdentityProviderHttpAuthSchemeProvider extends HttpAuthSchemeProvider<CognitoIdentityProviderHttpAuthSchemeParameters> {
}
/**
 * @internal
 */
export declare const defaultCognitoIdentityProviderHttpAuthSchemeProvider: CognitoIdentityProviderHttpAuthSchemeProvider;
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
    httpAuthSchemeProvider?: CognitoIdentityProviderHttpAuthSchemeProvider;
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
    readonly httpAuthSchemeProvider: CognitoIdentityProviderHttpAuthSchemeProvider;
}
/**
 * @internal
 */
export declare const resolveHttpAuthSchemeConfig: <T>(config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved) => T & HttpAuthSchemeResolvedConfig;
