import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { CreateRoleRequest, CreateRoleResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateRoleCommandInput extends CreateRoleRequest {}
export interface CreateRoleCommandOutput
  extends CreateRoleResponse,
    __MetadataBearer {}
declare const CreateRoleCommand_base: {
  new (
    input: CreateRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateRoleCommandInput,
    CreateRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateRoleCommandInput,
    CreateRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateRoleCommand extends CreateRoleCommand_base {
  protected static __types: {
    api: {
      input: CreateRoleRequest;
      output: CreateRoleResponse;
    };
    sdk: {
      input: CreateRoleCommandInput;
      output: CreateRoleCommandOutput;
    };
  };
}
