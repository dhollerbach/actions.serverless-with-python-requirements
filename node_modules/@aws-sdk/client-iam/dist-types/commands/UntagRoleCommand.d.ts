import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagRoleRequest } from "../models/models_1";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagRoleCommand}.
 */
export interface UntagRoleCommandInput extends UntagRoleRequest {
}
/**
 * @public
 *
 * The output of {@link UntagRoleCommand}.
 */
export interface UntagRoleCommandOutput extends __MetadataBearer {
}
declare const UntagRoleCommand_base: {
    new (input: UntagRoleCommandInput): import("@smithy/smithy-client").CommandImpl<UntagRoleCommandInput, UntagRoleCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: UntagRoleCommandInput): import("@smithy/smithy-client").CommandImpl<UntagRoleCommandInput, UntagRoleCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UntagRoleRequest
 *   RoleName: "STRING_VALUE", // required
 *   TagKeys: [ // tagKeyListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagRoleCommandInput - {@link UntagRoleCommandInput}
 * @returns {@link UntagRoleCommandOutput}
 * @see {@link UntagRoleCommandInput} for command's `input` shape.
 * @see {@link UntagRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
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
 * @example To remove a tag from an IAM role
 * ```javascript
 * // The following example shows how to remove a tag with the key 'Dept' from a role named 'taggedrole'.
 * const input = {
 *   "RoleName": "taggedrole",
 *   "TagKeys": [
 *     "Dept"
 *   ]
 * };
 * const command = new UntagRoleCommand(input);
 * await client.send(command);
 * // example id: to-remove-a-tag-from-an-iam-role-1506719589943
 * ```
 *
 */
export declare class UntagRoleCommand extends UntagRoleCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: UntagRoleRequest;
            output: {};
        };
        sdk: {
            input: UntagRoleCommandInput;
            output: UntagRoleCommandOutput;
        };
    };
}
