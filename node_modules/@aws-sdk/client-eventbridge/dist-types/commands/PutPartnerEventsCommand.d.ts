import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutPartnerEventsRequest, PutPartnerEventsResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPartnerEventsCommand}.
 */
export interface PutPartnerEventsCommandInput extends PutPartnerEventsRequest {
}
/**
 * @public
 *
 * The output of {@link PutPartnerEventsCommand}.
 */
export interface PutPartnerEventsCommandOutput extends PutPartnerEventsResponse, __MetadataBearer {
}
declare const PutPartnerEventsCommand_base: {
    new (input: PutPartnerEventsCommandInput): import("@smithy/smithy-client").CommandImpl<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: PutPartnerEventsCommandInput): import("@smithy/smithy-client").CommandImpl<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.</p>
 *          <p>For information on calculating event batch size, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-putevent-size.html">Calculating EventBridge PutEvents event
 *         entry size</a> in the <i>EventBridge User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutPartnerEventsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutPartnerEventsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // PutPartnerEventsRequest
 *   Entries: [ // PutPartnerEventsRequestEntryList // required
 *     { // PutPartnerEventsRequestEntry
 *       Time: new Date("TIMESTAMP"),
 *       Source: "STRING_VALUE",
 *       Resources: [ // EventResourceList
 *         "STRING_VALUE",
 *       ],
 *       DetailType: "STRING_VALUE",
 *       Detail: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutPartnerEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutPartnerEventsResponse
 * //   FailedEntryCount: Number("int"),
 * //   Entries: [ // PutPartnerEventsResultEntryList
 * //     { // PutPartnerEventsResultEntry
 * //       EventId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutPartnerEventsCommandInput - {@link PutPartnerEventsCommandInput}
 * @returns {@link PutPartnerEventsCommandOutput}
 * @see {@link PutPartnerEventsCommandInput} for command's `input` shape.
 * @see {@link PutPartnerEventsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export declare class PutPartnerEventsCommand extends PutPartnerEventsCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: PutPartnerEventsRequest;
            output: PutPartnerEventsResponse;
        };
        sdk: {
            input: PutPartnerEventsCommandInput;
            output: PutPartnerEventsCommandOutput;
        };
    };
}
