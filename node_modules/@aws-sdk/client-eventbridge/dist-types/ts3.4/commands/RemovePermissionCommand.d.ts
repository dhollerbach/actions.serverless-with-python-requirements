import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { RemovePermissionRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface RemovePermissionCommandInput extends RemovePermissionRequest {}
export interface RemovePermissionCommandOutput extends __MetadataBearer {}
declare const RemovePermissionCommand_base: {
  new (
    input: RemovePermissionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemovePermissionCommandInput,
    RemovePermissionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [RemovePermissionCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    RemovePermissionCommandInput,
    RemovePermissionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RemovePermissionCommand extends RemovePermissionCommand_base {
  protected static __types: {
    api: {
      input: RemovePermissionRequest;
      output: {};
    };
    sdk: {
      input: RemovePermissionCommandInput;
      output: RemovePermissionCommandOutput;
    };
  };
}
