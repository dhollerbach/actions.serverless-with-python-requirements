import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateOpenIDConnectProviderThumbprintRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateOpenIDConnectProviderThumbprintCommandInput
  extends UpdateOpenIDConnectProviderThumbprintRequest {}
export interface UpdateOpenIDConnectProviderThumbprintCommandOutput
  extends __MetadataBearer {}
declare const UpdateOpenIDConnectProviderThumbprintCommand_base: {
  new (
    input: UpdateOpenIDConnectProviderThumbprintCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateOpenIDConnectProviderThumbprintCommandInput,
    UpdateOpenIDConnectProviderThumbprintCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateOpenIDConnectProviderThumbprintCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateOpenIDConnectProviderThumbprintCommandInput,
    UpdateOpenIDConnectProviderThumbprintCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateOpenIDConnectProviderThumbprintCommand extends UpdateOpenIDConnectProviderThumbprintCommand_base {
  protected static __types: {
    api: {
      input: UpdateOpenIDConnectProviderThumbprintRequest;
      output: {};
    };
    sdk: {
      input: UpdateOpenIDConnectProviderThumbprintCommandInput;
      output: UpdateOpenIDConnectProviderThumbprintCommandOutput;
    };
  };
}
