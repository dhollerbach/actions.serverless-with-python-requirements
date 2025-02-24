import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateGroupRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateGroupCommandInput extends UpdateGroupRequest {}
export interface UpdateGroupCommandOutput extends __MetadataBearer {}
declare const UpdateGroupCommand_base: {
  new (
    input: UpdateGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateGroupCommandInput,
    UpdateGroupCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateGroupCommandInput,
    UpdateGroupCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateGroupCommand extends UpdateGroupCommand_base {
  protected static __types: {
    api: {
      input: UpdateGroupRequest;
      output: {};
    };
    sdk: {
      input: UpdateGroupCommandInput;
      output: UpdateGroupCommandOutput;
    };
  };
}
