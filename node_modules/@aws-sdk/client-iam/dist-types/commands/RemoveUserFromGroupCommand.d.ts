import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveUserFromGroupRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveUserFromGroupCommand}.
 */
export interface RemoveUserFromGroupCommandInput extends RemoveUserFromGroupRequest {
}
/**
 * @public
 *
 * The output of {@link RemoveUserFromGroupCommand}.
 */
export interface RemoveUserFromGroupCommandOutput extends __MetadataBearer {
}
declare const RemoveUserFromGroupCommand_base: {
    new (input: RemoveUserFromGroupCommandInput): import("@smithy/smithy-client").CommandImpl<RemoveUserFromGroupCommandInput, RemoveUserFromGroupCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: RemoveUserFromGroupCommandInput): import("@smithy/smithy-client").CommandImpl<RemoveUserFromGroupCommandInput, RemoveUserFromGroupCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Removes the specified user from the specified group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveUserFromGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveUserFromGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // RemoveUserFromGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new RemoveUserFromGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveUserFromGroupCommandInput - {@link RemoveUserFromGroupCommandInput}
 * @returns {@link RemoveUserFromGroupCommandOutput}
 * @see {@link RemoveUserFromGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveUserFromGroupCommandOutput} for command's `response` shape.
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
 * @example To remove a user from an IAM group
 * ```javascript
 * // The following command removes the user named Bob from the IAM group named Admins.
 * const input = {
 *   "GroupName": "Admins",
 *   "UserName": "Bob"
 * };
 * const command = new RemoveUserFromGroupCommand(input);
 * await client.send(command);
 * // example id: fb54d5b4-0caf-41d8-af0e-10a84413f174
 * ```
 *
 */
export declare class RemoveUserFromGroupCommand extends RemoveUserFromGroupCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: RemoveUserFromGroupRequest;
            output: {};
        };
        sdk: {
            input: RemoveUserFromGroupCommandInput;
            output: RemoveUserFromGroupCommandOutput;
        };
    };
}
