import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateUserRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateUserCommandInput extends UpdateUserRequest {}
export interface UpdateUserCommandOutput extends __MetadataBearer {}
declare const UpdateUserCommand_base: {
  new (
    input: UpdateUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateUserCommandInput,
    UpdateUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateUserCommandInput,
    UpdateUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateUserCommand extends UpdateUserCommand_base {
  protected static __types: {
    api: {
      input: UpdateUserRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserCommandInput;
      output: UpdateUserCommandOutput;
    };
  };
}
