import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { PutTargetsRequest, PutTargetsResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutTargetsCommandInput extends PutTargetsRequest {}
export interface PutTargetsCommandOutput
  extends PutTargetsResponse,
    __MetadataBearer {}
declare const PutTargetsCommand_base: {
  new (
    input: PutTargetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutTargetsCommandInput,
    PutTargetsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: PutTargetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutTargetsCommandInput,
    PutTargetsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutTargetsCommand extends PutTargetsCommand_base {
  protected static __types: {
    api: {
      input: PutTargetsRequest;
      output: PutTargetsResponse;
    };
    sdk: {
      input: PutTargetsCommandInput;
      output: PutTargetsCommandOutput;
    };
  };
}
