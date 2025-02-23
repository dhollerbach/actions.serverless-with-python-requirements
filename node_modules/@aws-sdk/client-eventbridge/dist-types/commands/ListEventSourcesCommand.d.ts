import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListEventSourcesRequest, ListEventSourcesResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventSourcesCommand}.
 */
export interface ListEventSourcesCommandInput extends ListEventSourcesRequest {
}
/**
 * @public
 *
 * The output of {@link ListEventSourcesCommand}.
 */
export interface ListEventSourcesCommandOutput extends ListEventSourcesResponse, __MetadataBearer {
}
declare const ListEventSourcesCommand_base: {
    new (input: ListEventSourcesCommandInput): import("@smithy/smithy-client").CommandImpl<ListEventSourcesCommandInput, ListEventSourcesCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (...[input]: [] | [ListEventSourcesCommandInput]): import("@smithy/smithy-client").CommandImpl<ListEventSourcesCommandInput, ListEventSourcesCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>You can use this to see all the partner event sources that have been shared with your
 *         Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListEventSourcesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListEventSourcesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // ListEventSourcesRequest
 *   NamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListEventSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListEventSourcesResponse
 * //   EventSources: [ // EventSourceList
 * //     { // EventSource
 * //       Arn: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       State: "PENDING" || "ACTIVE" || "DELETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventSourcesCommandInput - {@link ListEventSourcesCommandInput}
 * @returns {@link ListEventSourcesCommandOutput}
 * @see {@link ListEventSourcesCommandInput} for command's `input` shape.
 * @see {@link ListEventSourcesCommandOutput} for command's `response` shape.
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
export declare class ListEventSourcesCommand extends ListEventSourcesCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ListEventSourcesRequest;
            output: ListEventSourcesResponse;
        };
        sdk: {
            input: ListEventSourcesCommandInput;
            output: ListEventSourcesCommandOutput;
        };
    };
}
