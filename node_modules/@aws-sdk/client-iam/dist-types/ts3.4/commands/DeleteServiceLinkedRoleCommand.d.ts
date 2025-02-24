import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  DeleteServiceLinkedRoleRequest,
  DeleteServiceLinkedRoleResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteServiceLinkedRoleCommandInput
  extends DeleteServiceLinkedRoleRequest {}
export interface DeleteServiceLinkedRoleCommandOutput
  extends DeleteServiceLinkedRoleResponse,
    __MetadataBearer {}
declare const DeleteServiceLinkedRoleCommand_base: {
  new (
    input: DeleteServiceLinkedRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteServiceLinkedRoleCommandInput,
    DeleteServiceLinkedRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteServiceLinkedRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteServiceLinkedRoleCommandInput,
    DeleteServiceLinkedRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteServiceLinkedRoleCommand extends DeleteServiceLinkedRoleCommand_base {
  protected static __types: {
    api: {
      input: DeleteServiceLinkedRoleRequest;
      output: DeleteServiceLinkedRoleResponse;
    };
    sdk: {
      input: DeleteServiceLinkedRoleCommandInput;
      output: DeleteServiceLinkedRoleCommandOutput;
    };
  };
}
