import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  DeauthorizeConnectionRequest,
  DeauthorizeConnectionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeauthorizeConnectionCommandInput
  extends DeauthorizeConnectionRequest {}
export interface DeauthorizeConnectionCommandOutput
  extends DeauthorizeConnectionResponse,
    __MetadataBearer {}
declare const DeauthorizeConnectionCommand_base: {
  new (
    input: DeauthorizeConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeauthorizeConnectionCommandInput,
    DeauthorizeConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeauthorizeConnectionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeauthorizeConnectionCommandInput,
    DeauthorizeConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeauthorizeConnectionCommand extends DeauthorizeConnectionCommand_base {
  protected static __types: {
    api: {
      input: DeauthorizeConnectionRequest;
      output: DeauthorizeConnectionResponse;
    };
    sdk: {
      input: DeauthorizeConnectionCommandInput;
      output: DeauthorizeConnectionCommandOutput;
    };
  };
}
