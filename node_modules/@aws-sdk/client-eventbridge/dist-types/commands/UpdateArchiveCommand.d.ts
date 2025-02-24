import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { UpdateArchiveRequest, UpdateArchiveResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateArchiveCommand}.
 */
export interface UpdateArchiveCommandInput extends UpdateArchiveRequest {
}
/**
 * @public
 *
 * The output of {@link UpdateArchiveCommand}.
 */
export interface UpdateArchiveCommandOutput extends UpdateArchiveResponse, __MetadataBearer {
}
declare const UpdateArchiveCommand_base: {
    new (input: UpdateArchiveCommandInput): import("@smithy/smithy-client").CommandImpl<UpdateArchiveCommandInput, UpdateArchiveCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: UpdateArchiveCommandInput): import("@smithy/smithy-client").CommandImpl<UpdateArchiveCommandInput, UpdateArchiveCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Updates the specified archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, UpdateArchiveCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, UpdateArchiveCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // UpdateArchiveRequest
 *   ArchiveName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EventPattern: "STRING_VALUE",
 *   RetentionDays: Number("int"),
 * };
 * const command = new UpdateArchiveCommand(input);
 * const response = await client.send(command);
 * // { // UpdateArchiveResponse
 * //   ArchiveArn: "STRING_VALUE",
 * //   State: "ENABLED" || "DISABLED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateArchiveCommandInput - {@link UpdateArchiveCommandInput}
 * @returns {@link UpdateArchiveCommandOutput}
 * @see {@link UpdateArchiveCommandInput} for command's `input` shape.
 * @see {@link UpdateArchiveCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *  <p>The event pattern is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export declare class UpdateArchiveCommand extends UpdateArchiveCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: UpdateArchiveRequest;
            output: UpdateArchiveResponse;
        };
        sdk: {
            input: UpdateArchiveCommandInput;
            output: UpdateArchiveCommandOutput;
        };
    };
}
