import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListUserTagsRequest, ListUserTagsResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserTagsCommand}.
 */
export interface ListUserTagsCommandInput extends ListUserTagsRequest {
}
/**
 * @public
 *
 * The output of {@link ListUserTagsCommand}.
 */
export interface ListUserTagsCommandOutput extends ListUserTagsResponse, __MetadataBearer {
}
declare const ListUserTagsCommand_base: {
    new (input: ListUserTagsCommandInput): import("@smithy/smithy-client").CommandImpl<ListUserTagsCommandInput, ListUserTagsCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: ListUserTagsCommandInput): import("@smithy/smithy-client").CommandImpl<ListUserTagsCommandInput, ListUserTagsCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListUserTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListUserTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListUserTagsRequest
 *   UserName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListUserTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserTagsResponse
 * //   Tags: [ // tagListType // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserTagsCommandInput - {@link ListUserTagsCommandInput}
 * @returns {@link ListUserTagsCommandOutput}
 * @see {@link ListUserTagsCommandInput} for command's `input` shape.
 * @see {@link ListUserTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To list the tags attached to an IAM user
 * ```javascript
 * // The following example shows how to list the tags attached to a user.
 * const input = {
 *   "UserName": "anika"
 * };
 * const command = new ListUserTagsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IsTruncated": false,
 *   "Tags": [
 *     {
 *       "Key": "Dept",
 *       "Value": "12345"
 *     },
 *     {
 *       "Key": "Team",
 *       "Value": "Accounting"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-tags-attached-to-an-iam-user-1506719473186
 * ```
 *
 */
export declare class ListUserTagsCommand extends ListUserTagsCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ListUserTagsRequest;
            output: ListUserTagsResponse;
        };
        sdk: {
            input: ListUserTagsCommandInput;
            output: ListUserTagsCommandOutput;
        };
    };
}
