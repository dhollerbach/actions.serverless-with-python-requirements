import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeactivateEventSourceRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateEventSourceCommand}.
 */
export interface DeactivateEventSourceCommandInput extends DeactivateEventSourceRequest {
}
/**
 * @public
 *
 * The output of {@link DeactivateEventSourceCommand}.
 */
export interface DeactivateEventSourceCommandOutput extends __MetadataBearer {
}
declare const DeactivateEventSourceCommand_base: {
    new (input: DeactivateEventSourceCommandInput): import("@smithy/smithy-client").CommandImpl<DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: DeactivateEventSourceCommandInput): import("@smithy/smithy-client").CommandImpl<DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>You can use this operation to temporarily stop receiving events from the specified partner
 *       event source. The matching event bus is not deleted. </p>
 *          <p>When you deactivate a partner event source, the source goes into PENDING state. If it
 *       remains in PENDING state for more than two weeks, it is deleted.</p>
 *          <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeactivateEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeactivateEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DeactivateEventSourceRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeactivateEventSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivateEventSourceCommandInput - {@link DeactivateEventSourceCommandInput}
 * @returns {@link DeactivateEventSourceCommandOutput}
 * @see {@link DeactivateEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeactivateEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The specified state is not a valid state for an event source.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export declare class DeactivateEventSourceCommand extends DeactivateEventSourceCommand_base {
    /** @internal type navigation helper, not in runtime. */
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
