import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserPolicyRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserPolicyCommand}.
 */
export interface DeleteUserPolicyCommandInput extends DeleteUserPolicyRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteUserPolicyCommand}.
 */
export interface DeleteUserPolicyCommandOutput extends __MetadataBearer {
}
declare const DeleteUserPolicyCommand_base: {
    new (input: DeleteUserPolicyCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: DeleteUserPolicyCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             user.</p>
 *          <p>A user can also have managed policies attached to it. To detach a managed policy from
 *             a user, use <a>DetachUserPolicy</a>. For more information about policies,
 *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeleteUserPolicyRequest
 *   UserName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserPolicyCommandInput - {@link DeleteUserPolicyCommandInput}
 * @returns {@link DeleteUserPolicyCommandOutput}
 * @see {@link DeleteUserPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 * @example To remove a policy from an IAM user
 * ```javascript
 * // The following delete-user-policy command removes the specified policy from the IAM user named Juan:
 * const input = {
 *   "PolicyName": "ExamplePolicy",
 *   "UserName": "Juan"
 * };
 * const command = new DeleteUserPolicyCommand(input);
 * await client.send(command);
 * // example id: 34f07ddc-9bc1-4f52-bc59-cd0a3ccd06c8
 * ```
 *
 */
export declare class DeleteUserPolicyCommand extends DeleteUserPolicyCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteUserPolicyRequest;
            output: {};
        };
        sdk: {
            input: DeleteUserPolicyCommandInput;
            output: DeleteUserPolicyCommandOutput;
        };
    };
}
