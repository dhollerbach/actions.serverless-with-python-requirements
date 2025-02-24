import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  UpdateSAMLProviderRequest,
  UpdateSAMLProviderResponse,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateSAMLProviderCommandInput
  extends UpdateSAMLProviderRequest {}
export interface UpdateSAMLProviderCommandOutput
  extends UpdateSAMLProviderResponse,
    __MetadataBearer {}
declare const UpdateSAMLProviderCommand_base: {
  new (
    input: UpdateSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateSAMLProviderCommandInput,
    UpdateSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateSAMLProviderCommandInput,
    UpdateSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateSAMLProviderCommand extends UpdateSAMLProviderCommand_base {
  protected static __types: {
    api: {
      input: UpdateSAMLProviderRequest;
      output: UpdateSAMLProviderResponse;
    };
    sdk: {
      input: UpdateSAMLProviderCommandInput;
      output: UpdateSAMLProviderCommandOutput;
    };
  };
}
