import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateAccessKeyRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateAccessKeyCommandInput extends UpdateAccessKeyRequest {}
export interface UpdateAccessKeyCommandOutput extends __MetadataBearer {}
declare const UpdateAccessKeyCommand_base: {
  new (
    input: UpdateAccessKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateAccessKeyCommandInput,
    UpdateAccessKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateAccessKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateAccessKeyCommandInput,
    UpdateAccessKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateAccessKeyCommand extends UpdateAccessKeyCommand_base {
  protected static __types: {
    api: {
      input: UpdateAccessKeyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccessKeyCommandInput;
      output: UpdateAccessKeyCommandOutput;
    };
  };
}
