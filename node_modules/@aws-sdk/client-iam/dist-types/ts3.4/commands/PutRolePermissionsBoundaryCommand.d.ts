import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { PutRolePermissionsBoundaryRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutRolePermissionsBoundaryCommandInput
  extends PutRolePermissionsBoundaryRequest {}
export interface PutRolePermissionsBoundaryCommandOutput
  extends __MetadataBearer {}
declare const PutRolePermissionsBoundaryCommand_base: {
  new (
    input: PutRolePermissionsBoundaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutRolePermissionsBoundaryCommandInput,
    PutRolePermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: PutRolePermissionsBoundaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutRolePermissionsBoundaryCommandInput,
    PutRolePermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutRolePermissionsBoundaryCommand extends PutRolePermissionsBoundaryCommand_base {
  protected static __types: {
    api: {
      input: PutRolePermissionsBoundaryRequest;
      output: {};
    };
    sdk: {
      input: PutRolePermissionsBoundaryCommandInput;
      output: PutRolePermissionsBoundaryCommandOutput;
    };
  };
}
