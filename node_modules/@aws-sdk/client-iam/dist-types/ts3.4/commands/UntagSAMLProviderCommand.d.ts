import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UntagSAMLProviderRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UntagSAMLProviderCommandInput
  extends UntagSAMLProviderRequest {}
export interface UntagSAMLProviderCommandOutput extends __MetadataBearer {}
declare const UntagSAMLProviderCommand_base: {
  new (
    input: UntagSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagSAMLProviderCommandInput,
    UntagSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UntagSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagSAMLProviderCommandInput,
    UntagSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UntagSAMLProviderCommand extends UntagSAMLProviderCommand_base {
  protected static __types: {
    api: {
      input: UntagSAMLProviderRequest;
      output: {};
    };
    sdk: {
      input: UntagSAMLProviderCommandInput;
      output: UntagSAMLProviderCommandOutput;
    };
  };
}
