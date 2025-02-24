import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteSAMLProviderRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteSAMLProviderCommandInput
  extends DeleteSAMLProviderRequest {}
export interface DeleteSAMLProviderCommandOutput extends __MetadataBearer {}
declare const DeleteSAMLProviderCommand_base: {
  new (
    input: DeleteSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSAMLProviderCommandInput,
    DeleteSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteSAMLProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSAMLProviderCommandInput,
    DeleteSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteSAMLProviderCommand extends DeleteSAMLProviderCommand_base {
  protected static __types: {
    api: {
      input: DeleteSAMLProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteSAMLProviderCommandInput;
      output: DeleteSAMLProviderCommandOutput;
    };
  };
}
