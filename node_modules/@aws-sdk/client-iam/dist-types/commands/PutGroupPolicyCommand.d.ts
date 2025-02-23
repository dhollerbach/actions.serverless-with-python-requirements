import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutGroupPolicyRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutGroupPolicyCommand}.
 */
export interface PutGroupPolicyCommandInput extends PutGroupPolicyRequest {
}
/**
 * @public
 *
 * The output of {@link PutGroupPolicyCommand}.
 */
export interface PutGroupPolicyCommandOutput extends __MetadataBearer {
}
declare const PutGroupPolicyCommand_base: {
    new (input: PutGroupPolicyCommandInput): import("@smithy/smithy-client").CommandImpl<PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: PutGroupPolicyCommandInput): import("@smithy/smithy-client").CommandImpl<PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *             group.</p>
 *          <p>A user can also have managed policies attached to it. To attach a managed policy to a
 *             group, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html">
 *                <code>AttachGroupPolicy</code>
 *             </a>. To create a new managed policy, use
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">
 *                <code>CreatePolicy</code>
 *             </a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>For information about the maximum number of inline policies that you can embed in a
 *             group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *                 calling <code>PutGroupPolicy</code>. For general information about using the Query
 *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // PutGroupPolicyRequest
 *   GroupName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutGroupPolicyCommandInput - {@link PutGroupPolicyCommandInput}
 * @returns {@link PutGroupPolicyCommandOutput}
 * @see {@link PutGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
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
 * @example To add a policy to a group
 * ```javascript
 * // The following command adds a policy named AllPerms to the IAM group named Admins.
 * const input = {
 *   "GroupName": "Admins",
 *   "PolicyDocument": "{\"Version\":\"2012-10-17\",\"Statement\":{\"Effect\":\"Allow\",\"Action\":\"*\",\"Resource\":\"*\"}}",
 *   "PolicyName": "AllPerms"
 * };
 * const command = new PutGroupPolicyCommand(input);
 * await client.send(command);
 * // example id: 4bc17418-758f-4d0f-ab0c-4d00265fec2e
 * ```
 *
 */
export declare class PutGroupPolicyCommand extends PutGroupPolicyCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: PutGroupPolicyRequest;
            output: {};
        };
        sdk: {
            input: PutGroupPolicyCommandInput;
            output: PutGroupPolicyCommandOutput;
        };
    };
}
