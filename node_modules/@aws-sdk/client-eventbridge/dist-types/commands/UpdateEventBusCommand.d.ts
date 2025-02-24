import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { UpdateEventBusRequest, UpdateEventBusResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventBusCommand}.
 */
export interface UpdateEventBusCommandInput extends UpdateEventBusRequest {
}
/**
 * @public
 *
 * The output of {@link UpdateEventBusCommand}.
 */
export interface UpdateEventBusCommandOutput extends UpdateEventBusResponse, __MetadataBearer {
}
declare const UpdateEventBusCommand_base: {
    new (input: UpdateEventBusCommandInput): import("@smithy/smithy-client").CommandImpl<UpdateEventBusCommandInput, UpdateEventBusCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (...[input]: [] | [UpdateEventBusCommandInput]): import("@smithy/smithy-client").CommandImpl<UpdateEventBusCommandInput, UpdateEventBusCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Updates the specified event bus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, UpdateEventBusCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, UpdateEventBusCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // UpdateEventBusRequest
 *   Name: "STRING_VALUE",
 *   KmsKeyIdentifier: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DeadLetterConfig: { // DeadLetterConfig
 *     Arn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateEventBusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventBusResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DeadLetterConfig: { // DeadLetterConfig
 * //     Arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEventBusCommandInput - {@link UpdateEventBusCommandInput}
 * @returns {@link UpdateEventBusCommandOutput}
 * @see {@link UpdateEventBusCommandInput} for command's `input` shape.
 * @see {@link UpdateEventBusCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
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
export declare class UpdateEventBusCommand extends UpdateEventBusCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: UpdateEventBusRequest;
            output: UpdateEventBusResponse;
        };
        sdk: {
            input: UpdateEventBusCommandInput;
            output: UpdateEventBusCommandOutput;
        };
    };
}
