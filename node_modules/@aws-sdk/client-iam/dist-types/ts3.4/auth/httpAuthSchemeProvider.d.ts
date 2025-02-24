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
import { IAMClientResolvedConfig } from "../IAMClient";
export interface IAMHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}
export interface IAMHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    IAMClientResolvedConfig,
    HandlerExecutionContext,
    IAMHttpAuthSchemeParameters,
    object
  > {}
export declare const defaultIAMHttpAuthSchemeParametersProvider: (
  config: IAMClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
) => Promise<IAMHttpAuthSchemeParameters>;
export interface IAMHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<IAMHttpAuthSchemeParameters> {}
export declare const defaultIAMHttpAuthSchemeProvider: IAMHttpAuthSchemeProvider;
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
  httpAuthSchemes?: HttpAuthScheme[];
  httpAuthSchemeProvider?: IAMHttpAuthSchemeProvider;
}
export interface HttpAuthSchemeResolvedConfig
  extends AwsSdkSigV4AuthResolvedConfig {
  readonly httpAuthSchemes: HttpAuthScheme[];
  readonly httpAuthSchemeProvider: IAMHttpAuthSchemeProvider;
}
export declare const resolveHttpAuthSchemeConfig: <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & HttpAuthSchemeResolvedConfig;
