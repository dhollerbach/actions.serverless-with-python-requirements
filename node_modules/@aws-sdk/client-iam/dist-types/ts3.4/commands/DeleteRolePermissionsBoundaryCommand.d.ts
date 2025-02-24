import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteRolePermissionsBoundaryRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteRolePermissionsBoundaryCommandInput
  extends DeleteRolePermissionsBoundaryRequest {}
export interface DeleteRolePermissionsBoundaryCommandOutput
  extends __MetadataBearer {}
declare const DeleteRolePermissionsBoundaryCommand_base: {
  new (
    input: DeleteRolePermissionsBoundaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRolePermissionsBoundaryCommandInput,
    DeleteRolePermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteRolePermissionsBoundaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRolePermissionsBoundaryCommandInput,
    DeleteRolePermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteRolePermissionsBoundaryCommand extends DeleteRolePermissionsBoundaryCommand_base {
  protected static __types: {
    api: {
      input: DeleteRolePermissionsBoundaryRequest;
      output: {};
    };
    sdk: {
      input: DeleteRolePermissionsBoundaryCommandInput;
      output: DeleteRolePermissionsBoundaryCommandOutput;
    };
  };
}
