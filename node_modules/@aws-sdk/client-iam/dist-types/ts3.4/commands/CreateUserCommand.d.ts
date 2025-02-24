import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { CreateUserRequest, CreateUserResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateUserCommandInput extends CreateUserRequest {}
export interface CreateUserCommandOutput
  extends CreateUserResponse,
    __MetadataBearer {}
declare const CreateUserCommand_base: {
  new (
    input: CreateUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateUserCommandInput,
    CreateUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateUserCommandInput,
    CreateUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateUserCommand extends CreateUserCommand_base {
  protected static __types: {
    api: {
      input: CreateUserRequest;
      output: CreateUserResponse;
    };
    sdk: {
      input: CreateUserCommandInput;
      output: CreateUserCommandOutput;
    };
  };
}
