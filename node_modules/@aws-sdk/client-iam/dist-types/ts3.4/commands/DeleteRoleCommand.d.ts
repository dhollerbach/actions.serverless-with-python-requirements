import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteRoleRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteRoleCommandInput extends DeleteRoleRequest {}
export interface DeleteRoleCommandOutput extends __MetadataBearer {}
declare const DeleteRoleCommand_base: {
  new (
    input: DeleteRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRoleCommandInput,
    DeleteRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRoleCommandInput,
    DeleteRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteRoleCommand extends DeleteRoleCommand_base {
  protected static __types: {
    api: {
      input: DeleteRoleRequest;
      output: {};
    };
    sdk: {
      input: DeleteRoleCommandInput;
      output: DeleteRoleCommandOutput;
    };
  };
}
