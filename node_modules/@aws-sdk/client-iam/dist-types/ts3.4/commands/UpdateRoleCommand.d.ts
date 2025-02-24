import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateRoleRequest, UpdateRoleResponse } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateRoleCommandInput extends UpdateRoleRequest {}
export interface UpdateRoleCommandOutput
  extends UpdateRoleResponse,
    __MetadataBearer {}
declare const UpdateRoleCommand_base: {
  new (
    input: UpdateRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateRoleCommandInput,
    UpdateRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateRoleCommandInput,
    UpdateRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateRoleCommand extends UpdateRoleCommand_base {
  protected static __types: {
    api: {
      input: UpdateRoleRequest;
      output: {};
    };
    sdk: {
      input: UpdateRoleCommandInput;
      output: UpdateRoleCommandOutput;
    };
  };
}
