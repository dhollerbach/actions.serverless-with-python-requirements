import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteUserPermissionsBoundaryRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteUserPermissionsBoundaryCommandInput
  extends DeleteUserPermissionsBoundaryRequest {}
export interface DeleteUserPermissionsBoundaryCommandOutput
  extends __MetadataBearer {}
declare const DeleteUserPermissionsBoundaryCommand_base: {
  new (
    input: DeleteUserPermissionsBoundaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteUserPermissionsBoundaryCommandInput,
    DeleteUserPermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteUserPermissionsBoundaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteUserPermissionsBoundaryCommandInput,
    DeleteUserPermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteUserPermissionsBoundaryCommand extends DeleteUserPermissionsBoundaryCommand_base {
  protected static __types: {
    api: {
      input: DeleteUserPermissionsBoundaryRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserPermissionsBoundaryCommandInput;
      output: DeleteUserPermissionsBoundaryCommandOutput;
    };
  };
}
