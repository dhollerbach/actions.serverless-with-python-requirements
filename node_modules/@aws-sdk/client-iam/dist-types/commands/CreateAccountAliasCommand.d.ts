import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateAccountAliasRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountAliasCommand}.
 */
export interface CreateAccountAliasCommandInput extends CreateAccountAliasRequest {
}
/**
 * @public
 *
 * The output of {@link CreateAccountAliasCommand}.
 */
export interface CreateAccountAliasCommandOutput extends __MetadataBearer {
}
declare const CreateAccountAliasCommand_base: {
    new (input: CreateAccountAliasCommandInput): import("@smithy/smithy-client").CommandImpl<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: CreateAccountAliasCommandInput): import("@smithy/smithy-client").CommandImpl<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account
 *             alias, see <a href="https://docs.aws.amazon.com/signin/latest/userguide/CreateAccountAlias.html">Creating, deleting, and
 *                 listing an Amazon Web Services account alias</a> in the <i>Amazon Web Services Sign-In User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // CreateAccountAliasRequest
 *   AccountAlias: "STRING_VALUE", // required
 * };
 * const command = new CreateAccountAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAccountAliasCommandInput - {@link CreateAccountAliasCommandInput}
 * @returns {@link CreateAccountAliasCommandOutput}
 * @see {@link CreateAccountAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To create an account alias
 * ```javascript
 * // The following command associates the alias examplecorp to your AWS account.
 * const input = {
 *   "AccountAlias": "examplecorp"
 * };
 * const command = new CreateAccountAliasCommand(input);
 * await client.send(command);
 * // example id: 5adaf6fb-94fc-4ca2-b825-2fbc2062add1
 * ```
 *
 */
export declare class CreateAccountAliasCommand extends CreateAccountAliasCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: CreateAccountAliasRequest;
            output: {};
        };
        sdk: {
            input: CreateAccountAliasCommandInput;
            output: CreateAccountAliasCommandOutput;
        };
    };
}
