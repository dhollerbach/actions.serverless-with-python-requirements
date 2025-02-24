import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteUserRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteUserCommandInput extends DeleteUserRequest {}
export interface DeleteUserCommandOutput extends __MetadataBearer {}
declare const DeleteUserCommand_base: {
  new (
    input: DeleteUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteUserCommandInput,
    DeleteUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteUserCommandInput,
    DeleteUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteUserCommand extends DeleteUserCommand_base {
  protected static __types: {
    api: {
      input: DeleteUserRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserCommandInput;
      output: DeleteUserCommandOutput;
    };
  };
}
