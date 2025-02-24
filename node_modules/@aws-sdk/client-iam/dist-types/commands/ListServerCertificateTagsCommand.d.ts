import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListServerCertificateTagsRequest, ListServerCertificateTagsResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServerCertificateTagsCommand}.
 */
export interface ListServerCertificateTagsCommandInput extends ListServerCertificateTagsRequest {
}
/**
 * @public
 *
 * The output of {@link ListServerCertificateTagsCommand}.
 */
export interface ListServerCertificateTagsCommandOutput extends ListServerCertificateTagsResponse, __MetadataBearer {
}
declare const ListServerCertificateTagsCommand_base: {
    new (input: ListServerCertificateTagsCommandInput): import("@smithy/smithy-client").CommandImpl<ListServerCertificateTagsCommandInput, ListServerCertificateTagsCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: ListServerCertificateTagsCommandInput): import("@smithy/smithy-client").CommandImpl<ListServerCertificateTagsCommandInput, ListServerCertificateTagsCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Lists the tags that are attached to the specified IAM server certificate. The
 *       returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>For certificates in a Region supported by Certificate Manager (ACM), we
 *         recommend that you don't use IAM server certificates. Instead, use ACM to provision,
 *         manage, and deploy your server certificates. For more information about IAM server
 *         certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server
 *           certificates</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServerCertificateTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServerCertificateTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListServerCertificateTagsRequest
 *   ServerCertificateName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListServerCertificateTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListServerCertificateTagsResponse
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
 * @param ListServerCertificateTagsCommandInput - {@link ListServerCertificateTagsCommandInput}
 * @returns {@link ListServerCertificateTagsCommandOutput}
 * @see {@link ListServerCertificateTagsCommandInput} for command's `input` shape.
 * @see {@link ListServerCertificateTagsCommandOutput} for command's `response` shape.
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
 */
export declare class ListServerCertificateTagsCommand extends ListServerCertificateTagsCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ListServerCertificateTagsRequest;
            output: ListServerCertificateTagsResponse;
        };
        sdk: {
            input: ListServerCertificateTagsCommandInput;
            output: ListServerCertificateTagsCommandOutput;
        };
    };
}
