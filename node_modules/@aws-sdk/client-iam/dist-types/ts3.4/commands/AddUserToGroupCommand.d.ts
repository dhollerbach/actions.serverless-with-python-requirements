import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { AddUserToGroupRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface AddUserToGroupCommandInput extends AddUserToGroupRequest {}
export interface AddUserToGroupCommandOutput extends __MetadataBearer {}
declare const AddUserToGroupCommand_base: {
  new (
    input: AddUserToGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AddUserToGroupCommandInput,
    AddUserToGroupCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: AddUserToGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AddUserToGroupCommandInput,
    AddUserToGroupCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class AddUserToGroupCommand extends AddUserToGroupCommand_base {
  protected static __types: {
    api: {
      input: AddUserToGroupRequest;
      output: {};
    };
    sdk: {
      input: AddUserToGroupCommandInput;
      output: AddUserToGroupCommandOutput;
    };
  };
}
