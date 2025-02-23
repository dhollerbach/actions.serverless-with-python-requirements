import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { PutUserPermissionsBoundaryRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutUserPermissionsBoundaryCommandInput
  extends PutUserPermissionsBoundaryRequest {}
export interface PutUserPermissionsBoundaryCommandOutput
  extends __MetadataBearer {}
declare const PutUserPermissionsBoundaryCommand_base: {
  new (
    input: PutUserPermissionsBoundaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutUserPermissionsBoundaryCommandInput,
    PutUserPermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: PutUserPermissionsBoundaryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutUserPermissionsBoundaryCommandInput,
    PutUserPermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutUserPermissionsBoundaryCommand extends PutUserPermissionsBoundaryCommand_base {
  protected static __types: {
    api: {
      input: PutUserPermissionsBoundaryRequest;
      output: {};
    };
    sdk: {
      input: PutUserPermissionsBoundaryCommandInput;
      output: PutUserPermissionsBoundaryCommandOutput;
    };
  };
}
