import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UntagRoleRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UntagRoleCommandInput extends UntagRoleRequest {}
export interface UntagRoleCommandOutput extends __MetadataBearer {}
declare const UntagRoleCommand_base: {
  new (
    input: UntagRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagRoleCommandInput,
    UntagRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UntagRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagRoleCommandInput,
    UntagRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UntagRoleCommand extends UntagRoleCommand_base {
  protected static __types: {
    api: {
      input: UntagRoleRequest;
      output: {};
    };
    sdk: {
      input: UntagRoleCommandInput;
      output: UntagRoleCommandOutput;
    };
  };
}
