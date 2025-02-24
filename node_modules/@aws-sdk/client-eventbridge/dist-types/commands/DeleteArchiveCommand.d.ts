import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeleteArchiveRequest, DeleteArchiveResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteArchiveCommand}.
 */
export interface DeleteArchiveCommandInput extends DeleteArchiveRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteArchiveCommand}.
 */
export interface DeleteArchiveCommandOutput extends DeleteArchiveResponse, __MetadataBearer {
}
declare const DeleteArchiveCommand_base: {
    new (input: DeleteArchiveCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteArchiveCommandInput, DeleteArchiveCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: DeleteArchiveCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteArchiveCommandInput, DeleteArchiveCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeleteArchiveCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeleteArchiveCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DeleteArchiveRequest
 *   ArchiveName: "STRING_VALUE", // required
 * };
 * const command = new DeleteArchiveCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteArchiveCommandInput - {@link DeleteArchiveCommandInput}
 * @returns {@link DeleteArchiveCommandOutput}
 * @see {@link DeleteArchiveCommandInput} for command's `input` shape.
 * @see {@link DeleteArchiveCommandOutput} for command's `response` shape.
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
export declare class DeleteArchiveCommand extends DeleteArchiveCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteArchiveRequest;
            output: {};
        };
        sdk: {
            input: DeleteArchiveCommandInput;
            output: DeleteArchiveCommandOutput;
        };
    };
}
