import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
} from "@aws-sdk/core";
import {
  HandlerExecutionContext,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { CognitoIdentityProviderClientResolvedConfig } from "../CognitoIdentityProviderClient";
export interface CognitoIdentityProviderHttpAuthSchemeParameters
  extends HttpAuthSchemeParameters {
  region?: string;
}
export interface CognitoIdentityProviderHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    CognitoIdentityProviderClientResolvedConfig,
    HandlerExecutionContext,
    CognitoIdentityProviderHttpAuthSchemeParameters,
    object
  > {}
export declare const defaultCognitoIdentityProviderHttpAuthSchemeParametersProvider: (
  config: CognitoIdentityProviderClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
) => Promise<CognitoIdentityProviderHttpAuthSchemeParameters>;
export interface CognitoIdentityProviderHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<CognitoIdentityProviderHttpAuthSchemeParameters> {}
export declare const defaultCognitoIdentityProviderHttpAuthSchemeProvider: CognitoIdentityProviderHttpAuthSchemeProvider;
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
  httpAuthSchemes?: HttpAuthScheme[];
  httpAuthSchemeProvider?: CognitoIdentityProviderHttpAuthSchemeProvider;
}
export interface HttpAuthSchemeResolvedConfig
  extends AwsSdkSigV4AuthResolvedConfig {
  readonly httpAuthSchemes: HttpAuthScheme[];
  readonly httpAuthSchemeProvider: CognitoIdentityProviderHttpAuthSchemeProvider;
}
export declare const resolveHttpAuthSchemeConfig: <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & HttpAuthSchemeResolvedConfig;
