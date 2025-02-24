import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { PutPermissionRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutPermissionCommandInput extends PutPermissionRequest {}
export interface PutPermissionCommandOutput extends __MetadataBearer {}
declare const PutPermissionCommand_base: {
  new (
    input: PutPermissionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutPermissionCommandInput,
    PutPermissionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [PutPermissionCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    PutPermissionCommandInput,
    PutPermissionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutPermissionCommand extends PutPermissionCommand_base {
  protected static __types: {
    api: {
      input: PutPermissionRequest;
      output: {};
    };
    sdk: {
      input: PutPermissionCommandInput;
      output: PutPermissionCommandOutput;
    };
  };
}
