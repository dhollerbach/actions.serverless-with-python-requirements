import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeleteApiDestinationRequest, DeleteApiDestinationResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApiDestinationCommand}.
 */
export interface DeleteApiDestinationCommandInput extends DeleteApiDestinationRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteApiDestinationCommand}.
 */
export interface DeleteApiDestinationCommandOutput extends DeleteApiDestinationResponse, __MetadataBearer {
}
declare const DeleteApiDestinationCommand_base: {
    new (input: DeleteApiDestinationCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteApiDestinationCommandInput, DeleteApiDestinationCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: DeleteApiDestinationCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteApiDestinationCommandInput, DeleteApiDestinationCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified API destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeleteApiDestinationCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeleteApiDestinationCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DeleteApiDestinationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteApiDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApiDestinationCommandInput - {@link DeleteApiDestinationCommandInput}
 * @returns {@link DeleteApiDestinationCommandOutput}
 * @see {@link DeleteApiDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export declare class DeleteApiDestinationCommand extends DeleteApiDestinationCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteApiDestinationRequest;
            output: {};
        };
        sdk: {
            input: DeleteApiDestinationCommandInput;
            output: DeleteApiDestinationCommandOutput;
        };
    };
}
