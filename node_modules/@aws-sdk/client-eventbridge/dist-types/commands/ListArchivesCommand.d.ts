import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListArchivesRequest, ListArchivesResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListArchivesCommand}.
 */
export interface ListArchivesCommandInput extends ListArchivesRequest {
}
/**
 * @public
 *
 * The output of {@link ListArchivesCommand}.
 */
export interface ListArchivesCommandOutput extends ListArchivesResponse, __MetadataBearer {
}
declare const ListArchivesCommand_base: {
    new (input: ListArchivesCommandInput): import("@smithy/smithy-client").CommandImpl<ListArchivesCommandInput, ListArchivesCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (...[input]: [] | [ListArchivesCommandInput]): import("@smithy/smithy-client").CommandImpl<ListArchivesCommandInput, ListArchivesCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Lists your archives. You can either list all the archives or you can provide a prefix to
 *       match to the archive names. Filter parameters are exclusive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListArchivesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListArchivesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // ListArchivesRequest
 *   NamePrefix: "STRING_VALUE",
 *   EventSourceArn: "STRING_VALUE",
 *   State: "ENABLED" || "DISABLED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListArchivesCommand(input);
 * const response = await client.send(command);
 * // { // ListArchivesResponse
 * //   Archives: [ // ArchiveResponseList
 * //     { // Archive
 * //       ArchiveName: "STRING_VALUE",
 * //       EventSourceArn: "STRING_VALUE",
 * //       State: "ENABLED" || "DISABLED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //       StateReason: "STRING_VALUE",
 * //       RetentionDays: Number("int"),
 * //       SizeBytes: Number("long"),
 * //       EventCount: Number("long"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArchivesCommandInput - {@link ListArchivesCommandInput}
 * @returns {@link ListArchivesCommandOutput}
 * @see {@link ListArchivesCommandInput} for command's `input` shape.
 * @see {@link ListArchivesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
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
export declare class ListArchivesCommand extends ListArchivesCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ListArchivesRequest;
            output: ListArchivesResponse;
        };
        sdk: {
            input: ListArchivesCommandInput;
            output: ListArchivesCommandOutput;
        };
    };
}
