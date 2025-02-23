import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteOpenIDConnectProviderRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteOpenIDConnectProviderCommandInput
  extends DeleteOpenIDConnectProviderRequest {}
export interface DeleteOpenIDConnectProviderCommandOutput
  extends __MetadataBearer {}
declare const DeleteOpenIDConnectProviderCommand_base: {
  new (
    input: DeleteOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteOpenIDConnectProviderCommandInput,
    DeleteOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteOpenIDConnectProviderCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteOpenIDConnectProviderCommandInput,
    DeleteOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteOpenIDConnectProviderCommand extends DeleteOpenIDConnectProviderCommand_base {
  protected static __types: {
    api: {
      input: DeleteOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteOpenIDConnectProviderCommandInput;
      output: DeleteOpenIDConnectProviderCommandOutput;
    };
  };
}
