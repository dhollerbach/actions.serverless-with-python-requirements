import {
  AwsSdkSigV4AAuthInputConfig,
  AwsSdkSigV4AAuthResolvedConfig,
  AwsSdkSigV4APreviouslyResolved,
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
import { EndpointParameters } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig } from "../EventBridgeClient";
interface _EventBridgeHttpAuthSchemeParameters
  extends HttpAuthSchemeParameters {
  region?: string;
}
export interface EventBridgeHttpAuthSchemeParameters
  extends _EventBridgeHttpAuthSchemeParameters,
    EndpointParameters {
  region?: string;
}
export interface EventBridgeHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    EventBridgeClientResolvedConfig,
    HandlerExecutionContext,
    EventBridgeHttpAuthSchemeParameters,
    object
  > {}
export declare const defaultEventBridgeHttpAuthSchemeParametersProvider: EventBridgeHttpAuthSchemeParametersProvider;
export interface EventBridgeHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<EventBridgeHttpAuthSchemeParameters> {}
export declare const defaultEventBridgeHttpAuthSchemeProvider: EventBridgeHttpAuthSchemeProvider;
export interface HttpAuthSchemeInputConfig
  extends AwsSdkSigV4AuthInputConfig,
    AwsSdkSigV4AAuthInputConfig {
  httpAuthSchemes?: HttpAuthScheme[];
  httpAuthSchemeProvider?: EventBridgeHttpAuthSchemeProvider;
}
export interface HttpAuthSchemeResolvedConfig
  extends AwsSdkSigV4AuthResolvedConfig,
    AwsSdkSigV4AAuthResolvedConfig {
  readonly httpAuthSchemes: HttpAuthScheme[];
  readonly httpAuthSchemeProvider: EventBridgeHttpAuthSchemeProvider;
}
export declare const resolveHttpAuthSchemeConfig: <T>(
  config: T &
    HttpAuthSchemeInputConfig &
    AwsSdkSigV4PreviouslyResolved &
    AwsSdkSigV4APreviouslyResolved
) => T & HttpAuthSchemeResolvedConfig;
export {};
