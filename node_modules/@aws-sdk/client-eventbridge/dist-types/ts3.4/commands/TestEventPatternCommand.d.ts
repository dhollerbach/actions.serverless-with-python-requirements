import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import {
  TestEventPatternRequest,
  TestEventPatternResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface TestEventPatternCommandInput extends TestEventPatternRequest {}
export interface TestEventPatternCommandOutput
  extends TestEventPatternResponse,
    __MetadataBearer {}
declare const TestEventPatternCommand_base: {
  new (
    input: TestEventPatternCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TestEventPatternCommandInput,
    TestEventPatternCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: TestEventPatternCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TestEventPatternCommandInput,
    TestEventPatternCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TestEventPatternCommand extends TestEventPatternCommand_base {
  protected static __types: {
    api: {
      input: TestEventPatternRequest;
      output: TestEventPatternResponse;
    };
    sdk: {
      input: TestEventPatternCommandInput;
      output: TestEventPatternCommandOutput;
    };
  };
}
