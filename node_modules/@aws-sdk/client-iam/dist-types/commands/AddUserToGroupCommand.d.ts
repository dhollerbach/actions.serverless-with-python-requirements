import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddUserToGroupRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddUserToGroupCommand}.
 */
export interface AddUserToGroupCommandInput extends AddUserToGroupRequest {
}
/**
 * @public
 *
 * The output of {@link AddUserToGroupCommand}.
 */
export interface AddUserToGroupCommandOutput extends __MetadataBearer {
}
declare const AddUserToGroupCommand_base: {
    new (input: AddUserToGroupCommandInput): import("@smithy/smithy-client").CommandImpl<AddUserToGroupCommandInput, AddUserToGroupCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: AddUserToGroupCommandInput): import("@smithy/smithy-client").CommandImpl<AddUserToGroupCommandInput, AddUserToGroupCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Adds the specified user to the specified group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddUserToGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddUserToGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // AddUserToGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new AddUserToGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddUserToGroupCommandInput - {@link AddUserToGroupCommandInput}
 * @returns {@link AddUserToGroupCommandOutput}
 * @see {@link AddUserToGroupCommandInput} for command's `input` shape.
 * @see {@link AddUserToGroupCommandOutput} for command's `response` shape.
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
 * @example To add a user to an IAM group
 * ```javascript
 * // The following command adds an IAM user named Bob to the IAM group named Admins:
 * const input = {
 *   "GroupName": "Admins",
 *   "UserName": "Bob"
 * };
 * const command = new AddUserToGroupCommand(input);
 * await client.send(command);
 * // example id: 619c7e6b-09f8-4036-857b-51a6ea5027ca
 * ```
 *
 */
export declare class AddUserToGroupCommand extends AddUserToGroupCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: AddUserToGroupRequest;
            output: {};
        };
        sdk: {
            input: AddUserToGroupCommandInput;
            output: AddUserToGroupCommandOutput;
        };
    };
}
