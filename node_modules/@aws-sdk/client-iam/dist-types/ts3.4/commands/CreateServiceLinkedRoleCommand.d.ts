import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  CreateServiceLinkedRoleRequest,
  CreateServiceLinkedRoleResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateServiceLinkedRoleCommandInput
  extends CreateServiceLinkedRoleRequest {}
export interface CreateServiceLinkedRoleCommandOutput
  extends CreateServiceLinkedRoleResponse,
    __MetadataBearer {}
declare const CreateServiceLinkedRoleCommand_base: {
  new (
    input: CreateServiceLinkedRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateServiceLinkedRoleCommandInput,
    CreateServiceLinkedRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: CreateServiceLinkedRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateServiceLinkedRoleCommandInput,
    CreateServiceLinkedRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateServiceLinkedRoleCommand extends CreateServiceLinkedRoleCommand_base {
  protected static __types: {
    api: {
      input: CreateServiceLinkedRoleRequest;
      output: CreateServiceLinkedRoleResponse;
    };
    sdk: {
      input: CreateServiceLinkedRoleCommandInput;
      output: CreateServiceLinkedRoleCommandOutput;
    };
  };
}
