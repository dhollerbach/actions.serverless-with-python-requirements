import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountPasswordPolicyCommand}.
 */
export interface DeleteAccountPasswordPolicyCommandInput {
}
/**
 * @public
 *
 * The output of {@link DeleteAccountPasswordPolicyCommand}.
 */
export interface DeleteAccountPasswordPolicyCommandOutput extends __MetadataBearer {
}
declare const DeleteAccountPasswordPolicyCommand_base: {
    new (input: DeleteAccountPasswordPolicyCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteAccountPasswordPolicyCommandInput, DeleteAccountPasswordPolicyCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (...[input]: [] | [DeleteAccountPasswordPolicyCommandInput]): import("@smithy/smithy-client").CommandImpl<DeleteAccountPasswordPolicyCommandInput, DeleteAccountPasswordPolicyCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the password policy for the Amazon Web Services account. There are no parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new DeleteAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountPasswordPolicyCommandInput - {@link DeleteAccountPasswordPolicyCommandInput}
 * @returns {@link DeleteAccountPasswordPolicyCommandOutput}
 * @see {@link DeleteAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountPasswordPolicyCommandOutput} for command's `response` shape.
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
 * @example To delete the current account password policy
 * ```javascript
 * // The following command removes the password policy from the current AWS account:
 * const input = {};
 * const command = new DeleteAccountPasswordPolicyCommand(input);
 * await client.send(command);
 * // example id: 9ddf755e-495c-49bc-ae3b-ea6cc9b8ebcf
 * ```
 *
 */
export declare class DeleteAccountPasswordPolicyCommand extends DeleteAccountPasswordPolicyCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: {};
            output: {};
        };
        sdk: {
            input: DeleteAccountPasswordPolicyCommandInput;
            output: DeleteAccountPasswordPolicyCommandOutput;
        };
    };
}
