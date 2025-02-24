import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { TestEventPatternRequest, TestEventPatternResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestEventPatternCommand}.
 */
export interface TestEventPatternCommandInput extends TestEventPatternRequest {
}
/**
 * @public
 *
 * The output of {@link TestEventPatternCommand}.
 */
export interface TestEventPatternCommandOutput extends TestEventPatternResponse, __MetadataBearer {
}
declare const TestEventPatternCommand_base: {
    new (input: TestEventPatternCommandInput): import("@smithy/smithy-client").CommandImpl<TestEventPatternCommandInput, TestEventPatternCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: TestEventPatternCommandInput): import("@smithy/smithy-client").CommandImpl<TestEventPatternCommandInput, TestEventPatternCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Tests whether the specified event pattern matches the provided event.</p>
 *          <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource
 *       Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be
 *       sure to use the correct ARN characters when creating event patterns so that they match the ARN
 *       syntax in the event you want to match.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, TestEventPatternCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, TestEventPatternCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // TestEventPatternRequest
 *   EventPattern: "STRING_VALUE", // required
 *   Event: "STRING_VALUE", // required
 * };
 * const command = new TestEventPatternCommand(input);
 * const response = await client.send(command);
 * // { // TestEventPatternResponse
 * //   Result: true || false,
 * // };
 *
 * ```
 *
 * @param TestEventPatternCommandInput - {@link TestEventPatternCommandInput}
 * @returns {@link TestEventPatternCommandOutput}
 * @see {@link TestEventPatternCommandInput} for command's `input` shape.
 * @see {@link TestEventPatternCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *  <p>The event pattern is not valid.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export declare class TestEventPatternCommand extends TestEventPatternCommand_base {
    /** @internal type navigation helper, not in runtime. */
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
