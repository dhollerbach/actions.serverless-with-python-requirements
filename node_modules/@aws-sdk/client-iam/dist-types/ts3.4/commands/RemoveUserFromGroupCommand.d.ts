import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { RemoveUserFromGroupRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface RemoveUserFromGroupCommandInput
  extends RemoveUserFromGroupRequest {}
export interface RemoveUserFromGroupCommandOutput extends __MetadataBearer {}
declare const RemoveUserFromGroupCommand_base: {
  new (
    input: RemoveUserFromGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveUserFromGroupCommandInput,
    RemoveUserFromGroupCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: RemoveUserFromGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveUserFromGroupCommandInput,
    RemoveUserFromGroupCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RemoveUserFromGroupCommand extends RemoveUserFromGroupCommand_base {
  protected static __types: {
    api: {
      input: RemoveUserFromGroupRequest;
      output: {};
    };
    sdk: {
      input: RemoveUserFromGroupCommandInput;
      output: RemoveUserFromGroupCommandOutput;
    };
  };
}
