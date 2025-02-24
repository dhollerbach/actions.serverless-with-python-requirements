import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteAccessKeyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteAccessKeyCommandInput extends DeleteAccessKeyRequest {}
export interface DeleteAccessKeyCommandOutput extends __MetadataBearer {}
declare const DeleteAccessKeyCommand_base: {
  new (
    input: DeleteAccessKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAccessKeyCommandInput,
    DeleteAccessKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteAccessKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAccessKeyCommandInput,
    DeleteAccessKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteAccessKeyCommand extends DeleteAccessKeyCommand_base {
  protected static __types: {
    api: {
      input: DeleteAccessKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessKeyCommandInput;
      output: DeleteAccessKeyCommandOutput;
    };
  };
}
