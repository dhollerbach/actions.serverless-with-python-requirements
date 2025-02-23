import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { DeactivateEventSourceRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeactivateEventSourceCommandInput
  extends DeactivateEventSourceRequest {}
export interface DeactivateEventSourceCommandOutput extends __MetadataBearer {}
declare const DeactivateEventSourceCommand_base: {
  new (
    input: DeactivateEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeactivateEventSourceCommandInput,
    DeactivateEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeactivateEventSourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeactivateEventSourceCommandInput,
    DeactivateEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeactivateEventSourceCommand extends DeactivateEventSourceCommand_base {
  protected static __types: {
    api: {
      input: DeactivateEventSourceRequest;
      output: {};
    };
    sdk: {
      input: DeactivateEventSourceCommandInput;
      output: DeactivateEventSourceCommandOutput;
    };
  };
}
