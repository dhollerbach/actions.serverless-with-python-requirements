import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListGroupsRequest, ListGroupsResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupsCommand}.
 */
export interface ListGroupsCommandInput extends ListGroupsRequest {
}
/**
 * @public
 *
 * The output of {@link ListGroupsCommand}.
 */
export interface ListGroupsCommandOutput extends ListGroupsResponse, __MetadataBearer {
}
declare const ListGroupsCommand_base: {
    new (input: ListGroupsCommandInput): import("@smithy/smithy-client").CommandImpl<ListGroupsCommandInput, ListGroupsCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (...[input]: [] | [ListGroupsCommandInput]): import("@smithy/smithy-client").CommandImpl<ListGroupsCommandInput, ListGroupsCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Lists the IAM groups that have the specified path prefix.</p>
 *          <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListGroupsRequest
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupsResponse
 * //   Groups: [ // groupListType // required
 * //     { // Group
 * //       Path: "STRING_VALUE", // required
 * //       GroupName: "STRING_VALUE", // required
 * //       GroupId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupsCommandInput - {@link ListGroupsCommandInput}
 * @returns {@link ListGroupsCommandOutput}
 * @see {@link ListGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGroupsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To list the IAM groups for the current account
 * ```javascript
 * // The following command lists the IAM groups in the current account:
 * const input = {};
 * const command = new ListGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Groups": [
 *     {
 *       "Arn": "arn:aws:iam::123456789012:group/Admins",
 *       "CreateDate": "2016-12-15T21:40:08.121Z",
 *       "GroupId": "AGPA1111111111EXAMPLE",
 *       "GroupName": "Admins",
 *       "Path": "/division_abc/subdivision_xyz/"
 *     },
 *     {
 *       "Arn": "arn:aws:iam::123456789012:group/division_abc/subdivision_xyz/product_1234/engineering/Test",
 *       "CreateDate": "2016-11-30T14:10:01.156Z",
 *       "GroupId": "AGP22222222222EXAMPLE",
 *       "GroupName": "Test",
 *       "Path": "/division_abc/subdivision_xyz/product_1234/engineering/"
 *     },
 *     {
 *       "Arn": "arn:aws:iam::123456789012:group/division_abc/subdivision_xyz/product_1234/Managers",
 *       "CreateDate": "2016-06-12T20:14:52.032Z",
 *       "GroupId": "AGPI3333333333EXAMPLE",
 *       "GroupName": "Managers",
 *       "Path": "/division_abc/subdivision_xyz/product_1234/"
 *     }
 *   ]
 * }
 * *\/
 * // example id: b3ab1380-2a21-42fb-8e85-503f65512c66
 * ```
 *
 */
export declare class ListGroupsCommand extends ListGroupsCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ListGroupsRequest;
            output: ListGroupsResponse;
        };
        sdk: {
            input: ListGroupsCommandInput;
            output: ListGroupsCommandOutput;
        };
    };
}
