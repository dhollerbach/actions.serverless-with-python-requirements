import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserCommand}.
 */
export interface DeleteUserCommandInput extends DeleteUserRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteUserCommand}.
 */
export interface DeleteUserCommandOutput extends __MetadataBearer {
}
declare const DeleteUserCommand_base: {
    new (input: DeleteUserCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteUserCommandInput, DeleteUserCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: DeleteUserCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteUserCommandInput, DeleteUserCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user
 *             programmatically, you must delete the items attached to the user manually, or the
 *             deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM
 *                 user</a>. Before attempting to delete a user, remove the following items:</p>
 *          <ul>
 *             <li>
 *                <p>Password (<a>DeleteLoginProfile</a>)</p>
 *             </li>
 *             <li>
 *                <p>Access keys (<a>DeleteAccessKey</a>)</p>
 *             </li>
 *             <li>
 *                <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p>
 *             </li>
 *             <li>
 *                <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p>
 *             </li>
 *             <li>
 *                <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p>
 *             </li>
 *             <li>
 *                <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p>
 *             </li>
 *             <li>
 *                <p>Inline policies (<a>DeleteUserPolicy</a>)</p>
 *             </li>
 *             <li>
 *                <p>Attached managed policies (<a>DetachUserPolicy</a>)</p>
 *             </li>
 *             <li>
 *                <p>Group memberships (<a>RemoveUserFromGroup</a>)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeleteUserRequest
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserCommandInput - {@link DeleteUserCommandInput}
 * @returns {@link DeleteUserCommandOutput}
 * @see {@link DeleteUserCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
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
 * @example To delete an IAM user
 * ```javascript
 * // The following command removes the IAM user named Bob from the current account.
 * const input = {
 *   "UserName": "Bob"
 * };
 * const command = new DeleteUserCommand(input);
 * await client.send(command);
 * // example id: a13dc3f9-59fe-42d9-abbb-fb98b204fdf0
 * ```
 *
 */
export declare class DeleteUserCommand extends DeleteUserCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteUserRequest;
            output: {};
        };
        sdk: {
            input: DeleteUserCommandInput;
            output: DeleteUserCommandOutput;
        };
    };
}
