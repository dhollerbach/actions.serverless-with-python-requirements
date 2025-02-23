import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ResetServiceSpecificCredentialRequest, ResetServiceSpecificCredentialResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetServiceSpecificCredentialCommand}.
 */
export interface ResetServiceSpecificCredentialCommandInput extends ResetServiceSpecificCredentialRequest {
}
/**
 * @public
 *
 * The output of {@link ResetServiceSpecificCredentialCommand}.
 */
export interface ResetServiceSpecificCredentialCommandOutput extends ResetServiceSpecificCredentialResponse, __MetadataBearer {
}
declare const ResetServiceSpecificCredentialCommand_base: {
    new (input: ResetServiceSpecificCredentialCommandInput): import("@smithy/smithy-client").CommandImpl<ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: ResetServiceSpecificCredentialCommandInput): import("@smithy/smithy-client").CommandImpl<ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Resets the password for a service-specific credential. The new password is Amazon Web Services
 *             generated and cryptographically strong. It cannot be configured by the user. Resetting
 *             the password immediately invalidates the previous password associated with this
 *             user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ResetServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ResetServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ResetServiceSpecificCredentialRequest
 *   UserName: "STRING_VALUE",
 *   ServiceSpecificCredentialId: "STRING_VALUE", // required
 * };
 * const command = new ResetServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * // { // ResetServiceSpecificCredentialResponse
 * //   ServiceSpecificCredential: { // ServiceSpecificCredential
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     ServiceName: "STRING_VALUE", // required
 * //     ServiceUserName: "STRING_VALUE", // required
 * //     ServicePassword: "STRING_VALUE", // required
 * //     ServiceSpecificCredentialId: "STRING_VALUE", // required
 * //     UserName: "STRING_VALUE", // required
 * //     Status: "Active" || "Inactive", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ResetServiceSpecificCredentialCommandInput - {@link ResetServiceSpecificCredentialCommandInput}
 * @returns {@link ResetServiceSpecificCredentialCommandOutput}
 * @see {@link ResetServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link ResetServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export declare class ResetServiceSpecificCredentialCommand extends ResetServiceSpecificCredentialCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ResetServiceSpecificCredentialRequest;
            output: ResetServiceSpecificCredentialResponse;
        };
        sdk: {
            input: ResetServiceSpecificCredentialCommandInput;
            output: ResetServiceSpecificCredentialCommandOutput;
        };
    };
}
