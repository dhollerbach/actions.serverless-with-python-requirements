import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  RemoveTargetsRequest,
  RemoveTargetsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface RemoveTargetsCommandInput extends RemoveTargetsRequest {}
export interface RemoveTargetsCommandOutput
  extends RemoveTargetsResponse,
    __MetadataBearer {}
declare const RemoveTargetsCommand_base: {
  new (
    input: RemoveTargetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveTargetsCommandInput,
    RemoveTargetsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: RemoveTargetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RemoveTargetsCommandInput,
    RemoveTargetsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RemoveTargetsCommand extends RemoveTargetsCommand_base {
  protected static __types: {
    api: {
      input: RemoveTargetsRequest;
      output: RemoveTargetsResponse;
    };
    sdk: {
      input: RemoveTargetsCommandInput;
      output: RemoveTargetsCommandOutput;
    };
  };
}
