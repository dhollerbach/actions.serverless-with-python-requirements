import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  CreateSAMLProviderRequest,
  CreateSAMLProviderResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateSAMLProviderCommandInput
  extends CreateSAMLProviderRequest {}
export interface CreateSAMLProviderCommandOutput
  extends CreateSAMLProviderResponse,
    __MetadataBearer {}
declare const CreateSAMLProviderCommand_base: {
  new (
    input: CreateSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateSAMLProviderCommandInput,
    CreateSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateSAMLProviderCommandInput,
    CreateSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateSAMLProviderCommand extends CreateSAMLProviderCommand_base {
  protected static __types: {
    api: {
      input: CreateSAMLProviderRequest;
      output: CreateSAMLProviderResponse;
    };
    sdk: {
      input: CreateSAMLProviderCommandInput;
      output: CreateSAMLProviderCommandOutput;
    };
  };
}
