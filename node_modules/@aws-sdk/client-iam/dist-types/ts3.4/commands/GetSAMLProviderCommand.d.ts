import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetSAMLProviderRequest,
  GetSAMLProviderResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetSAMLProviderCommandInput extends GetSAMLProviderRequest {}
export interface GetSAMLProviderCommandOutput
  extends GetSAMLProviderResponse,
    __MetadataBearer {}
declare const GetSAMLProviderCommand_base: {
  new (
    input: GetSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetSAMLProviderCommandInput,
    GetSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetSAMLProviderCommandInput,
    GetSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetSAMLProviderCommand extends GetSAMLProviderCommand_base {
  protected static __types: {
    api: {
      input: GetSAMLProviderRequest;
      output: GetSAMLProviderResponse;
    };
    sdk: {
      input: GetSAMLProviderCommandInput;
      output: GetSAMLProviderCommandOutput;
    };
  };
}
