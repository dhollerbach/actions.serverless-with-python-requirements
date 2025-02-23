import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { ActivateEventSourceRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ActivateEventSourceCommandInput
  extends ActivateEventSourceRequest {}
export interface ActivateEventSourceCommandOutput extends __MetadataBearer {}
declare const ActivateEventSourceCommand_base: {
  new (
    input: ActivateEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ActivateEventSourceCommandInput,
    ActivateEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ActivateEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ActivateEventSourceCommandInput,
    ActivateEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ActivateEventSourceCommand extends ActivateEventSourceCommand_base {
  protected static __types: {
    api: {
      input: ActivateEventSourceRequest;
      output: {};
    };
    sdk: {
      input: ActivateEventSourceCommandInput;
      output: ActivateEventSourceCommandOutput;
    };
  };
}
